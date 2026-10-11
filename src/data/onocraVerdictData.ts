// Optional editorial content for "The ONOCRA final verdict" on the step 5 page.
// ONOCRA = Optimized Need, Opportunity, Cost-benefit, Risk, Actionable verdict.
//
// Without an entry here the verdict is still built from your verified data: the visitor's own answers,
// verified prices, the Generational Leap tally, the model's trade-offs and the existing recommendation.
//
// EVIDENCE RULES
//  - `published: false` keeps the score, action and every editorial bullet hidden. Prepare an entry,
//    check each claim, then set published: true.
//  - Never type a price. Use the tokens below; they are filled from verified catalogue prices and fall
//    back to neutral wording when a price is not verified.
//        {nameA} {nameB}   device names, in the order of `pair`
//        {priceA} {priceB} verified price in the visitor's country
//        {premium}         price difference, or the word "price" when it cannot be worked out
//        {extra}           "a 20% cost premium", or "the extra cost" when it cannot be worked out
//  - Mark anything that is not a verified fact with `kind` so visitors see a label:
//        "forecast"  a prediction (for example a future price drop)
//        "estimate"  an editorial estimate (repair cost, adjustment time)
//        "claim"     a manufacturer claim or an unverified benchmark figure

export type Tone = "go" | "consider" | "skip" | "neutral";
export type Kind = "forecast" | "estimate" | "claim";
export type Bullet = { lead?: string; text: string; kind?: Kind };

export type FinalEntry = {
  /** the two device ids, either order (previous model + new model, or two brands) */
  pair: [string, string];
  asOf: string;
  published: boolean;
  score?: number; // 0 to 100
  action: { label: string; tone: Tone; pick?: string }; // pick = device id to "Buy", optional
  quote: string;
  need: Bullet[];
  opportunity: Bullet[];
  cost: Bullet[];
  risk: Bullet[];
  verdict: Bullet[];
};

export const finalVerdicts: FinalEntry[] = [
  {
    // TEMPLATE from your Pixel 10 Pro vs Galaxy S26 Ultra blueprint. Change the ids to real device ids,
    // check every claim, then set published: true. The score is a placeholder from your layout.
    pair: ["google-pixel-10-pro", "samsung-galaxy-s26-ultra"],
    asOf: "Oct 2026",
    published: false,
    score: 82,
    action: { label: "Google for value", tone: "go", pick: "google-pixel-10-pro" },
    quote:
      "The {premium} premium for the {nameB} does not translate to everyday utility over the {nameA} for the vast majority of consumers.",
    need: [
      {
        lead: "The baseline profile:",
        text: "Designed for users migrating from a 3 to 4 year old flagship who want native AI capabilities and an elite camera system without cross-brand friction.",
      },
      {
        lead: "The mismatch:",
        text: "If your workflow strictly demands the Samsung S-Pen or native desktop integration (Samsung DeX), the value equation changes entirely.",
      },
    ],
    opportunity: [
      { lead: "Google lifecycle:", text: "Launched at {priceA}, with carrier trade-in incentives available right now.", kind: "claim" },
      {
        lead: "Samsung lifecycle:",
        text: "Currently {priceB} at retail. Historical tracking suggests a retail drop of roughly 15% in Q2, which would make an immediate purchase less efficient.",
        kind: "forecast",
      },
    ],
    cost: [
      {
        lead: "The {premium} premium reality:",
        text: "For {extra}, the Samsung gives a marginal increase in processing bandwidth (about +13% multi-core) and an extra 5x optical telephoto lens.",
        kind: "claim",
      },
      {
        lead: "The diminishing return:",
        text: "For daily tasks, including web scrolling, standard photography and UI multitasking, the experience is functionally identical.",
      },
    ],
    risk: [
      { lead: "Hardware vulnerability:", text: "The Samsung's larger camera housing has a higher estimated repair cost if damaged out of warranty.", kind: "estimate" },
      {
        lead: "Software transition:",
        text: "Moving from Samsung's One UI to Google's clean Pixel interface typically needs a 3 to 5 day adjustment. Watch for the cloud photo backup migration steps.",
        kind: "estimate",
      },
    ],
    verdict: [
      { lead: "Buy the {nameA} if:", text: "you prioritise photography consistency, value clean Android system software and want to keep the saving in your pocket." },
      { lead: "Buy the {nameB} only if:", text: "you are locked into the Samsung ecosystem, need hyper-zoom telephoto optics, or use the S-Pen for business tasks daily." },
    ],
  },
];
