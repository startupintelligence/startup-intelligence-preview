# Website roadmap, search, discovery and release checklist

This repository is the preview deployment. Keep every preview page set to `noindex,follow`. Do not submit the preview sitemap to search engines. Before production release, update canonical URLs, robots directives, sitemap host and structured-data URLs to the production domain, then verify the production site.


## Website information architecture — approved direction
Target: a complete service-agency website of approximately 11 core pages plus 2 legal pages. Keep the preview deployment noindex. Build and verify in stages; do not create thin or duplicate pages merely to reach a page count.

| Priority | Page | Purpose / scope | Current route or plan |
|---|---|---|---|
| Core | Home | Primary website-development positioning, service overview, proof, process, FAQs and enquiry CTA | `/` — existing |
| Core | Services overview | Clear service menu and routing to specialist pages | `/explore/` — evolve into Services |
| Core | Website Design & Development | Primary offer: business websites, custom builds, responsive UX, web applications assessed separately | `/custom/` — evolve and retain |
| Core | SEO & Digital Growth | Technical SEO, content structure, search experience and growth optimization | New `/seo-growth/` |
| Core | Paid Advertising | Meta Ads and Google Ads, campaign setup/management, tracking, client-paid media budgets | New `/advertising/` |
| Core | Portfolio / Concept Work | Clearly labelled concept projects; no invented client outcomes | `/portfolio/` — existing |
| Core | About & Team | Independent student-led initiative; show responsibilities/roles, not unapproved personal profiles | `/about/` — expand |
| Core | Our Process | Discovery, scope, proposal, design/build, review, launch and handover | New `/process/` |
| Core | Plans & Pricing | ₹5,000 minimum starting project budget; custom quotes and separate ad spend | `/plans/` — existing |
| Core | FAQs | Grouped answers on team, websites, SEO, ads, pricing and process | New `/faqs/`; keep relevant page FAQs |
| Core | Contact / Get a Quote | Project goal, service type, budget, timing and honest form disclosure | `/contact/` — existing |
| Legal | Privacy Policy | Match actual form, email, analytics and data practices | `/privacy/` — existing |
| Legal | Terms & Conditions | Scope, payments, ownership, third-party services and limitations | `/terms/` — existing |

Primary positioning: website design and development first. SEO and digital growth are supporting services; Meta Ads and Google Ads management are offered as separately scoped additional services. Do not imply ad spend is included in the management fee.

### Team presentation
Use role/responsibility descriptions rather than named personal profiles or headshots at this stage. Roles shown on About: project coordination; UI/UX design; website development; technical integrations; SEO and growth; paid advertising; content and quality review. Roles may be shared or combined; do not imply a one-person-per-role staffing model unless confirmed.

### Advertising claims and delivery boundaries
- State that Meta Ads and Google Ads management are offered, but keep website development as the primary service.
- Client pays platform media spend directly to Meta/Google; it is separate from our service fee.
- Proposal must define whether work includes strategy, setup, creative, optimization, tracking and reporting.
- Agree goals and tracking availability before launch. Do not promise leads, sales, ROAS or a fixed reporting cadence.
- Never claim daily management or bi-weekly reports unless explicitly included in a signed scope.

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


## Roadmap and delivery gates
- [ ] Convert `/explore/` into a clear Services overview and update navigation labels.
- [ ] Build `/seo-growth/` and `/advertising/` as substantive service pages with distinct scope and FAQs.
- [ ] Expand `/custom/` as the primary Website Design & Development page.
- [ ] Expand `/about/` with the approved role-based team presentation; do not invent names, portraits or credentials.
- [ ] Build `/process/` and `/faqs/`; retain concise contextual FAQs on relevant pages.
- [ ] Update header, footer, internal links, breadcrumbs and mobile navigation for the approved page structure.
- [ ] Update metadata, canonical templates, sitemap template, `llms.txt` and structured data for every new route.
- [ ] Keep preview `noindex,follow`; never publish the preview sitemap to search engines.
- [ ] Review all service claims, prices, advertising scope and legal wording before production release.
