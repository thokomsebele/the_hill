module.exports = [
  {
    pageName: "index",
    metaDataPageDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue turpis id tellus vestibulum, sit amet vulputate ante finibus. Aenean lacinia nisl sapien, ut molestie sapien elementum sed. In fringilla aliquam tortor, quis lobortis purus sollicitudin quis. In hac habitasse platea dictumst. Nullam congue tempus sapien ut laoreet. Donec quis odio eget lacus dictum pulvinar. Aliquam iaculis odio nec nibh hendrerit posuere. Nunc nec commodo sem, et faucibus libero.`,
    templatePage: "1_index.njk",
    outputHTML: "index.html",
    outputCSS: "1_index.css",
    pageSections: [
      "02_Carousel",
      "09_Welcome",
      "04_About",
      "10_Video_Curriculum",
      "06_Staff",
      "07_Updates",
      "08_Footer",
    ],
  },
  {
    pageName: "about",
    metaDataPageDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue turpis id tellus vestibulum, sit amet vulputate ante finibus. Aenean lacinia nisl sapien, ut molestie sapien elementum sed. In fringilla aliquam tortor, quis lobortis purus sollicitudin quis. In hac habitasse platea dictumst. Nullam congue tempus sapien ut laoreet. Donec quis odio eget lacus dictum pulvinar. Aliquam iaculis odio nec nibh hendrerit posuere. Nunc nec commodo sem, et faucibus libero.`,
    templatePage: "2_about.njk",
    outputHTML: "about.html",
    outputCSS: "2_about.css",
    pageSections: ["11_Content", "08_Footer"],
  },
  {
    pageName: "curriculum",
    metaDataPageDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue turpis id tellus vestibulum, sit amet vulputate ante finibus. Aenean lacinia nisl sapien, ut molestie sapien elementum sed. In fringilla aliquam tortor, quis lobortis purus sollicitudin quis. In hac habitasse platea dictumst. Nullam congue tempus sapien ut laoreet. Donec quis odio eget lacus dictum pulvinar. Aliquam iaculis odio nec nibh hendrerit posuere. Nunc nec commodo sem, et faucibus libero.`,
    templatePage: "3_curriculum.njk",
    outputHTML: "curriculum.html",
    outputCSS: "3_curriculum.css",
    pageSections: ["10_Video_Curriculum", "12_Subjects", "08_Footer"],
  },
];
