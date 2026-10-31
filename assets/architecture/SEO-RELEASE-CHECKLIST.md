# Search, discovery and release checklist

This repository is the preview deployment. Keep every preview page set to `noindex,follow`. Do not submit the preview sitemap to search engines. Before production release, update canonical URLs, robots directives, sitemap host and structured-data URLs to the production domain, then verify the production site.

## SEO — Search Engine Optimization
- [ ] One unique, descriptive title and meta description per indexable page
- [ ] Canonical URL points to the final production URL
- [ ] Production robots directives allow intended pages; no accidental noindex
- [ ] XML sitemap contains only canonical, indexable, successful URLs
- [ ] robots.txt references the production sitemap
- [ ] Useful internal links and descriptive anchor text
- [ ] One clear H1 per page; logical H2/H3 hierarchy
- [ ] Descriptive image alt text; decorative images use empty alt
- [ ] Open Graph and social sharing metadata
- [ ] Custom 404 page, redirects and broken-link checks
- [ ] Google Search Console and Bing Webmaster Tools verification
- [ ] Monitor indexing, queries, impressions, clicks and crawl errors

## AEO — Answer Engine Optimization
- [ ] Answer real customer questions in visible, direct language
- [ ] Put concise answers near descriptive question headings
- [ ] Keep FAQ structured data identical to visible FAQ content
- [ ] Define acronyms and technical terms on first use
- [ ] Keep facts, service scope, budget and contact details consistent
- [ ] Do not add hidden keyword text or unsupported claims

## GEO — Generative Engine Optimization
- [ ] Explain who the initiative is, what it does and who it serves
- [ ] Publish original, useful, attributable information
- [ ] Use clear page structure, descriptive links and stable URLs
- [ ] Keep organization identity and service descriptions consistent
- [ ] Keep `llms.txt` accurate and aligned with public pages
- [ ] Allow appropriate AI search crawlers on production pages
- [ ] Do not promise AI citations, mentions or rankings

## AIO — AI Optimization
- [ ] Treat AI discovery as an extension of technical SEO and AEO
- [ ] Provide factual summaries, definitions and transparent limitations
- [ ] Review generated content for accuracy, originality and usefulness
- [ ] Do not create mass-produced or doorway pages for AI crawlers
- [ ] Keep human editorial review for business, pricing and legal facts

## SXO — Search Experience Optimization
- [ ] Match page content to the visitor's search intent
- [ ] Make the next useful action obvious without intrusive popups
- [ ] Keep navigation, forms and FAQs usable on touch screens
- [ ] Reduce friction, dead ends, layout shifts and unnecessary steps
- [ ] Test the complete journey from landing page to enquiry

## CRO — Conversion Rate Optimization
- [ ] One clear primary CTA per major section
- [ ] Explain value, scope, budget and next step before asking for details
- [ ] Use truthful proof only; no invented clients, reviews or statistics
- [ ] Track meaningful events only after privacy-compliant analytics setup
- [ ] Test copy and layout changes against real user behavior

## Mobile-first, accessibility and performance
- [ ] Test at 320, 360, 390, 430, 768, 1024 and 1440 CSS pixels
- [ ] No horizontal overflow, clipped controls or tiny text
- [ ] Tap targets approximately 44 by 44 CSS pixels
- [ ] Keyboard navigation, focus visibility and semantic landmarks
- [ ] Contrast and form labels; errors announced to assistive technology
- [ ] Respect reduced-motion settings; provide static fallbacks
- [ ] Optimize image dimensions, formats, lazy loading and font loading
- [ ] Avoid loading 3D/WebGL on mobile unless it materially improves the task
- [ ] Measure Core Web Vitals and Lighthouse on production pages

## Privacy, security and operations
- [ ] Self-host fonts where practical and verify font licensing
- [ ] No secrets or private API keys in browser code
- [ ] HTTPS everywhere; secure backend validation and rate limits
- [ ] No session replay or keystroke capture without a justified, consented design
- [ ] Privacy policy and terms match the actual data flows
- [ ] Cookie consent only when optional cookies or tracking are actually deployed
- [ ] Age checks only where a product or legal requirement makes them relevant
- [ ] Mailing list emails include sender postal address and one-click unsubscribe where required
- [ ] Contact forms state what is sent, stored and retained
- [ ] Backups, monitoring, error handling and tested recovery process

## Current preview-specific notes
- Preview pages intentionally use `noindex,follow`; remove this only during the production release after canonical URLs and sitemap are correct.
- Contact enquiry currently opens an email draft; no server-side form storage or backend submission is configured.
- Public portfolio visuals are concepts, not verified client case studies.
- Current minimum project budget is ₹5,000; it is a starting threshold, not a fixed package quote.
- Lighthouse and full interactive browser tests remain release gates, not completed claims.


## Service-agency website roadmap (approved for preview)

### Target page architecture
- [ ] Home — positioning, service pathways, proof, process, FAQs and primary enquiry CTA
- [ ] Services — overview and routes to specialist services
- [ ] Website Design & Development — scope, deliverables, technology approach and limitations
- [ ] SEO & Digital Growth — technical SEO, optimization and growth scope
- [ ] Advertising Management — Meta Ads and Google Ads, fees versus media spend, measurement and reporting scope
- [ ] Portfolio / Our Work — label concepts clearly; publish client work only with permission and evidence
- [ ] About & Team — seven-member team presented by roles; names/photos only with approval
- [ ] Contact / Get a Quote — goals, service interest, budget (₹5,000 minimum starting threshold), timeline and contact details
- [ ] Plans & Pricing — indicative scope, custom quotes and explicit exclusions
- [ ] Our Process — discovery, written scope, delivery, review and handover
- [ ] FAQs — shared and service-specific answers; visible content must match FAQ structured data
- [ ] Privacy Policy and Terms — verify against actual operations

### Approved claims and content rules
- Team presentation is role-based. Do not invent member names, credentials, client outcomes or testimonials.
- State seven members only while that remains accurate and approved.
- Meta Ads and Google Ads management are offered; proposals specify platforms, deliverables, optimization cadence and reporting frequency.
- Service fees are separate from platform media spend; clients pay platforms directly through their own accounts.
- Never guarantee leads, sales, return on ad spend, rankings or fixed campaign outcomes.
- Website timelines are estimates after scope review; 3–5 weeks is only indicative for straightforward business sites.
- Ownership, source files, credentials and third-party licences follow the written proposal and applicable licences.
- Current enquiry flow prepares an email draft; it is not automatic booking or backend submission.

### Implementation sequence
- [ ] Map existing routes to this architecture before creating new URLs.
- [ ] Improve Services navigation and add specialist pages for web development, SEO/growth and advertising management.
- [ ] Expand About into role-based team presentation without fabricated identities.
- [ ] Add a distinct Process page and cross-link relevant service pages and FAQs.
- [ ] Update internal links, metadata, canonical plan and sitemap template for every approved route.
- [ ] Update `llms.txt` and Organization/FAQ structured data to match visible, verified facts.
- [ ] Keep preview pages `noindex,follow`; do not change production files or release settings.
- [ ] Run link, responsive, accessibility, performance, form and structured-data validation after implementation.
