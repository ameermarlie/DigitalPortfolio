document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  document.querySelectorAll(".rung").forEach((rung) => {
    observer.observe(rung);
  });

  // Add hover effects
  document.querySelectorAll(".rung").forEach((rung) => {
    rung.addEventListener("mouseenter", () => {
      const dot = rung.querySelector(".dot");
      dot.style.transform = "translate(-50%, 0) scale(1.2)";
      dot.style.transition = "transform 0.3s ease";
    });

    rung.addEventListener("mouseleave", () => {
      const dot = rung.querySelector(".dot");
      dot.style.transform = "translate(-50%, 0) scale(1)";
    });
  });
});


