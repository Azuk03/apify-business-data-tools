// Companies House API & Company Registry – UK, France, LEI
// https://apify.com/ram1eal/company-registry-search
// npm i apify-client  ·  export APIFY_TOKEN=...
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });
const run = await client.actor('ram1eal/company-registry-search').call({
  "registryIds": [
    "383474814",
    "552032534"
  ],
  "sources": [
    "france"
  ],
  "maxItems": 10
});
const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
