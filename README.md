# Business data APIs: company registries, tenders, SEC financials, tech stacks

Ready-to-run data tools for **KYB, B2B lead generation, procurement and market research**, built on official sources (Companies House, INSEE Sirene, GLEIF, EU TED, UK Find a Tender, SEC EDGAR, USAspending, EU VIES) and public website data. Each one runs on [Apify](https://apify.com), returns clean JSON/CSV/Excel, and is billed **per result** – no subscription.

This repo has copy-paste examples for **Python, JavaScript, cURL and AI agents (MCP)**.

| Area | Tool | Price |
| --- | --- | --- |
| Companies & compliance | [Companies House API & Company Registry – UK, France, LEI](https://apify.com/ram1eal/company-registry-search) | $3 / 1,000 company results |
| Public sector | [Public Tenders – EU TED & UK Find a Tender Procurement](https://apify.com/ram1eal/public-tenders-search) | $4 / 1,000 tender notices |
| Companies & compliance | [SEC EDGAR API – Company Financials, 10-K Data & Filings](https://apify.com/ram1eal/sec-company-financials) | $5 / 1,000 companys |
| Public sector | [SAM.gov & USAspending – US Federal Contracts & Awards](https://apify.com/ram1eal/us-federal-contracts) | $4 / 1,000 award or opportunitys |
| Companies & compliance | [Impressum Scraper – German Company Data, HRB & VAT Check](https://apify.com/ram1eal/company-imprint) | $5 / 1,000 company founds |
| Websites & leads | [Tech Stack Detector – BuiltWith & Wappalyzer Alternative](https://apify.com/ram1eal/website-tech-stack) | $4 / 1,000 website analyseds |
| Websites & leads | [WHOIS Lookup & Domain Checker – Age, DNS, Email, SSL](https://apify.com/ram1eal/domain-intelligence) | $4 / 1,000 domain results |
| E-commerce | [Shopify Scraper – Products, Prices, Stock & Price Monitor](https://apify.com/ram1eal/shopify-store-products) | $1.20 / 1,000 products |
| Companies & compliance | [Startup Funding Rounds – Crunchbase Alternative (SEC Form D)](https://apify.com/ram1eal/startup-funding-rounds) | $10 / 1,000 funding rounds |
| Websites & leads | [Contact Info Scraper – Company Emails, Phones & Socials](https://apify.com/ram1eal/company-contact-finder) | $3 / 1,000 website with contactss |

## Quick start

1. Create a free Apify account and copy your API token from [Console → Settings → API & Integrations](https://console.apify.com/settings/integrations).
2. `export APIFY_TOKEN=...`
3. Run any example: `python examples/sec_company_financials.py` or `node examples/sec-company-financials.mjs`.

No code? Open the tool's page, fill in the form and press **Start** – results download as CSV, Excel or JSON. Every tool also works with Make, Zapier, n8n, Google Sheets and webhooks.

### Use from AI agents (MCP)

Add the tools you need to Claude, Cursor or any MCP client through the [Apify MCP server](https://docs.apify.com/platform/integrations/mcp):

```
https://mcp.apify.com/?tools=ram1eal/company-registry-search,ram1eal/sec-company-financials
```

## Tools

### [Companies House API & Company Registry – UK, France, LEI](https://apify.com/ram1eal/company-registry-search)

Search and monitor companies in official registers: UK Companies House, France SIRENE (with revenue) and the global LEI database. KYB risk score, filing health, new companies daily. Clean English data, pay per company.

**Price:** $3 per 1,000 company results + $0.005 per run (pay per result, Apify's free plan includes $5/month).
**Examples:** [Python](examples/company_registry_search.py) · [JavaScript](examples/company-registry-search.mjs)

```bash
curl -X POST "https://api.apify.com/v2/acts/ram1eal~company-registry-search/run-sync-get-dataset-items"   -H "Authorization: Bearer $APIFY_TOKEN" -H "Content-Type: application/json"   -d '{"registryIds":["383474814","552032534"],"sources":["france"],"maxItems":10}'
```

### [Public Tenders – EU TED & UK Find a Tender Procurement](https://apify.com/ram1eal/public-tenders-search)

Search public tenders and contract notices from EU TED and UK Find a Tender in one clean English dataset: buyer, value, deadline, CPV codes, documents. Daily alerts for new tenders. Pay per notice.

**Price:** $4 per 1,000 tender notices + $0.005 per run (pay per result, Apify's free plan includes $5/month).
**Examples:** [Python](examples/public_tenders_search.py) · [JavaScript](examples/public-tenders-search.mjs)

```bash
curl -X POST "https://api.apify.com/v2/acts/ram1eal~public-tenders-search/run-sync-get-dataset-items"   -H "Authorization: Bearer $APIFY_TOKEN" -H "Content-Type: application/json"   -d '{"cpvCodes":["72000000","48000000"],"countries":["DE"],"maxItems":50}'
```

### [SEC EDGAR API – Company Financials, 10-K Data & Filings](https://apify.com/ram1eal/sec-company-financials)

Annual financials of any SEC-reporting company from official EDGAR XBRL: revenue, profit, margins, cash flow, assets and debt for up to 15 years, normalised across years, plus profile and latest 10-K, 10-Q and 8-K filings. By ticker or name.

**Price:** $5 per 1,000 companys + $0.005 per run (pay per result, Apify's free plan includes $5/month).
**Examples:** [Python](examples/sec_company_financials.py) · [JavaScript](examples/sec-company-financials.mjs)

```bash
curl -X POST "https://api.apify.com/v2/acts/ram1eal~sec-company-financials/run-sync-get-dataset-items"   -H "Authorization: Bearer $APIFY_TOKEN" -H "Content-Type: application/json"   -d '{"companies":["AAPL","MSFT","NVDA","AMZN"],"yearsOfHistory":5}'
```

### [SAM.gov & USAspending – US Federal Contracts & Awards](https://apify.com/ram1eal/us-federal-contracts)

New US government contract and grant awards from USAspending.gov – who won, amount, agency, NAICS, PSC – with no API key, plus open SAM.gov opportunities with your free key. Track competitors and get daily alerts. Pay per result.

**Price:** $4 per 1,000 award or opportunitys + $0.005 per run (pay per result, Apify's free plan includes $5/month).
**Examples:** [Python](examples/us_federal_contracts.py) · [JavaScript](examples/us-federal-contracts.mjs)

```bash
curl -X POST "https://api.apify.com/v2/acts/ram1eal~us-federal-contracts/run-sync-get-dataset-items"   -H "Authorization: Bearer $APIFY_TOKEN" -H "Content-Type: application/json"   -d '{"mode":"awards","postedSince":"30 days","maxItems":500}'
```

### [Impressum Scraper – German Company Data, HRB & VAT Check](https://apify.com/ram1eal/company-imprint)

Turn German, Austrian and Swiss company websites into verified firmographics from the Impressum: legal name, legal form, address, Handelsregister/Firmenbuch number and court, VAT ID validated in EU VIES. GDPR-safe: no person data.

**Price:** $5 per 1,000 company founds + $0.005 per run (pay per result, Apify's free plan includes $5/month).
**Examples:** [Python](examples/company_imprint.py) · [JavaScript](examples/company-imprint.mjs)

```bash
curl -X POST "https://api.apify.com/v2/acts/ram1eal~company-imprint/run-sync-get-dataset-items"   -H "Authorization: Bearer $APIFY_TOKEN" -H "Content-Type: application/json"   -d '{"websites":["zalando.de","igus.de","gepa.de","mymuesli.com","tado.com"]}'
```

### [Tech Stack Detector – BuiltWith & Wappalyzer Alternative](https://apify.com/ram1eal/website-tech-stack)

Find what any website is built with, in bulk: CMS, ecommerce platform, analytics, ad pixels, marketing automation, CRM, frameworks, hosting and CDN – 3,500+ technologies – plus the company's email provider. $4 per 1,000 sites.

**Price:** $4 per 1,000 website analyseds + $0.005 per run (pay per result, Apify's free plan includes $5/month).
**Examples:** [Python](examples/website_tech_stack.py) · [JavaScript](examples/website-tech-stack.mjs)

```bash
curl -X POST "https://api.apify.com/v2/acts/ram1eal~website-tech-stack/run-sync-get-dataset-items"   -H "Authorization: Bearer $APIFY_TOKEN" -H "Content-Type: application/json"   -d '{"websites":["allbirds.com","wordpress.org","vercel.com","hubspot.com","stripe.com"]}'
```

### [WHOIS Lookup & Domain Checker – Age, DNS, Email, SSL](https://apify.com/ram1eal/domain-intelligence)

Bulk WHOIS/RDAP lookup with domain age, registrar and expiry, DNS, email provider (Google Workspace, Microsoft 365), SPF/DMARC, SSL certificate and an explainable risk score. For fraud checks, KYB and lead qualification.

**Price:** $4 per 1,000 domain results + $0.005 per run (pay per result, Apify's free plan includes $5/month).
**Examples:** [Python](examples/domain_intelligence.py) · [JavaScript](examples/domain-intelligence.mjs)

```bash
curl -X POST "https://api.apify.com/v2/acts/ram1eal~domain-intelligence/run-sync-get-dataset-items"   -H "Authorization: Bearer $APIFY_TOKEN" -H "Content-Type: application/json"   -d '{"domains":["apify.com","shopify.com","stripe.com","notion.so","figma.com"],"checks":["registration","dns","email","ssl"]}'
```

### [Shopify Scraper – Products, Prices, Stock & Price Monitor](https://apify.com/ram1eal/shopify-store-products)

Scrape any Shopify store: every product with price, sale price, discount %, stock per variant, SKUs and images, plus store analytics. Monitoring mode returns price drops, sold-out and back-in-stock products. Pay per product.

**Price:** $1.20 per 1,000 products + $0.005 per run (pay per result, Apify's free plan includes $5/month).
**Examples:** [Python](examples/shopify_store_products.py) · [JavaScript](examples/shopify-store-products.mjs)

```bash
curl -X POST "https://api.apify.com/v2/acts/ram1eal~shopify-store-products/run-sync-get-dataset-items"   -H "Authorization: Bearer $APIFY_TOKEN" -H "Content-Type: application/json"   -d '{"stores":["allbirds.com","colourpop.com"],"onlyNew":true,"maxItems":500}'
```

### [Startup Funding Rounds – Crunchbase Alternative (SEC Form D)](https://apify.com/ram1eal/startup-funding-rounds)

Daily list of US startups and private companies raising money, from official SEC Form D filings: amount raised, industry, state, first sale date and investor count. Legal, fresh and $10 per 1,000 rounds instead of a database subscription.

**Price:** $10 per 1,000 funding rounds + $0.005 per run (pay per result, Apify's free plan includes $5/month).
**Examples:** [Python](examples/startup_funding_rounds.py) · [JavaScript](examples/startup-funding-rounds.mjs)

```bash
curl -X POST "https://api.apify.com/v2/acts/ram1eal~startup-funding-rounds/run-sync-get-dataset-items"   -H "Authorization: Bearer $APIFY_TOKEN" -H "Content-Type: application/json"   -d '{"since":"7 days","industries":["Other Technology","Computers","Telecommunications"]}'
```

### [Contact Info Scraper – Company Emails, Phones & Socials](https://apify.com/ram1eal/company-contact-finder)

Find company contact details from websites in bulk: role e-mails (info@, sales@, support@), phone numbers and official social profiles (LinkedIn company page, Instagram, Facebook, X, YouTube, TikTok, WhatsApp). GDPR-safe and $3 per 1,000 sites.

**Price:** $3 per 1,000 website with contactss + $0.005 per run (pay per result, Apify's free plan includes $5/month).
**Examples:** [Python](examples/company_contact_finder.py) · [JavaScript](examples/company-contact-finder.mjs)

```bash
curl -X POST "https://api.apify.com/v2/acts/ram1eal~company-contact-finder/run-sync-get-dataset-items"   -H "Authorization: Bearer $APIFY_TOKEN" -H "Content-Type: application/json"   -d '{"websites":["apify.com","allbirds.com","hetzner.com","gepa.de"]}'
```

## Why these tools

- **Official sources first.** Registries, procurement portals and regulators publish this data for free, but in different formats, languages and APIs. These tools normalise them into one clean English schema.
- **Pay per result.** You pay for companies, notices or websites returned – not for compute time, proxies or a monthly plan.
- **Monitoring built in.** Most tools have an "only new / only changed" mode for daily alerts via Apify schedules and webhooks.
- **GDPR-conscious.** Company data only; no personal profiles.

Need a custom source or a bulk export? Open an issue in this repo.

## License

Examples in this repository are MIT-licensed. The tools themselves run on Apify and are billed by Apify.
