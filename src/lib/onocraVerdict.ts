// "The ONOCRA final verdict": a recommendation index you can read in five seconds, then five folded
// panels: Optimized need, Opportunity window, Cost-benefit, Risk factors, Actionable verdict.
// Built from verified data first; editorial content from src/data/onocraVerdictData.ts is added only
// when an entry is `published: true`.

import { esc, money, regionInfo } from "./reviewFlow";
import { gauge } from "./valueMatrix";
import { finalVerdicts, type Bullet, type Kind, type Tone } from "../data/onocraVerdictData";

export type FinalCtx = {
  model: any;
  other: any | null; // predecessor (upgrade view) or comparison partner (across brands)
  devs: any[];
  region: string;
  recommendation: string; // the page's existing recommendation text
  summary: string; // model.summary
  cta: string; // buying / researching hint
  modeLabel?: string;
  whoLabel?: string;
  intent?: string;
  prioLabels: string[];
  fit?: { label: string; evidenced: number; total: number } | null;
  tradeoffs: string[];
  leap?: { improved: number; unchanged: number; regressed: number; unverified: number } | null;
};

const TAG: Record<Kind, string> = { forecast: "Editorial forecast", estimate: "Editorial estimate", claim: "Unverified claim" };

const PANELS = [
  { id: "need", icon: "🎯", title: "Optimized need", sub: "Target audience" },
  { id: "opportunity", icon: "📈", title: "Opportunity window", sub: "Market timing" },
  { id: "cost", icon: "⚖️", title: "Cost-benefit analysis", sub: "Value deep-dive" },
  { id: "risk", icon: "⚠️", title: "Risk factors and ecosystem lock-in", sub: "Migration friction" },
  { id: "verdict", icon: "🏁", title: "Actionable verdict", sub: "The final push" },
] as const;

const price = (d: any, region: string) => d?.prices?.[region] ?? null;

function tokens(a: any, b: any, region: string): Record<string, string> {
  const pa = price(a, region), pb = price(b, region);
  const unverified = "a price we have not verified";
  let premium = "price", extra = "the extra cost";
  if (pa && pb && pa.amount !== pb.amount) {
    const diff = Math.abs(pa.amount - pb.amount);
    const pct = Math.round((diff / Math.min(pa.amount, pb.amount)) * 100);
    premium = money(region, diff);
    extra = `a ${pct}% cost premium`;
  }
  return {
    nameA: a?.name ?? "the first model",
    nameB: b?.name ?? "the second model",
    priceA: pa ? money(region, pa.amount) : unverified,
    priceB: pb ? money(region, pb.amount) : unverified,
    premium,
    extra,
  };
}
const fill = (s: string, t: Record<string, string>) => s.replace(/\{(\w+)\}/g, (_, k) => t[k] ?? "");

const li = (b: Bullet, t: Record<string, string> | null) => {
  const lead = b.lead ? (t ? fill(b.lead, t) : b.lead) : "";
  const text = t ? fill(b.text, t) : b.text;
  return `<li>${lead ? `<strong>${esc(lead)}</strong> ` : ""}${esc(text)}${b.kind ? ` <span class="fv-tag" title="${esc(TAG[b.kind])}">${esc(TAG[b.kind])}</span>` : ""}</li>`;
};
const list = (items: string[]) => (items.length ? `<ul class="fv-list">${items.join("")}</ul>` : "");
const plain = (lead: string, text: string) => `<li><strong>${esc(lead)}</strong> ${esc(text)}</li>`;

export function buildFinalVerdict(c: FinalCtx): string {
  const { model, other, region } = c;
  const country = regionInfo(region).label;

  // editorial entry for this exact pair, in either order
  const entry = other
    ? finalVerdicts.find((e) => e.pair.includes(model.id) && e.pair.includes(other.id))
    : undefined;
  const pub = !!entry?.published;
  const A = entry ? (c.devs.find((d) => d.id === entry.pair[0]) ?? model) : model;
  const B = entry ? (c.devs.find((d) => d.id === entry.pair[1]) ?? other) : other;
  const t = tokens(A, B, region);
  const ed = (items: Bullet[] | undefined) => (pub && items ? items.map((b) => li(b, t)) : []);

  // ---- 1. Optimized need: the visitor's own answers, then the editorial profile
  const mine: string[] = [];
  if (c.whoLabel) mine.push(plain("Who it is for:", c.whoLabel));
  if (c.modeLabel) mine.push(plain("Your route:", c.modeLabel));
  mine.push(plain("Country:", country));
  if (c.intent) mine.push(plain("Your plan:", c.intent === "buying" ? "Planning to buy" : "Researching"));
  if (c.prioLabels.length) mine.push(plain("Your priorities, in order:", c.prioLabels.map((p, i) => `${i + 1}. ${p}`).join("  ")));
  if (c.fit) mine.push(plain("Your match:", `${c.fit.label} (${c.fit.evidenced} of ${c.fit.total} priorities have verified ratings).`));
  const need = list([...mine, ...ed(entry?.need)]);

  // ---- 2. Opportunity window: verified prices only; forecasts only when published
  const own = price(model, region), oth = other ? price(other, region) : null;
  const pr = (d: any, p: any) =>
    p
      ? plain(`${d.name}:`, `${money(region, p.amount)} (${p.config ?? "configuration not stated"}, ${p.seller ?? "seller not stated"}, as of ${p.asOf ?? "date not stated"}).`)
      : plain(`${d.name}:`, `no verified price for ${country} yet. We do not estimate prices.`);
  const opp = list([pr(model, own), ...(other ? [pr(other, oth)] : []), plain("Timing:", c.cta), ...ed(entry?.opportunity)]);

  // ---- 3. Cost-benefit: verified difference and leap tally; link to the matrix
  const cb: string[] = [];
  if (other && own && oth && own.amount !== oth.amount) {
    const diff = Math.abs(own.amount - oth.amount);
    const pct = Math.round((diff / Math.min(own.amount, oth.amount)) * 100);
    const dearer = own.amount > oth.amount ? model : other;
    cb.push(plain("Verified price difference:", `${money(region, diff)} (${pct}% more) for the ${dearer.name}.`));
  } else {
    cb.push(plain("Price difference:", "not assessed until verified prices exist for both devices in your country."));
  }
  if (c.leap) cb.push(plain("Technical progress:", `${c.leap.improved} improved, ${c.leap.unchanged} unchanged, ${c.leap.regressed} regressed, ${c.leap.unverified} unverified.`));
  cb.push(plain("Detail:", "the Value Matrix and the Generational Leap sections below show the working."));
  const cost = list([...cb, ...ed(entry?.cost)]);

  // ---- 4. Risk: the model's own trade-offs, a platform note when brands differ, then editorial risks
  const rk = c.tradeoffs.map((x) => `<li>${esc(x)}</li>`);
  if (other && other.brand && other.brand !== model.brand) {
    rk.push(plain("Switching platforms:", "check accessory compatibility, cloud photo and file migration, and the apps you rely on before moving between brands."));
  }
  const risk = list([...rk, ...ed(entry?.risk)]);

  // ---- 5. Actionable verdict: the page's recommendation, then buy-if guidance when published
  const act = list([
    `<li>${esc(c.recommendation)}</li>`,
    ...(c.summary ? [`<li>${esc(c.summary)}</li>`] : []),
    ...ed(entry?.verdict),
  ]);

  const bodies: Record<string, string> = { need, opportunity: opp, cost, risk, verdict: act };

  // ---- recommendation index
  const tone: Tone = pub && entry ? entry.action.tone : "neutral";
  const pick = pub && entry?.action.pick ? c.devs.find((d) => d.id === entry.action.pick) : null;
  const actionLabel = pub && entry ? entry.action.label : "Verdict pending";
  const quote = pub && entry ? fill(entry.quote, t) : c.recommendation;

  return `
    <section class="fv" aria-label="The ONOCRA final verdict">
      <p class="fv-bar"><span aria-hidden="true">⚖️ </span>The ONOCRA final verdict</p>

      <div class="fv-index">
        <div class="fv-g">${gauge(pub && entry?.score != null ? entry.score : null)}</div>
        <div class="fv-main">
          <p class="fv-kicker"><span aria-hidden="true">📊 </span>Final recommendation index</p>
          <p class="fv-action fv-action--${tone}"><span><span aria-hidden="true">🏆 </span>ACTION</span> ${esc(actionLabel)}${pick ? ` <small>(Buy ${esc(pick.name)})</small>` : ""}</p>
          <blockquote class="fv-quote">${esc(quote)}</blockquote>
          ${pub ? "" : `<p class="fv-pend">Score and action are published once the scoring method is validated. The panels below already use your answers and verified data.</p>`}
        </div>
      </div>

      <div class="fv-tools">
        <button type="button" class="lr-btn" data-fv="open">Expand all</button>
        <button type="button" class="lr-btn" data-fv="close">Collapse all</button>
      </div>

      <div class="fv-panels">
        ${PANELS.map(
          (p) => `
        <details class="fv-p">
          <summary><span class="fv-ico" aria-hidden="true">${p.icon}</span><strong>${esc(p.title)}</strong><span class="fv-sub">(${esc(p.sub)})</span></summary>
          <div class="fv-body">${bodies[p.id]}</div>
        </details>`,
        ).join("")}
      </div>

      <p class="flow-note">ONOCRA stands for Optimized Need, Opportunity, Cost-benefit, Risk and Actionable verdict. Forecasts and estimates are labelled; prices are shown only when verified.</p>
    </section>`;
}
