// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Single orchestrated hero entrance (respects reduced-motion)
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

if (!prefersReducedMotion) {
  const heroText = document.querySelectorAll(
    ".hero-location, .hero-name, .hero-role, .hero-actions",
  );
  const heroEditor = document.querySelector(".editor");

  heroText.forEach((el, i) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(14px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    el.style.transitionDelay = `${i * 0.1}s`;
  });

  if (heroEditor) {
    heroEditor.style.opacity = "0";
    heroEditor.style.transform = "rotate(1.2deg) translateY(20px) scale(0.97)";
    heroEditor.style.transition = "opacity 0.7s ease, transform 0.7s ease";
    heroEditor.style.transitionDelay = "0.25s";
  }

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      heroText.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      });
      if (heroEditor) {
        heroEditor.style.opacity = "1";
        heroEditor.style.transform = "rotate(1.2deg) translateY(0) scale(1)";
      }
    });
  });
}

// Active nav link on scroll
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll('nav a[href^="#"]');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.style.color =
            link.getAttribute("href") === `#${id}` ? "var(--navy)" : "";
        });
      }
    });
  },
  { rootMargin: "-40% 0px -50% 0px" },
);

sections.forEach((section) => observer.observe(section));
