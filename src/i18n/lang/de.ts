import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Startseite",
    posts: "Beiträge",
    tags: "Tags",
    about: "Über uns",
    archives: "Archiv",
    search: "Suche",
  },
  post: {
    publishedAt: "Veröffentlicht am",
    updatedAt: "Aktualisiert",
    sharePostIntro: "Diesen Beitrag teilen:",
    sharePostOn: "Diesen Beitrag auf {{platform}} teilen",
    sharePostViaEmail: "Diesen Beitrag per E-Mail teilen",
    tagLabel: "Tags",
    backToTop: "Nach oben",
    goBack: "Zurück",
    editPage: "Seite bearbeiten",
    previousPost: "Vorheriger Beitrag",
    nextPost: "Nächster Beitrag",
  },
  pagination: {
    prev: "Zurück",
    next: "Weiter",
    page: "Seite",
  },
  home: {
    socialLinks: "Soziale Netzwerke",
    featured: "Empfohlen",
    recentPosts: "Neueste Beiträge",
    allPosts: "Alle Beiträge",
  },
  footer: {
    copyright: "Urheberrecht",
    allRightsReserved: "Alle Rechte vorbehalten.",
  },
  pages: {
    tagTitle: "Tag",
    tagDesc: "Alle Artikel mit diesem Tag",

    tagsTitle: "Tags",
    tagsDesc: "Alle in Beiträgen verwendeten Tags.",

    postsTitle: "Beiträge",
    postsDesc: "Alle veröffentlichten Artikel.",

    archivesTitle: "Archiv",
    archivesDesc: "Alle archivierten Artikel.",

    searchTitle: "Suche",
    searchDesc: "Artikel durchsuchen ...",
  },
  a11y: {
    skipToContent: "Zum Inhalt springen",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    toggleTheme: "Darstellung wechseln",
    searchPlaceholder: "Beiträge durchsuchen...",
    noResults: "Keine Ergebnisse gefunden",
    goToPreviousPage: "Zur vorherigen Seite",
    goToNextPage: "Zur nächsten Seite",
  },
  notFound: {
    title: "404 – Nicht gefunden",
    message: "Seite nicht gefunden",
    goHome: "Zur Startseite",
  },
} satisfies UIStrings;
