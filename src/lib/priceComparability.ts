/** ONOCRA price eligibility for genuine CURRENT upgrade calculations.
 * Historical launch MSRP, buyback, resale and unspecified prices are never
 * silently compared with current retail. Comparison requires matched storage,
 * condition, country/currency, new-retail channel and <=7-day observation gap.
 */
import type { RegionId } from './reviewFlow';
export type RetailPrice = { amount:number; config:string; asOf:string; seller:string; storage?:string; currency?:string; channel?:string; condition?:string; source?:string; confidence?:string };
const currency:Record<string,string>={US:'USD',UK:'GBP',DE:'EUR',FR:'EUR',IT:'EUR',ES:'EUR'};
const gb=(v:string)=>{const m=v.match(/(\d+(?:\.\d+)?)\s*(TB|GB)/i);return m?Number(m[1])*(m[2].toUpperCase()==='TB'?1024:1):null;};
const day=(v:string)=>/^\d{4}-\d{2}-\d{2}$/.test(v)?Date.parse(`${v}T00:00:00Z`):NaN;
export function comparableRetailPrices(a:any,b:any,region:RegionId):{a:RetailPrice;b:RetailPrice;diff:number;pct:number}|null{
  const x=a?.prices?.[region] as RetailPrice|undefined, y=b?.prices?.[region] as RetailPrice|undefined;
  if(!x||!y||![x.amount,y.amount].every(n=>Number.isFinite(n)&&n>0))return null;
  if(x.channel!=='retailer-new'||y.channel!=='retailer-new')return null;
  if(x.confidence!=='high'||y.confidence!=='high')return null;
  if(x.condition!=='new'||y.condition!=='new')return null;
  if(x.currency!==currency[region]||y.currency!==currency[region])return null;
  const xa=gb(x.storage||x.config||''),ya=gb(y.storage||y.config||'');
  if(xa==null||ya==null||xa!==ya)return null;
  const da=day(x.asOf),db=day(y.asOf);
  if(!Number.isFinite(da)||!Number.isFinite(db)||Math.abs(da-db)>7*86400000)return null;
  if(!/^https:\/\//i.test(x.source||'')||!/^https:\/\//i.test(y.source||''))return null;
  const diff=x.amount-y.amount;
  return {a:x,b:y,diff,pct:Math.round(Math.abs(diff)/Math.min(x.amount,y.amount)*100)};
}
export const pricingCaveat='A comparable current retail price requires the same region, currency, storage, new condition and price channel, with observations no more than seven days apart. Historical MSRP and used-phone values are not substitute current retail prices.';
