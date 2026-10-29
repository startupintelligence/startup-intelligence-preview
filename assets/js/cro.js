(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('#mobile-nav');
  if (menuButton && mobileNav) {
    menuButton.addEventListener('click', () => {
      const expanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!expanded));
      mobileNav.hidden = expanded;
    });
    mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      mobileNav.hidden = true;
      menuButton.setAttribute('aria-expanded', 'false');
    }));
  }

  const budgetRange = document.querySelector('#budget-range');
  const budgetValue = document.querySelector('#budget-value');
  const budgetOptions = ['₹5,000–₹10,000', '₹10,000–₹25,000', '₹25,000–₹50,000', '₹50,000+'];
  if (budgetRange && budgetValue) {
    const updateBudget = () => { budgetValue.textContent = budgetOptions[Number(budgetRange.value)]; };
    budgetRange.addEventListener('input', updateBudget);
    updateBudget();
  }

  const budgetSelect = document.querySelector('#budget-select');
  const customBudgetWrap = document.querySelector('#custom-budget-wrap');
  const customBudgetInput = document.querySelector('#custom-budget');
  function syncCustomBudget() {
    if (!budgetSelect || !customBudgetWrap || !customBudgetInput) return;
    const isCustom = budgetSelect.value === 'custom';
    customBudgetWrap.hidden = !isCustom;
    customBudgetInput.required = isCustom;
    if (!isCustom) customBudgetInput.setCustomValidity('');
  }
  if (budgetSelect) {
    budgetSelect.addEventListener('change', syncCustomBudget);
    syncCustomBudget();
  }

  const form = document.querySelector('#discovery-form');
  if (!form) return;
  const steps = [...form.querySelectorAll('.wizard-step')];
  const fill = form.querySelector('#progress-fill');
  const stepLabel = form.querySelector('#step-label');
  const back = form.querySelector('#back-button');
  const next = form.querySelector('#next-button');
  const submit = form.querySelector('#submit-button');
  const error = form.querySelector('#form-error');
  const result = form.querySelector('#form-result');
  let current = 1;

  function showStep(n) {
    current = n;
    steps.forEach(el => { el.hidden = Number(el.dataset.step) !== n; });
    fill.style.width = `${(n / steps.length) * 100}%`;
    stepLabel.textContent = `STEP ${n} OF ${steps.length}`;
    back.hidden = n === 1;
    next.hidden = n === steps.length;
    submit.hidden = n !== steps.length;
    error.hidden = true;
    error.textContent = '';
  }
  function showError(message) { error.textContent = message; error.hidden = false; }
  function selectedGoal() { return form.querySelector('input[name="goal"]:checked'); }

  form.querySelectorAll('[data-select-goal]').forEach(button => button.addEventListener('click', () => {
    const goal = button.dataset.selectGoal;
    const radio = [...form.querySelectorAll('input[name="goal"]')].find(input => input.value === goal);
    if (radio) radio.checked = true;
    showStep(1);
    document.querySelector('#discovery').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }));

  next.addEventListener('click', () => {
    if (current === 1 && !selectedGoal()) { showError('Choose the goal that matters most, or select “I’m not sure yet”.'); return; }
    if (current === 2) {
      if (budgetSelect && budgetSelect.value === 'custom') {
        const amount = Number(customBudgetInput?.value);
        if (!customBudgetInput?.value || !Number.isFinite(amount) || amount < 5000) {
          showError('Enter a custom budget of at least ₹5,000.');
          customBudgetInput?.focus();
          return;
        }
      }
      const website = form.querySelector('#website').value.trim();
      if (website) {
        try {
          const parsed = new URL(/^https?:\/\//i.test(website) ? website : `https://${website}`);
          if (!parsed.hostname.includes('.')) throw new Error('Invalid URL');
        } catch { showError('Enter a valid website URL, or leave it blank.'); return; }
      }
    }
    showStep(Math.min(steps.length, current + 1));
  });
  back.addEventListener('click', () => showStep(Math.max(1, current - 1)));

  form.addEventListener('submit', event => {
    event.preventDefault();
    const name = form.querySelector('#lead-name');
    const email = form.querySelector('#lead-email');
    if (!name.value.trim()) { showError('Enter your name to continue.'); name.focus(); return; }
    if (!email.validity.valid || !email.value.trim()) { showError('Enter a valid email address.'); email.focus(); return; }
    const data = {
      goal: selectedGoal()?.value || 'Not selected',
      website: form.querySelector('#website').value.trim() || 'Not provided',
      budget: budgetSelect?.value === 'custom' ? `₹${Number(customBudgetInput.value).toLocaleString('en-IN')} (custom)` : (budgetSelect?.value || 'Not selected'),
      name: name.value.trim(),
      email: email.value.trim()
    };
    result.hidden = false;
    result.textContent = `Your brief is ready, ${data.name}. This preview currently has no secure form endpoint, so nothing has been sent or stored. Connect a server-side submission service before launch. Summary: ${data.goal}; website: ${data.website}; budget: ${data.budget}; contact: ${data.email}.`;
    result.focus?.();
  });
  showStep(1);
})();
