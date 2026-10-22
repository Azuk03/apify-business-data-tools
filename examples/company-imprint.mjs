// Impressum Scraper – German Company Data, HRB & VAT Check
// https://apify.com/ram1eal/company-imprint
// npm i apify-client  ·  export APIFY_TOKEN=...
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });
const run = await client.actor('ram1eal/company-imprint').call({
  "websites": [
    "zalando.de",
    "igus.de",
    "gepa.de",
    "mymuesli.com",
    "tado.com"
  ]
});
const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
