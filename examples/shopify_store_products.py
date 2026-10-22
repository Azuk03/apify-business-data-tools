"""Shopify Scraper – Products, Prices, Stock & Price Monitor
https://apify.com/ram1eal/shopify-store-products

pip install apify-client  ·  export APIFY_TOKEN=...
"""
import os

from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])
run = client.actor("ram1eal/shopify-store-products").call(run_input={
  "stores": [
    "allbirds.com",
    "colourpop.com"
  ],
  "onlyNew": True,
  "maxItems": 500
})
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
