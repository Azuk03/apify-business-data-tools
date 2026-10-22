// SAM.gov & USAspending – US Federal Contracts & Awards
// https://apify.com/ram1eal/us-federal-contracts
// npm i apify-client  ·  export APIFY_TOKEN=...
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });
const run = await client.actor('ram1eal/us-federal-contracts').call({
  "mode": "awards",
  "postedSince": "30 days",
  "maxItems": 500
});
const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
