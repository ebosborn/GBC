// Shared nav + footer injected into every page
(function() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  const navHTML = `
  <nav id="main-nav">
    <a href="index.html" class="nav-logo">Gathered <span>Basket</span> Co.</a>
    <button class="nav-hamburger" id="hamburger" aria-label="Open menu">
      <span></span><span></span><span></span>
    </button>
    <ul class="nav-links" id="nav-links">
      <li><a href="themes.html" ${currentPage==='themes.html'?'class="active"':''}>Themes</a></li>
      <li><a href="how-it-works.html" ${currentPage==='how-it-works.html'?'class="active"':''}>How It Works</a></li>
      <li><a href="about.html" ${currentPage==='about.html'?'class="active"':''}>About</a></li>
      <li><a href="contact.html" ${currentPage==='contact.html'?'class="active"':''}>Contact</a></li>
    </ul>
    <a href="themes.html" class="nav-cta">Shop Baskets</a>
  </nav>`;

  const footerHTML = `
  <footer>
    <div class="footer-inner">
      <div class="footer-brand">
        <div class="footer-logo">Gathered <span>Basket</span> Co.</div>
        <p>Thoughtfully curated gifts for every milestone.</p>
      </div>
      <div class="footer-links">
        <a href="themes.html">Themes</a>
        <a href="how-it-works.html">How It Works</a>
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
      </div>
      <div class="footer-contact">
        <div>📍 Springfield, Virginia</div>
        <div>📧 hello@gatheredbasket.com</div>
        <div>📦 Ships nationwide</div>
      </div>
    </div>
    <div class="footer-bottom">© 2025 Gathered Basket Co. · Made with care in Springfield, VA</div>
  </footer>`;

  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // Hamburger toggle
  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('nav-links').classList.toggle('open');
  });

  // Scroll observer for fade-up
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
})();
