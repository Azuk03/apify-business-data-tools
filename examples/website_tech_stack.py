"""Tech Stack Detector – BuiltWith & Wappalyzer Alternative
https://apify.com/ram1eal/website-tech-stack

pip install apify-client  ·  export APIFY_TOKEN=...
"""
import os

from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])
run = client.actor("ram1eal/website-tech-stack").call(run_input={
  "websites": [
    "allbirds.com",
    "wordpress.org",
    "vercel.com",
    "hubspot.com",
    "stripe.com"
  ]
})
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
