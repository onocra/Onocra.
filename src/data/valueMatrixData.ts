// Optional hand-written editorial content for the Value Matrix on the verdict page.
//
// Two kinds of matrix:
//   upgradeMatrices  same brand, new model vs its predecessor   ("Is it worth upgrading?")
//   crossMatrices    two different brands                        ("Which platform gives more value?")
//
// Anything not listed here still gets a matrix built from verified catalogue data (verified prices
// and the Generational Leap tally), with the editorial parts marked as pending.
//
// EVIDENCE RULES
//  - `published: false` keeps scores, status and verdict hidden. Prepare the entry, then flip it to
//    true once the scoring method is validated and every figure is checked.
//  - Prices are never written here. They come only from verified `prices` in the device catalogue.
//  - Ids must match the `id` values in src/data/devices.

export type Tone = "go" | "consider" | "skip" | "neutral";

export type Pillar = {
  id: string; // for cross-brand pillars this must match a CROSS_WEIGHTS id
  label: string;
  note: string;
  score?: number; // 0 to 10, upgrade matrix
  scoreA?: number; // 0 to 10, cross-brand: brand A
  scoreB?: number; // 0 to 10, cross-brand: brand B
};

type Base = {
  asOf: string;
  published: boolean;
  score?: number; // headline score out of 100 (upgrade matrix). Cross-brand totals are computed.
  status?: { label: string; tone: Tone };
  summary?: string; // one line shown in the folded view
  verdict?: string; // full paragraph shown when expanded
  pillars: Pillar[];
};

export type UpgradeEntry = Base & { from: string; to: string };
export type CrossEntry = Base & { a: string; b: string };

// Cross-brand weighting (from your criteria sheet). Pillar scores are combined with these.
export const CROSS_WEIGHTS = [
  { id: "hardware", label: "Hardware value per dollar", weight: 35, logic: "Raw component offering and standard inclusions (stylus, charger, base storage tier)." },
  { id: "performance", label: "Performance benchmark delta", weight: 25, logic: "Cross-platform compute scoring normalised across operating systems (for example Geekbench Compute and 3DMark Wild Life)." },
  { id: "ecosystem", label: "Ecosystem switching friction", weight: 20, logic: "Typical workflow interruptions: accessory compatibility, cloud storage and data transfer tools." },
  { id: "price", label: "Price ratio", weight: 20, logic: "Baseline retail price difference between the selected configurations." },
] as const;

export const upgradeMatrices: UpgradeEntry[] = [
  {
    // TEMPLATE from your S26 Ultra vs S25 Ultra image. Change the ids to real device ids.
    from: "samsung-galaxy-s25-ultra",
    to: "samsung-galaxy-s26-ultra",
    asOf: "Oct 2026",
    published: false,
    score: 72,
    status: { label: "Skip it (for most users)", tone: "skip" },
    summary: "The new model adds incremental updates; the previous model offers most of the experience for less.",
    verdict:
      "The price premium does not justify the incremental updates unless you specifically need Qi2 magnetic charging or shoot heavy 4K 120 fps video. For most people the previous model delivers most of the experience for noticeably less cash.",
    pillars: [
      { id: "performance", label: "Performance", score: 8, note: "Faster CPU and UFS 4.1 storage bandwidth (manufacturer claims)." },
      { id: "cameras", label: "Cameras", score: 6, note: "Identical main sensor; slightly better low-light 5x zoom." },
      { id: "design", label: "Design and power", score: 3, note: "Same battery, same charging speed, added Qi2 magnets." },
    ],
  },
];

export const crossMatrices: CrossEntry[] = [
  {
    // TEMPLATE from your Pixel 10 Pro vs Galaxy S26 Ultra image. Only figures that appear in your
    // image are scored; add the rest after checking them against sources.
    a: "google-pixel-10-pro",
    b: "samsung-galaxy-s26-ultra",
    asOf: "Oct 2026",
    published: false,
    status: { label: "Google for value", tone: "go" },
    summary: "Unless you need the periscope zoom or S-Pen, the Pixel matches the core experience for less.",
    verdict:
      "The price saving makes the Pixel the clear value pick. Unless you explicitly need the Galaxy's periscope zoom or S-Pen functionality, the Google model matches the core experience for less money.",
    pillars: [
      { id: "hardware", label: "Hardware value per dollar", note: "Samsung adds a periscope zoom array and native stylus support; Google covers the core experience for less." },
      { id: "performance", label: "Performance benchmark delta", scoreA: 8.5, scoreB: 8.8, note: "Close benchmark result between the two chipsets." },
      { id: "ecosystem", label: "Ecosystem switching friction", note: "Depends on which accessories, cloud storage and apps the visitor already uses." },
      { id: "price", label: "Price ratio", note: "Calculated from verified prices in the visitor's country when both are available." },
    ],
  },
];
