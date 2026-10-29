# Image handling standards

- Prefer AVIF first with WebP fallback using the picture element for photographic or rendered imagery.
- Export at the largest actual display width plus a 2x density option; do not ship oversized originals.
- Use responsive srcset and sizes for responsive layouts.
- Add explicit width and height (or CSS aspect-ratio) to prevent layout shift.
- Use loading="lazy" and decoding="async" for below-the-fold images.
- Keep the primary hero/LCP image eager; use fetchpriority="high" only when it is confirmed to be the LCP.
- Use SVG for simple icons and logos; sanitize SVG and avoid embedding untrusted markup.
- Do not hotlink important production images from third-party hosts. Keep assets local where practical.
- There are currently no photographic img elements in the homepage; its hero artwork is CSS/HTML. Apply compression when approved visual assets are added.
## First visual asset batch (2026-10-29)

The preview now uses four original, locally hosted SVG illustrations:

- `assets/images/hero-orbit.svg` — primary hero illustration (loaded eagerly; explicit intrinsic dimensions).
- `assets/images/web-experience.svg` — responsive web experience illustration.
- `assets/images/growth-analytics.svg` — conceptual analytics dashboard; it deliberately avoids invented client metrics.
- `assets/images/strategy-system.svg` — project structure and planning illustration.

These are vector illustrations, so SVG is more appropriate than converting them to AVIF/WebP. They are only a few kilobytes each, have explicit width/height attributes in HTML, and are lazy-loaded below the fold. The illustrations are original concepts, not client work or proof of outcomes. Add real client screenshots only when they are verified and permission to publish is available.

## Validation notes

- Main public routes were crawled after deployment; the homepage, custom services, website types, plans, portfolio, about, contact, privacy and terms pages returned HTTP 200.
- Desktop and mobile screenshot captures were requested for the homepage and the main service, website-type, plan and portfolio pages.
- Lighthouse audits were run on desktop and mobile for all nine routes. The preview homepage intentionally has `noindex, nofollow`, so its SEO score is lower by design; do not remove that setting until the preview is ready for public indexing.
- Limited offline caching is intended for previously visited pages and local assets only. Enquiry submission still requires an internet connection.
