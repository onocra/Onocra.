/** Editorially curated, attributable external review excerpts (PARAPHRASES only).
 * Add a row only after an editor has opened and verified the exact article URL,
 * tested model/variant, publication date and claimed findings.
 * Never use a publisher homepage as a citation for a specific claim.
 */
export type PublisherId = 'consumer-reports' | 'pcmag' | 'which'  | 'notebookcheck';
export type ReviewRegion = 'US' | 'EU';
export type EvidenceStatus = 'verified' | 'pending';
export type ReviewFinding = {
  subject: string; // e.g. Battery endurance, Camera, Display
  finding: string; // ONOCRA's short paraphrase, not copied article text
  direction: 'positive' | 'mixed' | 'negative' | 'neutral';
};
export interface ThirdPartyReview {
  deviceId: string;
  publisher: PublisherId;
  articleTitle: string;
  articleUrl: string; // exact https article URL
  publishedOn: string; // YYYY-MM-DD
  checkedOn: string; // YYYY-MM-DD
  variant: string; // precise tested variant/region
  methodologyNote?: string;
  findings: ReviewFinding[];
  status: EvidenceStatus;
}
export const PUBLISHERS: Record<PublisherId, { name: string; region: ReviewRegion; homepage: string }> = {
  'consumer-reports': { name: 'Consumer Reports', region: 'US', homepage: 'https://www.consumerreports.org/' },
  pcmag: { name: 'PCMag', region: 'US', homepage: 'https://www.pcmag.com/' },
  which: { name: 'Which?', region: 'EU', homepage: 'https://www.which.co.uk/' },
  notebookcheck: { name: 'Notebookcheck', region: 'EU', homepage: 'https://www.notebookcheck.net/' },
};
/** Empty until individual reviews have been verified. This is intentional. */
export const thirdPartyReviews: ThirdPartyReview[] = [];
