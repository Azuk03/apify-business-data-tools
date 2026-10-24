"""Contact Info Scraper – Company Emails, Phones & Socials
https://apify.com/ram1eal/company-contact-finder

pip install apify-client  ·  export APIFY_TOKEN=...
"""
import os

from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])
run = client.actor("ram1eal/company-contact-finder").call(run_input={
  "websites": [
    "apify.com",
    "allbirds.com",
    "hetzner.com",
    "gepa.de"
  ]
})
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
