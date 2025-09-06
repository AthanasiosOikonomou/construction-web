document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all sections and cards you want to animate
  const elementsToAnimate = document.querySelectorAll(
    ".why-choose-us, .services-section, .gallery, .contact-section"
  );
  elementsToAnimate.forEach((el) => {
    // Initially hide the element
    el.classList.add("hidden");
    observer.observe(el);
  });

  // Add smooth scrolling to the contact button
  const contactLink = document.querySelector('a[href="#communication"]');
  if (contactLink) {
    contactLink.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector("#communication").scrollIntoView({
        behavior: "smooth",
      });
    });
  }
});
