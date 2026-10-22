"""Impressum Scraper – German Company Data, HRB & VAT Check
https://apify.com/ram1eal/company-imprint

pip install apify-client  ·  export APIFY_TOKEN=...
"""
import os

from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])
run = client.actor("ram1eal/company-imprint").call(run_input={
  "websites": [
    "zalando.de",
    "igus.de",
    "gepa.de",
    "mymuesli.com",
    "tado.com"
  ]
})
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
