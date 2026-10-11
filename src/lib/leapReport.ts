// Generational Leap Report: builds the HTML for the verdict page.
//   Part 1  Essential snapshot: new model vs previous model, plus "what's new at a glance".
//   Part 2  Advanced deep-dive: expandable side-by-side sections (previous | specification | new).
//
// It uses a hand-written report from src/data/leapReportData.ts when one exists for the pair,
// otherwise it builds the report from the catalogue (devices + leap rows), so nothing is invented.

import { esc, money, regionInfo } from "./reviewFlow";
import { leapReports, type Mark, type SpecRow, type SpecSection } from "../data/leapReportData";

const MARK: Record<Mark, { sym: string; word: string }> = {
  better: { sym: "▲", word: "Improved" },
  same: { sym: "＝", word: "Same or minor change" },
  worse: { sym: "▼", word: "Regressed" },
  unknown: { sym: "?", word: "Unverified" },
};
const FROM_STATUS: Record<string, Mark> = {
  improved: "better",
  unchanged: "same",
  regressed: "worse",
  unverified: "unknown",
};

// Catalogue spec keys grouped into the report's sections.
const AUTO: { id: string; icon: string; title: string; rows: [string, string][] }[] = [
  { id: "display", icon: "📺", title: "Display specifications", rows: [["display", "Display size"], ["refresh", "Refresh rate"]] },
  { id: "camera", icon: "📷", title: "Camera system", rows: [["cameras", "Rear cameras"]] },
  { id: "hardware", icon: "🧠", title: "Hardware and performance", rows: [["ram", "Memory (typical)"], ["storage", "Base storage"]] },
  { id: "battery", icon: "🔋", title: "Battery and power", rows: [["battery", "Battery capacity"], ["charging", "Wired charging"]] },
];
// Which leap-row feature names belong to which spec key.
const SYN: Record<string, RegExp> = {
  display: /display|screen/,
  refresh: /refresh/,
  cameras: /camera/,
  ram: /\b(ram|memory)\b/,
  storage: /storage/,
  battery: /battery/,
  charging: /charging/,
};

const chip = (m: Mark) =>
  `<span class="lr-mk lr-mk--${m}" aria-hidden="true">${MARK[m].sym}</span><span class="sr-only">${MARK[m].word}: </span>`;

function compare(a: any, b: any): Mark {
  if (a.value === b.value) return "same";
  if (typeof a.numeric === "number" && typeof b.numeric === "number" && a.numeric !== b.numeric) {
    return b.numeric > a.numeric ? "better" : "worse";
  }
  return "unknown";
}

function autoSections(model: any, prev: any, set: any): SpecSection[] {
  const used = new Set<number>();
  const out: SpecSection[] = [];

  for (const sec of AUTO) {
    const rows: SpecRow[] = [];
    for (const [key, label] of sec.rows) {
      const a = prev.specs?.[key];
      const b = model.specs?.[key];
      if (!a || !b) continue;
      const i: number = set?.rows ? set.rows.findIndex((r: any) => SYN[key].test(String(r.feature).toLowerCase())) : -1;
      const lr = i >= 0 ? set.rows[i] : null;
      if (i >= 0) used.add(i);
      rows.push({
        label,
        prev: a.value,
        next: b.value,
        mark: lr ? (FROM_STATUS[lr.status] ?? "unknown") : compare(a, b),
        note: lr?.headline,
      });
    }
    if (rows.length) out.push({ id: sec.id, icon: sec.icon, title: sec.title, rows });
  }

  // Documented changes that do not map to a catalogue spec (for example "Processor").
  const extra: SpecRow[] = (set?.rows ?? [])
    .map((r: any, i: number) =>
      used.has(i) ? null : { label: r.feature, prev: "Previous generation", next: r.headline, mark: FROM_STATUS[r.status] ?? "unknown" },
    )
    .filter(Boolean);
  if (extra.length) out.push({ id: "other", icon: "⚙️", title: "Other documented changes", rows: extra });

  return out;
}

function deriveGlance(sections: SpecSection[]) {
  const rows = sections.flatMap((s) => s.rows);
  const pick = (m: Mark, n: number, text: (r: SpecRow) => string) =>
    rows.filter((r) => r.mark === m).slice(0, n).map((r) => ({ mark: m, text: text(r) }));
  return [
    ...pick("better", 4, (r) => `${r.label}: ${r.next}`),
    ...pick("worse", 2, (r) => `${r.label}: ${r.next}`),
    ...pick("same", 2, (r) => `Same ${r.label.toLowerCase()}`),
  ];
}

function modelCard(d: any, region: string, kind: "new" | "prev") {
  const p = d.prices?.[region];
  const country = regionInfo(region).label;
  const price = p
    ? `<strong>${esc(money(region, p.amount))}</strong> <small>${esc(p.config)} · as of ${esc(p.asOf)}</small>`
    : `<strong>Not verified</strong> <small>for ${esc(country)}</small>`;
  // No numerical rating is published until the scoring method is validated.
  const rating = d.rating && d.rating.verified ? `<strong>${esc(String(d.rating.value))}</strong>` : `<strong>Not rated yet</strong>`;
  const pic = d.image
    ? `<img src="${esc(d.image)}" alt="${esc(d.name)}" loading="lazy" width="120" height="160" />`
    : `<span class="lr-phone" aria-hidden="true"></span>`;
  return `
    <article class="lr-model lr-model--${kind}">
      <div class="lr-pic">${pic}</div>
      <div class="lr-info">
        <p class="lr-tag">${kind === "new" ? "Selected model" : "Previous model"}</p>
        <h3>${esc(d.name)}</h3>
        <p class="lr-line"><span>Price</span><span>${price}</span></p>
        <p class="lr-line"><span>ONOCRA rating</span><span>${rating}</span></p>
      </div>
    </article>`;
}

const tally = (rows: SpecRow[]) => {
  const t: Record<Mark, number> = { better: 0, same: 0, worse: 0, unknown: 0 };
  rows.forEach((r) => r.mark && t[r.mark]++);
  return t;
};
const countText = (t: Record<Mark, number>) =>
  [t.better && `${t.better} improved`, t.same && `${t.same} same`, t.worse && `${t.worse} regressed`, t.unknown && `${t.unknown} unverified`]
    .filter(Boolean)
    .join(" · ");

function sectionHtml(s: SpecSection, i: number, prevName: string, newName: string, open: boolean) {
  return `
    <details class="lr-sec"${open ? " open" : ""}>
      <summary>
        <span class="lr-sec-t"><span class="lr-ico" aria-hidden="true">${s.icon}</span><h3>${i + 1}. ${esc(s.title)}</h3></span>
        <span class="lr-sec-c">${esc(countText(tally(s.rows)))}</span>
      </summary>
      <div class="lr-tw">
        <table class="lr-tbl">
          <thead><tr><th scope="col">Previous: ${esc(prevName)}</th><th scope="col">Specification</th><th scope="col">New: ${esc(newName)}</th></tr></thead>
          <tbody>
            ${s.rows
              .map(
                (r) => `<tr>
              <td data-label="Previous">${esc(r.prev)}</td>
              <th scope="row">${esc(r.label)}</th>
              <td data-label="New">${r.mark ? chip(r.mark) : ""}<span>${esc(r.next)}</span>${r.note ? `<small class="lr-note">${esc(r.note)}</small>` : ""}</td>
            </tr>`,
              )
              .join("")}
          </tbody>
        </table>
      </div>
    </details>`;
}

export function buildLeapReport(opts: { model: any; prev: any | null; set: any | null; region: string }): string {
  const { model, prev, set, region } = opts;
  if (!model || !prev) return "";

  const custom = leapReports.find((r) => r.from === prev.id && r.to === model.id);
  const sections = custom ? custom.sections : autoSections(model, prev, set);
  if (!sections.length) return "";

  const glance = custom?.glance?.length ? custom.glance : deriveGlance(sections);
  const specimen = custom ? custom.specimen : model.status === "specimen";
  const asOf = custom?.asOf ?? set?.rows?.[0]?.asOf ?? "";
  const all = tally(sections.flatMap((s) => s.rows));

  return `
    <div class="lr">
      ${specimen ? `<p class="banner"><strong>Specimen.</strong> Preliminary findings${asOf ? `, ${esc(asOf)}` : ""}. Figures marked here are working research values and are not independently verified. No numerical score is published.</p>` : ""}

      <!-- PART 1: essential snapshot -->
      <div class="lr-hero">
        ${modelCard(model, region, "new")}
        <div class="lr-vs" aria-hidden="true">vs.</div>
        ${modelCard(prev, region, "prev")}
      </div>

      <section class="lr-glance" aria-label="What's new at a glance">
        <h3>What's new at a glance</h3>
        <ul>
          ${glance.map((g) => `<li>${chip(g.mark)}<span>${esc(g.text)}</span></li>`).join("")}
        </ul>
      </section>

      <!-- PART 2: advanced deep-dive -->
      <details class="lr-adv">
        <summary>
          <span><span aria-hidden="true">⚙️ </span>Expand side-by-side specifications</span>
          <span class="lr-sec-c">${sections.length} sections · ${esc(countText(all))}</span>
        </summary>
        <div class="lr-bar">
          <p class="lr-legend" aria-label="Key">
            ${(["better", "same", "worse", "unknown"] as Mark[]).map((m) => `<span>${chip(m)}${esc(MARK[m].word)}</span>`).join("")}
          </p>
          <div class="lr-btns">
            <button type="button" class="lr-btn" data-lr="open">Expand all</button>
            <button type="button" class="lr-btn" data-lr="close">Collapse all</button>
          </div>
        </div>
        ${sections.map((s, i) => sectionHtml(s, i, prev.name, model.name, i === 0)).join("")}
        <p class="flow-note">Published specifications. Chipsets and some configurations vary by region. Each row's evidence level is shown in the technical progress section below.</p>
      </details>
    </div>`;
}
