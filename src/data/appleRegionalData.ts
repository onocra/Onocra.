/** ONOCRA regional evidence layer. Never display unverified legacy prices as confirmed. */
export type Region = 'US' | 'UK' | 'DE';
export type Evidence = { value: string; source: string; checkedAt: string; confidence: 'high' | 'medium' | 'low'; note?: string };
export type PriceEvidence = Evidence & { storage: string; currency: 'USD' | 'GBP' | 'EUR'; channel: 'official-msrp' | 'retailer-new' | 'completed-resale' | 'dealer-buyback' | 'listing'; condition?: string };
export type RegionalRecord = {
  modelNumber?: Evidence;
  availability?: Evidence;
  sim?: Evidence;
  network?: Evidence;
  specifications?: Partial<Record<'display' | 'chipset' | 'ram' | 'storage' | 'cameras' | 'battery' | 'charging' | 'software' | 'dimensions' | 'connectivity', Evidence>>;
  prices?: PriceEvidence[];
};
export type ModelResearch = { common?: RegionalRecord['specifications']; regions?: Partial<Record<Region, RegionalRecord>> };

const apple15 = 'https://www.apple.com/newsroom/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/';
const apple16uk = 'https://www.apple.com/uk/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/';
const apple17pro = 'https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/';
const e = (value: string, source: string, note?: string): Evidence => ({ value, source, checkedAt: '2026-10-13', confidence: 'high', ...(note ? {note} : {}) });
const msrp = (value: string, storage: string, currency: PriceEvidence['currency'], source: string, note?: string): PriceEvidence => ({...e(value,source,note), storage, currency, channel:'official-msrp'});
const base = (chipset:string, display:string, cameras:string, storage:string, source:string): ModelResearch['common'] => ({chipset:e(chipset,source),display:e(display,source),cameras:e(cameras,source),storage:e(storage,source)});
/** Official Apple launch evidence only. Historic launch MSRP is NOT a current retail offer. */
export const appleRegionalData: Record<string, ModelResearch> = {
 'iphone15-standard': {common:base('A16 Bionic','6.1-inch Super Retina XDR','48MP main + ultra wide; 2x optical-quality option','128GB / 256GB / 512GB',apple15),regions:{US:{prices:[msrp('$799 starting price','128GB','USD',apple15,'2023 launch MSRP; US carrier-activation pricing caveat applies')]}}},
 'iphone15-plus': {common:base('A16 Bionic','6.7-inch Super Retina XDR','48MP main + ultra wide; 2x optical-quality option','128GB / 256GB / 512GB',apple15),regions:{US:{prices:[msrp('$899 starting price','128GB','USD',apple15,'2023 launch MSRP; US carrier-activation pricing caveat applies')]}}},
 'iphone16-standard': {common:base('A18','6.1-inch display','48MP Fusion main + ultra wide; 2x optical-quality option','128GB / 256GB / 512GB',apple16uk),regions:{UK:{prices:[msrp('£799 starting price','128GB','GBP',apple16uk,'2024 launch MSRP, not current retail')]}}},
 'iphone16-plus': {common:base('A18','6.7-inch display','48MP Fusion main + ultra wide; 2x optical-quality option','128GB / 256GB / 512GB',apple16uk),regions:{UK:{prices:[msrp('£899 starting price','128GB','GBP',apple16uk,'2024 launch MSRP, not current retail')]}}},
 'iphone17-pro': {common:{chipset:e('A19 Pro',apple17pro),cameras:e('Three 48MP Fusion rear cameras: main, ultra wide, telephoto',apple17pro)},regions:{US:{prices:[msrp('$1,099 starting price','Base storage (see Apple source)','USD',apple17pro,'2025 launch MSRP; storage not independently mapped in this pass')]}}},
 'iphone17-promax': {common:{chipset:e('A19 Pro',apple17pro),cameras:e('Three 48MP Fusion rear cameras: main, ultra wide, telephoto',apple17pro)},regions:{US:{prices:[msrp('$1,199 starting price','Base storage (see Apple source)','USD',apple17pro,'2025 launch MSRP; storage not independently mapped in this pass')]}}},
};
export const regions: { code: Region; label: string; currency: string }[] = [
  { code: 'US', label: 'United States', currency: 'USD' },
  { code: 'UK', label: 'United Kingdom', currency: 'GBP' },
  { code: 'DE', label: 'Germany', currency: 'EUR' },
];
