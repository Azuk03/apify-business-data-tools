"""Startup Funding Rounds – Crunchbase Alternative (SEC Form D)
https://apify.com/ram1eal/startup-funding-rounds

pip install apify-client  ·  export APIFY_TOKEN=...
"""
import os

from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])
run = client.actor("ram1eal/startup-funding-rounds").call(run_input={
  "since": "7 days",
  "industries": [
    "Other Technology",
    "Computers",
    "Telecommunications"
  ]
})
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
