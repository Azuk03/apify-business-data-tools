"""Public Tenders – EU TED & UK Find a Tender Procurement
https://apify.com/ram1eal/public-tenders-search

pip install apify-client  ·  export APIFY_TOKEN=...
"""
import os

from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])
run = client.actor("ram1eal/public-tenders-search").call(run_input={
  "cpvCodes": [
    "72000000",
    "48000000"
  ],
  "countries": [
    "DE"
  ],
  "maxItems": 50
})
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
