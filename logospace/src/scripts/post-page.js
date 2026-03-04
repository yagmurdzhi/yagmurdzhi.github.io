//scroll headers
function scrollToAnchor(event, id) {
  event.preventDefault();
  const el = document.getElementById(id);
  const offset = 100; // В пикселях
  const y = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: y, behavior: 'smooth' });
}
