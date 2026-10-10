// ONOCRA guided comparison: shared constants, URL state and personal-fit logic.
// Pure functions only, so they run both at build time and in the browser.

export const BASE = "/phones/reviews";

export type ModeId = "generations" | "brands" | "value" | "match";
export type WhoId = "adult" | "under13" | "teen" | "young";
export type PriorityId =
  | "price" | "battery" | "camera" | "ecosystem"
  | "display" | "longevity" | "storage" | "gaming";
export type RegionId = "US" | "UK" | "DE" | "FR" | "IT" | "ES";
export type FitLevel = "strong" | "adequate" | "limited" | "unverified";

export const MODES: { id: ModeId; label: string; desc: string; icon: string }[] = [
  { id: "generations", label: "Generations", desc: "Old vs new: what genuinely changed", icon: "🕒" },
  { id: "brands", label: "Across brands", desc: "Side by side, without brand bias", icon: "⚖️" },
  { id: "value", label: "Value Matrix", desc: "Technical progress vs cost", icon: "📊" },
  { id: "match", label: "Your match", desc: "Based on your ranked priorities", icon: "🎯" },
];

export const WHO: { id: WhoId; label: string; emphasis: string; icon: string }[] = [
  { id: "adult", label: "Adult, 26 or over", emphasis: "Personal priorities, usability, productivity, accessibility and long-term value.", icon: "🧑" },
  { id: "under13", label: "Parent, child under 13", emphasis: "A parent or guardian decision: parental controls, safety, durability and suitability.", icon: "👪" },
  { id: "teen", label: "Teenager, 13 to 17", emphasis: "Digital safety, parental oversight, learning and balanced performance.", icon: "🎒" },
  { id: "young", label: "Young person, 18 to 25", emphasis: "Budget, study, gaming, cameras and productivity.", icon: "🎓" },
];

export const PRIORITIES: { id: PriorityId; label: string; icon: string }[] = [
  { id: "price", label: "Price & value", icon: "💰" },
  { id: "battery", label: "Battery", icon: "🔋" },
  { id: "camera", label: "Camera", icon: "📷" },
  { id: "ecosystem", label: "Brand & ecosystem", icon: "🍎" },
  { id: "display", label: "Display", icon: "📱" },
  { id: "longevity", label: "Longevity & updates", icon: "🔄" },
  { id: "storage", label: "Storage", icon: "💾" },
  { id: "gaming", label: "Gaming", icon: "🎮" },
];
export const MAX_PRIORITIES = 5;

export const REGIONS: { id: RegionId; label: string; currency: string; symbol: string }[] = [
  { id: "US", label: "United States", currency: "USD", symbol: "$" },
  { id: "UK", label: "United Kingdom", currency: "GBP", symbol: "£" },
  { id: "DE", label: "Germany", currency: "EUR", symbol: "€" },
  { id: "FR", label: "France", currency: "EUR", symbol: "€" },
  { id: "IT", label: "Italy", currency: "EUR", symbol: "€" },
  { id: "ES", label: "Spain", currency: "EUR", symbol: "€" },
];

export const CATEGORIES = ["phones", "tablets", "wearables"] as const;
export const BRANDS = ["Apple", "Samsung", "Google", "Xiaomi", "OnePlus", "Motorola"] as const;

export interface FlowState {
  mode: ModeId | "";
  who: WhoId | "";
  intent: "researching" | "buying" | "";
  prio: PriorityId[];
  cat: string;
  brand: string;
  region: RegionId;
  budget: number | null; // in the region's local currency; null = no limit
  model: string;
}

const has = <T extends string>(list: readonly { id: T }[], v: string | null): v is T =>
  !!v && list.some((x) => x.id === v);

export function readState(search: string): FlowState {
  const p = new URLSearchParams(search);
  const mode = p.get("mode");
  const who = p.get("who");
  const intent = p.get("intent");
  const region = p.get("region");
  const budgetRaw = Number(p.get("budget"));
  return {
    mode: has(MODES, mode) ? mode : "",
    who: has(WHO, who) ? who : "",
    intent: intent === "buying" || intent === "researching" ? intent : "",
    prio: (p.get("prio") || "")
      .split(",")
      .filter((x): x is PriorityId => has(PRIORITIES, x))
      .filter((x, i, a) => a.indexOf(x) === i)
      .slice(0, MAX_PRIORITIES),
    cat: (CATEGORIES as readonly string[]).includes(p.get("cat") || "") ? (p.get("cat") as string) : "phones",
    brand: (BRANDS as readonly string[]).includes(p.get("brand") || "") ? p.get("brand")! : "all",
    region: has(REGIONS, region) ? region : "US",
    budget: Number.isFinite(budgetRaw) && budgetRaw > 0 ? budgetRaw : null,
    model: (p.get("model") || "").slice(0, 120),
  };
}

export function toQuery(s: Partial<FlowState>): string {
  const p = new URLSearchParams();
  if (s.mode) p.set("mode", s.mode);
  if (s.who) p.set("who", s.who);
  if (s.intent) p.set("intent", s.intent);
  if (s.prio && s.prio.length) p.set("prio", s.prio.join(","));
  if (s.cat && s.cat !== "phones") p.set("cat", s.cat);
  if (s.brand && s.brand !== "all") p.set("brand", s.brand);
  if (s.region && s.region !== "US") p.set("region", s.region);
  if (s.budget) p.set("budget", String(s.budget));
  if (s.model) p.set("model", s.model);
  const q = p.toString();
  return q ? `?${q}` : "";
}

export const stepUrl = (step: "who" | "priorities" | "models" | "verdict", s: Partial<FlowState>) =>
  `${BASE}/${step}/${toQuery(s)}`;

export const regionInfo = (id: RegionId) => REGIONS.find((r) => r.id === id) ?? REGIONS[0];
export const priorityLabel = (id: string) => PRIORITIES.find((x) => x.id === id)?.label ?? id;

// ---------------------------------------------------------------------------
// Personal fit. Deliberately NOT a published numeric score: ONOCRA publishes no
// score without a documented methodology. We output a qualitative band and
// always report how much of the visitor's ranking is backed by evidence.
// ---------------------------------------------------------------------------
const RANK_WEIGHT = [5, 4, 3, 2, 1];
const LEVEL_VALUE: Record<FitLevel, number> = { strong: 1, adequate: 0.6, limited: 0.2, unverified: 0 };

export type FitBand = "strong" | "partial" | "weak" | "insufficient";

export interface FitResult {
  band: FitBand;
  label: string;
  evidenced: number; // how many ranked priorities have verified ratings
  total: number;
  rank: number;      // internal sort key only, never shown as a score
  perPriority: { id: PriorityId; level: FitLevel }[];
}

export function fitFor(fit: Partial<Record<PriorityId, FitLevel>>, prio: PriorityId[]): FitResult {
  const per = prio.map((id) => ({ id, level: (fit[id] ?? "unverified") as FitLevel }));
  let got = 0, max = 0, known = 0;
  per.forEach((x, i) => {
    const w = RANK_WEIGHT[i] ?? 1;
    max += w;
    if (x.level !== "unverified") { known++; got += w * LEVEL_VALUE[x.level]; }
  });
  const ratio = max ? got / max : 0;
  let band: FitBand = "insufficient";
  if (prio.length && known / prio.length >= 0.5) {
    band = ratio >= 0.7 ? "strong" : ratio >= 0.4 ? "partial" : "weak";
  }
  const label = { strong: "Strong fit", partial: "Partial fit", weak: "Weak fit", insufficient: "Not enough evidence" }[band];
  return { band, label, evidenced: known, total: prio.length, rank: ratio, perPriority: per };
}

export const esc = (v: unknown) =>
  String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));

export function money(region: RegionId, amount: number | undefined) {
  if (amount == null) return null;
  const r = regionInfo(region);
  return `${r.symbol}${amount.toLocaleString("en-US")}`;
}
