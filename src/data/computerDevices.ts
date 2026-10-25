import type { RegionId, PriorityId, DeviceKind } from "@/lib/computerReviewFlow";

export interface ComputerDevice {
  id: string;
  brand: string;
  name: string;
  device: Exclude<DeviceKind, "">;
  year?: number;
  releaseDate?: string;
  status: "published" | "draft" | "forthcoming" | "discontinued";
  summary?: string;
  image?: string;
  images?: string[];
  specs?: {
    processor?: string;
    graphics?: string;
    ram?: string;
    storage?: string;
    display?: string;
    battery?: string;
    weight?: string;
    os?: string;
    ports?: string;
  };
  prices?: Partial<Record<RegionId, Array<{
    amount: number;
    currency: string;
    retailer?: string;
    url?: string;
    observedAt?: string;
    configuration?: string;
  }>>>;
  priorities?: Partial<Record<PriorityId, "strong" | "adequate" | "limited" | "unverified">>;
  verdict?: string[];
  valueMatrix?: string[];
  evidence?: Array<{
    feature: string;
    status: "improved" | "unchanged" | "regressed" | "mixed" | "unverified";
    headline: string;
    detail?: string;
    source?: string;
    sourceUrl?: string;
  }>;
  thirdParty?: Array<{
    name: string;
    region: "US" | "UK" | "DE" | "GLOBAL";
    summary: string;
    url?: string;
  }>;
}

// Intentionally empty until ONOCRA's researched model records are imported.
// Do not add invented prices, specifications, scores or popularity figures.
export const computerDevices: ComputerDevice[] = [];
