document.addEventListener("DOMContentLoaded", function() {
  const body = document.body;
  const toggle = document.getElementById("toggle-theme");

  // Load saved theme
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    toggle.innerHTML = `<i class="fas fa-sun"></i>`;
  } else {
    toggle.innerHTML = `<i class="fas fa-moon"></i>`;
  }

  toggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      toggle.innerHTML = `<i class="fas fa-sun"></i>`;
    } else {
      localStorage.setItem("theme", "light");
      toggle.innerHTML = `<i class="fas fa-moon"></i>`;
    }
  });
});