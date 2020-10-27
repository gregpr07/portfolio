const sitemap = require("nextjs-sitemap-generator");
const fs = require("fs");

const BUILD_ID = fs.readFileSync(".next/BUILD_ID").toString();

sitemap({
  baseUrl: "https://gregorzunic.com",
  pagesDirectory: __dirname + "/../.next/server/pages",
  targetDirectory: "public/",
  ignoredExtensions: ["map"],
  ignoredPaths: ["[fallback]"],
});
