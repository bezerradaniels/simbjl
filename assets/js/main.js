// Clínica SIM — interações da página (sem dependências)

// Ano atual no rodapé
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Sombra no cabeçalho ao rolar a página
const header = document.getElementById('header');
if (header) {
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// Menu mobile: abre/fecha o <dialog>; fecha também ao clicar num link ou fora do painel
const menu = document.getElementById('menu');
if (menu) {
  document.getElementById('menu-open').addEventListener('click', () => menu.showModal());
  document.getElementById('menu-close').addEventListener('click', () => menu.close());
  menu.addEventListener('click', (e) => {
    if (e.target === menu || e.target.closest('a')) menu.close();
  });
}

// Animação de entrada das seções quando aparecem na tela
const sections = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.2 });
  sections.forEach((el) => observer.observe(el));
} else {
  sections.forEach((el) => el.classList.add('is-visible'));
}
