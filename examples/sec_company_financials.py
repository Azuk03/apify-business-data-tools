"""SEC EDGAR API – Company Financials, 10-K Data & Filings
https://apify.com/ram1eal/sec-company-financials

pip install apify-client  ·  export APIFY_TOKEN=...
"""
import os

from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])
run = client.actor("ram1eal/sec-company-financials").call(run_input={
  "companies": [
    "AAPL",
    "MSFT",
    "NVDA",
    "AMZN"
  ],
  "yearsOfHistory": 5
})
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
