function loadHTML(selector, file) {
  fetch(file)
    .then(response => {
      if (!response.ok) throw new Error(`Failed to load ${file}`);
      return response.text();
    })
    .then(data => {
      document.querySelector(selector).innerHTML = data;
    })
    .catch(error => {
      console.error(error);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  loadHTML("#header-container", "../navbar/nav.html");
  loadHTML("#footer-container", "../footer/footer.html");
  loadHTML("#continut-1", "../continut/continut1.html");
  loadHTML("#continut-2", "../continut/continut2.html");
  loadHTML("#continut-3", "../continut/continut3.html");
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.fade-in').forEach(el => {
      el.classList.add('visible');
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.fade-in').forEach(el => {
      el.classList.add('visible');
    });
  });
