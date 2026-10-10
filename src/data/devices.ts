// ONOCRA model catalogue (BP-03 data + BP-04 specimen).
// Every factual field carries a source and a verification status.
// Unknown stays unknown: no prices are invented, and priority ratings that
// have not been researched are simply left out (treated as "unverified").

import type { FitLevel, PriorityId, RegionId } from "../lib/reviewFlow";

export type Verification = "manufacturer" | "independent" | "editorial" | "unverified";
export type LeapStatus = "improved" | "unchanged" | "regressed" | "unverified";

export interface Spec {
  value: string;
  numeric?: number; // for charts
  source: string;
  kind: Verification;
}

export interface Device {
  id: string;
  brand: string;
  family: string;        // generations are compared within a family only
  name: string;
  category: "phones" | "tablets" | "wearables";
  year: number;
  generation: number;    // order inside the family
  summary: string;       // "ONOCRA at a glance"
  specs: {
    display: Spec; battery: Spec; cameras: Spec; refresh: Spec;
    ram: Spec; storage: Spec; charging: Spec;
  };
  fit: Partial<Record<PriorityId, FitLevel>>;   // editorial, only where researched
  strengths: string[];
  tradeoffs: string[];
  // Verified regional prices only: exact configuration, seller and date.
  prices: Partial<Record<RegionId, { amount: number; config: string; seller: string; asOf: string }>>;
  status: "specimen" | "reviewed";
}

const SAMSUNG = "Samsung (manufacturer research reference; exact source URL pending)";

export const devices: Device[] = [
  {
    id: "galaxy-s24", brand: "Samsung", family: "samsung-galaxy-s", name: "Galaxy S24",
    category: "phones", year: 2024, generation: 1,
    summary: "The oldest model in this specimen: a compact flagship with 8 GB of RAM and 128 GB of base storage.",
    specs: {
      display: { value: '6.2"', numeric: 6.2, source: SAMSUNG, kind: "unverified" },
      battery: { value: "4,000 mAh", numeric: 4000, source: SAMSUNG, kind: "unverified" },
      cameras: { value: "50 + 12 + 10 MP", source: SAMSUNG, kind: "unverified" },
      refresh: { value: "120 Hz", numeric: 120, source: SAMSUNG, kind: "unverified" },
      ram: { value: "8 GB", numeric: 8, source: SAMSUNG, kind: "unverified" },
      storage: { value: "128 GB", numeric: 128, source: SAMSUNG, kind: "unverified" },
      charging: { value: "25 W", numeric: 25, source: SAMSUNG, kind: "unverified" },
    },
    fit: {},
    strengths: ["Compact flagship hardware"],
    tradeoffs: ["Least RAM and base storage of the three"],
    prices: {}, status: "specimen",
  },
  {
    id: "galaxy-s25", brand: "Samsung", family: "samsung-galaxy-s", name: "Galaxy S25",
    category: "phones", year: 2025, generation: 2,
    summary: "Raised typical RAM to 12 GB while the rest of the headline hardware stayed close to the S24.",
    specs: {
      display: { value: '6.2"', numeric: 6.2, source: SAMSUNG, kind: "unverified" },
      battery: { value: "4,000 mAh", numeric: 4000, source: SAMSUNG, kind: "unverified" },
      cameras: { value: "50 + 12 + 10 MP", source: SAMSUNG, kind: "unverified" },
      refresh: { value: "120 Hz", numeric: 120, source: SAMSUNG, kind: "unverified" },
      ram: { value: "12 GB", numeric: 12, source: SAMSUNG, kind: "unverified" },
      storage: { value: "128 GB", numeric: 128, source: SAMSUNG, kind: "unverified" },
      charging: { value: "25 W", numeric: 25, source: SAMSUNG, kind: "unverified" },
    },
    fit: {},
    strengths: ["12 GB typical RAM", "Independent endurance comparison requires source-level verification"],
    tradeoffs: ["128 GB base storage"],
    prices: {}, status: "specimen",
  },
  {
    id: "galaxy-s26", brand: "Samsung", family: "samsung-galaxy-s", name: "Galaxy S26",
    category: "phones", year: 2026, generation: 3,
    summary: "A larger display, bigger battery, newer processors and 256 GB base storage in the published US configuration. Rear camera hardware is largely unchanged. An incremental rather than transformative step.",
    specs: {
      display: { value: '6.3"', numeric: 6.3, source: SAMSUNG, kind: "unverified" },
      battery: { value: "4,300 mAh", numeric: 4300, source: SAMSUNG, kind: "unverified" },
      cameras: { value: "50 + 12 + 10 MP", source: SAMSUNG, kind: "unverified" },
      refresh: { value: "120 Hz", numeric: 120, source: SAMSUNG, kind: "unverified" },
      ram: { value: "12 GB", numeric: 12, source: SAMSUNG, kind: "unverified" },
      storage: { value: "256 GB", numeric: 256, source: `${SAMSUNG} (US configuration)`, kind: "unverified" },
      charging: { value: "25 W", numeric: 25, source: SAMSUNG, kind: "unverified" },
    },
    // Only the two criteria the specimen actually evidences.
    fit: {}, // ratings withheld until source-level verification
    strengths: ["256 GB base storage (US)", "Larger 6.3-inch display", "Larger battery capacity"],
    tradeoffs: [
      "Rear camera hardware largely unchanged",
      "Independent battery endurance evidence requires source-level verification",
      "Snapdragon and Exynos variants must be judged separately by region",
    ],
    prices: {}, status: "specimen",
  },
];

// ---------------------------------------------------------------------------
// BP-04 Generational Leap specimen: Galaxy S24 -> S25 -> S26 (standard models).
// Statuses follow the four mandatory classifications. Source dates are the
// specimen date; replace with each source's publication date when verified.
// ---------------------------------------------------------------------------
export interface LeapRow {
  feature: string;
  status: LeapStatus;
  headline: string;
  detail: string;
  evidence: string;      // who says so
  kind: Verification;
  confidence: "low" | "medium" | "low";
  asOf: string;
}

export interface LeapSet {
  family: string;
  familyLabel: string;
  from: string;          // device id
  to: string;            // device id
  verdict: string;       // plain-language ownership advice
  rows: LeapRow[];
}

export const leaps: LeapSet[] = [
  {
    family: "samsung-galaxy-s",
    familyLabel: "Samsung Galaxy S (standard models; Plus and Ultra are separate families)",
    from: "galaxy-s25",
    to: "galaxy-s26",
    verdict:
      "The listed differences appear incremental, but a purchase recommendation requires source-level verification, the condition of your current phone and regional prices.",
    rows: [
      { feature: "Display size", status: "improved", headline: '6.2" to 6.3"', detail: "A small increase in screen size. Refresh rate stays at 120 Hz.", evidence: SAMSUNG, kind: "unverified", confidence: "low", asOf: "Oct 2026" },
      { feature: "Base storage", status: "improved", headline: "128 GB to 256 GB (US)", detail: "A practical gain for photos, apps and offline media. Based on Samsung's published US configuration; other markets may differ.", evidence: SAMSUNG, kind: "unverified", confidence: "low", asOf: "Oct 2026" },
      { feature: "Battery capacity", status: "improved", headline: "4,000 to 4,300 mAh (+7.5%)", detail: "Capacity rose, but see real-world endurance below: a bigger battery does not guarantee longer use.", evidence: SAMSUNG, kind: "unverified", confidence: "low", asOf: "Oct 2026" },
      { feature: "Processor", status: "improved", headline: "Newer chipset", detail: "Region-dependent. Snapdragon and Exynos variants must be evaluated separately, and US benchmark findings should not be transferred to UK or European devices.", evidence: "PhoneArena", kind: "unverified", confidence: "low", asOf: "Oct 2026" },
      { feature: "Rear camera hardware", status: "unchanged", headline: "50 + 12 + 10 MP", detail: "Same headline arrangement. Reviewers found some image-processing differences but no substantial photographic leap.", evidence: "GSMArena", kind: "unverified", confidence: "low", asOf: "Oct 2026" },
      { feature: "Rated charging power", status: "unchanged", headline: "25 W", detail: "Rated power is unchanged. GSMArena measured faster full charging on the S26, so measured behaviour is tracked separately from the rating.", evidence: "GSMArena", kind: "unverified", confidence: "low", asOf: "Oct 2026" },
      { feature: "Real-world battery endurance", status: "unverified", headline: "Mixed evidence", detail: "Tom's Guide recorded 11h 28m for the S26 against 11h 54m for the S25, while GSMArena reported gains in some usage scenarios. Not enough comparable evidence for a firm conclusion.", evidence: "Tom's Guide, GSMArena", kind: "unverified", confidence: "low", asOf: "Oct 2026" },
    ],
  },
  {
    family: "samsung-galaxy-s",
    familyLabel: "Samsung Galaxy S (standard models; Plus and Ultra are separate families)",
    from: "galaxy-s24",
    to: "galaxy-s25",
    verdict:
      "The working specifications suggest a modest change, but this is a research specimen and not a verified upgrade recommendation.",
    rows: [
      { feature: "RAM (typical variant)", status: "improved", headline: "8 GB to 12 GB", detail: "More memory in the typical variant. Real-world significance has not been independently assessed here.", evidence: SAMSUNG, kind: "unverified", confidence: "low", asOf: "Oct 2026" },
      { feature: "Display size", status: "unchanged", headline: '6.2"', detail: "Same size and 120 Hz refresh rate.", evidence: SAMSUNG, kind: "unverified", confidence: "low", asOf: "Oct 2026" },
      { feature: "Battery capacity", status: "unchanged", headline: "4,000 mAh", detail: "Same rated capacity.", evidence: SAMSUNG, kind: "unverified", confidence: "low", asOf: "Oct 2026" },
      { feature: "Base storage", status: "unchanged", headline: "128 GB", detail: "Same base US storage.", evidence: SAMSUNG, kind: "unverified", confidence: "low", asOf: "Oct 2026" },
      { feature: "Rear camera hardware", status: "unchanged", headline: "50 + 12 + 10 MP", detail: "Same headline arrangement.", evidence: SAMSUNG, kind: "unverified", confidence: "low", asOf: "Oct 2026" },
      { feature: "Rated charging power", status: "unchanged", headline: "25 W", detail: "Same rated wired charging.", evidence: SAMSUNG, kind: "unverified", confidence: "low", asOf: "Oct 2026" },
      { feature: "Processor and real-world performance", status: "unverified", headline: "Not yet assessed", detail: "No comparable independent benchmark evidence has been added for this pair.", evidence: "None yet", kind: "unverified", confidence: "low", asOf: "Oct 2026" },
    ],
  },
];

export const sourcesNote =
  "Research specimen only. Names of publishers are research leads, not citations to specific articles. Exact URLs, dates, regional variants and independent findings must be checked before any item is marked verified. ONOCRA does not conduct laboratory tests.";
