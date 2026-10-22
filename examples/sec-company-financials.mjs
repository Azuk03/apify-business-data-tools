// SEC EDGAR API – Company Financials, 10-K Data & Filings
// https://apify.com/ram1eal/sec-company-financials
// npm i apify-client  ·  export APIFY_TOKEN=...
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });
const run = await client.actor('ram1eal/sec-company-financials').call({
  "companies": [
    "AAPL",
    "MSFT",
    "NVDA",
    "AMZN"
  ],
  "yearsOfHistory": 5
});
const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
