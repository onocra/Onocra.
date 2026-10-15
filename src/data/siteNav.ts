// Single source of truth for the ONOCRA side navigation.
// Used by the desktop sidebar (Layout.astro) and the mobile menu (Header.astro).
// `hash` is appended to the localised home URL; footer targets are added to homepage. `icon` is the inner markup of a 24x24 stroke SVG.

export type SiteNavItem = {
  id: "home" | "guides" | "reviews" | "latest" | "parenting" | "routes" | "contacts" | "policy";
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
    id: "guides",
    label: "Guides",
    hash: "#guides-reviews",
    icon: '<path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H11v17H7.5A3.5 3.5 0 0 0 4 22V5.5Z"></path><path d="M20 5.5A3.5 3.5 0 0 0 16.5 2H13v17h3.5A3.5 3.5 0 0 1 20 22V5.5Z"></path>',
  },
  {
    id: "reviews",
    label: "Reviews & Comparisons",
    hash: "phones/reviews/",
    icon: '<path d="M4 6h16M4 12h16M4 18h16"></path><path d="m8 4-2 2 2 2M16 10l2 2-2 2"></path>',
  },
  {
    id: "latest",
    label: "Latest from ONOCRA",
    hash: "#latest-onocra",
    icon: '<path d="M5 3h14v18H5z"></path><path d="M8 7h8M8 11h8M8 15h5"></path>',
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
    id: "contacts",
    label: "Contacts",
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
