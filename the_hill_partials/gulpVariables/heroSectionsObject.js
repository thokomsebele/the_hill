let pP_introduction = `This software is designed to help your retail outlet run more efficiently. Whilst 
  processing your day to day sales transactions, it gives you detailed reports on those transactions, 
  either on an hourly, daily, weekly or monthly basis, helping you keep track of the company’s inventory.`;
let pR_introduction = `This software is designed to help your retail outlet run more efficiently. Whilst 
  processing your day to day sales transactions, it gives you detailed reports on those transactions, 
  either on an hourly, daily, weekly or monthly basis, helping you keep track of the company’s inventory.`;
let pH_introduction = `This software is designed to help your retail outlet run more efficiently. Whilst 
  processing your day to day sales transactions, it gives you detailed reports on those transactions, 
  either on an hourly, daily, weekly or monthly basis, helping you keep track of the company’s inventory.`;

let pP_screenshotAltText = `A screen displaying the free trial version of Paperless Retail software.`;
let pR_screenshotAltText = `A screen displaying the free trial version of Paperless Retail software.`;
let pH_screenshotAltText = `A screen displaying the free trial version of Paperless Retail software.`;

let pX_features = [
  { featureIcon: "support.njk", featureLabel: "reliable support" },
  { featureIcon: "reports02.njk", featureLabel: "detailed reports" },
  { featureIcon: "secure.njk", featureLabel: "secure" },
  {
    featureIcon: "currency.njk",
    featureLabel: "multi-currency transactions",
  },
];
let pX_windowsVerObj = {
  paragraphType: "mini",
  paragraphText: "Windows 11, Windows 10, Windows 8, Windows 7",
};
let pX_paperlessVerObj = {
  paragraphType: "mini",
  paragraphText: "version 1.0.1",
};

module.exports = {
  paperless_pharmacy_index: {
    heroSlideId: "paperless_pharmacy",
    heroSoftwareLogo: "paperless_pharmacy.njk",
    heroSoftwareShortname: "Pharmacy",
    heroHeaderText: "Paperless Pharmacy",
    heroParagraphsArray: [
      {
        paragraphType: "paragraph",
        paragraphText: pP_introduction,
      },
      {
        paragraphType: "paragraph",
        paragraphText: `It also has special multi-currency settings that simplify the calculation of change.`,
      },
      {
        paragraphType: "bold",
        paragraphText: "Designed to help your business succeed.",
      },
    ],
    heroFeaturesArray: pX_features,
    heroButtonsArray: [
      {
        buttonHref: "./paperless_pharmacy.html",
        buttonClass: "ctaBtn",
        buttonTitle: "Paperless Pharmacy more information",
        buttonIcon: "information.njk",
        buttonLabel: "More information",
      },
    ],
    screenshotImageName: "paperless_pharmacy",
    screenshotImageAlternativeText: pP_screenshotAltText,
  },
  paperless_pharmacy_information: {
    heroSlideId: "paperless_pharmacy",
    heroSoftwareLogo: "paperless_pharmacy.njk",
    heroSoftwareShortname: "Pharmacy",
    heroHeaderText: "Paperless Pharmacy",
    heroParagraphsArray: [
      {
        paragraphType: "paragraph",
        paragraphText: pP_introduction,
      },
      {
        paragraphType: "paragraph",
        paragraphText: `It also has special multi-currency settings that simplify the calculation of change.`,
      },
      {
        paragraphType: "bold",
        paragraphText: "Compatible with :",
      },
      pX_windowsVerObj,
      pX_paperlessVerObj,
    ],
    heroButtonsArray: [
      {
        buttonHref: `RESOURCESFOLDER/manuals/paperless_pharmacy/paperless_pharmacy_manual.pdf`,
        buttonClass: "ctaBtn",
        buttonTitle: "",
        buttonIcon: "manual.njk",
        buttonLabel: "Get manual",
      },
    ],
    screenshotImageName: "paperless_pharmacy",
    screenshotImageAlternativeText: pP_screenshotAltText,
  },
  paperless_retail_index: {
    heroSlideId: "paperless_retail",
    heroSoftwareLogo: "paperless_retail.njk",
    heroSoftwareShortname: "Retail",
    heroHeaderText: "Paperless Retail",
    heroParagraphsArray: [
      {
        paragraphType: "paragraph",
        paragraphText: pR_introduction,
      },
      {
        paragraphType: "paragraph",
        paragraphText: `It also has special multi-currency settings that simplify the calculation of change.`,
      },
      {
        paragraphType: "bold",
        paragraphText: "Designed to help your business succeed.",
      },
    ],
    heroFeaturesArray: pX_features,
    heroButtonsArray: [
      {
        buttonHref: "./paperless_retail.html",
        buttonClass: "ctaBtn",
        buttonTitle: "Paperless Retail more information",
        buttonIcon: "information.njk",
        buttonLabel: "More information",
      },
    ],
    screenshotImageName: "paperless_retail",
    screenshotImageAlternativeText: pR_screenshotAltText,
  },
  paperless_retail_information: {
    heroSlideId: "paperless_retail",
    heroSoftwareLogo: "paperless_retail.njk",
    heroSoftwareShortname: "Retail",
    heroHeaderText: "Paperless Retail",
    heroParagraphsArray: [
      {
        paragraphType: "paragraph",
        paragraphText: pR_introduction,
      },
      {
        paragraphType: "paragraph",
        paragraphText: `It also has special multi-currency settings that simplify the calculation of change.`,
      },
      {
        paragraphType: "bold",
        paragraphText: "Compatible with :",
      },
      pX_windowsVerObj,
      pX_paperlessVerObj,
    ],
    heroButtonsArray: [
      {
        buttonHref: `RESOURCESFOLDER/manuals/paperless_retail/paperless_retail_manual.pdf`,
        buttonClass: "ctaBtn",
        buttonTitle: "",
        buttonIcon: "manual.njk",
        buttonLabel: "Get manual",
      },
    ],
    screenshotImageName: "paperless_retail",
    screenshotImageAlternativeText: pR_screenshotAltText,
  },
  paperless_hospital_index: {
    heroSlideId: "paperless_hospital",
    heroSoftwareLogo: "paperless_hospital.njk",
    heroSoftwareShortname: "Hospital",
    heroHeaderText: "Paperless Hospital",
    heroParagraphsArray: [
      {
        paragraphType: "paragraph",
        paragraphText: pH_introduction,
      },
      {
        paragraphType: "paragraph",
        paragraphText: `It also has special multi-currency settings that simplify the calculation of change.`,
      },
      {
        paragraphType: "bold",
        paragraphText: "Designed to help your business succeed.",
      },
    ],
    heroFeaturesArray: pX_features,
    heroButtonsArray: [
      {
        buttonHref: "./paperless_hospital.html",
        buttonClass: "ctaBtn",
        buttonTitle: "Paperless Retail more information",
        buttonIcon: "information.njk",
        buttonLabel: "More information",
      },
    ],
    screenshotImageName: "paperless_hospital",
    screenshotImageAlternativeText: pH_screenshotAltText,
  },
  paperless_hospital_information: {
    heroSlideId: "paperless_hospital",
    heroSoftwareLogo: "paperless_hospital.njk",
    heroSoftwareShortname: "Hospital",
    heroHeaderText: "Paperless Hospital",
    heroParagraphsArray: [
      {
        paragraphType: "paragraph",
        paragraphText: pH_introduction,
      },
      {
        paragraphType: "paragraph",
        paragraphText: `It also has special multi-currency settings that simplify the calculation of change.`,
      },
      {
        paragraphType: "bold",
        paragraphText: "Compatible with :",
      },
      pX_windowsVerObj,
      pX_paperlessVerObj,
    ],
    heroButtonsArray: [
      {
        buttonHref: `RESOURCESFOLDER/manuals/paperless_retail/paperless_retail_manual.pdf`,
        buttonClass: "ctaBtn",
        buttonTitle: "",
        buttonIcon: "manual.njk",
        buttonLabel: "Get manual",
      },
    ],
    screenshotImageName: "paperless_hospital",
    screenshotImageAlternativeText: pH_screenshotAltText,
  },
};
