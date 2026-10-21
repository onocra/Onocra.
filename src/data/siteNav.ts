// Single source of truth for ONOCRA homepage section navigation.
// Used by the desktop sidebar in Layout.astro and the Header mobile/dropdown menu.
// `hash` is appended to the localised home URL.
// `icon` is the inner markup of a 24x24 stroke SVG.

export type SiteNavItem = {
  id:
    | "home"
    | "ask"
    | "topics"
    | "guides"
    | "reviews"
    | "latest"
    | "choose"
    | "parenting"
    | "routes"
    | "loop"
    | "philosophy"
    | "contacts"
    | "policy";
  label: string;
  hash: string;
  icon: string;
};

export const SITE_NAV: SiteNavItem[] = [
  {
    id: "home",
    label: "Home",
    hash: "",
    icon: '<path d="m3 11 9-8 9 8"></path><path d="M5 10v10h14V10"></path><path d="M9 20v-6h6v6"></path>',
  },
  {
    id: "ask",
    label: "Ask ONOCRA",
    hash: "#ask-onocra",
    icon: '<circle cx="11" cy="11" r="6.5"></circle><path d="m20 20-4.2-4.2"></path>',
  },
  {
    id: "topics",
    label: "Explore Technology Topics",
    hash: "#topics",
    icon: '<rect x="3" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="3" width="7" height="7" rx="1"></rect><rect x="3" y="14" width="7" height="7" rx="1"></rect><rect x="14" y="14" width="7" height="7" rx="1"></rect>',
  },
  {
    id: "guides",
    label: "Diagnostics & Guides",
    hash: "#diagnostics-guides",
    icon: '<path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H11v17H7.5A3.5 3.5 0 0 0 4 22V5.5Z"></path><path d="M20 5.5A3.5 3.5 0 0 0 16.5 2H13v17h3.5A3.5 3.5 0 0 1 20 22V5.5Z"></path>',
  },
  {
    id: "reviews",
    label: "Reviews & Comparisons",
    hash: "#reviews-comparisons",
    icon: '<path d="M4 6h16M4 12h16M4 18h16"></path><path d="m8 4-2 2 2 2M16 10l2 2-2 2"></path>',
  },
  {
    id: "latest",
    label: "Latest from ONOCRA",
    hash: "#latest-onocra",
    icon: '<path d="M5 3h14v18H5z"></path><path d="M8 7h8M8 11h8M8 15h5"></path>',
  },
  {
    id: "choose",
    label: "Choose",
    hash: "#choose",
    icon: '<circle cx="12" cy="12" r="8.5"></circle><path d="m8.5 12.2 2.4 2.4 4.6-5"></path>',
  },
  {
    id: "parenting",
    label: "Digital Parenting",
    hash: "#digital-parenting",
    icon: '<circle cx="8" cy="8" r="3"></circle><circle cx="17" cy="9" r="2.5"></circle><path d="M2.5 20c.4-4 2.3-6 5.5-6s5.1 2 5.5 6"></path><path d="M13 15c1-.9 2.3-1.4 4-1.4 2.7 0 4.3 1.8 4.5 5.4"></path>',
  },
  {
    id: "routes",
    label: "ONOCRA Routes",
    hash: "#routes",
    icon: '<path d="M4 6h11"></path><path d="m12 3 3 3-3 3"></path><path d="M20 18H9"></path><path d="m12 15-3 3 3 3"></path><path d="M6 6v12"></path>',
  },
  {
    id: "loop",
    label: "Stay in the Loop",
    hash: "#stay-in-the-loop",
    icon: '<path d="M4 6h16v12H4z"></path><path d="m4 8 8 6 8-6"></path>',
  },
  {
    id: "philosophy",
    label: "Our Core Philosophy",
    hash: "#our-core-philosophy",
    icon: '<path d="M12 21s-7-4.4-7-10.2A4.8 4.8 0 0 1 13.2 7 4.8 4.8 0 0 1 21 10.8C21 16.6 12 21 12 21Z"></path><path d="M12 7.5v7"></path><path d="m9.6 12 2.4 2.4 2.6-3"></path>',
  },
  {
    id: "contacts",
    label: "Contact",
    hash: "#contact",
    icon: '<path d="M4 5h16v14H4z"></path><path d="m4 7 8 6 8-6"></path>',
  },
  {
    id: "policy",
    label: "Policy",
    hash: "#policy",
    icon: '<path d="M12 3 5 6v5.5c0 4.5 3 7.5 7 9.5 4-2 7-5 7-9.5V6l-7-3Z"></path><path d="m9.5 12 2 2 4-4"></path>',
  },
];
