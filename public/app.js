/* ===== KADIMA — Shared Service-Page Script ===== */

// Navbar scroll state
(function () {
  var navbar = document.getElementById('navbar');
  if (!navbar) return;
  function onScroll() {
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// Reveal on scroll
(function () {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(function (el) { observer.observe(el); });
})();

// Lead form handling
(function () {
  var form = document.getElementById('leadForm');
  if (!form) return;
  var submitBtn = document.getElementById('submitBtn');
  var spinner = document.getElementById('spinner');
  var btnLabel = document.getElementById('btnLabel');
  var thankYou = document.getElementById('thankYou');

  var requiredIds = Array.from(form.querySelectorAll('[required]')).map(function (el) { return el.id; }).filter(Boolean);

  function setError(input, show) {
    var err = input.parentElement.querySelector('.field-error');
    if (err) err.style.display = show ? 'block' : 'none';
    input.classList.toggle('invalid', show);
  }

  requiredIds.forEach(function (id) {
    var el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('input', function () { if (el.value.trim()) setError(el, false); });
    el.addEventListener('change', function () { if (el.value.trim()) setError(el, false); });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var valid = true;

    requiredIds.forEach(function (id) {
      var el = document.getElementById(id);
      if (!el) return;
      if (!el.value.trim()) { setError(el, true); valid = false; }
    });

    var phone = form.querySelector('[type="tel"]');
    if (phone && phone.value.trim() && phone.value.replace(/\D/g, '').length < 9) {
      setError(phone, true); valid = false;
    }

    if (!valid) return;

    if (spinner) spinner.style.display = 'inline-block';
    if (btnLabel) btnLabel.textContent = 'שולח...';
    if (submitBtn) submitBtn.disabled = true;

    setTimeout(function () {
      if (form) form.style.display = 'none';
      if (thankYou) thankYou.classList.add('show');
    }, 1500);
  });
})();
