/** ONOCRA Apple sourced-specification snapshot — 2026-10-13.
 * Source-backed Apple manufacturer specs, launch MSRP and current direct Apple Store offers.
 * This is STATIC build-time data, not a live API. Store offers must be refreshed.
 * External RAM evidence is noted separately (medium confidence); not a GL/VM score.
 * DO NOT use historical MSRP in place of current retail price or resale value in VM.
 */
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
export const regions: {code:Region;label:string;currency:string}[] = [
 {code:'US',label:'United States',currency:'USD'},
 {code:'UK',label:'United Kingdom',currency:'GBP'},
 {code:'DE',label:'Germany',currency:'EUR'}
];
export const appleRegionalData: Record<string, ModelResearch> = {
  "iphone18-pro": {
    "common": {
      "chipset": {
        "value": "A20 Pro, 6-core CPU, 7-core GPU, dual 16-core Neural Engine",
        "source": "https://www.apple.com/iphone-18-pro/specs/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "display": {
        "value": "6.3-inch Super Retina XDR OLED, 120Hz ProMotion, 2622×1206, up to 3000 nits outdoors",
        "source": "https://www.apple.com/iphone-18-pro/specs/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "storage": {
        "value": "256GB · 512GB · 1TB · 2TB",
        "source": "https://www.apple.com/iphone-18-pro/specs/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "cameras": {
        "value": "48MP main with variable aperture (ƒ/1.48–ƒ/4) + 48MP ultra-wide + 48MP telephoto (4x); 18MP Center Stage front",
        "source": "https://www.apple.com/iphone-18-pro/specs/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "battery": {
        "value": "Apple-rated all-day battery; model-specific video endurance in linked technical sheet",
        "source": "https://www.apple.com/iphone-18-pro/specs/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "charging": {
        "value": "USB-C (USB 3, up to 10Gb/s); MagSafe and Qi2 up to 25W",
        "source": "https://www.apple.com/iphone-18-pro/specs/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "software": {
        "value": "Launched with iOS 27; Apple Intelligence and Siri AI",
        "source": "https://www.apple.com/iphone-18-pro/specs/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "dimensions": {
        "value": "150.0 × 71.9 × 8.75 mm; 211 g",
        "source": "https://www.apple.com/iphone-18-pro/specs/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "connectivity": {
        "value": "5G, Wi-Fi 7, Bluetooth 6, Apple C2 modem; IP68",
        "source": "https://www.apple.com/iphone-18-pro/specs/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "ram": {
        "value": "12GB (independently reported)",
        "source": "https://www.gsmarena.com/apple_iphone_18_pro-review-3003.php",
        "checkedAt": "2026-10-13",
        "confidence": "medium",
        "note": "Third-party RAM figure; Apple does not publish RAM size in official tech specs."
      }
    },
    "regions": {
      "US": {
        "availability": {
          "value": "Released 18 September 2026",
          "source": "https://www.apple.com/iphone-18-pro/specs/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Two active eSIMs, no physical SIM tray",
          "source": "https://www.apple.com/iphone-18-pro/specs/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G (sub-6 GHz); regional bands vary",
          "source": "https://www.apple.com/iphone-18-pro/specs/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "prices": [
          {
            "value": "$1,199",
            "source": "https://www.apple.com/shop/buy-iphone/iphone-18-pro",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Apple direct online store; US: connect to carrier later (unlocked), no carrier rebate. Snapshot 2026-10-13; recheck before purchase.",
            "storage": "256GB",
            "currency": "USD",
            "channel": "retailer-new"
          },
          {
            "value": "$1,399",
            "source": "https://www.apple.com/shop/buy-iphone/iphone-18-pro",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Apple direct online store; US: connect to carrier later (unlocked), no carrier rebate. Snapshot 2026-10-13; recheck before purchase.",
            "storage": "512GB",
            "currency": "USD",
            "channel": "retailer-new"
          },
          {
            "value": "$1,799",
            "source": "https://www.apple.com/shop/buy-iphone/iphone-18-pro",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Apple direct online store; US: connect to carrier later (unlocked), no carrier rebate. Snapshot 2026-10-13; recheck before purchase.",
            "storage": "1TB",
            "currency": "USD",
            "channel": "retailer-new"
          },
          {
            "value": "$2,399",
            "source": "https://www.apple.com/shop/buy-iphone/iphone-18-pro",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Apple direct online store; US: connect to carrier later (unlocked), no carrier rebate. Snapshot 2026-10-13; recheck before purchase.",
            "storage": "2TB",
            "currency": "USD",
            "channel": "retailer-new"
          }
        ],
        "modelNumber": {
          "value": "A3472",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      },
      "UK": {
        "availability": {
          "value": "Released 18 September 2026",
          "source": "https://www.apple.com/uk/iphone-18-pro/specs/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Nano-SIM + eSIM, with dual eSIM support",
          "source": "https://www.apple.com/uk/iphone-18-pro/specs/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G (sub-6 GHz); regional bands vary",
          "source": "https://www.apple.com/uk/iphone-18-pro/specs/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "prices": [
          {
            "value": "£1,199",
            "source": "https://www.apple.com/uk/shop/buy-iphone/iphone-18-pro",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Apple direct online store; US: connect to carrier later (unlocked), no carrier rebate. Snapshot 2026-10-13; recheck before purchase.",
            "storage": "256GB",
            "currency": "GBP",
            "channel": "retailer-new"
          },
          {
            "value": "£1,399",
            "source": "https://www.apple.com/uk/shop/buy-iphone/iphone-18-pro",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Apple direct online store; US: connect to carrier later (unlocked), no carrier rebate. Snapshot 2026-10-13; recheck before purchase.",
            "storage": "512GB",
            "currency": "GBP",
            "channel": "retailer-new"
          },
          {
            "value": "£1,799",
            "source": "https://www.apple.com/uk/shop/buy-iphone/iphone-18-pro",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Apple direct online store; US: connect to carrier later (unlocked), no carrier rebate. Snapshot 2026-10-13; recheck before purchase.",
            "storage": "1TB",
            "currency": "GBP",
            "channel": "retailer-new"
          },
          {
            "value": "£2,399",
            "source": "https://www.apple.com/uk/shop/buy-iphone/iphone-18-pro",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Apple direct online store; US: connect to carrier later (unlocked), no carrier rebate. Snapshot 2026-10-13; recheck before purchase.",
            "storage": "2TB",
            "currency": "GBP",
            "channel": "retailer-new"
          }
        ],
        "modelNumber": {
          "value": "A3714",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      },
      "DE": {
        "availability": {
          "value": "Released 18 September 2026",
          "source": "https://www.apple.com/de/shop/buy-iphone/iphone-18-pro",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Nano-SIM + eSIM, with dual eSIM support",
          "source": "https://www.apple.com/de/shop/buy-iphone/iphone-18-pro",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G (sub-6 GHz); regional bands vary",
          "source": "https://www.apple.com/de/shop/buy-iphone/iphone-18-pro",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "prices": [
          {
            "value": "€1,449",
            "source": "https://www.apple.com/de/shop/buy-iphone/iphone-18-pro",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Apple direct online store; US: connect to carrier later (unlocked), no carrier rebate. Snapshot 2026-10-13; recheck before purchase.",
            "storage": "256GB",
            "currency": "EUR",
            "channel": "retailer-new"
          },
          {
            "value": "€1,699",
            "source": "https://www.apple.com/de/shop/buy-iphone/iphone-18-pro",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Apple direct online store; US: connect to carrier later (unlocked), no carrier rebate. Snapshot 2026-10-13; recheck before purchase.",
            "storage": "512GB",
            "currency": "EUR",
            "channel": "retailer-new"
          },
          {
            "value": "€2,199",
            "source": "https://www.apple.com/de/shop/buy-iphone/iphone-18-pro",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Apple direct online store; US: connect to carrier later (unlocked), no carrier rebate. Snapshot 2026-10-13; recheck before purchase.",
            "storage": "1TB",
            "currency": "EUR",
            "channel": "retailer-new"
          },
          {
            "value": "€2,949",
            "source": "https://www.apple.com/de/shop/buy-iphone/iphone-18-pro",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Apple direct online store; US: connect to carrier later (unlocked), no carrier rebate. Snapshot 2026-10-13; recheck before purchase.",
            "storage": "2TB",
            "currency": "EUR",
            "channel": "retailer-new"
          }
        ],
        "modelNumber": {
          "value": "A3714",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      }
    }
  },
  "iphone18-promax": {
    "common": {
      "chipset": {
        "value": "A20 Pro, 6-core CPU, 7-core GPU, dual 16-core Neural Engine",
        "source": "https://www.apple.com/iphone-18-pro/specs/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "display": {
        "value": "6.9-inch Super Retina XDR OLED, 120Hz ProMotion, 2868×1320, up to 3000 nits outdoors",
        "source": "https://www.apple.com/iphone-18-pro/specs/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "storage": {
        "value": "256GB · 512GB · 1TB · 2TB",
        "source": "https://www.apple.com/iphone-18-pro/specs/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "cameras": {
        "value": "48MP main with variable aperture (ƒ/1.48–ƒ/4) + 48MP ultra-wide + 48MP telephoto (4x); 18MP Center Stage front",
        "source": "https://www.apple.com/iphone-18-pro/specs/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "battery": {
        "value": "Apple-rated all-day battery; model-specific video endurance in linked technical sheet",
        "source": "https://www.apple.com/iphone-18-pro/specs/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "charging": {
        "value": "USB-C (USB 3, up to 10Gb/s); MagSafe and Qi2 up to 25W",
        "source": "https://www.apple.com/iphone-18-pro/specs/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "software": {
        "value": "Launched with iOS 27; Apple Intelligence and Siri AI",
        "source": "https://www.apple.com/iphone-18-pro/specs/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "dimensions": {
        "value": "163.4 × 78.0 × 8.75 mm; 249 g",
        "source": "https://www.apple.com/iphone-18-pro/specs/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "connectivity": {
        "value": "5G, Wi-Fi 7, Bluetooth 6, Apple C2 modem; IP68",
        "source": "https://www.apple.com/iphone-18-pro/specs/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      }
    },
    "regions": {
      "US": {
        "availability": {
          "value": "Released 18 September 2026",
          "source": "https://www.apple.com/iphone-18-pro/specs/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Two active eSIMs, no physical SIM tray",
          "source": "https://www.apple.com/iphone-18-pro/specs/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G (sub-6 GHz); regional bands vary",
          "source": "https://www.apple.com/iphone-18-pro/specs/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "prices": [
          {
            "value": "$1,299",
            "source": "https://www.apple.com/shop/buy-iphone/iphone-18-pro",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Apple direct online store; US: connect to carrier later (unlocked), no carrier rebate. Snapshot 2026-10-13; recheck before purchase.",
            "storage": "256GB",
            "currency": "USD",
            "channel": "retailer-new"
          },
          {
            "value": "$1,499",
            "source": "https://www.apple.com/shop/buy-iphone/iphone-18-pro",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Apple direct online store; US: connect to carrier later (unlocked), no carrier rebate. Snapshot 2026-10-13; recheck before purchase.",
            "storage": "512GB",
            "currency": "USD",
            "channel": "retailer-new"
          },
          {
            "value": "$1,899",
            "source": "https://www.apple.com/shop/buy-iphone/iphone-18-pro",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Apple direct online store; US: connect to carrier later (unlocked), no carrier rebate. Snapshot 2026-10-13; recheck before purchase.",
            "storage": "1TB",
            "currency": "USD",
            "channel": "retailer-new"
          },
          {
            "value": "$2,499",
            "source": "https://www.apple.com/shop/buy-iphone/iphone-18-pro",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Apple direct online store; US: connect to carrier later (unlocked), no carrier rebate. Snapshot 2026-10-13; recheck before purchase.",
            "storage": "2TB",
            "currency": "USD",
            "channel": "retailer-new"
          }
        ],
        "modelNumber": {
          "value": "A3473",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      },
      "UK": {
        "availability": {
          "value": "Released 18 September 2026",
          "source": "https://www.apple.com/uk/iphone-18-pro/specs/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Nano-SIM + eSIM, with dual eSIM support",
          "source": "https://www.apple.com/uk/iphone-18-pro/specs/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G (sub-6 GHz); regional bands vary",
          "source": "https://www.apple.com/uk/iphone-18-pro/specs/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "prices": [
          {
            "value": "£1,299",
            "source": "https://www.apple.com/uk/shop/buy-iphone/iphone-18-pro",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Apple direct online store; US: connect to carrier later (unlocked), no carrier rebate. Snapshot 2026-10-13; recheck before purchase.",
            "storage": "256GB",
            "currency": "GBP",
            "channel": "retailer-new"
          },
          {
            "value": "£1,499",
            "source": "https://www.apple.com/uk/shop/buy-iphone/iphone-18-pro",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Apple direct online store; US: connect to carrier later (unlocked), no carrier rebate. Snapshot 2026-10-13; recheck before purchase.",
            "storage": "512GB",
            "currency": "GBP",
            "channel": "retailer-new"
          },
          {
            "value": "£1,899",
            "source": "https://www.apple.com/uk/shop/buy-iphone/iphone-18-pro",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Apple direct online store; US: connect to carrier later (unlocked), no carrier rebate. Snapshot 2026-10-13; recheck before purchase.",
            "storage": "1TB",
            "currency": "GBP",
            "channel": "retailer-new"
          },
          {
            "value": "£2,499",
            "source": "https://www.apple.com/uk/shop/buy-iphone/iphone-18-pro",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Apple direct online store; US: connect to carrier later (unlocked), no carrier rebate. Snapshot 2026-10-13; recheck before purchase.",
            "storage": "2TB",
            "currency": "GBP",
            "channel": "retailer-new"
          }
        ],
        "modelNumber": {
          "value": "A3717",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      },
      "DE": {
        "availability": {
          "value": "Released 18 September 2026",
          "source": "https://www.apple.com/de/shop/buy-iphone/iphone-18-pro",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Nano-SIM + eSIM, with dual eSIM support",
          "source": "https://www.apple.com/de/shop/buy-iphone/iphone-18-pro",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G (sub-6 GHz); regional bands vary",
          "source": "https://www.apple.com/de/shop/buy-iphone/iphone-18-pro",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "prices": [
          {
            "value": "€1,599",
            "source": "https://www.apple.com/de/shop/buy-iphone/iphone-18-pro",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Apple direct online store; US: connect to carrier later (unlocked), no carrier rebate. Snapshot 2026-10-13; recheck before purchase.",
            "storage": "256GB",
            "currency": "EUR",
            "channel": "retailer-new"
          },
          {
            "value": "€1,849",
            "source": "https://www.apple.com/de/shop/buy-iphone/iphone-18-pro",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Apple direct online store; US: connect to carrier later (unlocked), no carrier rebate. Snapshot 2026-10-13; recheck before purchase.",
            "storage": "512GB",
            "currency": "EUR",
            "channel": "retailer-new"
          },
          {
            "value": "€2,349",
            "source": "https://www.apple.com/de/shop/buy-iphone/iphone-18-pro",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Apple direct online store; US: connect to carrier later (unlocked), no carrier rebate. Snapshot 2026-10-13; recheck before purchase.",
            "storage": "1TB",
            "currency": "EUR",
            "channel": "retailer-new"
          },
          {
            "value": "€3,099",
            "source": "https://www.apple.com/de/shop/buy-iphone/iphone-18-pro",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Apple direct online store; US: connect to carrier later (unlocked), no carrier rebate. Snapshot 2026-10-13; recheck before purchase.",
            "storage": "2TB",
            "currency": "EUR",
            "channel": "retailer-new"
          }
        ],
        "modelNumber": {
          "value": "A3717",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      }
    }
  },
  "iphone17-standard": {
    "common": {
      "chipset": {
        "value": "A19, 6-core CPU / 5-core GPU",
        "source": "https://www.apple.com/newsroom/2025/09/apple-debuts-iphone-17/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "display": {
        "value": "6.3-inch Super Retina XDR OLED, ProMotion 1–120Hz; 3000 nits outdoor",
        "source": "https://www.apple.com/newsroom/2025/09/apple-debuts-iphone-17/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "storage": {
        "value": "256GB · 512GB",
        "source": "https://www.apple.com/newsroom/2025/09/apple-debuts-iphone-17/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "cameras": {
        "value": "48MP Fusion main (2x optical-quality) + 48MP Fusion ultra-wide; 18MP Center Stage front",
        "source": "https://www.apple.com/newsroom/2025/09/apple-debuts-iphone-17/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "battery": {
        "value": "Up to 30 h video playback (Apple claim)",
        "source": "https://www.apple.com/newsroom/2025/09/apple-debuts-iphone-17/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "charging": {
        "value": "USB-C; up to 50% in 20 min with supported adapter; MagSafe",
        "source": "https://www.apple.com/newsroom/2025/09/apple-debuts-iphone-17/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "software": {
        "value": "Introduced with iOS 26",
        "source": "https://www.apple.com/newsroom/2025/09/apple-debuts-iphone-17/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "dimensions": {
        "value": "149.6 × 71.5 × 7.95 mm; 177 g",
        "source": "https://www.apple.com/newsroom/2025/09/apple-debuts-iphone-17/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "connectivity": {
        "value": "5G, N1 Wi-Fi 7, Bluetooth 6, Thread; IP68",
        "source": "https://www.apple.com/newsroom/2025/09/apple-debuts-iphone-17/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      }
    },
    "regions": {
      "US": {
        "prices": [
          {
            "value": "$799",
            "source": "https://www.apple.com/newsroom/2025/09/apple-debuts-iphone-17/",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Historical Apple launch price, NOT a current retail quote. US carrier-activation discounts or regional tax treatment may apply.",
            "storage": "256GB",
            "currency": "USD",
            "channel": "official-msrp"
          }
        ],
        "availability": {
          "value": "Released September 2025",
          "source": "https://www.apple.com/newsroom/2025/09/apple-debuts-iphone-17/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Dual eSIM; no physical SIM tray",
          "source": "https://www.apple.com/newsroom/2025/09/apple-debuts-iphone-17/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; cellular bands depend on the country-specific hardware version",
          "source": "https://www.apple.com/newsroom/2025/09/apple-debuts-iphone-17/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A3258",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      },
      "UK": {
        "availability": {
          "value": "Released September 2025",
          "source": "https://www.apple.com/newsroom/2025/09/apple-debuts-iphone-17/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Nano-SIM + eSIM; dual eSIM capable",
          "source": "https://www.apple.com/newsroom/2025/09/apple-debuts-iphone-17/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; cellular bands depend on the country-specific hardware version",
          "source": "https://www.apple.com/newsroom/2025/09/apple-debuts-iphone-17/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A3520",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      },
      "DE": {
        "prices": [
          {
            "value": "€949",
            "source": "https://www.apple.com/de/newsroom/2025/09/apple-introduces-iphone-17/",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Historical Apple launch price, NOT a current retail quote. US carrier-activation discounts or regional tax treatment may apply.",
            "storage": "256GB",
            "currency": "EUR",
            "channel": "official-msrp"
          }
        ],
        "availability": {
          "value": "Released September 2025",
          "source": "https://www.apple.com/newsroom/2025/09/apple-debuts-iphone-17/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Nano-SIM + eSIM; dual eSIM capable",
          "source": "https://www.apple.com/newsroom/2025/09/apple-debuts-iphone-17/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; cellular bands depend on the country-specific hardware version",
          "source": "https://www.apple.com/newsroom/2025/09/apple-debuts-iphone-17/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A3520",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      }
    }
  },
  "iphone17-pro": {
    "common": {
      "chipset": {
        "value": "A19 Pro with vapor-chamber thermal design",
        "source": "https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "display": {
        "value": "6.3-inch Super Retina XDR OLED, 120Hz ProMotion",
        "source": "https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "storage": {
        "value": "256GB · 512GB · 1TB",
        "source": "https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "cameras": {
        "value": "Triple 48MP Fusion cameras (main, ultra-wide, telephoto up to 8x optical-quality); 18MP Center Stage front",
        "source": "https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "battery": {
        "value": "Extended battery life; see Apple reference for model-specific rating",
        "source": "https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "charging": {
        "value": "USB-C; fast charging; MagSafe wireless charging",
        "source": "https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "software": {
        "value": "Introduced with iOS 26",
        "source": "https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "dimensions": {
        "value": "6.3-inch class, aluminum unibody",
        "source": "https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "connectivity": {
        "value": "5G, Wi-Fi 7, Bluetooth 6; IP68",
        "source": "https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      }
    },
    "regions": {
      "US": {
        "prices": [
          {
            "value": "$1,099",
            "source": "https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Historical Apple launch price, NOT a current retail quote. US carrier-activation discounts or regional tax treatment may apply.",
            "storage": "256GB",
            "currency": "USD",
            "channel": "official-msrp"
          }
        ],
        "availability": {
          "value": "Released September 2025",
          "source": "https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Dual eSIM; no physical SIM tray",
          "source": "https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; cellular bands depend on the country-specific hardware version",
          "source": "https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A3256",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      },
      "UK": {
        "prices": [
          {
            "value": "£1,099",
            "source": "https://www.apple.com/uk/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max-the-most-powerful-and-advanced-pro-models-ever/",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Historical Apple launch price, NOT a current retail quote. US carrier-activation discounts or regional tax treatment may apply.",
            "storage": "256GB",
            "currency": "GBP",
            "channel": "official-msrp"
          }
        ],
        "availability": {
          "value": "Released September 2025",
          "source": "https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Nano-SIM + eSIM; dual eSIM capable",
          "source": "https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; cellular bands depend on the country-specific hardware version",
          "source": "https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A3523",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      },
      "DE": {
        "prices": [
          {
            "value": "€1,299",
            "source": "https://www.apple.com/de/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max-the-most-powerful-and-advanced-pro-models-ever/",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Historical Apple launch price, NOT a current retail quote. US carrier-activation discounts or regional tax treatment may apply.",
            "storage": "256GB",
            "currency": "EUR",
            "channel": "official-msrp"
          }
        ],
        "availability": {
          "value": "Released September 2025",
          "source": "https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Nano-SIM + eSIM; dual eSIM capable",
          "source": "https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; cellular bands depend on the country-specific hardware version",
          "source": "https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A3523",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      }
    }
  },
  "iphone17-promax": {
    "common": {
      "chipset": {
        "value": "A19 Pro with vapor-chamber thermal design",
        "source": "https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "display": {
        "value": "6.9-inch Super Retina XDR OLED, 120Hz ProMotion",
        "source": "https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "storage": {
        "value": "256GB · 512GB · 1TB · 2TB",
        "source": "https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "cameras": {
        "value": "Triple 48MP Fusion cameras (main, ultra-wide, telephoto 4x / 8x optical-quality); 18MP Center Stage front",
        "source": "https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "battery": {
        "value": "Extended battery life; eSIM variant can have different battery size",
        "source": "https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "charging": {
        "value": "USB-C; MagSafe",
        "source": "https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "software": {
        "value": "Introduced with iOS 26",
        "source": "https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "dimensions": {
        "value": "6.9-inch class, aluminum unibody",
        "source": "https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "connectivity": {
        "value": "5G, Wi-Fi 7, Bluetooth 6; IP68",
        "source": "https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "ram": {
        "value": "12GB",
        "source": "https://www.gsmarena.com/apple_iphone_17_pro_max-13964.php",
        "checkedAt": "2026-10-13",
        "confidence": "medium",
        "note": "Third-party RAM figure; Apple does not publish RAM size in official tech specs."
      }
    },
    "regions": {
      "US": {
        "prices": [
          {
            "value": "$1,199",
            "source": "https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Historical Apple launch price, NOT a current retail quote. US carrier-activation discounts or regional tax treatment may apply.",
            "storage": "256GB",
            "currency": "USD",
            "channel": "official-msrp"
          }
        ],
        "availability": {
          "value": "Released September 2025",
          "source": "https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Dual eSIM; no physical SIM tray",
          "source": "https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; cellular bands depend on the country-specific hardware version",
          "source": "https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A3257",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      },
      "UK": {
        "prices": [
          {
            "value": "£1,199",
            "source": "https://www.apple.com/uk/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max-the-most-powerful-and-advanced-pro-models-ever/",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Historical Apple launch price, NOT a current retail quote. US carrier-activation discounts or regional tax treatment may apply.",
            "storage": "256GB",
            "currency": "GBP",
            "channel": "official-msrp"
          }
        ],
        "availability": {
          "value": "Released September 2025",
          "source": "https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Nano-SIM + eSIM; dual eSIM capable",
          "source": "https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; cellular bands depend on the country-specific hardware version",
          "source": "https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A3526",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      },
      "DE": {
        "prices": [
          {
            "value": "€1,449",
            "source": "https://www.apple.com/de/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max-the-most-powerful-and-advanced-pro-models-ever/",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Historical Apple launch price, NOT a current retail quote. US carrier-activation discounts or regional tax treatment may apply.",
            "storage": "256GB",
            "currency": "EUR",
            "channel": "official-msrp"
          }
        ],
        "availability": {
          "value": "Released September 2025",
          "source": "https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Nano-SIM + eSIM; dual eSIM capable",
          "source": "https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; cellular bands depend on the country-specific hardware version",
          "source": "https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A3526",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      }
    }
  },
  "iphone17-air": {
    "common": {
      "chipset": {
        "value": "A19 Pro",
        "source": "https://www.apple.com/iphone-air/specs/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "display": {
        "value": "6.5-inch Super Retina XDR OLED with ProMotion",
        "source": "https://www.apple.com/iphone-air/specs/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "storage": {
        "value": "256GB · 512GB · 1TB",
        "source": "https://www.apple.com/iphone-air/specs/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "cameras": {
        "value": "48MP Fusion main; 18MP Center Stage front",
        "source": "https://www.apple.com/iphone-air/specs/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "battery": {
        "value": "All-day battery; Apple offers optional MagSafe battery accessory",
        "source": "https://www.apple.com/iphone-air/specs/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "charging": {
        "value": "USB-C; MagSafe and Qi2 wireless charging up to 20W",
        "source": "https://www.apple.com/iphone-air/specs/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "software": {
        "value": "Introduced with iOS 26",
        "source": "https://www.apple.com/iphone-air/specs/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "dimensions": {
        "value": "156.2 × 74.7 × 5.64 mm; 165 g; titanium frame",
        "source": "https://www.apple.com/iphone-air/specs/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "connectivity": {
        "value": "5G; Apple-designed C1X modem; eSIM-only worldwide; IP68",
        "source": "https://www.apple.com/iphone-air/specs/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      }
    },
    "regions": {
      "US": {
        "prices": [
          {
            "value": "$999",
            "source": "https://www.apple.com/newsroom/2025/09/introducing-iphone-air-a-powerful-new-iphone-with-a-breakthrough-design/",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Historical Apple launch price, NOT a current retail quote. US carrier-activation discounts or regional tax treatment may apply.",
            "storage": "256GB",
            "currency": "USD",
            "channel": "official-msrp"
          }
        ],
        "availability": {
          "value": "Released September 2025",
          "source": "https://www.apple.com/iphone-air/specs/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Dual eSIM; no physical SIM tray",
          "source": "https://www.apple.com/iphone-air/specs/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; cellular bands depend on the country-specific hardware version",
          "source": "https://www.apple.com/iphone-air/specs/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A3260",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      },
      "UK": {
        "prices": [
          {
            "value": "£999",
            "source": "https://www.apple.com/uk/newsroom/2025/09/introducing-iphone-air-a-powerful-new-iphone-with-a-breakthrough-design/",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Historical Apple launch price, NOT a current retail quote. US carrier-activation discounts or regional tax treatment may apply.",
            "storage": "256GB",
            "currency": "GBP",
            "channel": "official-msrp"
          }
        ],
        "availability": {
          "value": "Released September 2025",
          "source": "https://www.apple.com/iphone-air/specs/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Dual eSIM; no physical SIM tray",
          "source": "https://www.apple.com/iphone-air/specs/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; cellular bands depend on the country-specific hardware version",
          "source": "https://www.apple.com/iphone-air/specs/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A3517",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      },
      "DE": {
        "prices": [
          {
            "value": "€1,199",
            "source": "https://www.apple.com/de/newsroom/2025/09/introducing-iphone-air-a-powerful-new-iphone-with-a-breakthrough-design/",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Historical Apple launch price, NOT a current retail quote. US carrier-activation discounts or regional tax treatment may apply.",
            "storage": "256GB",
            "currency": "EUR",
            "channel": "official-msrp"
          }
        ],
        "availability": {
          "value": "Released September 2025",
          "source": "https://www.apple.com/iphone-air/specs/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Dual eSIM; no physical SIM tray",
          "source": "https://www.apple.com/iphone-air/specs/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; cellular bands depend on the country-specific hardware version",
          "source": "https://www.apple.com/iphone-air/specs/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A3517",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      }
    }
  },
  "iphone17-e": {
    "common": {
      "chipset": {
        "value": "A19, 6-core CPU, 4-core GPU",
        "source": "https://www.apple.com/newsroom/2026/03/apple-introduces-iphone-17e/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "display": {
        "value": "6.1-inch Super Retina XDR OLED; Ceramic Shield 2",
        "source": "https://www.apple.com/newsroom/2026/03/apple-introduces-iphone-17e/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "storage": {
        "value": "256GB · 512GB",
        "source": "https://www.apple.com/newsroom/2026/03/apple-introduces-iphone-17e/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "cameras": {
        "value": "48MP Fusion main (2x optical-quality); 12MP front camera",
        "source": "https://www.apple.com/newsroom/2026/03/apple-introduces-iphone-17e/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "battery": {
        "value": "All-day battery",
        "source": "https://www.apple.com/newsroom/2026/03/apple-introduces-iphone-17e/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "charging": {
        "value": "USB-C; MagSafe and Qi2 up to 15W",
        "source": "https://www.apple.com/newsroom/2026/03/apple-introduces-iphone-17e/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "software": {
        "value": "Introduced with iOS 26.3",
        "source": "https://www.apple.com/newsroom/2026/03/apple-introduces-iphone-17e/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "dimensions": {
        "value": "6.1-inch class; IP68",
        "source": "https://www.apple.com/newsroom/2026/03/apple-introduces-iphone-17e/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "connectivity": {
        "value": "5G; Apple C1X modem; satellite safety features",
        "source": "https://www.apple.com/newsroom/2026/03/apple-introduces-iphone-17e/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "ram": {
        "value": "8GB",
        "source": "https://www.gsmarena.com/apple_iphone_17e-14487.php",
        "checkedAt": "2026-10-13",
        "confidence": "medium",
        "note": "Third-party RAM figure; Apple does not publish RAM size in official tech specs."
      }
    },
    "regions": {
      "US": {
        "prices": [
          {
            "value": "$599",
            "source": "https://www.apple.com/newsroom/2026/03/apple-introduces-iphone-17e/",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Historical Apple launch price, NOT a current retail quote. US carrier-activation discounts or regional tax treatment may apply.",
            "storage": "256GB",
            "currency": "USD",
            "channel": "official-msrp"
          }
        ],
        "availability": {
          "value": "Released 11 March 2026",
          "source": "https://www.apple.com/newsroom/2026/03/apple-introduces-iphone-17e/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Dual eSIM; no physical SIM tray",
          "source": "https://www.apple.com/newsroom/2026/03/apple-introduces-iphone-17e/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; cellular bands depend on the country-specific hardware version",
          "source": "https://www.apple.com/newsroom/2026/03/apple-introduces-iphone-17e/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A3575",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      },
      "UK": {
        "prices": [
          {
            "value": "£599",
            "source": "https://www.apple.com/uk/newsroom/2026/03/apple-introduces-iphone-17e/",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Historical Apple launch price, NOT a current retail quote. US carrier-activation discounts or regional tax treatment may apply.",
            "storage": "256GB",
            "currency": "GBP",
            "channel": "official-msrp"
          }
        ],
        "availability": {
          "value": "Released 11 March 2026",
          "source": "https://www.apple.com/newsroom/2026/03/apple-introduces-iphone-17e/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Nano-SIM + eSIM; dual eSIM capable",
          "source": "https://www.apple.com/newsroom/2026/03/apple-introduces-iphone-17e/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; cellular bands depend on the country-specific hardware version",
          "source": "https://www.apple.com/newsroom/2026/03/apple-introduces-iphone-17e/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A3634",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      },
      "DE": {
        "prices": [
          {
            "value": "€699",
            "source": "https://www.apple.com/de/newsroom/2026/03/apple-introduces-iphone-17e/",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Historical Apple launch price, NOT a current retail quote. US carrier-activation discounts or regional tax treatment may apply.",
            "storage": "256GB",
            "currency": "EUR",
            "channel": "official-msrp"
          }
        ],
        "availability": {
          "value": "Released 11 March 2026",
          "source": "https://www.apple.com/newsroom/2026/03/apple-introduces-iphone-17e/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Nano-SIM + eSIM; dual eSIM capable",
          "source": "https://www.apple.com/newsroom/2026/03/apple-introduces-iphone-17e/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; cellular bands depend on the country-specific hardware version",
          "source": "https://www.apple.com/newsroom/2026/03/apple-introduces-iphone-17e/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A3634",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      }
    }
  },
  "iphone16-standard": {
    "common": {
      "chipset": {
        "value": "A18",
        "source": "https://www.apple.com/uk/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "display": {
        "value": "6.1-inch Super Retina XDR OLED",
        "source": "https://www.apple.com/uk/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "storage": {
        "value": "128GB · 256GB · 512GB",
        "source": "https://www.apple.com/uk/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "cameras": {
        "value": "48MP Fusion main (2x optical-quality) + 12MP ultra-wide",
        "source": "https://www.apple.com/uk/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "battery": {
        "value": "Up to 22 h video playback",
        "source": "https://www.apple.com/uk/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "charging": {
        "value": "USB-C; MagSafe up to 25W with supported charger",
        "source": "https://www.apple.com/uk/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "software": {
        "value": "Introduced with iOS 18",
        "source": "https://www.apple.com/uk/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "dimensions": {
        "value": "6.1-inch class; aluminum and glass",
        "source": "https://www.apple.com/uk/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "connectivity": {
        "value": "5G, Wi-Fi 7, Bluetooth 5.3, IP68",
        "source": "https://www.apple.com/uk/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      }
    },
    "regions": {
      "US": {
        "prices": [
          {
            "value": "$799",
            "source": "https://www.apple.com/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Historical Apple launch price, NOT a current retail quote. US carrier-activation discounts or regional tax treatment may apply.",
            "storage": "128GB",
            "currency": "USD",
            "channel": "official-msrp"
          }
        ],
        "availability": {
          "value": "Released 2024",
          "source": "https://www.apple.com/uk/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Dual eSIM, no physical SIM tray",
          "source": "https://www.apple.com/uk/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; verify country-specific network bands before importing devices",
          "source": "https://www.apple.com/uk/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A3081",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      },
      "UK": {
        "prices": [
          {
            "value": "£799",
            "source": "https://www.apple.com/uk/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Historical Apple launch price, NOT a current retail quote. US carrier-activation discounts or regional tax treatment may apply.",
            "storage": "128GB",
            "currency": "GBP",
            "channel": "official-msrp"
          }
        ],
        "availability": {
          "value": "Released 2024",
          "source": "https://www.apple.com/uk/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Nano-SIM + eSIM (regional variation possible)",
          "source": "https://www.apple.com/uk/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; verify country-specific network bands before importing devices",
          "source": "https://www.apple.com/uk/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A3287",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      },
      "DE": {
        "prices": [
          {
            "value": "€949",
            "source": "https://www.apple.com/de/newsroom/2024/09/apple-introduces-iphone-16-iphone-16-plus/",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Historical Apple launch price, NOT a current retail quote. US carrier-activation discounts or regional tax treatment may apply.",
            "storage": "128GB",
            "currency": "EUR",
            "channel": "official-msrp"
          }
        ],
        "availability": {
          "value": "Released 2024",
          "source": "https://www.apple.com/uk/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Nano-SIM + eSIM (regional variation possible)",
          "source": "https://www.apple.com/uk/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; verify country-specific network bands before importing devices",
          "source": "https://www.apple.com/uk/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A3287",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      }
    }
  },
  "iphone16-plus": {
    "common": {
      "chipset": {
        "value": "A18",
        "source": "https://www.apple.com/uk/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "display": {
        "value": "6.7-inch Super Retina XDR OLED",
        "source": "https://www.apple.com/uk/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "storage": {
        "value": "128GB · 256GB · 512GB",
        "source": "https://www.apple.com/uk/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "cameras": {
        "value": "48MP Fusion main (2x optical-quality) + 12MP ultra-wide",
        "source": "https://www.apple.com/uk/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "battery": {
        "value": "Up to 27 h video playback",
        "source": "https://www.apple.com/uk/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "charging": {
        "value": "USB-C; MagSafe up to 25W with supported charger",
        "source": "https://www.apple.com/uk/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "software": {
        "value": "Introduced with iOS 18",
        "source": "https://www.apple.com/uk/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "dimensions": {
        "value": "6.7-inch class; aluminum and glass",
        "source": "https://www.apple.com/uk/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "connectivity": {
        "value": "5G, Wi-Fi 7, Bluetooth 5.3, IP68",
        "source": "https://www.apple.com/uk/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      }
    },
    "regions": {
      "US": {
        "prices": [
          {
            "value": "$899",
            "source": "https://www.apple.com/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Historical Apple launch price, NOT a current retail quote. US carrier-activation discounts or regional tax treatment may apply.",
            "storage": "128GB",
            "currency": "USD",
            "channel": "official-msrp"
          }
        ],
        "availability": {
          "value": "Released 2024",
          "source": "https://www.apple.com/uk/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Dual eSIM, no physical SIM tray",
          "source": "https://www.apple.com/uk/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; verify country-specific network bands before importing devices",
          "source": "https://www.apple.com/uk/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A3082",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      },
      "UK": {
        "prices": [
          {
            "value": "£899",
            "source": "https://www.apple.com/uk/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Historical Apple launch price, NOT a current retail quote. US carrier-activation discounts or regional tax treatment may apply.",
            "storage": "128GB",
            "currency": "GBP",
            "channel": "official-msrp"
          }
        ],
        "availability": {
          "value": "Released 2024",
          "source": "https://www.apple.com/uk/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Nano-SIM + eSIM (regional variation possible)",
          "source": "https://www.apple.com/uk/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; verify country-specific network bands before importing devices",
          "source": "https://www.apple.com/uk/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A3290",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      },
      "DE": {
        "prices": [
          {
            "value": "€1,099",
            "source": "https://www.apple.com/de/newsroom/2024/09/apple-introduces-iphone-16-iphone-16-plus/",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Historical Apple launch price, NOT a current retail quote. US carrier-activation discounts or regional tax treatment may apply.",
            "storage": "128GB",
            "currency": "EUR",
            "channel": "official-msrp"
          }
        ],
        "availability": {
          "value": "Released 2024",
          "source": "https://www.apple.com/uk/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Nano-SIM + eSIM (regional variation possible)",
          "source": "https://www.apple.com/uk/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; verify country-specific network bands before importing devices",
          "source": "https://www.apple.com/uk/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A3290",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      }
    }
  },
  "iphone16-pro": {
    "common": {
      "chipset": {
        "value": "A18 Pro",
        "source": "https://support.apple.com/en-us/121031",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "display": {
        "value": "6.3-inch Super Retina XDR OLED, ProMotion up to 120Hz",
        "source": "https://support.apple.com/en-us/121031",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "storage": {
        "value": "128GB · 256GB · 512GB · 1TB",
        "source": "https://support.apple.com/en-us/121031",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "cameras": {
        "value": "48MP Fusion main + 48MP ultra-wide + 12MP 5x telephoto",
        "source": "https://support.apple.com/en-us/121031",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "battery": {
        "value": "Up to 27 h video playback",
        "source": "https://support.apple.com/en-us/121031",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "charging": {
        "value": "USB-C (USB 3); MagSafe up to 25W",
        "source": "https://support.apple.com/en-us/121031",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "software": {
        "value": "Introduced with iOS 18",
        "source": "https://support.apple.com/en-us/121031",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "dimensions": {
        "value": "149.6 × 71.5 × 8.25 mm; 199 g; titanium",
        "source": "https://support.apple.com/en-us/121031",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "connectivity": {
        "value": "5G, Wi-Fi 7, Bluetooth 5.3; IP68",
        "source": "https://support.apple.com/en-us/121031",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      }
    },
    "regions": {
      "US": {
        "prices": [
          {
            "value": "$999",
            "source": "https://www.apple.com/newsroom/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Historical Apple launch price, NOT a current retail quote. US carrier-activation discounts or regional tax treatment may apply.",
            "storage": "128GB",
            "currency": "USD",
            "channel": "official-msrp"
          }
        ],
        "availability": {
          "value": "Released 2024",
          "source": "https://www.apple.com/newsroom/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Dual eSIM, no physical SIM tray",
          "source": "https://www.apple.com/newsroom/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; verify country-specific network bands before importing devices",
          "source": "https://www.apple.com/newsroom/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A3083",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      },
      "UK": {
        "prices": [
          {
            "value": "£999",
            "source": "https://www.apple.com/uk/newsroom/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Historical Apple launch price, NOT a current retail quote. US carrier-activation discounts or regional tax treatment may apply.",
            "storage": "128GB",
            "currency": "GBP",
            "channel": "official-msrp"
          }
        ],
        "availability": {
          "value": "Released 2024",
          "source": "https://www.apple.com/newsroom/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Nano-SIM + eSIM (regional variation possible)",
          "source": "https://www.apple.com/newsroom/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; verify country-specific network bands before importing devices",
          "source": "https://www.apple.com/newsroom/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A3293",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      },
      "DE": {
        "prices": [
          {
            "value": "€1,199",
            "source": "https://www.apple.com/de/newsroom/2024/09/apple-debuts-iphone-16-pro-iphone-16-pro-max/",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Historical Apple launch price, NOT a current retail quote. US carrier-activation discounts or regional tax treatment may apply.",
            "storage": "128GB",
            "currency": "EUR",
            "channel": "official-msrp"
          }
        ],
        "availability": {
          "value": "Released 2024",
          "source": "https://www.apple.com/newsroom/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Nano-SIM + eSIM (regional variation possible)",
          "source": "https://www.apple.com/newsroom/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; verify country-specific network bands before importing devices",
          "source": "https://www.apple.com/newsroom/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A3293",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      }
    }
  },
  "iphone16-promax": {
    "common": {
      "chipset": {
        "value": "A18 Pro",
        "source": "https://www.apple.com/newsroom/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "display": {
        "value": "6.9-inch Super Retina XDR OLED, ProMotion up to 120Hz",
        "source": "https://www.apple.com/newsroom/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "storage": {
        "value": "256GB · 512GB · 1TB",
        "source": "https://www.apple.com/newsroom/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "cameras": {
        "value": "48MP Fusion main + 48MP ultra-wide + 12MP 5x telephoto",
        "source": "https://www.apple.com/newsroom/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "battery": {
        "value": "Up to 33 h video playback",
        "source": "https://www.apple.com/newsroom/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "charging": {
        "value": "USB-C (USB 3); MagSafe up to 25W",
        "source": "https://www.apple.com/newsroom/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "software": {
        "value": "Introduced with iOS 18",
        "source": "https://www.apple.com/newsroom/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "dimensions": {
        "value": "6.9-inch class; titanium",
        "source": "https://www.apple.com/newsroom/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "connectivity": {
        "value": "5G, Wi-Fi 7, Bluetooth 5.3; IP68",
        "source": "https://www.apple.com/newsroom/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "ram": {
        "value": "8GB",
        "source": "https://www.gsmarena.com/apple_iphone_16_pro_max-13123.php",
        "checkedAt": "2026-10-13",
        "confidence": "medium",
        "note": "Third-party RAM figure; Apple does not publish RAM size in official tech specs."
      }
    },
    "regions": {
      "US": {
        "prices": [
          {
            "value": "$1,199",
            "source": "https://www.apple.com/newsroom/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Historical Apple launch price, NOT a current retail quote. US carrier-activation discounts or regional tax treatment may apply.",
            "storage": "256GB",
            "currency": "USD",
            "channel": "official-msrp"
          }
        ],
        "availability": {
          "value": "Released 2024",
          "source": "https://www.apple.com/newsroom/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Dual eSIM, no physical SIM tray",
          "source": "https://www.apple.com/newsroom/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; verify country-specific network bands before importing devices",
          "source": "https://www.apple.com/newsroom/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A3084",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      },
      "UK": {
        "prices": [
          {
            "value": "£1,199",
            "source": "https://www.apple.com/uk/newsroom/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Historical Apple launch price, NOT a current retail quote. US carrier-activation discounts or regional tax treatment may apply.",
            "storage": "256GB",
            "currency": "GBP",
            "channel": "official-msrp"
          }
        ],
        "availability": {
          "value": "Released 2024",
          "source": "https://www.apple.com/newsroom/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Nano-SIM + eSIM (regional variation possible)",
          "source": "https://www.apple.com/newsroom/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; verify country-specific network bands before importing devices",
          "source": "https://www.apple.com/newsroom/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A3296",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      },
      "DE": {
        "prices": [
          {
            "value": "€1,449",
            "source": "https://www.apple.com/de/newsroom/2024/09/apple-debuts-iphone-16-pro-iphone-16-pro-max/",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Historical Apple launch price, NOT a current retail quote. US carrier-activation discounts or regional tax treatment may apply.",
            "storage": "256GB",
            "currency": "EUR",
            "channel": "official-msrp"
          }
        ],
        "availability": {
          "value": "Released 2024",
          "source": "https://www.apple.com/newsroom/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Nano-SIM + eSIM (regional variation possible)",
          "source": "https://www.apple.com/newsroom/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; verify country-specific network bands before importing devices",
          "source": "https://www.apple.com/newsroom/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A3296",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      }
    }
  },
  "iphone16-e": {
    "common": {
      "chipset": {
        "value": "A18, Apple C1 modem",
        "source": "https://www.apple.com/newsroom/2025/02/apple-debuts-iphone-16e-a-powerful-new-member-of-the-iphone-16-family/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "display": {
        "value": "6.1-inch Super Retina XDR OLED",
        "source": "https://www.apple.com/newsroom/2025/02/apple-debuts-iphone-16e-a-powerful-new-member-of-the-iphone-16-family/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "storage": {
        "value": "128GB · 256GB · 512GB",
        "source": "https://www.apple.com/newsroom/2025/02/apple-debuts-iphone-16e-a-powerful-new-member-of-the-iphone-16-family/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "cameras": {
        "value": "48MP Fusion single rear camera with 2x optical-quality crop",
        "source": "https://www.apple.com/newsroom/2025/02/apple-debuts-iphone-16e-a-powerful-new-member-of-the-iphone-16-family/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "battery": {
        "value": "Apple describes best battery life for a 6.1-inch iPhone at launch",
        "source": "https://www.apple.com/newsroom/2025/02/apple-debuts-iphone-16e-a-powerful-new-member-of-the-iphone-16-family/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "charging": {
        "value": "USB-C; Qi wireless charging (no MagSafe magnets)",
        "source": "https://www.apple.com/newsroom/2025/02/apple-debuts-iphone-16e-a-powerful-new-member-of-the-iphone-16-family/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "software": {
        "value": "Introduced with iOS 18.3",
        "source": "https://www.apple.com/newsroom/2025/02/apple-debuts-iphone-16e-a-powerful-new-member-of-the-iphone-16-family/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "dimensions": {
        "value": "6.1-inch class; aluminum design",
        "source": "https://www.apple.com/newsroom/2025/02/apple-debuts-iphone-16e-a-powerful-new-member-of-the-iphone-16-family/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "connectivity": {
        "value": "5G, satellite SOS; IP68",
        "source": "https://www.apple.com/newsroom/2025/02/apple-debuts-iphone-16e-a-powerful-new-member-of-the-iphone-16-family/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      }
    },
    "regions": {
      "US": {
        "prices": [
          {
            "value": "$599",
            "source": "https://www.apple.com/newsroom/2025/02/apple-debuts-iphone-16e-a-powerful-new-member-of-the-iphone-16-family/",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Historical Apple launch price, NOT a current retail quote. US carrier-activation discounts or regional tax treatment may apply.",
            "storage": "128GB",
            "currency": "USD",
            "channel": "official-msrp"
          }
        ],
        "availability": {
          "value": "Released 28 February 2025",
          "source": "https://www.apple.com/newsroom/2025/02/apple-debuts-iphone-16e-a-powerful-new-member-of-the-iphone-16-family/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Dual eSIM, no physical SIM tray",
          "source": "https://www.apple.com/newsroom/2025/02/apple-debuts-iphone-16e-a-powerful-new-member-of-the-iphone-16-family/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; verify country-specific network bands before importing devices",
          "source": "https://www.apple.com/newsroom/2025/02/apple-debuts-iphone-16e-a-powerful-new-member-of-the-iphone-16-family/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A3212",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      },
      "UK": {
        "availability": {
          "value": "Released 28 February 2025",
          "source": "https://www.apple.com/newsroom/2025/02/apple-debuts-iphone-16e-a-powerful-new-member-of-the-iphone-16-family/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Nano-SIM + eSIM (regional variation possible)",
          "source": "https://www.apple.com/newsroom/2025/02/apple-debuts-iphone-16e-a-powerful-new-member-of-the-iphone-16-family/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; verify country-specific network bands before importing devices",
          "source": "https://www.apple.com/newsroom/2025/02/apple-debuts-iphone-16e-a-powerful-new-member-of-the-iphone-16-family/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A3409",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      },
      "DE": {
        "availability": {
          "value": "Released 28 February 2025",
          "source": "https://www.apple.com/newsroom/2025/02/apple-debuts-iphone-16e-a-powerful-new-member-of-the-iphone-16-family/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Nano-SIM + eSIM (regional variation possible)",
          "source": "https://www.apple.com/newsroom/2025/02/apple-debuts-iphone-16e-a-powerful-new-member-of-the-iphone-16-family/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; verify country-specific network bands before importing devices",
          "source": "https://www.apple.com/newsroom/2025/02/apple-debuts-iphone-16e-a-powerful-new-member-of-the-iphone-16-family/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A3409",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      }
    }
  },
  "iphone15-standard": {
    "common": {
      "chipset": {
        "value": "A16 Bionic",
        "source": "https://support.apple.com/en-us/111831",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "display": {
        "value": "6.1-inch Super Retina XDR OLED, Dynamic Island",
        "source": "https://support.apple.com/en-us/111831",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "storage": {
        "value": "128GB · 256GB · 512GB",
        "source": "https://support.apple.com/en-us/111831",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "cameras": {
        "value": "48MP main + 12MP ultra-wide; 2x optical-quality crop",
        "source": "https://support.apple.com/en-us/111831",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "battery": {
        "value": "Up to 20 h video playback",
        "source": "https://support.apple.com/en-us/111831",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "charging": {
        "value": "USB-C USB 2; MagSafe 15W",
        "source": "https://support.apple.com/en-us/111831",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "software": {
        "value": "Introduced with iOS 17",
        "source": "https://support.apple.com/en-us/111831",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "dimensions": {
        "value": "147.6 × 71.6 × 7.8 mm; 171 g",
        "source": "https://support.apple.com/en-us/111831",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "connectivity": {
        "value": "5G, Wi-Fi 6, Bluetooth 5.3; IP68",
        "source": "https://support.apple.com/en-us/111831",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      }
    },
    "regions": {
      "US": {
        "prices": [
          {
            "value": "$799",
            "source": "https://www.apple.com/newsroom/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Historical Apple launch price, NOT a current retail quote. US carrier-activation discounts or regional tax treatment may apply.",
            "storage": "128GB",
            "currency": "USD",
            "channel": "official-msrp"
          }
        ],
        "availability": {
          "value": "Released September 2023",
          "source": "https://support.apple.com/en-us/111831",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Dual eSIM, no physical SIM tray",
          "source": "https://support.apple.com/en-us/111831",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; country-specific bands differ",
          "source": "https://support.apple.com/en-us/111831",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A2846",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      },
      "UK": {
        "availability": {
          "value": "Released September 2023",
          "source": "https://support.apple.com/en-us/111831",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Nano-SIM + eSIM",
          "source": "https://support.apple.com/en-us/111831",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; country-specific bands differ",
          "source": "https://support.apple.com/en-us/111831",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A3090",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      },
      "DE": {
        "availability": {
          "value": "Released September 2023",
          "source": "https://support.apple.com/en-us/111831",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Nano-SIM + eSIM",
          "source": "https://support.apple.com/en-us/111831",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; country-specific bands differ",
          "source": "https://support.apple.com/en-us/111831",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A3090",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      }
    }
  },
  "iphone15-plus": {
    "common": {
      "chipset": {
        "value": "A16 Bionic",
        "source": "https://www.apple.com/newsroom/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "display": {
        "value": "6.7-inch Super Retina XDR OLED, Dynamic Island",
        "source": "https://www.apple.com/newsroom/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "storage": {
        "value": "128GB · 256GB · 512GB",
        "source": "https://www.apple.com/newsroom/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "cameras": {
        "value": "48MP main + 12MP ultra-wide; 2x optical-quality crop",
        "source": "https://www.apple.com/newsroom/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "battery": {
        "value": "Up to 26 h video playback",
        "source": "https://www.apple.com/newsroom/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "charging": {
        "value": "USB-C USB 2; MagSafe 15W",
        "source": "https://www.apple.com/newsroom/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "software": {
        "value": "Introduced with iOS 17",
        "source": "https://www.apple.com/newsroom/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "dimensions": {
        "value": "6.7-inch class; aluminum and glass",
        "source": "https://www.apple.com/newsroom/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "connectivity": {
        "value": "5G, Wi-Fi 6, Bluetooth 5.3; IP68",
        "source": "https://www.apple.com/newsroom/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      }
    },
    "regions": {
      "US": {
        "prices": [
          {
            "value": "$899",
            "source": "https://www.apple.com/newsroom/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Historical Apple launch price, NOT a current retail quote. US carrier-activation discounts or regional tax treatment may apply.",
            "storage": "128GB",
            "currency": "USD",
            "channel": "official-msrp"
          }
        ],
        "availability": {
          "value": "Released September 2023",
          "source": "https://support.apple.com/en-us/111831",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Dual eSIM, no physical SIM tray",
          "source": "https://support.apple.com/en-us/111831",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; country-specific bands differ",
          "source": "https://support.apple.com/en-us/111831",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A2847",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      },
      "UK": {
        "availability": {
          "value": "Released September 2023",
          "source": "https://support.apple.com/en-us/111831",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Nano-SIM + eSIM",
          "source": "https://support.apple.com/en-us/111831",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; country-specific bands differ",
          "source": "https://support.apple.com/en-us/111831",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A3094",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      },
      "DE": {
        "availability": {
          "value": "Released September 2023",
          "source": "https://support.apple.com/en-us/111831",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Nano-SIM + eSIM",
          "source": "https://support.apple.com/en-us/111831",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; country-specific bands differ",
          "source": "https://support.apple.com/en-us/111831",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A3094",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      }
    }
  },
  "iphone15-pro": {
    "common": {
      "chipset": {
        "value": "A17 Pro",
        "source": "https://www.apple.com/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "display": {
        "value": "6.1-inch Super Retina XDR OLED, ProMotion up to 120Hz",
        "source": "https://www.apple.com/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "storage": {
        "value": "128GB · 256GB · 512GB · 1TB",
        "source": "https://www.apple.com/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "cameras": {
        "value": "48MP main + 12MP ultra-wide + 12MP 3x telephoto",
        "source": "https://www.apple.com/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "battery": {
        "value": "Up to 23 h video playback",
        "source": "https://www.apple.com/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "charging": {
        "value": "USB-C USB 3 up to 10Gb/s; MagSafe 15W",
        "source": "https://www.apple.com/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "software": {
        "value": "Introduced with iOS 17",
        "source": "https://www.apple.com/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "dimensions": {
        "value": "6.1-inch class, titanium design",
        "source": "https://www.apple.com/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "connectivity": {
        "value": "5G, Wi-Fi 6E, Bluetooth 5.3; IP68",
        "source": "https://www.apple.com/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      }
    },
    "regions": {
      "US": {
        "prices": [
          {
            "value": "$999",
            "source": "https://www.apple.com/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Historical Apple launch price, NOT a current retail quote. US carrier-activation discounts or regional tax treatment may apply.",
            "storage": "128GB",
            "currency": "USD",
            "channel": "official-msrp"
          }
        ],
        "availability": {
          "value": "Released September 2023",
          "source": "https://www.apple.com/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Dual eSIM, no physical SIM tray",
          "source": "https://www.apple.com/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; country-specific bands differ",
          "source": "https://www.apple.com/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A2848",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      },
      "UK": {
        "availability": {
          "value": "Released September 2023",
          "source": "https://www.apple.com/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Nano-SIM + eSIM",
          "source": "https://www.apple.com/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; country-specific bands differ",
          "source": "https://www.apple.com/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A3102",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      },
      "DE": {
        "availability": {
          "value": "Released September 2023",
          "source": "https://www.apple.com/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Nano-SIM + eSIM",
          "source": "https://www.apple.com/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; country-specific bands differ",
          "source": "https://www.apple.com/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A3102",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      }
    }
  },
  "iphone15-promax": {
    "common": {
      "chipset": {
        "value": "A17 Pro",
        "source": "https://www.apple.com/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "display": {
        "value": "6.7-inch Super Retina XDR OLED, ProMotion up to 120Hz",
        "source": "https://www.apple.com/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "storage": {
        "value": "256GB · 512GB · 1TB",
        "source": "https://www.apple.com/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "cameras": {
        "value": "48MP main + 12MP ultra-wide + 12MP 5x telephoto",
        "source": "https://www.apple.com/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "battery": {
        "value": "Up to 29 h video playback",
        "source": "https://www.apple.com/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "charging": {
        "value": "USB-C USB 3 up to 10Gb/s; MagSafe 15W",
        "source": "https://www.apple.com/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "software": {
        "value": "Introduced with iOS 17",
        "source": "https://www.apple.com/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "dimensions": {
        "value": "6.7-inch class, titanium design",
        "source": "https://www.apple.com/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "connectivity": {
        "value": "5G, Wi-Fi 6E, Bluetooth 5.3; IP68",
        "source": "https://www.apple.com/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      }
    },
    "regions": {
      "US": {
        "prices": [
          {
            "value": "$1,199",
            "source": "https://www.apple.com/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Historical Apple launch price, NOT a current retail quote. US carrier-activation discounts or regional tax treatment may apply.",
            "storage": "256GB",
            "currency": "USD",
            "channel": "official-msrp"
          }
        ],
        "availability": {
          "value": "Released September 2023",
          "source": "https://www.apple.com/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Dual eSIM, no physical SIM tray",
          "source": "https://www.apple.com/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; country-specific bands differ",
          "source": "https://www.apple.com/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A2849",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      },
      "UK": {
        "availability": {
          "value": "Released September 2023",
          "source": "https://www.apple.com/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Nano-SIM + eSIM",
          "source": "https://www.apple.com/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; country-specific bands differ",
          "source": "https://www.apple.com/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A3106",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      },
      "DE": {
        "availability": {
          "value": "Released September 2023",
          "source": "https://www.apple.com/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Nano-SIM + eSIM",
          "source": "https://www.apple.com/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; country-specific bands differ",
          "source": "https://www.apple.com/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A3106",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      }
    }
  },
  "iphone14-standard": {
    "common": {
      "chipset": {
        "value": "A15 Bionic, 5-core GPU",
        "source": "https://support.apple.com/en-us/111850",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "display": {
        "value": "6.1-inch Super Retina XDR OLED",
        "source": "https://support.apple.com/en-us/111850",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "storage": {
        "value": "128GB · 256GB · 512GB",
        "source": "https://support.apple.com/en-us/111850",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "cameras": {
        "value": "12MP main + 12MP ultra-wide",
        "source": "https://support.apple.com/en-us/111850",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "battery": {
        "value": "Up to 20 h video playback",
        "source": "https://support.apple.com/en-us/111850",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "charging": {
        "value": "Lightning; MagSafe 15W",
        "source": "https://support.apple.com/en-us/111850",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "software": {
        "value": "Introduced with iOS 16",
        "source": "https://support.apple.com/en-us/111850",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "dimensions": {
        "value": "146.7 × 71.5 × 7.80 mm; 172 g",
        "source": "https://support.apple.com/en-us/111850",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "connectivity": {
        "value": "5G, Wi-Fi 6, Bluetooth 5.3; IP68",
        "source": "https://support.apple.com/en-us/111850",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      }
    },
    "regions": {
      "US": {
        "prices": [
          {
            "value": "$799",
            "source": "https://www.apple.com/newsroom/2023/03/hello-yellow-apple-introduces-new-iphone-14-and-iphone-14-plus/",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Historical Apple launch price, NOT a current retail quote. US carrier-activation discounts or regional tax treatment may apply.",
            "storage": "128GB",
            "currency": "USD",
            "channel": "official-msrp"
          }
        ],
        "availability": {
          "value": "Released 2022",
          "source": "https://support.apple.com/en-us/111850",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Dual eSIM, no physical SIM tray",
          "source": "https://support.apple.com/en-us/111850",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; country-specific bands differ",
          "source": "https://support.apple.com/en-us/111850",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A2649",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      },
      "UK": {
        "availability": {
          "value": "Released 2022",
          "source": "https://support.apple.com/en-us/111850",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Nano-SIM + eSIM",
          "source": "https://support.apple.com/en-us/111850",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; country-specific bands differ",
          "source": "https://support.apple.com/en-us/111850",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A2882",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      },
      "DE": {
        "availability": {
          "value": "Released 2022",
          "source": "https://support.apple.com/en-us/111850",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Nano-SIM + eSIM",
          "source": "https://support.apple.com/en-us/111850",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; country-specific bands differ",
          "source": "https://support.apple.com/en-us/111850",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A2882",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      }
    }
  },
  "iphone14-plus": {
    "common": {
      "chipset": {
        "value": "A15 Bionic, 5-core GPU",
        "source": "https://www.apple.com/newsroom/2023/03/hello-yellow-apple-introduces-new-iphone-14-and-iphone-14-plus/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "display": {
        "value": "6.7-inch Super Retina XDR OLED",
        "source": "https://www.apple.com/newsroom/2023/03/hello-yellow-apple-introduces-new-iphone-14-and-iphone-14-plus/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "storage": {
        "value": "128GB · 256GB · 512GB",
        "source": "https://www.apple.com/newsroom/2023/03/hello-yellow-apple-introduces-new-iphone-14-and-iphone-14-plus/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "cameras": {
        "value": "12MP main + 12MP ultra-wide",
        "source": "https://www.apple.com/newsroom/2023/03/hello-yellow-apple-introduces-new-iphone-14-and-iphone-14-plus/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "battery": {
        "value": "Up to 26 h video playback",
        "source": "https://www.apple.com/newsroom/2023/03/hello-yellow-apple-introduces-new-iphone-14-and-iphone-14-plus/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "charging": {
        "value": "Lightning; MagSafe 15W",
        "source": "https://www.apple.com/newsroom/2023/03/hello-yellow-apple-introduces-new-iphone-14-and-iphone-14-plus/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "software": {
        "value": "Introduced with iOS 16",
        "source": "https://www.apple.com/newsroom/2023/03/hello-yellow-apple-introduces-new-iphone-14-and-iphone-14-plus/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "dimensions": {
        "value": "6.7-inch class, aluminum and glass",
        "source": "https://www.apple.com/newsroom/2023/03/hello-yellow-apple-introduces-new-iphone-14-and-iphone-14-plus/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "connectivity": {
        "value": "5G, Wi-Fi 6, Bluetooth 5.3; IP68",
        "source": "https://www.apple.com/newsroom/2023/03/hello-yellow-apple-introduces-new-iphone-14-and-iphone-14-plus/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      }
    },
    "regions": {
      "US": {
        "prices": [
          {
            "value": "$899",
            "source": "https://www.apple.com/newsroom/2023/03/hello-yellow-apple-introduces-new-iphone-14-and-iphone-14-plus/",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Historical Apple launch price, NOT a current retail quote. US carrier-activation discounts or regional tax treatment may apply.",
            "storage": "128GB",
            "currency": "USD",
            "channel": "official-msrp"
          }
        ],
        "availability": {
          "value": "Released 2022",
          "source": "https://support.apple.com/en-us/111850",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Dual eSIM, no physical SIM tray",
          "source": "https://support.apple.com/en-us/111850",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; country-specific bands differ",
          "source": "https://support.apple.com/en-us/111850",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A2632",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      },
      "UK": {
        "availability": {
          "value": "Released 2022",
          "source": "https://support.apple.com/en-us/111850",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Nano-SIM + eSIM",
          "source": "https://support.apple.com/en-us/111850",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; country-specific bands differ",
          "source": "https://support.apple.com/en-us/111850",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A2886",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      },
      "DE": {
        "availability": {
          "value": "Released 2022",
          "source": "https://support.apple.com/en-us/111850",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Nano-SIM + eSIM",
          "source": "https://support.apple.com/en-us/111850",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; country-specific bands differ",
          "source": "https://support.apple.com/en-us/111850",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A2886",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      }
    }
  },
  "iphone14-pro": {
    "common": {
      "chipset": {
        "value": "A16 Bionic",
        "source": "https://www.apple.com/newsroom/2022/09/apple-debuts-iphone-14-pro-and-iphone-14-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "display": {
        "value": "6.1-inch Super Retina XDR OLED, 120Hz ProMotion, Always-On",
        "source": "https://www.apple.com/newsroom/2022/09/apple-debuts-iphone-14-pro-and-iphone-14-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "storage": {
        "value": "128GB · 256GB · 512GB · 1TB",
        "source": "https://www.apple.com/newsroom/2022/09/apple-debuts-iphone-14-pro-and-iphone-14-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "cameras": {
        "value": "48MP main + 12MP ultra-wide + 12MP 3x telephoto",
        "source": "https://www.apple.com/newsroom/2022/09/apple-debuts-iphone-14-pro-and-iphone-14-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "battery": {
        "value": "Up to 23 h video playback",
        "source": "https://www.apple.com/newsroom/2022/09/apple-debuts-iphone-14-pro-and-iphone-14-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "charging": {
        "value": "Lightning; MagSafe 15W",
        "source": "https://www.apple.com/newsroom/2022/09/apple-debuts-iphone-14-pro-and-iphone-14-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "software": {
        "value": "Introduced with iOS 16",
        "source": "https://www.apple.com/newsroom/2022/09/apple-debuts-iphone-14-pro-and-iphone-14-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "dimensions": {
        "value": "6.1-inch class; stainless steel",
        "source": "https://www.apple.com/newsroom/2022/09/apple-debuts-iphone-14-pro-and-iphone-14-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "connectivity": {
        "value": "5G, Wi-Fi 6, Bluetooth 5.3; IP68",
        "source": "https://www.apple.com/newsroom/2022/09/apple-debuts-iphone-14-pro-and-iphone-14-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      }
    },
    "regions": {
      "US": {
        "prices": [
          {
            "value": "$999",
            "source": "https://www.apple.com/newsroom/2022/09/apple-debuts-iphone-14-pro-and-iphone-14-pro-max/",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Historical Apple launch price, NOT a current retail quote. US carrier-activation discounts or regional tax treatment may apply.",
            "storage": "128GB",
            "currency": "USD",
            "channel": "official-msrp"
          }
        ],
        "availability": {
          "value": "Released 2022",
          "source": "https://support.apple.com/en-us/111850",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Dual eSIM, no physical SIM tray",
          "source": "https://support.apple.com/en-us/111850",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; country-specific bands differ",
          "source": "https://support.apple.com/en-us/111850",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A2650",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      },
      "UK": {
        "availability": {
          "value": "Released 2022",
          "source": "https://support.apple.com/en-us/111850",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Nano-SIM + eSIM",
          "source": "https://support.apple.com/en-us/111850",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; country-specific bands differ",
          "source": "https://support.apple.com/en-us/111850",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A2890",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      },
      "DE": {
        "availability": {
          "value": "Released 2022",
          "source": "https://support.apple.com/en-us/111850",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Nano-SIM + eSIM",
          "source": "https://support.apple.com/en-us/111850",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; country-specific bands differ",
          "source": "https://support.apple.com/en-us/111850",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A2890",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      }
    }
  },
  "iphone14-promax": {
    "common": {
      "chipset": {
        "value": "A16 Bionic",
        "source": "https://www.apple.com/newsroom/2022/09/apple-debuts-iphone-14-pro-and-iphone-14-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "display": {
        "value": "6.7-inch Super Retina XDR OLED, 120Hz ProMotion, Always-On",
        "source": "https://www.apple.com/newsroom/2022/09/apple-debuts-iphone-14-pro-and-iphone-14-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "storage": {
        "value": "128GB · 256GB · 512GB · 1TB",
        "source": "https://www.apple.com/newsroom/2022/09/apple-debuts-iphone-14-pro-and-iphone-14-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "cameras": {
        "value": "48MP main + 12MP ultra-wide + 12MP 3x telephoto",
        "source": "https://www.apple.com/newsroom/2022/09/apple-debuts-iphone-14-pro-and-iphone-14-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "battery": {
        "value": "Up to 29 h video playback",
        "source": "https://www.apple.com/newsroom/2022/09/apple-debuts-iphone-14-pro-and-iphone-14-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "charging": {
        "value": "Lightning; MagSafe 15W",
        "source": "https://www.apple.com/newsroom/2022/09/apple-debuts-iphone-14-pro-and-iphone-14-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "software": {
        "value": "Introduced with iOS 16",
        "source": "https://www.apple.com/newsroom/2022/09/apple-debuts-iphone-14-pro-and-iphone-14-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "dimensions": {
        "value": "6.7-inch class; stainless steel",
        "source": "https://www.apple.com/newsroom/2022/09/apple-debuts-iphone-14-pro-and-iphone-14-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      },
      "connectivity": {
        "value": "5G, Wi-Fi 6, Bluetooth 5.3; IP68",
        "source": "https://www.apple.com/newsroom/2022/09/apple-debuts-iphone-14-pro-and-iphone-14-pro-max/",
        "checkedAt": "2026-10-13",
        "confidence": "high"
      }
    },
    "regions": {
      "US": {
        "prices": [
          {
            "value": "$1,099",
            "source": "https://www.apple.com/newsroom/2022/09/apple-debuts-iphone-14-pro-and-iphone-14-pro-max/",
            "checkedAt": "2026-10-13",
            "confidence": "high",
            "note": "Historical Apple launch price, NOT a current retail quote. US carrier-activation discounts or regional tax treatment may apply.",
            "storage": "128GB",
            "currency": "USD",
            "channel": "official-msrp"
          }
        ],
        "availability": {
          "value": "Released 2022",
          "source": "https://support.apple.com/en-us/111850",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Dual eSIM, no physical SIM tray",
          "source": "https://support.apple.com/en-us/111850",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; country-specific bands differ",
          "source": "https://support.apple.com/en-us/111850",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A2651",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      },
      "UK": {
        "availability": {
          "value": "Released 2022",
          "source": "https://support.apple.com/en-us/111850",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Nano-SIM + eSIM",
          "source": "https://support.apple.com/en-us/111850",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; country-specific bands differ",
          "source": "https://support.apple.com/en-us/111850",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A2894",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      },
      "DE": {
        "availability": {
          "value": "Released 2022",
          "source": "https://support.apple.com/en-us/111850",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "sim": {
          "value": "Nano-SIM + eSIM",
          "source": "https://support.apple.com/en-us/111850",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "network": {
          "value": "5G; country-specific bands differ",
          "source": "https://support.apple.com/en-us/111850",
          "checkedAt": "2026-10-13",
          "confidence": "high"
        },
        "modelNumber": {
          "value": "A2894",
          "source": "https://support.apple.com/en-us/108044",
          "checkedAt": "2026-10-13",
          "confidence": "high",
          "note": "Apple identifies this hardware variant for the selected market."
        }
      }
    }
  }
};
