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
