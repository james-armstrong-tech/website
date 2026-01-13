// Basic enhancements
(function(){
  const nav = document.querySelector('.site-header');
  let lastY = window.scrollY;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    nav.style.boxShadow = y>2 ? '0 1px 12px rgba(0,0,0,.06)' : 'none';
    lastY = y;
  });
})();
