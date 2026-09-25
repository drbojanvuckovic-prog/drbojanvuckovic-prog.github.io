(() => {
  const nav = document.querySelector('.navlinks');
  const menu = document.querySelector('.menu-btn');
  if (!nav) return;

  if (!nav.querySelector('.mobile-nav-tool')) {
    const full = document.createElement('a');
    full.className = 'mobile-nav-tool';
    full.href = 'fulltext.html';
    full.textContent = 'Kompletan tekst';

    const pdf = document.createElement('a');
    pdf.className = 'mobile-nav-tool mobile-pdf';
    pdf.href = 'assets/disertacija.pdf';
    pdf.textContent = 'PDF disertacije';

    nav.append(full, pdf);
  }

  const syncExpanded = () => menu?.setAttribute('aria-expanded', String(nav.classList.contains('open')));
  syncExpanded();
  new MutationObserver(syncExpanded).observe(nav, {attributes:true, attributeFilter:['class']});

  nav.querySelectorAll('.mobile-nav-tool').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  document.addEventListener('click', e => {
    if (!nav.classList.contains('open')) return;
    if (nav.contains(e.target) || menu?.contains(e.target)) return;
    nav.classList.remove('open');
  });
})();