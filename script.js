// Multi-page navigation
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelectorAll(".nav-links a")
      .forEach((a) => a.classList.remove("active"));
    this.classList.add("active");
    const page = this.getAttribute("data-page");
    document
      .querySelectorAll(".section-box")
      .forEach((sec) => sec.classList.remove("active"));
    const activePage = document.getElementById(page);
    if (activePage) activePage.classList.add("active");
  });
});

// Show default page on load
window.addEventListener("DOMContentLoaded", () => {
  const currentActive = document.querySelector(".nav-links a.active");
  if (currentActive) {
    currentActive.click();
  }
});
