// Value Matrix for the step 5 verdict page: a folded "crux" first, details on demand.
//   buildUpgradeMatrix     new model vs its predecessor (same brand)
//   buildCrossBrandMatrix  two different brands, with a partner selector
// Prices come only from verified catalogue prices; scores, status and verdict appear only for
// entries marked `published: true` in src/data/valueMatrixData.ts.

import { esc, money, regionInfo, type RegionId } from "./reviewFlow";
const safeMoney = (region: RegionId, amount: number) => money(region, amount) ?? "Price unavailable";
import { upgradeMatrices, crossMatrices, CROSS_WEIGHTS, type Pillar, type Tone } from "../data/valueMatrixData";

const NEUTRAL = { label: "Verdict pending", tone: "neutral" as Tone };

type Price = { amount: number; config?: string; asOf?: string; seller?: string };
const priceOf = (d: any, region: RegionId): Price | null => d?.prices?.[region] ?? null;

function delta(base: any, other: any, region: RegionId) {
  const a = priceOf(base, region);
  const b = priceOf(other, region);
  if (!a || !b) return null;
  const diff = a.amount - b.amount;
  const lower = Math.min(a.amount, b.amount) || 1;
  return { a, b, diff, pct: Math.round((Math.abs(diff) / lower) * 100), sameConfig: (a.config ?? "") === (b.config ?? "") };
}

const sub = (title: string, body: string, open = false) =>
  `<details class="vm-sub"${open ? " open" : ""}><summary>${title}</summary><div class="vm-sub-b">${body}</div></details>`;

const tone = (n: number) => (n >= 7.5 ? "hi" : n >= 5 ? "mid" : "lo");
const track = (label: string, n: number, who = "") =>
  `<div class="vm-row">${who ? `<span class="vm-who">${esc(who)}</span>` : ""}<div class="vm-track" role="img" aria-label="${esc(label)}: ${n} out of 10"><span class="vm-fill vm-fill--${tone(n)}" style="width:${Math.round(n * 10)}%"></span></div><span class="vm-val">${n.toFixed(1)}/10</span></div>`;

export function gauge(score: number | null) {
  const C = 2 * Math.PI * 50;
  const on = score !== null;
  return `<svg class="vm-gauge${on ? "" : " vm-gauge--off"}" viewBox="0 0 120 120" role="img" aria-label="${on ? `Score ${score} out of 100` : "Score not published yet"}">
    <circle class="vm-g-bg" cx="60" cy="60" r="50"></circle>
    ${on ? `<circle class="vm-g-fg" cx="60" cy="60" r="50" stroke-dasharray="${((score as number) / 100) * C} ${C}" transform="rotate(-90 60 60)"></circle>` : ""}
    <text x="60" y="${on ? 64 : 62}" text-anchor="middle" class="vm-g-n">${on ? score : "—"}</text>
    <text x="60" y="${on ? 82 : 80}" text-anchor="middle" class="vm-g-s">${on ? "out of 100" : "not scored"}</text>
  </svg>`;
}

function crux(status: { label: string; tone: Tone }, headline: string, headSub: string, line: string, chips: string[]) {
  return `
    <section class="vm-crux" aria-label="Value Matrix summary">
      <p class="vm-status vm-status--${status.tone}"><span>STATUS</span> ${esc(status.label)}</p>
      <div class="vm-head"><strong>${headline}</strong><span>${headSub}</span></div>
      <p class="vm-line">${esc(line)}</p>
      <ul class="vm-chips">${chips.map((c) => `<li>${c}</li>`).join("")}</ul>
    </section>`;
}

// ---------------------------------------------------------------- upgrade matrix

export function buildUpgradeMatrix(o: { model: any; prev: any | null; set: any | null; region: RegionId }): string {
  const { model, prev, set, region } = o;
  if (!model) return "";
  const country = regionInfo(region).label;
  if (!prev) {
    return `<div class="vm"><p>The Value Matrix needs a predecessor to compare against, and none is catalogued yet.</p></div>`;
  }

  const entry = upgradeMatrices.find((e) => e.from === prev.id && e.to === model.id);
  const pub = !!entry?.published;
  const t = { improved: 0, unchanged: 0, regressed: 0, unverified: 0 } as Record<string, number>;
  set?.rows?.forEach((r: any) => t[r.status]++);
  const d = delta(model, prev, region);

  const costHead = d
    ? `${d.diff >= 0 ? "+" : "−"}${esc(safeMoney(region, Math.abs(d.diff)))}`
    : "Price not verified";
  const costSub = d
    ? d.diff === 0 ? "Same verified price" : `${d.pct}% ${d.diff > 0 ? "more" : "less"} than the ${esc(prev.name)}`
    : `for ${esc(country)}`;

  const status = pub && entry?.status ? entry.status : NEUTRAL;
  const techText = set
    ? `${t.improved} improved · ${t.regressed} regressed · ${t.unverified} unverified`
    : "No verified comparison yet";
  const line = pub && entry?.summary
    ? entry.summary
    : "The technology measure and the cost measure are shown separately. A combined verdict is published only when both have enough evidence.";
  const chips = [
    `<span>Technology</span> ${esc(techText)}`,
    `<span>Cost</span> ${d ? `${costHead} (${d.pct}%)` : `Awaiting verified prices`}`,
    `<span>Score</span> ${pub && entry?.score != null ? `${entry.score}/100` : "Not scored yet"}`,
  ];

  const price = d
    ? `<div class="tbl-wrap"><table class="tbl"><tbody>
        <tr><td>Selected: ${esc(model.name)}</td><td>${esc(safeMoney(region, d.a.amount))} <small>${esc(d.a.config ?? "")} · ${esc(d.a.asOf ?? "")}</small></td></tr>
        <tr><td>Previous: ${esc(prev.name)}</td><td>${esc(safeMoney(region, d.b.amount))} <small>${esc(d.b.config ?? "")} · ${esc(d.b.asOf ?? "")}</small></td></tr>
        <tr><td>Difference</td><td><strong>${costHead}</strong> <small>${costSub}</small></td></tr>
      </tbody></table></div>
      ${d.sameConfig ? "" : `<p class="flow-note">The two prices are for different configurations. Compare like with like before deciding.</p>`}`
    : `<p><strong>Not assessed.</strong> Upgrade Value depends on verified prices in your country (${esc(country)}) for the exact configuration, seller and date. We hold no verified price for ${esc(!priceOf(model, region) ? model.name : prev.name)} there yet, and we do not estimate prices.</p>`;

  const pillars = (entry?.pillars ?? []).map(
    (p: Pillar) => `<li class="vm-pil"><div class="vm-pil-h"><strong>${esc(p.label)}</strong></div>${pub && p.score != null ? track(p.label, p.score) : ""}<p>${esc(p.note)}</p></li>`,
  ).join("");
  const scoreBody = `<div class="vm-score">${gauge(pub && entry?.score != null ? entry.score : null)}
      <div>${pillars ? `<ul class="vm-pils">${pillars}</ul>` : `<p>No editorial breakdown has been published for this pair yet.</p>`}</div></div>
      ${pub ? "" : `<p class="flow-note">Scores are prepared but not published until the scoring method is validated.</p>`}`;

  const verdict = pub && entry?.verdict
    ? `<p>${esc(entry.verdict)}</p>`
    : `<p>ONOCRA's editorial verdict for ${esc(prev.name)} → ${esc(model.name)} is not published yet. Use the technology and cost measures above, and check the exact configuration and price in your country first.</p>`;

  const method = `<p>Two separate measures, kept apart on purpose: <strong>Generational Leap</strong> (what genuinely changed, from the evidence rows) and <strong>Upgrade Value</strong> (verified price difference). The matrix plots a position only when both have enough evidence.</p>`;

  return `
    <div class="vm vm--upgrade">
      ${crux(status, costHead, costSub, line, chips)}
      <details class="vm-more">
        <summary><span>Show how this was worked out</span><small>price, score breakdown, verdict, method</small></summary>
        ${sub("1. Price calculator", price, true)}
        ${sub("2. Generational leap score", scoreBody)}
        ${sub("3. The verdict", verdict, true)}
        ${sub("4. How this is worked out", method)}
      </details>
    </div>`;
}

// ---------------------------------------------------------------- cross-brand matrix

export function crossPartners(model: any, devs: any[]) {
  return devs.filter((d) => d.brand !== model.brand && d.category === model.category);
}

function totals(entry: any) {
  const ps: Pillar[] = entry?.pillars ?? [];
  let a = 0, b = 0;
  for (const w of CROSS_WEIGHTS) {
    const p = ps.find((x) => x.id === w.id);
    if (!p || p.scoreA == null || p.scoreB == null) return null;
    a += w.weight * p.scoreA;
    b += w.weight * p.scoreB;
  }
  return { a: Math.round(a / 10), b: Math.round(b / 10) };
}

export function crossBody(o: { model: any; other: any; region: RegionId }): string {
  const { model, other, region } = o;
  const country = regionInfo(region).label;
  // entry may be stored either way round
  const direct = crossMatrices.find((e) => e.a === model.id && e.b === other.id);
  const flipped = crossMatrices.find((e) => e.a === other.id && e.b === model.id);
  const entry = direct ?? flipped;
  const swap = !direct && !!flipped; // entry's A is the other model
  const A = swap ? other : model;
  const B = swap ? model : other;
  const pub = !!entry?.published;
  const d = delta(A, B, region);
  const tot = pub ? totals(entry) : null;

  const premiumFor = d && d.diff !== 0 ? (d.diff > 0 ? A : B) : null;
  const costHead = d ? (d.diff === 0 ? "Same verified price" : `+${esc(safeMoney(region, Math.abs(d.diff)))}`) : "Price not verified";
  const costSub = d
    ? d.diff === 0 ? "" : `premium for ${esc(premiumFor!.name)} (${d.pct}% more)`
    : `for ${esc(country)}`;

  const status = pub && entry?.status ? entry.status : NEUTRAL;
  const line = pub && entry?.summary
    ? entry.summary
    : "Different platforms are compared on hardware value, performance, switching friction and price. A verdict is published only when the evidence supports it.";
  const chips = [
    `<span>${esc(A.brand)}</span> ${priceOf(A, region) ? esc(safeMoney(region, priceOf(A, region)!.amount)) : "Not verified"}`,
    `<span>${esc(B.brand)}</span> ${priceOf(B, region) ? esc(safeMoney(region, priceOf(B, region)!.amount)) : "Not verified"}`,
    `<span>Score</span> ${tot ? `${esc(A.brand)} ${tot.a} · ${esc(B.brand)} ${tot.b}` : "Not scored yet"}`,
  ];

  const price = d
    ? `<div class="tbl-wrap"><table class="tbl"><tbody>
        <tr><td>${esc(A.name)}</td><td>${esc(safeMoney(region, d.a.amount))} <small>${esc(d.a.config ?? "")} · ${esc(d.a.asOf ?? "")}</small></td></tr>
        <tr><td>${esc(B.name)}</td><td>${esc(safeMoney(region, d.b.amount))} <small>${esc(d.b.config ?? "")} · ${esc(d.b.asOf ?? "")}</small></td></tr>
        <tr><td>Difference</td><td><strong>${costHead}</strong> <small>${costSub}</small></td></tr>
      </tbody></table></div>
      ${d.sameConfig ? "" : `<p class="flow-note">The two prices are for different configurations (for example storage). Compare like with like.</p>`}`
    : `<p><strong>Not assessed.</strong> A fair price comparison needs verified prices for both devices in ${esc(country)}. We hold none for ${esc(!priceOf(A, region) ? A.name : B.name)} yet, and we do not estimate prices.</p>`;

  const pills = CROSS_WEIGHTS.map((w) => {
    const p = entry?.pillars.find((x) => x.id === w.id);
    const scored = pub && p && p.scoreA != null && p.scoreB != null;
    return `<li class="vm-pil"><div class="vm-pil-h"><strong>${esc(w.label)}</strong><small>${w.weight}% of score</small></div>
      ${scored ? track(w.label, p!.scoreA!, A.brand) + track(w.label, p!.scoreB!, B.brand) : ""}
      <p>${esc(p?.note ?? "Not assessed yet.")}</p></li>`;
  }).join("");
  const scoreBody = `<ul class="vm-pils">${pills}</ul>
    ${tot ? `<p class="vm-tot"><strong>${esc(A.brand)} ${tot.a}/100</strong> · <strong>${esc(B.brand)} ${tot.b}/100</strong></p>` : `<p class="flow-note">Scores are prepared but not published until the scoring method is validated.</p>`}`;

  const verdict = pub && entry?.verdict
    ? `<p>${esc(entry.verdict)}</p>`
    : `<p>ONOCRA's editorial verdict for ${esc(A.name)} and ${esc(B.name)} is not published yet. Weigh the price difference against how deeply you are tied to your current platform.</p>`;

  const method = `<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Factor</th><th>Weight</th><th>Evaluation logic</th></tr></thead><tbody>${CROSS_WEIGHTS.map(
    (w) => `<tr><td>${esc(w.label)}</td><td>${w.weight}%</td><td>${esc(w.logic)}</td></tr>`,
  ).join("")}</tbody></table></div>`;

  return `
    <div class="vm vm--cross">
      ${crux(status, costHead, costSub, line, chips)}
      <details class="vm-more">
        <summary><span>Show how this was worked out</span><small>price, factor breakdown, verdict, weights</small></summary>
        ${sub("1. Platform price calculator", price, true)}
        ${sub("2. Factor breakdown", scoreBody)}
        ${sub("3. The cross-brand verdict", verdict, true)}
        ${sub("4. Weighting formula", method)}
      </details>
    </div>`;
}

export function buildCrossBrandMatrix(o: { model: any; others: any[]; region: RegionId }): string {
  const { model, others, region } = o;
  if (!others.length) return "";
  const first = others[0];
  const select =
    others.length > 1
      ? `<label class="vm-pick">Compare ${esc(model.name)} with
          <select data-vm-partner>${others.map((d) => `<option value="${esc(d.id)}">${esc(d.name)}</option>`).join("")}</select></label>`
      : `<p class="vm-pick">Compared with ${esc(first.name)}</p>`;
  return `<div class="vm-cross">${select}<div class="vm-cross-body">${crossBody({ model, other: first, region })}</div></div>`;
}
