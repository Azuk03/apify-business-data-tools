// WHOIS Lookup & Domain Checker – Age, DNS, Email, SSL
// https://apify.com/ram1eal/domain-intelligence
// npm i apify-client  ·  export APIFY_TOKEN=...
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });
const run = await client.actor('ram1eal/domain-intelligence').call({
  "domains": [
    "apify.com",
    "shopify.com",
    "stripe.com",
    "notion.so",
    "figma.com"
  ],
  "checks": [
    "registration",
    "dns",
    "email",
    "ssl"
  ]
});
const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
