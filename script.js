// Mobile navigation toggle
const navToggle = document.getElementById("nav-toggle");
const mainNav = document.getElementById("main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("open");
    mainNav.classList.toggle("open");
  });

  // Close nav when clicking a link (mobile)
  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("open");
      mainNav.classList.remove("open");
    });
  });
}

// Hero background slider
const slides = document.querySelectorAll(".hero-slide");
let currentSlide = 0;

if (slides.length > 1) {
  setInterval(() => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }, 7000);
}

// Reveal elements on scroll
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
    }
  );

  revealElements.forEach((el) => observer.observe(el));
} else {
  // Fallback for very old browsers
  revealElements.forEach((el) => el.classList.add("visible"));
}

// Smooth scrolling for in-page navigation (extra polish)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    const targetEl = document.querySelector(targetId);
    if (!targetEl) return;

    e.preventDefault();
    const headerOffset = 72;
    const elementPosition = targetEl.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});

// Simple contact form handler (front-end only)
const contactForm = document.getElementById("contact-form");
const confirmationEl = document.getElementById("form-confirmation");

if (contactForm && confirmationEl) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    confirmationEl.textContent = "Thank you for your enquiry. Our team will contact you shortly.";
    confirmationEl.classList.add("visible");

    contactForm.reset();
  });
}

// Dynamic footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

