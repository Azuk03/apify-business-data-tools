// Shopify Scraper – Products, Prices, Stock & Price Monitor
// https://apify.com/ram1eal/shopify-store-products
// npm i apify-client  ·  export APIFY_TOKEN=...
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });
const run = await client.actor('ram1eal/shopify-store-products').call({
  "stores": [
    "allbirds.com",
    "colourpop.com"
  ],
  "onlyNew": true,
  "maxItems": 500
});
const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
