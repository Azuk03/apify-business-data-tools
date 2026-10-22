// Public Tenders – EU TED & UK Find a Tender Procurement
// https://apify.com/ram1eal/public-tenders-search
// npm i apify-client  ·  export APIFY_TOKEN=...
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });
const run = await client.actor('ram1eal/public-tenders-search').call({
  "cpvCodes": [
    "72000000",
    "48000000"
  ],
  "countries": [
    "DE"
  ],
  "maxItems": 50
});
const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
