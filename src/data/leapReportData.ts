// Optional hand-written side-by-side reports for the Generational Leap Report on the verdict page.
//
// HOW IT WORKS
//  - For every model the verdict page first looks here for a report whose `from` and `to` match the
//    previous model and the selected model (use the device `id` values from src/data/devices).
//  - If none is found, the report is built automatically from the catalogue (devices + leaps), so every
//    model that has a predecessor still gets a report.
//
// EVIDENCE RULES (same as the rest of the site)
//  - Set `specimen: true` until every figure has been checked against a source. The page then shows
//    a specimen banner automatically.
//  - Prices are never written here: they come only from verified `prices` in the device catalogue.
//  - No numerical rating is shown until the scoring method is validated.

export type Mark = "better" | "same" | "worse" | "unknown";

export type SpecRow = {
  label: string; // centre column
  prev: string; // left column (previous model)
  next: string; // right column (new model)
  mark?: Mark; // omit for facts that are not "better or worse" (names, model numbers)
  note?: string; // short plain-language remark, e.g. "Slightly wider"
};

export type SpecSection = {
  id: string;
  icon: string;
  title: string;
  rows: SpecRow[];
};

export type LeapReport = {
  from: string; // previous model id
  to: string; // selected model id
  asOf: string;
  specimen: boolean;
  /** "What's new at a glance". Leave out to derive it from the rows below. */
  glance?: { mark: Mark; text: string }[];
  sections: SpecSection[];
};

export const leapReports: LeapReport[] = [
  {
    // TEMPLATE built from your layout document. Change the two ids to match src/data/devices
    // (or delete this block) before relying on it. Figures are unverified placeholders.
    from: "samsung-galaxy-s25-ultra",
    to: "samsung-galaxy-s26-ultra",
    asOf: "Oct 2026",
    specimen: true,
    glance: [
      { mark: "better", text: "Snapdragon 8 Gen 5 (vs Gen 4)" },
      { mark: "better", text: "Upgraded 50 MP 5x telephoto camera" },
      { mark: "same", text: "Same 5000 mAh battery" },
      { mark: "same", text: "Same 45 W wired charging" },
    ],
    sections: [
      {
        id: "identity",
        icon: "🛠️",
        title: "Identity and launch details",
        rows: [
          { label: "Model name", prev: "Galaxy S25 Ultra", next: "Galaxy S26 Ultra" },
          { label: "Model numbers", prev: "SM-S938B, SM-S938U", next: "SM-S948B, SM-S948U" },
          { label: "Status", prev: "Released January 2025", next: "Released February 2026", mark: "better" },
        ],
      },
      {
        id: "design",
        icon: "📐",
        title: "Design and physical build",
        rows: [
          { label: "Dimensions", prev: "162.8 x 77.6 x 8.2 mm", next: "162.3 x 79.0 x 8.4 mm", mark: "same", note: "Slightly wider" },
          { label: "Weight", prev: "230 g", next: "232 g", mark: "same", note: "2 g heavier" },
          { label: "Materials", prev: "Titanium Grade 2, Gorilla Glass", next: "Titanium Grade 5, Gorilla Glass Armor", mark: "better" },
          { label: "Durability", prev: "IP68 (1.5 m for 30 min)", next: "IP68 (same rating)", mark: "same" },
        ],
      },
      {
        id: "display",
        icon: "📺",
        title: "Display specifications",
        rows: [
          { label: "Panel type", prev: "Dynamic AMOLED 2X, 120 Hz", next: "Dynamic AMOLED 2X, 120 Hz", mark: "same" },
          { label: "Size and resolution", prev: "6.8 in (1440 x 3120 px)", next: "6.8 in (1440 x 3120 px)", mark: "same" },
          { label: "Brightness", prev: "2600 nits (peak)", next: "3000 nits (peak)", mark: "better", note: "About 15% brighter" },
        ],
      },
      {
        id: "hardware",
        icon: "🧠",
        title: "Hardware and performance",
        rows: [
          { label: "Chipset", prev: "Snapdragon 8 Gen 4 (4 nm)", next: "Snapdragon 8 Gen 5 (3 nm)", mark: "better", note: "+25% CPU (manufacturer claim)" },
          { label: "Memory", prev: "12 GB LPDDR5X", next: "12 GB / 16 GB LPDDR5X", mark: "better", note: "Higher capacity available" },
          { label: "Storage speed", prev: "UFS 4.0", next: "UFS 4.1", mark: "better", note: "Faster read and write" },
        ],
      },
      {
        id: "camera",
        icon: "📷",
        title: "Camera system",
        rows: [
          { label: "Primary sensors", prev: "200 MP main / 12 MP ultrawide", next: "200 MP main / 12 MP ultrawide", mark: "same" },
          { label: "Telephoto", prev: "50 MP (5x) / 10 MP (3x)", next: "50 MP (5x, larger sensor) + 12 MP (3x)", mark: "better" },
          { label: "Maximum video", prev: "4K @ 60 fps, 8K @ 30 fps", next: "4K @ 120 fps, 8K @ 30 fps", mark: "better", note: "4K slow motion" },
        ],
      },
      {
        id: "battery",
        icon: "🔋",
        title: "Battery and power management",
        rows: [
          { label: "Capacity", prev: "5000 mAh", next: "5000 mAh", mark: "same", note: "No change" },
          { label: "Wired charging", prev: "45 W (PD 3.0)", next: "45 W (same charging curve)", mark: "same" },
          { label: "Wireless charging", prev: "15 W (Qi)", next: "15 W (Qi2 magnetic standard)", mark: "better" },
        ],
      },
      {
        id: "connectivity",
        icon: "🌐",
        title: "Connectivity and ports",
        rows: [
          { label: "Wireless radios", prev: "5G, Wi-Fi 7, Bluetooth 5.4", next: "5G, Wi-Fi 7, Bluetooth 5.4", mark: "same" },
          { label: "Physical ports", prev: "USB Type-C 3.2", next: "USB Type-C 3.2", mark: "same" },
        ],
      },
      {
        id: "software",
        icon: "⚙️",
        title: "Software, audio and miscellaneous",
        rows: [
          { label: "Operating system", prev: "Android 15, One UI 7.0", next: "Android 16, One UI 8.0", mark: "better" },
          { label: "Update support", prev: "7 years (to 2032)", next: "7 years (to 2033)", mark: "better" },
          { label: "Biometrics", prev: "Ultrasonic under-display", next: "Gen-3 ultrasonic", mark: "better", note: "Larger scanning area" },
        ],
      },
    ],
  },
];
