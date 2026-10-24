// Contact Info Scraper – Company Emails, Phones & Socials
// https://apify.com/ram1eal/company-contact-finder
// npm i apify-client  ·  export APIFY_TOKEN=...
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });
const run = await client.actor('ram1eal/company-contact-finder').call({
  "websites": [
    "apify.com",
    "allbirds.com",
    "hetzner.com",
    "gepa.de"
  ]
});
const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
