const articlesArray = require("./articlesArray.json");
const heroSections = require("./heroSectionsObject");
let sectionsArray = [
  {
    sectionTitle: "Navigation Bar",
    sectionSrcPathArray: [
      "03_HTML/00_partials/logos/",
      "03_HTML/00_partials/icons/",
      "03_HTML/01_navbar/",
    ],
    sectionIncludedTemplateString: "01_navbar.njk",
    sectionOutputFileName: "01_navbar.html",
    cssFilePath: "../01_CSS/01_navbar",
    cssFilesArray: ["01_hamburger", "01_navbar", "01_navbar_media_queries"],
  },
  {
    sectionTitle: "Hero - Homepage",
    sectionSrcPathArray: ["03_HTML/00_partials/icons/", "03_HTML/02_hero/"],
    sectionIncludedTemplateString: "02_hero.njk",
    sectionOutputFileName: "02_hero.html",
    cssFilePath: "../01_CSS/02_hero",
    cssFilesArray: ["02_hero", "02_hero_media_queries"],
    heroSectionsArray: [heroSections.paperless_retail_index],
  },
  {
    sectionTitle: "Hero - Paperless Retail",
    sectionSrcPathArray: ["03_HTML/00_partials/icons/", "03_HTML/02_hero/"],
    sectionIncludedTemplateString: "02_hero.njk",
    sectionOutputFileName: "02_hero_paperless_retail.html",
    cssFilePath: "../01_CSS/02_hero",
    cssFilesArray: ["02_hero", "02_hero_media_queries"],
    heroSectionsArray: [heroSections.paperless_retail_information],
  },
  {
    sectionTitle: "About",
    sectionSrcPathArray: ["03_HTML/03_content/"],
    sectionIncludedTemplateString: "03_contentA.njk",
    sectionOutputFileName: "03_about.html",
    cssFilePath: "../01_CSS/03_content",
    cssFilesArray: ["03_content", "03_content_media_queries"],
  },
  {
    sectionTitle: "Promotions",
    sectionSrcPathArray: ["03_HTML/00_partials/icons/", "03_HTML/03_content/"],
    sectionIncludedTemplateString: "03_contentB.njk",
    sectionOutputFileName: "03_promo.html",
    cssFilePath: "../01_CSS/03_content",
    cssFilesArray: ["03_content", "03_content_media_queries"],
  },
  {
    sectionTitle: "Why",
    sectionSrcPathArray: ["03_HTML/00_partials/icons/", "03_HTML/04_why/"],
    sectionIncludedTemplateString: "04_why.njk",
    sectionOutputFileName: "04_why.html",
    cssFilePath: "../01_CSS/04_why",
    cssFilesArray: ["04_why", "04_why_media_queries"],
  },
  {
    sectionTitle: "Banner",
    sectionSrcPathArray: ["03_HTML/05_banner/"],
    sectionIncludedTemplateString: "05_banner.njk",
    sectionOutputFileName: "05_banner.html",
    cssFilePath: "../01_CSS/05_banner",
    cssFilesArray: ["05_banner", "05_banner_media_queries"],
    bannerTitle: "Lorem ipsum dolor",
    bannerDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in nulla sem. Maecenas ullamcorper pharetra magna, nec ullamcorper velit fringilla vestibulum. Sed vitae hendrerit turpis. Duis malesuada mollis justo. Donec et felis efficitur, aliquam nibh eu, semper nisl. Donec at turpis nulla.`,
  },
  {
    sectionTitle: "Catalogue",
    sectionSrcPathArray: [
      "03_HTML/00_partials/icons/",
      "03_HTML/06_catalogue/",
    ],
    sectionIncludedTemplateString: "06_catalogue.njk",
    sectionOutputFileName: "06_catalogue.html",
    cssFilePath: "../01_CSS/06_catalogue",
    cssFilesArray: ["06_catalogue", "06_catalogue_media_queries"],
  },
  {
    sectionTitle: "Contact Us",
    sectionSrcPathArray: ["03_HTML/07_contact_us/"],
    sectionIncludedTemplateString: "07_contact_us.njk",
    sectionOutputFileName: "07_contact_us.html",
    cssFilePath: "../01_CSS/07_contact_us",
    cssFilesArray: ["07_contact_us", "07_contact_us_media_queries"],
  },
  {
    sectionTitle: "Documentation",
    sectionSrcPathArray: [
      "03_HTML/00_partials/icons/",
      "03_HTML/08_documentation/",
    ],
    sectionIncludedTemplateString: "08_documentation.njk",
    sectionOutputFileName: "08_documentation.html",
    cssFilePath: "../01_CSS/08_documentation",
    cssFilesArray: ["08_documentation", "08_documentation_media_queries"],
  },
  {
    sectionTitle: "Footer",
    sectionSrcPathArray: ["03_HTML/00_partials/logos/", "03_HTML/10_footer/"],
    sectionIncludedTemplateString: "10_footer.njk",
    sectionOutputFileName: "10_footer.html",
    cssFilePath: "../01_CSS/10_footer",
    cssFilesArray: ["10_footer", "10_footer_media_queries"],
  },
];

articlesArray.forEach((a) => {
  let otherAs = articlesArray.filter((aa) => aa.articleId != a.articleId);
  otherAs.sort((a, b) => {
    if (a.articleId < b.articleId) return -1;
    else return 1;
  });
  sectionsArray.push({
    articleBoolean: true,
    sectionTitle: "Article",
    sectionSrcPathArray: ["03_HTML/09_article/"],
    sectionIncludedTemplateString: "09_article.njk",
    sectionOutputFileName: `09_${a.articleId}.html`,
    cssFilePath: "../01_CSS/09_article",
    cssFilesArray: ["09_article", "09_article_media_queries"],
    articleId: a.articleId,
    articleHeading: a.articleHeading,
    paragraphsArray: a.paragraphsArray,
    otherArticlesArray: otherAs,
  });
});

module.exports = sectionsArray;
