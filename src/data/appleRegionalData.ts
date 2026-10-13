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
/** Populate verified research here; do not copy values from the legacy/unverified master. */
export const appleRegionalData: Record<string, ModelResearch> = {};
export const regions: { code: Region; label: string; currency: string }[] = [
  { code: 'US', label: 'United States', currency: 'USD' },
  { code: 'UK', label: 'United Kingdom', currency: 'GBP' },
  { code: 'DE', label: 'Germany', currency: 'EUR' },
];
