"""SAM.gov & USAspending – US Federal Contracts & Awards
https://apify.com/ram1eal/us-federal-contracts

pip install apify-client  ·  export APIFY_TOKEN=...
"""
import os

from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])
run = client.actor("ram1eal/us-federal-contracts").call(run_input={
  "mode": "awards",
  "postedSince": "30 days",
  "maxItems": 500
})
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
