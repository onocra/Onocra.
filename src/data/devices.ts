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
  image?: string;
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
  prices: Partial<Record<RegionId, {
    amount: number; config: string; seller: string; asOf: string;
    storage?: string; currency?: string; channel?: string; condition?: string;
    source?: string; confidence?: 'high' | 'medium' | 'low';
  }>>;
  // Complete regional offers and market-variant info (not all usable in VM).
  regionalOffers?: Partial<Record<RegionId, { value:string; storage:string; channel:string; currency:string; checkedAt:string; source:string; confidence:string; condition?:string }[]>>;
  regionalVariants?: Partial<Record<RegionId, { modelNumber?:string; sim?:string; availability?:string; network?:string }>>;
  regionalSpecs?: Partial<Record<RegionId, Device['specs']>>;
  status: "specimen" | "reviewed";
}

const SAMSUNG = "Samsung (manufacturer research reference; exact source URL pending)";

const specimenDevices: Device[] = [
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
  confidence: "low" | "medium" | "high";
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


// ---------------------------------------------------------------------------
// Unified catalogue bridge: Apple gallery evidence -> Steps 4 and 5.
// The old phones81.master.json import is intentionally removed: the file is
// absent in the build log, and the direct static import caused TS2307.
// A legacy master catalogue can still be used *if present* via Vite's optional
// eager glob. Other brands' records stay separate from the 20 Apple records.
// ---------------------------------------------------------------------------
import { applePhones } from './applePhones';
import { appleRegionalData, type Evidence, type PriceEvidence } from './appleRegionalData';

const unknownSpec = (): Spec => ({ value:'Not verified', source:'Evidence not yet available', kind:'unverified' });
const readSpec = (e: Evidence | undefined): Spec => {
  if (!e?.value || !/^https:\/\//i.test(e.source ?? '')) return unknownSpec();
  const official = /(^|\.)apple\.com\//i.test(new URL(e.source).hostname + '/');
  return { value:e.value, source:e.source, kind:official ? 'manufacturer' : 'independent' };
};
const commonOrLocal = (slug:string, region:'US'|'UK'|'DE', key:string): Spec => {
  const record = appleRegionalData[slug];
  const local = record?.regions?.[region]?.specifications as Record<string,Evidence> | undefined;
  const common = record?.common as Record<string,Evidence> | undefined;
  return readSpec(local?.[key] ?? common?.[key]);
};
const evidenceNum = (s:Spec, rx:RegExp) => {
  if (s.kind === 'unverified') return s;
  const match=s.value.match(rx);
  return match ? {...s,numeric:Number(match[1])} : s;
};
const storageGB = (v:string) => {
  const all = [...v.matchAll(/(\d+(?:\.\d+)?)\s*(TB|GB)/ig)].map(m => Number(m[1])*(m[2].toUpperCase()==='TB'?1024:1));
  return all.length ? Math.min(...all) : undefined;
};
const appleSpecSet = (slug:string, region:'US'|'UK'|'DE') => {
  const display = evidenceNum(commonOrLocal(slug,region,'display'),/(\d+(?:\.\d+)?)\s*(?:-inch|inch|\")/i);
  const battery = evidenceNum(commonOrLocal(slug,region,'battery'),/(\d[\d,]*)\s*mAh/i);
  const ram = evidenceNum(commonOrLocal(slug,region,'ram'),/(\d+)\s*GB/i);
  const storage=commonOrLocal(slug,region,'storage');
  const base=storageGB(storage.value);
  if(base && storage.kind!=='unverified')storage.numeric=base;
  const refreshRaw=commonOrLocal(slug,region,'display');
  const refresh=evidenceNum(refreshRaw,/(\d{2,3})\s*Hz/i);
  if(refresh.numeric!=null)refresh.value=`${refresh.numeric} Hz (from display specification)`;
  else {refresh.value='Not separately verified';refresh.kind='unverified';}
  // Charging evidence often combines wired and wireless ratings: never call
  // a wireless wattage the *wired* charging rate.
  const charging=commonOrLocal(slug,region,'charging');
  // Until the GL scoring rules are validated, never feed automatically
  // parsed numerical values to a generic bigger-is-better comparison.
  for(const v of [display,battery,ram,storage,refresh]) delete v.numeric;
  return { display,battery,cameras:commonOrLocal(slug,region,'cameras'),refresh,ram,storage,charging };
};
const parsePrice = (p:PriceEvidence):number|null => {
  // PriceEvidence.value can include localized thousands separators.
  const clean=p.value.replace(/[^0-9,.]/g,'').trim();
  const dec = /[.,]\d{2}$/.test(clean) ? clean.slice(-3,-2) : '';
  const amount=Number(dec ? clean.slice(0,-3).replace(/[.,]/g,'')+'.'+clean.slice(-2) : clean.replace(/[.,]/g,''));
  return Number.isFinite(amount)&&amount>0 ? amount : null;
};
const pickRetail = (records:PriceEvidence[], region:'US'|'UK'|'DE') => {
  const currency={US:'USD',UK:'GBP',DE:'EUR'}[region];
  const eligible=records.filter(p => p.channel==='retailer-new' && p.currency===currency && p.confidence==='high' && !!p.source && !!p.checkedAt && parsePrice(p)!=null);
  // Prefer a region's lowest listed new-storage tier, not the lowest amount
  // across disparate configurations; still treat as a dated retail snapshot.
  eligible.sort((a,b)=>(storageGB(a.storage)??1e9)-(storageGB(b.storage)??1e9)||b.checkedAt.localeCompare(a.checkedAt));
  const p=eligible[0];
  if(!p)return undefined;
  const amount=parsePrice(p)!;
  return {amount,config:p.storage,seller:new URL(p.source).hostname.replace(/^www\./,''),asOf:p.checkedAt,storage:p.storage,currency:p.currency,channel:p.channel,condition:'new',source:p.source,confidence:p.confidence};
};
const regionIds=['US','UK','DE'] as const;
const appleDevices:Device[]=applePhones.map(phone=>{
  const record=appleRegionalData[phone.slug];
  const regOffers={} as NonNullable<Device['regionalOffers']>;
  const regVariants={} as NonNullable<Device['regionalVariants']>;
  const prices:Device['prices']={};
  const regionalSpecs:NonNullable<Device['regionalSpecs']>={};
  for(const region of regionIds){
    const r=record?.regions?.[region];
    regionalSpecs[region]=appleSpecSet(phone.slug,region);
    if(r?.prices?.length){
      regOffers[region]=r.prices.map(p=>({value:p.value,storage:p.storage,channel:p.channel,currency:p.currency,checkedAt:p.checkedAt,source:p.source,confidence:p.confidence,condition:p.condition}));
      const retail=pickRetail(r.prices,region);if(retail)prices[region]=retail;
    }
    if(r)regVariants[region]={modelNumber:r.modelNumber?.value,sim:r.sim?.value,availability:r.availability?.value,network:r.network?.value};
  }
  const familyName=phone.family.toLowerCase().replace(/[^a-z0-9]+/g,'-');
  return {
    id:phone.slug,brand:'Apple',name:phone.name,category:'phones',year:phone.year,
    family:`apple-iphone-${familyName}`,generation:phone.year,
    image:phone.image,
    summary:'Evidence-backed Apple technical profile; regional retail and resale evidence are assessed separately.',
    specs:appleSpecSet(phone.slug,'US'),fit:{},strengths:[],tradeoffs:[],prices,
    regionalOffers:regOffers,regionalVariants:regVariants,regionalSpecs,
    status:'specimen',
  } as Device;
});

// Non-Apple catalogue preservation. The glob accepts a missing file without
// breaking the build. If the JSON is added later, non-Apple rows load again.
// Existing Samsung research specimens remain available in the meantime.
const legacyFiles = import.meta.glob('./phones81.master.json',{eager:true,import:'default'}) as Record<string,any>;
const legacyRows:unknown=Object.values(legacyFiles)[0] ?? [];
const field=(specs:any,...names:string[]):Spec=>{
  for(const name of names){
    const item=specs?.[name];
    if(item?.verified===true && typeof item?.sourceUrl==='string' && /^https:\/\//.test(item.sourceUrl) && item.value!=null)
      return {value:String(item.value),source:item.sourceUrl,kind:'manufacturer'};
  }
  return unknownSpec();
};
const yearOf=(row:any)=>{
  if(Number.isInteger(row.year)&&row.year>=2000&&row.year<=2035)return row.year;
  const n=String(row.name??'');
  const iphone=n.match(/iPhone\s+(\d+)/i);if(iphone)return 2007+Number(iphone[1]);
  const galaxy=n.match(/Galaxy\s+S(\d+)/i);if(galaxy)return 2000+Number(galaxy[1]);
  const pixel=n.match(/Pixel\s+(\d+)/i);if(pixel)return 2015+Number(pixel[1]);
  return 0;
};
const legacyDevices:Device[]=Array.isArray(legacyRows) ? legacyRows
  .filter((r:any)=>r&&r.brand&&r.name&&r.brand!=='Apple')
  .map((r:any)=>{
    const brand=String(r.brand),name=String(r.name),ms=r.manufacturerSpecs??{},year=yearOf(r);
    const samsung=name.match(/^Galaxy S(24|25|26)$/);
    const id=brand==='Samsung'&&samsung?`galaxy-s${samsung[1]}`:String(r.id??'');
    return {
      id,brand,name,category:'phones' as const,year,generation:year,
      family:brand==='Samsung'&&samsung?'samsung-galaxy-s':String(r.family||`${brand.toLowerCase()}-${name.toLowerCase().replace(/\d+/g,'').replace(/[^a-z]+/g,'-')}`),
      summary:'Source-attributed catalogue record. Prices and independent evidence may be incomplete.',
      specs:{display:field(ms,'display','screen'),battery:field(ms,'batteryCapacity','batteryMah','battery'),cameras:field(ms,'mainCamera','rearCameras','cameras'),refresh:field(ms,'refreshRate'),ram:field(ms,'ramGb','ram'),storage:field(ms,'storageGb','storage'),charging:field(ms,'chargingW','wiredCharging','charging')},
      fit:{},strengths:[],tradeoffs:[],prices:{},status:'specimen' as const,
    };
  }).filter((r:Device)=>r.id) : [];
const nonApple=legacyDevices.length?legacyDevices:specimenDevices;
export const devices:Device[]=[...appleDevices,...nonApple];
