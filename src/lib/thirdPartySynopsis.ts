import { esc } from './reviewFlow';
import { PUBLISHERS, thirdPartyReviews, type PublisherId, type ReviewRegion, type ThirdPartyReview } from '../data/thirdPartySynopsisData';

export interface ThirdPartySynopsisContext {
  modelIds: string[]; // primary first, then 0–2 comparison models
  devices: Array<{ id: string; name: string; brand: string }>;
  region: string; // country/market from Step 4: US, UK, DE, FR, IT, ES
  route: 'explore' | 'choose';
}
const safeUrl = (url: string) => {
  try { const u = new URL(url); return u.protocol === 'https:' ? u.href : null; } catch { return null; }
};
const regionalGroup = (region: string): ReviewRegion => region === 'US' ? 'US' : 'EU';
const allowed = (group: ReviewRegion): PublisherId[] => group === 'US'
  ? ['consumer-reports', 'pcmag'] : ['which', 'notebookcheck'];
const validReview = (r: ThirdPartyReview): boolean => r.status === 'verified'
  && !!safeUrl(r.articleUrl)
  && /^\d{4}-\d{2}-\d{2}$/.test(r.publishedOn)
  && /^\d{4}-\d{2}-\d{2}$/.test(r.checkedOn)
  && !!r.variant.trim() && !!r.articleTitle.trim()
  && r.findings.length > 0;
const publisherCard = (id: PublisherId, items: ThirdPartyReview[], deep: boolean) => {
  const p = PUBLISHERS[id];
  const links = items.map(r => {
    const href = safeUrl(r.articleUrl)!;
    const findings = r.findings.map(f => `<li><strong>${esc(f.subject)}:</strong> ${esc(f.finding)}</li>`).join('');
    return `<article class="tp-article"><h4>${esc(r.articleTitle)}</h4>
      <p class="tp-meta">${esc(r.variant)} · Published ${esc(r.publishedOn)} · Checked ${esc(r.checkedOn)}</p>
      <ul>${deep ? findings : r.findings.slice(0,2).map(f => `<li><strong>${esc(f.subject)}:</strong> ${esc(f.finding)}</li>`).join('')}</ul>
      ${deep && r.methodologyNote ? `<p class="tp-meta">Test context: ${esc(r.methodologyNote)}</p>` : ''}
      <a href="${esc(href)}" target="_blank" rel="noopener noreferrer">Read original review ↗</a>
    </article>`;
  }).join('');
  return `<section class="tp-publisher"><h3>${esc(p.name)}</h3>${links || '<p class="tp-unavailable">No source-verified review synopsis available for the selected models yet.</p>'}</section>`;
};
/** HTML for the INSIDE of Step 5's Independent Reviews expandable panel.
 * The outer heading, 2–3-line introduction and details toggle belong to Step 5.
 */
export function buildThirdPartySynopsis(ctx: ThirdPartySynopsisContext): string {
  const group = regionalGroup(ctx.region);
  const ids = allowed(group);
  const models = ctx.modelIds.slice(0,3).filter((id,i,a)=>a.indexOf(id)===i);
  const matched = thirdPartyReviews.filter(r => models.includes(r.deviceId) && ids.includes(r.publisher) && validReview(r));
  const coverage = new Set(matched.map(r=>r.deviceId)).size;
  const byModel = models.map(id => {
    const device = ctx.devices.find(d=>d.id===id);
    const reviews = matched.filter(r=>r.deviceId===id);
    return `<div class="tp-model"><h3>${esc(device ? `${device.brand} ${device.name}` : id)}</h3>
      ${reviews.length ? ids.map(pub=>publisherCard(pub,reviews.filter(r=>r.publisher===pub),ctx.route==='explore')).join('')
        : '<p class="tp-unavailable">Independent article-level evidence has not yet been verified for this model. ONOCRA will not infer a reviewer verdict.</p>'}
    </div>`;
  }).join('');
  return `<div class="tp-synopsis">
    <p class="tp-summary">${group === 'US' ? 'US research panel' : 'European research panel'}: ${ids.map(id=>esc(PUBLISHERS[id].name)).join(' + ')}. Source-verified coverage: ${coverage} of ${models.length} selected models.</p>
    <p class="tp-caution">Publisher findings are attributed summaries, not ONOCRA laboratory tests or an endorsement. Results may differ by model variant, market and testing method. Missing coverage is not a negative product rating.</p>
    ${byModel || '<p class="tp-unavailable">No models selected.</p>'}
  </div>`;
}
/** Add to Step 5 styles once; classes are namespaced to avoid collisions. */
export const thirdPartySynopsisCss = `
.tp-synopsis{font-size:.91rem;color:#315441;line-height:1.55}
.tp-summary{font-weight:700;margin:.2rem 0 .55rem}
.tp-caution,.tp-meta{color:#61776a;font-size:.8rem}
.tp-model{border-top:1px solid #d5e2d7;padding:.8rem 0}
.tp-model>h3{font:700 1.04rem Georgia,serif;margin:0 0 .6rem}
.tp-publisher{background:#fffdf8;border:1px solid #d7e5d8;border-radius:12px;padding:.7rem;margin:.5rem 0}
.tp-publisher>h3{font-size:.95rem;margin:0 0 .35rem}
.tp-article{padding:.4rem 0}.tp-article h4{margin:0;font-size:.9rem}
.tp-article ul{margin:.4rem 0;padding-left:1.25rem}
.tp-article a{color:#276a43;text-decoration:underline}
.tp-unavailable{font-size:.85rem;color:#65796b;margin:.3rem 0}
`;
