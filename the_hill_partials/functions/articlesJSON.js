const fs = require("fs");
const path = require("path");
new Promise((resolveA, rejectA) => {
  let pathTodirectory = path.join(__dirname, "../04_Resources/articles/");
  fs.readdir(pathTodirectory, async (error, files) => {
    if (error) rejectA("Error occured");
    else {
      let articlesArray = [];
      for (let i = 0; i < files.length; i++) {
        if (path.extname(files[i]) === ".txt") {
          await new Promise((resolveB, rejectB) => {
            let pathToFile = path.join(pathTodirectory, files[i]);
            fs.readFile(pathToFile, "utf8", function (error, textData) {
              if (error) rejectB(error);
              else {
                let pArr = textData.split("\n\n\n\n");
                let s1 = "article_id : ";
                let s2 = "article_heading : ";
                let s3 = "article_summary : ";
                pArr = pArr
                  .filter((p) => p)
                  .map((p) => p.trim())
                  .filter((p) => p);
                function specialPar(p) {
                  return p.includes(s1) || p.includes(s2) || p.includes(s3);
                }
                let pArrSpec = pArr.filter((p) => specialPar(p));
                let a1 = pArrSpec.find((p) => p.includes(s1));
                let a2 = pArrSpec.find((p) => p.includes(s2));
                let a3 = pArrSpec.find((p) => p.includes(s3));
                if (a1) a1 = a1.replace(s1, "");
                if (a2) a2 = a2.replace(s2, "");
                if (a3) a3 = a3.replace(s3, "");
                let parArray = pArr
                  .filter((p) => !specialPar(p))
                  .map((p) => {
                    let headerBool = p.slice(0, 3) === "HH ";
                    if (headerBool) p = p.replace("HH ", "");
                    let bArr = [];
                    if (p.includes("BBB")) {
                      bArr = p
                        .split("\n")
                        .filter((s) => {
                          if (!s || !s.trim()) return false;
                          return s.trim().slice(0, 3) === "BBB";
                        })
                        .map((b) => {
                          p = p.replace(b, "");
                          b = b.replace("BBB", "");
                          if (b) b = b.trim();
                          return b;
                        });
                      p = p.trim();
                    }
                    return {
                      paragraphText: p,
                      paragraphType: headerBool ? "header" : "paragraph",
                      bulletPoints: bArr,
                    };
                  });
                articlesArray.push({
                  articleId: a1 ? a1 : "-",
                  articleHeading: a2 ? a2 : "-",
                  articleSummary: a3 ? a3 : "-",
                  paragraphsArray: parArray,
                });
                resolveB();
              }
            });
          });
        }
      }
      await new Promise((resolveC, rejectC) => {
        let jsonPath = path.join(__dirname, "../gulpVariables/");
        jsonPath = path.join(jsonPath, "articlesArray.json");
        fs.writeFile(jsonPath, JSON.stringify(articlesArray), (error) => {
          if (error) rejectC(error);
          else {
            console.log("Articles JSON data saved successfully.");
            resolveC();
          }
        });
      });
      resolveA();
    }
  });
});
