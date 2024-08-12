const gulp = require("gulp");
const rename = require("gulp-rename");
const data = require("gulp-data");
const concat = require("gulp-concat");
const nunjucksRender = require("gulp-nunjucks-render");
const cleanCSS = require("gulp-clean-css");
const htmlmin = require("gulp-htmlmin");
const sectionsArray = require("./gulpVariables/sectionsArray");
// const pagesArray = require("./gulpVariables/pagesArray");
let pageLinks = {
  index: "./index.html",
  article_a: "./article_a.html",
  article_b: "./article_b.html",
  article_c: "./article_c.html",
  contact_us: "./contact_us.html",
  catalogue: "./catalogue.html",
  paperless_retail: "./paperless_retail.html",
};

gulp.task("sections", async function () {
  return await new Promise(async (resolveA) => {
    for (s of sectionsArray) {
      s.jsFolder = "../02_JS";
      s.resourcesFolder = "../04_Resources";
      s.pageLinks = pageLinks;
      if (
        typeof s.heroButtonsArray == "object" &&
        Array.isArray(s.heroButtonsArray)
      ) {
        s.heroButtonsArray.forEach((btn) => {
          if (typeof btn.buttonHref == "string") {
            let strA = "RESOURCESFOLDER";
            let strB = s.resourcesFolder;
            btn.buttonHref = btn.buttonHref.replace(strA, strB);
          }
        });
      }
      await new Promise((resolveB) => {
        gulp
          .src("98_Sections/00_sectionTemplate.njk")
          .pipe(data(s))
          .pipe(nunjucksRender({ path: s.sectionSrcPathArray }))
          .pipe(rename(s.sectionOutputFileName))
          .pipe(gulp.dest("98_Sections/"))
          .on("end", resolveB);
      });
    }
    resolveA();
  });
});

// gulp.task("pages", async function () {
//   return await new Promise(async (resolveA) => {
//     for (pg of pagesArray) {
//       pg.jsFolder = "./js";
//       pg.resourcesFolder = "./resources";
//       let pgSects = ["01_navbar", "04_why", "10_footer"];
//       pgSects = pgSects.concat(pg.pageSections);
//       let htmlPartials = [
//         "03_HTML/00_partials/",
//         "03_HTML/00_partials/icons/",
//         "03_HTML/00_partials/logos/",
//       ];
//       pgSects.forEach((s) => {
//         htmlPartials.push(`03_HTML/${s}/`);
//       });
//       pg.pageLinks = pageLinks;
//       if (
//         typeof pg.heroButtonsArray == "object" &&
//         Array.isArray(pg.heroButtonsArray)
//       ) {
//         pg.heroButtonsArray.forEach((btn) => {
//           if (typeof btn.buttonHref == "string") {
//             let strA = "RESOURCESFOLDER";
//             let strB = pg.resourcesFolder;
//             btn.buttonHref = btn.buttonHref.replace(strA, strB);
//           }
//         });
//       }
//       await new Promise((resolveB) => {
//         gulp
//           .src(`97_Templates/${pg.templatePage}`)
//           .pipe(data(pg))
//           .pipe(nunjucksRender({ path: htmlPartials }))
//           .pipe(rename(pg.outputHTML))
//           .pipe(htmlmin({ collapseWhitespace: true }))
//           .pipe(gulp.dest("00_Pages/"))
//           .on("end", resolveB);
//       });
//       let cssPartials = [
//         "01_CSS/00_common/00_common.css",
//         "01_CSS/00_common/00_common_media_queries.css",
//         "01_CSS/01_navbar/01_hamburger.css",
//       ];
//       pgSects.forEach((s) => {
//         cssPartials.push(`01_CSS/${s}/${s}.css`);
//         cssPartials.push(`01_CSS/${s}/${s}_media_queries.css`);
//       });
//       await new Promise((resolveC) => {
//         gulp
//           .src(cssPartials)
//           .pipe(concat(pg.outputCSS))
//           .pipe(cleanCSS())
//           .pipe(gulp.dest("00_Pages/css/"))
//           .on("end", resolveC);
//       });
//     }
//     resolveA();
//   });
// });

gulp.task("watch", function () {
  gulp.watch("**/*.*", gulp.series("sections"));
});

gulp.task("default", gulp.parallel("sections"));
