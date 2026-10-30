/* Central site configuration. Keep deployment-specific values here, never secrets. */
window.SI_CONFIG = Object.freeze({
  version: "1.0.0",
  forms: Object.freeze({
    mode: "mailto",
    endpoint: ""
  }),
  motion: Object.freeze({
    revealEnabled: true
  }),
  scenes: Object.freeze({
    enabled: false,
    renderer: "none"
  })
});
