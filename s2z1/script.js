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
  loadHTML("#header-container", "D:\_backup_\Desktop\proiect\s2z1\navbar\nav.html");
  loadHTML("#footer-container", "D:\_backup_\Desktop\proiect\s2z1\footer\footer.html");
  loadHTML("#continut-1", "D:\_backup_\Desktop\proiect\s2z1\footer\footer.html");
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
