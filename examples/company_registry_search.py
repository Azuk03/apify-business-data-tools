"""Companies House API & Company Registry – UK, France, LEI
https://apify.com/ram1eal/company-registry-search

pip install apify-client  ·  export APIFY_TOKEN=...
"""
import os

from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])
run = client.actor("ram1eal/company-registry-search").call(run_input={
  "registryIds": [
    "383474814",
    "552032534"
  ],
  "sources": [
    "france"
  ],
  "maxItems": 10
})
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
