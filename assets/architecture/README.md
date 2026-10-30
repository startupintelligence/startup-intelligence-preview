# Front-end architecture

- `assets/js/config.js`: deployment-safe feature and endpoint configuration. Never store secrets here.
- `assets/js/site.js`: shared navigation, theme and catalogue behavior.
- `assets/js/forms/project-enquiry.js`: isolated enquiry wizard and submission adapter. Current mode is `mailto`; configure a server endpoint only after backend implementation and security review.
- `assets/js/motion/` (future): motion modules, loaded independently from site behavior.
- `assets/js/3d/scene-loader.js`: opt-in, viewport-lazy scene loader. Future scene modules export `mount(element)` and return an optional cleanup function. No 3D renderer is downloaded by default.
- `assets/css/site.css`: shared design tokens and component styles.
- `assets/fonts/`: self-hosted brand fonts.

## Future backend contract
Set `window.SI_CONFIG.forms.mode` to `api` and `endpoint` to a same-origin HTTPS route only after a backend exists. The endpoint must perform server-side validation, spam/rate limiting, safe logging, access controls and privacy-compliant retention. Never place API secrets in this repository or browser code.

## Future 3D contract
Keep a static poster/fallback in each scene container. Add `data-si-scene` only when a scene module is ready and set `scenes.enabled` plus a renderer in config. Load scenes on visibility, respect reduced motion and data saver, and provide cleanup. Prefer progressive enhancement; core content must never depend on WebGL.
