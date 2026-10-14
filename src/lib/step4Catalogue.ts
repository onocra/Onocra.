/**
 * ONOCRA Step 4 boundary. Converts the existing device catalogue into a small,
 * evidence-preserving view model. Do NOT fill missing data with guesses.
 * Effective inclusion start: 2023-10-01 (fixed, not a rolling 36-month window).
 */
export const ONOCRA_START = "2023-10-01";
export type Step4Region = "US" | "UK" | "DE" | "FR" | "IT" | "ES";
export type Step4Fit = "strong" | "adequate" | "limited" | "unverified";
export interface Step4Price { amount: number; currency?: string; asOf?: string; source?: string; config?: string }
export interface Step4Phone {
  id: string;
  name: string;
  brand: string;
  family?: string;
  releaseDate: string; // ISO YYYY-MM-DD if known; YYYY (>= 2024) accepted as year-only
  image?: string; // supplied by ONOCRA, not fetched automatically
  display?: string;
  processor?: string;
  camera?: string;
  battery?: string;
  ram?: string;
  storage?: string;
  charging?: string;
  fiveG?: boolean;
  screenInches?: number;
  mainCameraMP?: number;
  batteryMah?: number;
  ramGB?: number;
  storageGB?: number;
  prices?: Partial<Record<Step4Region, Step4Price>>;
  fit?: Record<string, Step4Fit>;
  // Display a metric only when its provenance is a genuine analytics/favourites source.
  popularity?: { kind: "views7d" | "favourites"; count: number; asOf: string; source: string };
}
const validDate = (date: unknown, year: unknown): string => {
  if (typeof date === "string") {
    const d = date.trim();
    const exact = d.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (exact && !Number.isNaN(Date.parse(`${d}T00:00:00Z`))) return d;
    const month = d.match(/^(\d{4})-(\d{2})$/);
    if (month && +month[2] >= 1 && +month[2] <= 12) return `${d}-01`;
  }
  // A known year since 2024 is safely within the Oct 2023 fixed-date policy.
  // Records marked only "2023" are omitted until release MONTH is verified.
  if (Number.isInteger(year) && Number(year) >= 2024 && Number(year) < 2100) return String(year);
  return "";
};
const asText = (v: unknown): string | undefined => {
  if (typeof v === "string" && v.trim()) return v.trim();
  if (typeof v === "number" && Number.isFinite(v)) return String(v);
  if (v && typeof v === "object" && "value" in v) return asText((v as {value?:unknown}).value);
  return undefined;
};
const num = (v:unknown) => typeof v === "number" && Number.isFinite(v) ? v : undefined;
const extractAmount = (v:unknown): Step4Price | undefined => {
  if (!v || typeof v !== "object") return undefined;
  const o=v as Record<string,unknown>;
  if (typeof o.amount !== "number" || !Number.isFinite(o.amount) || o.amount <= 0) return undefined;
  return {amount:o.amount,currency:asText(o.currency),asOf:asText(o.asOf),source:asText(o.seller)||asText(o.source),config:asText(o.config)};
};
export function adaptStep4Devices(devices: readonly unknown[]): Step4Phone[] {
  const output: Step4Phone[]=[];
  const seen=new Set<string>();
  for (const raw of devices) {
    if (!raw || typeof raw!=="object") continue;
    const d=raw as Record<string,any>;
    if (d.category && d.category!=="phones" && d.category!=="phone") continue;
    const id=asText(d.id), name=asText(d.name), brand=asText(d.brand);
    const releaseDate=validDate(d.releaseDate ?? d.release_date ?? d.launchDate, d.year);
    if (!id || !name || !brand || !releaseDate || releaseDate<ONOCRA_START || seen.has(id)) continue;
    seen.add(id);
    const specs=d.specs && typeof d.specs==="object" ? d.specs as Record<string,unknown> : {};
    const prices:Step4Phone["prices"]={};
    for (const region of ["US","UK","DE","FR","IT","ES"] as const) {
      const price=extractAmount(d.prices?.[region]);
      if (price) prices[region]=price;
    }
    const image=asText(d.imageUrl)||asText(d.image)||asText(d.photo) || (Array.isArray(d.images)?asText(d.images[0]):undefined);
    output.push({id,name,brand,family:asText(d.family),releaseDate,image,
      display:asText(specs.display),processor:asText(specs.processor)||asText(specs.chipset),
      camera:asText(specs.cameras)||asText(specs.camera), battery:asText(specs.battery),
      ram:asText(specs.ram),storage:asText(specs.storage),charging:asText(specs.charging),
      // Only explicitly verified booleans/numeric fields, never inferred from names.
      fiveG:typeof d.fiveG==="boolean"?d.fiveG:undefined,
      screenInches:num(d.screenInches),mainCameraMP:num(d.mainCameraMP),
      batteryMah:num(d.batteryMah),ramGB:num(d.ramGB),storageGB:num(d.storageGB),
      prices, fit: d.status === "reviewed" && d.fit && typeof d.fit==="object" ? d.fit : undefined,
      popularity: d.popularity && ["views7d","favourites"].includes(d.popularity.kind) &&
        Number.isFinite(d.popularity.count) && d.popularity.source && d.popularity.asOf ? d.popularity : undefined
    });
  }
  return output;
}
