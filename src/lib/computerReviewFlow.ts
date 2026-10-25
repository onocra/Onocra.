export const BASE = "/computers/reviews";

export type ModeId = "brands" | "match" | "generations" | "value";
export type WhoId = "under13" | "teen" | "young" | "adult";
export type ExplorerProfileId = "student" | "professional" | "creator" | "enthusiast" | "other";
export type PriorityId =
  | "price"
  | "performance"
  | "display"
  | "memory-storage"
  | "battery-portability"
  | "build-repair"
  | "software-ecosystem"
  | "gaming-graphics";
export type RegionId = "US" | "UK" | "DE";
export type DeviceKind = "computers" | "laptops" | "";

export const MAX_PRIORITIES = 5;

export const WHO = [
  { id: "under13", label: "Under 13", emphasis: "Parent or guardian-led; safety, durability and age-appropriate controls.", icon: "🛡️" },
  { id: "teen", label: "13–17", emphasis: "Study, creative work, gaming, safety and household oversight.", icon: "🎒" },
  { id: "young", label: "18–25", emphasis: "Study, early career, portability, performance and budget.", icon: "🎓" },
  { id: "adult", label: "26+", emphasis: "Your stated priorities, work, home use and ownership needs.", icon: "👤" },
] as const;

export const EXPLORER_PROFILES = [
  { id: "student", label: "Student", desc: "Studying and exploring computer technology.", icon: "🎓" },
  { id: "professional", label: "Technology professional or business owner", desc: "Features, performance and practical use.", icon: "💼" },
  { id: "creator", label: "Journalist, reviewer or creator", desc: "Research, comparisons and evidence.", icon: "📝" },
  { id: "enthusiast", label: "Technology enthusiast", desc: "Technical details and generational progress.", icon: "🔬" },
  { id: "other", label: "None of the above", desc: "Explore for another purpose.", icon: "✦" },
] as const;

export const PRIORITIES = [
  { id: "price", label: "Price & Value", icon: "£", desc: "Verified local price, useful performance and ownership value." },
  { id: "performance", label: "Performance", icon: "⚡", desc: "Processor performance, responsiveness and sustained workloads." },
  { id: "display", label: "Display", icon: "▣", desc: "Size, resolution, brightness, colour and readability." },
  { id: "memory-storage", label: "Memory & Storage", icon: "◫", desc: "RAM, SSD capacity, expansion and practical usable space." },
  { id: "battery-portability", label: "Battery & Portability", icon: "🔋", desc: "Battery endurance, charger, weight and working away from a desk." },
  { id: "build-repair", label: "Build & Repairability", icon: "🛠️", desc: "Durability, ports, upgrade access, repair and service life." },
  { id: "software-ecosystem", label: "Software & Ecosystem", icon: "⌘", desc: "Windows, macOS, ChromeOS, apps, accessories and device compatibility." },
  { id: "gaming-graphics", label: "Gaming & Graphics", icon: "🎮", desc: "GPU capability, sustained performance, cooling and game compatibility." },
] as const;

export const REGIONS = [
  { id: "US", label: "United States", currency: "USD", symbol: "$" },
  { id: "UK", label: "United Kingdom", currency: "GBP", symbol: "£" },
  { id: "DE", label: "Germany", currency: "EUR", symbol: "€" },
] as const;

export const BRANDS = ["Apple", "Dell", "HP", "Lenovo", "ASUS", "Acer"] as const;

export interface ComputerReviewState {
  mode: ModeId | "";
  who: WhoId | "";
  explorer: ExplorerProfileId | "";
  purpose: string;
  intent: "researching" | "buying" | "";
  purchase: "new" | "upgrade" | "";
  prio: PriorityId[];
  device: DeviceKind;
  brand: string;
  region: RegionId;
  budget: number | null;
  model: string;
  compare: string[];
}

const has = <T extends string>(list: readonly { id: T }[], value: string | null): value is T =>
  !!value && list.some((item) => item.id === value);

export function readState(search: string): ComputerReviewState {
  const p = new URLSearchParams(search);
  const mode = p.get("mode");
  const who = p.get("who");
  const explorer = p.get("explorer");
  const intent = p.get("intent");
  const purchase = p.get("purchase");
  const region = p.get("region");
  const device = p.get("device");
  const budgetRaw = Number(p.get("budget"));

  return {
    mode: ["brands","match","generations","value"].includes(mode || "") ? (mode as ModeId) : "",
    who: has(WHO, who) ? who : "",
    explorer: has(EXPLORER_PROFILES, explorer) ? explorer : "",
    purpose: (p.get("purpose") || "").slice(0, 140),
    intent: intent === "buying" || intent === "researching" ? intent : "",
    purchase: purchase === "new" || purchase === "upgrade" ? purchase : "",
    prio: (p.get("prio") || "")
      .split(",")
      .filter((x): x is PriorityId => has(PRIORITIES, x))
      .slice(0, MAX_PRIORITIES),
    device: device === "computers" || device === "laptops" ? device : "",
    brand: p.get("brand") || "all",
    region: has(REGIONS, region) ? region : "US",
    budget: Number.isFinite(budgetRaw) && budgetRaw > 0 ? budgetRaw : null,
    model: p.get("model") || "",
    compare: (p.get("compare") || "").split(",").filter(Boolean).slice(0, 2),
  };
}

export function toQuery(state: Partial<ComputerReviewState>): string {
  const p = new URLSearchParams();
  if (state.mode) p.set("mode", state.mode);
  if (state.who) p.set("who", state.who);
  if (state.explorer) p.set("explorer", state.explorer);
  if (state.purpose) p.set("purpose", state.purpose);
  if (state.intent) p.set("intent", state.intent);
  if (state.purchase) p.set("purchase", state.purchase);
  if (state.prio?.length) p.set("prio", state.prio.join(","));
  if (state.device) p.set("device", state.device);
  if (state.brand && state.brand !== "all") p.set("brand", state.brand);
  if (state.region && state.region !== "US") p.set("region", state.region);
  if (state.budget) p.set("budget", String(state.budget));
  if (state.model) p.set("model", state.model);
  if (state.compare?.length) p.set("compare", state.compare.join(","));
  const q = p.toString();
  return q ? `?${q}` : "";
}

export const stepUrl = (step: "who" | "priorities" | "models" | "verdict", state: Partial<ComputerReviewState>) =>
  `${BASE}/${step}/${toQuery(state)}`;

export const regionInfo = (id: RegionId) => REGIONS.find((r) => r.id === id) ?? REGIONS[0];
export const priorityLabel = (id: string) => PRIORITIES.find((x) => x.id === id)?.label ?? id;
