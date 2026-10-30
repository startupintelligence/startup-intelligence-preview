(() => {
  const form = document.querySelector("[data-project-wizard]");
  if (!form) return;

  const config = window.SI_CONFIG || {};
  const steps = [...form.querySelectorAll("[data-wizard-step]")];
  const progress = [...form.querySelectorAll("[data-wizard-progress]")];
  const status = form.querySelector("[data-form-status]");
  const nextButton = form.querySelector("[data-wizard-next]");
  const backButton = form.querySelector("[data-wizard-back]");
  const submitButton = form.querySelector("[data-wizard-submit]");
  const progressLabel = form.querySelector("[data-wizard-label]");
  let current = 0;

  const showStep = index => {
    current = Math.max(0, Math.min(index, steps.length - 1));
    steps.forEach((step, i) => {
      step.hidden = i !== current;
      step.setAttribute("aria-hidden", String(i !== current));
    });
    progress.forEach((item, i) => {
      item.classList.toggle("is-current", i === current);
      item.classList.toggle("is-complete", i < current);
      item.setAttribute("aria-current", i === current ? "step" : "false");
    });
    if (progressLabel) progressLabel.textContent = `Step ${current + 1} of ${steps.length}`;
    if (backButton) backButton.hidden = current === 0;
    if (nextButton) nextButton.hidden = current === steps.length - 1;
    if (submitButton) submitButton.hidden = current !== steps.length - 1;
    const first = steps[current].querySelector("input:not([type=hidden]),select,textarea,button");
    first?.focus({ preventScroll: true });
  };

  const validateStep = () => {
    const controls = [...steps[current].querySelectorAll("input,select,textarea")].filter(el => !el.disabled && el.type !== "hidden");
    for (const control of controls) {
      if (!control.checkValidity()) {
        control.reportValidity();
        control.focus();
        return false;
      }
    }
    return true;
  };

  nextButton?.addEventListener("click", () => {
    if (validateStep()) showStep(current + 1);
  });
  backButton?.addEventListener("click", () => showStep(current - 1));

  const makePayload = () => {
    const data = new FormData(form);
    return {
      goal: data.get("goal") || "",
      website: data.get("website") || "",
      budget: data.get("budget") || "",
      timeline: data.get("timeline") || "",
      details: data.get("details") || "",
      name: data.get("name") || "",
      email: data.get("email") || "",
      consent: data.get("consent") === "on",
      source: "website-project-enquiry",
      submittedAt: new Date().toISOString()
    };
  };

  form.addEventListener("submit", async event => {
    event.preventDefault();
    if (!validateStep() || !form.reportValidity()) return;
    const payload = makePayload();
    if (!payload.consent) {
      status.textContent = "Please confirm that we may contact you about this enquiry.";
      return;
    }

    // Honeypot: quietly discard automated submissions without exposing a secret.
    if (form.elements.company_website?.value) {
      status.textContent = "Thank you. Your enquiry is ready.";
      return;
    }

    const mode = config.forms?.mode || "mailto";
    const endpoint = config.forms?.endpoint || "";
    if (mode === "api" && endpoint) {
      submitButton.disabled = true;
      submitButton.textContent = "Sending…";
      status.textContent = "Sending your enquiry securely…";
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify(payload),
          credentials: "omit"
        });
        if (!response.ok) throw new Error("Submission failed");
        form.reset();
        showStep(0);
        status.textContent = "Your enquiry was submitted. We'll review it and get back to you.";
      } catch (_) {
        status.textContent = "We couldn't submit the form. Please email startupintelligence1@gmail.com instead.";
      } finally {
        submitButton.disabled = false;
        submitButton.textContent = "Send project enquiry";
      }
      return;
    }

    const subject = "Project enquiry: " + payload.goal;
    const body = [
      "Name: " + payload.name,
      "Email: " + payload.email,
      "Goal: " + payload.goal,
      "Current website: " + (payload.website || "Not available / new project"),
      "Budget: " + (payload.budget || "Not specified"),
      "Timeline: " + (payload.timeline || "Not specified"),
      "",
      "Project details:",
      payload.details,
      "",
      "Contact permission: Yes"
    ].join("\n");
    status.textContent = "Your email app should open with the project brief. Review it and press Send in your email app.";
    window.location.href = "mailto:startupintelligence1@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  });

  showStep(0);
})();
