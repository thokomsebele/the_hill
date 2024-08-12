const articlesArray = require("./articlesArray.json");
const heroSections = require("./heroSectionsObject");
let pagesArray = [
  {
    pageName: "index",
    metaDataPageDescription: `Paperless is an Enterprise Resource Planning (ERP) software. 
    ERP software refers to software used by organisations to manage their day to day activities 
    such as accounting, procurement, project management, risk management and compliance, 
    plus all supply chain operations.`,
    templatePage: "1_index.njk",
    outputHTML: "index.html",
    outputCSS: "1_index.css",
    pageSections: ["02_hero", "03_content"],
    heroSectionsArray: [
      heroSections.paperless_pharmacy_index,
      heroSections.paperless_retail_index,
      heroSections.paperless_hospital_index,
    ],
  },
  {
    pageName: "contact_us",
    metaDataPageDescription: `Founded in 2023, Paperless Integrated Solutions is an Enterprise Software company whose vision
    and focus is to provide world-class enterprise software solutions
    at affordable prices. We offer a myriad of business technology
    solutions across industries including finance, retail, healthcare,
    and manufacturing.`,
    templatePage: "3_contact_us.njk",
    outputHTML: "contact_us.html",
    outputCSS: "3_contact_us.css",
    pageSections: ["05_banner", "07_contact_us"],
    bannerTitle: "Contact Us",
    bannerDescription: `We are always ready to assist. Feel free to contact us using the details below.`,
  },
  {
    pageName: "catalogue",
    metaDataPageDescription: `Every business needs high quality hardware and software tools. 
    Pick and choose what your business needs from this page.`,
    templatePage: "4_catalogue.njk",
    outputHTML: "catalogue.html",
    outputCSS: "4_catalogue.css",
    pageSections: ["05_banner", "06_catalogue"],
    bannerTitle: "Catalogue",
    bannerDescription: `Every business needs high quality hardware and software tools. 
    Pick and choose what your business needs from this page.`,
  },
  {
    pageName: "paperless_retail",
    metaDataPageDescription: `Try Paperless Retail for free. 
    When it comes to a point of sale system for your retail outlet, 
    it is no longer a question of choice, but rather it is now a necessity. Below are five 
    good reasons why your retail outlet should move with the times and 
    make use of a POS system.`,
    templatePage: "5_paperless_retail.njk",
    outputHTML: "paperless_retail.html",
    outputCSS: "5_paperless_retail.css",
    pageSections: ["02_hero", "08_documentation"],
    heroSectionsArray: [heroSections.paperless_retail_information],
  },
];

articlesArray.forEach((a) => {
  let otherAs = articlesArray.filter((aa) => aa.articleId != a.articleId);
  otherAs.sort((a, b) => {
    if (a.articleId < b.articleId) return -1;
    else return 1;
  });
  otherAs.forEach((a) => {
    a.articleLink = `./${a.articleId}.html`;
  });
  pagesArray.push({
    articleBoolean: true,
    pageName: a.articleId,
    metaDataPageDescription: a.articleSummary,
    templatePage: "2_article.njk",
    outputHTML: `${a.articleId}.html`,
    outputCSS: `2_${a.articleId}.css`,
    pageSections: ["05_banner", "09_article"],
    cssFilesArray: [`2_${a.articleId}`],
    bannerTitle: "Article",
    bannerDescription: a.articleSummary,
    articleId: a.articleId,
    articleHeading: a.articleHeading,
    paragraphsArray: a.paragraphsArray,
    otherArticlesArray: otherAs,
  });
});

module.exports = pagesArray;
