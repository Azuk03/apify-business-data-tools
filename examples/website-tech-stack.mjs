// Tech Stack Detector – BuiltWith & Wappalyzer Alternative
// https://apify.com/ram1eal/website-tech-stack
// npm i apify-client  ·  export APIFY_TOKEN=...
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });
const run = await client.actor('ram1eal/website-tech-stack').call({
  "websites": [
    "allbirds.com",
    "wordpress.org",
    "vercel.com",
    "hubspot.com",
    "stripe.com"
  ]
});
const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
