// src/js/script.js

// Animação do título principal ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
  const titulo = document.getElementById('titulo');

  setTimeout(() => {
    titulo.classList.add('fade-in');
  }, 200);
});

// Animações de entrada ao scrollar (scroll reveal)
window.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll('.scroll-hidden');

  const observer = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('scroll-visible');
        observer.unobserve(entrada.target);
      }
    });
  }, {
    threshold: 0.2
  });

  elementos.forEach((el) => observer.observe(el));
});

// Função que rola a página suavemente até o topo
function scrollToTop() {
window.scrollTo({
  top: 0,
  behavior: "smooth"
});
}

// Mostrar ou ocultar botão "Voltar ao Topo"
window.addEventListener("scroll", () => {
const btn = document.getElementById("btnTop");
if (window.scrollY > 300) {
  btn.style.display = "block";
} else {
  btn.style.display = "none";
}
});