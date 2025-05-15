document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseover', () => {
      button.style.transform = 'scale(1.1)';
      button.style.transition = 'transform 0.2s ease-in-out';
    });
  
    button.addEventListener('mouseout', () => {
      button.style.transform = 'scale(1)';
    });
  });
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', event => {
      const targetId = link.getAttribute('href').split('#')[1];
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        event.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  document.querySelectorAll('.category-grid .card').forEach(card => {
    card.addEventListener('mouseover', () => {
      card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
      card.style.transform = 'translateY(-5px)';
      card.style.transition = 'all 0.3s ease-in-out';
    });
  
    card.addEventListener('mouseout', () => {
      card.style.boxShadow = 'none';
      card.style.transform = 'translateY(0)';
    });
  });
document.querySelectorAll('.category-grid .card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.classList.add('active');
    });

    card.addEventListener('mouseout', () => {
        card.classList.remove('active');
    });
});

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#ff782e'; // Change color on hover
        link.style.textDecoration = 'underline'; // Add underline on hover
        link.style.transition = 'color 0.2s ease-in-out';
    });

    link.addEventListener('mouseout', () => {
        link.style.color = ''; // Reset to default color
        link.style.textDecoration = 'none'; // Remove underline
    });
});

function addReview() {
      const name = document.getElementById('name').value;
      const stars = document.getElementById('stars').value;
      const text = document.getElementById('text').value;
      if (!name || !stars || !text || stars < 1 || stars > 5) {
        alert('Completează toate câmpurile și asigură-te că ai introdus un număr valid de stele (1-5).');
        return;
      }
      const review = document.createElement('div');
      review.className = 'review';
      review.innerHTML = `
        <div class="name">${name}</div>
        <div class="stars">${'★'.repeat(stars)}${'☆'.repeat(5 - stars)}</div>
        <div class="text">${text}</div>
      `;
      document.getElementById('reviews').prepend(review);
      document.getElementById('name').value = '';
      document.getElementById('stars').value = '';
      document.getElementById('text').value = '';
      }

      document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Load saved theme
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    toggle.innerHTML = `<i class="fas fa-sun"></i>`;
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
