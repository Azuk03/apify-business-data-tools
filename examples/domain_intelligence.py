"""WHOIS Lookup & Domain Checker – Age, DNS, Email, SSL
https://apify.com/ram1eal/domain-intelligence

pip install apify-client  ·  export APIFY_TOKEN=...
"""
import os

from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])
run = client.actor("ram1eal/domain-intelligence").call(run_input={
  "domains": [
    "apify.com",
    "shopify.com",
    "stripe.com",
    "notion.so",
    "figma.com"
  ],
  "checks": [
    "registration",
    "dns",
    "email",
    "ssl"
  ]
})
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
