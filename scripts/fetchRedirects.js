// scripts/fetchRedirects.js
const fs = require("fs");
const fetch = require("node-fetch"); // npm i node-fetch@2

const REDIRECTS_API = "https://admin.scoopcost.com/redirects/";
const API_KEY = "nBKpNrNUxhDIR9dkjIA95JtGplWrPNa4";

async function fetchRedirects() {
  const res = await fetch(REDIRECTS_API, {
    headers: { "x-api-key": API_KEY },
  });
  const data = await res.json();

  const redirects = data.map((rule) => ({
    source: new URL(rule.source_url).pathname + "/:path*",
    destination: rule.target_url + "/:path*",
    permanent: true,
  }));

  fs.writeFileSync("redirects.json", JSON.stringify(redirects, null, 2));
  console.log("Redirects fetched and saved.");
}

fetchRedirects().catch(console.error);
