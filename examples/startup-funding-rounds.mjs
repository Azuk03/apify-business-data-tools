// Startup Funding Rounds – Crunchbase Alternative (SEC Form D)
// https://apify.com/ram1eal/startup-funding-rounds
// npm i apify-client  ·  export APIFY_TOKEN=...
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });
const run = await client.actor('ram1eal/startup-funding-rounds').call({
  "since": "7 days",
  "industries": [
    "Other Technology",
    "Computers",
    "Telecommunications"
  ]
});
const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
