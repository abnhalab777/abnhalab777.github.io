document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".Footer a");

  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
      link.style.transform = "scale(1.1)";
    });

    link.addEventListener("mouseleave", () => {
      link.style.backgroundColor = "";
      link.style.transform = "scale(1)";
    });
  });
});
