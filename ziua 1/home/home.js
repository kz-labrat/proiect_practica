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
  const stars = parseInt(document.getElementById('stars').value);
  const text = document.getElementById('text').value;
  if (!name || !stars || !text || stars < 1 || stars > 5) {
    alert('Completează toate câmpurile și asigură-te că ai introdus un număr valid de stele (1-5).');
    return;
  }
  // Adaugă recenzia în array
  reviews.unshift({
    name: name,
    stars: stars,
    text: text
  });
  // Reafișează pagina curentă (sau pagina 1 dacă ești pe "All Reviews")
  if (showingAll) {
    renderReviews(1);
  } else {
    renderReviews(currentPage);
    setActiveButton(currentPage);
  }
  // Golește câmpurile
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

const reviews = [
  {
    name: "Ana Popescu",
    stars: 5,
    text: "Platforma e genială! Am înțeles matematica mult mai ușor cu lecțiile interactive."
  },
  {
    name: "Mihai Ionescu",
    stars: 4,
    text: "Foarte utilă, deși aș vrea mai multe lecții la biologie. În rest, totul perfect."
  },
  {
    name: "Maria Georgescu",
    stars: 5,
    text: "Super platformă! Recomand tuturor colegilor mei."
  },
  {
    name: "Andrei Vasilescu",
    stars: 3,
    text: "E ok, dar ar fi utilă o aplicație mobilă."
  },
  {
    name: "Elena Dumitru",
    stars: 4,
    text: "Mi-a plăcut mult interfața și modul de prezentare a lecțiilor."
  },
  // Adaugă mai multe recenzii dacă vrei
];

const DEFAULT_REVIEWS_PER_PAGE = 2;
let REVIEWS_PER_PAGE = DEFAULT_REVIEWS_PER_PAGE;
let currentPage = 1;
let showingAll = false;

function renderReviews(page) {
  const container = document.getElementById('reviews-container');
  container.innerHTML = '';
  const start = (page - 1) * REVIEWS_PER_PAGE;
  const end = start + REVIEWS_PER_PAGE;
  const pageReviews = reviews.slice(start, end);

  pageReviews.forEach(r => {
    const reviewDiv = document.createElement('div');
    reviewDiv.className = 'review';
    reviewDiv.innerHTML = `
      <div class="name">${r.name}</div>
      <div class="stars">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</div>
      <div class="text">${r.text}</div>
    `;
    container.appendChild(reviewDiv);
  });
}

function setActiveButton(page) {
  document.querySelectorAll('.page-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.page == page) btn.classList.add('active');
  });
}

// Pagination buttons
document.querySelectorAll('.page-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    if (this.dataset.page === 'next') {
      if (currentPage < Math.ceil(reviews.length / REVIEWS_PER_PAGE)) {
        currentPage++;
      }
    } else {
      currentPage = parseInt(this.dataset.page);
    }
    renderReviews(currentPage);
    setActiveButton(currentPage);
    // Show pagination again if hidden
    document.querySelector('.pagination').style.display = '';
    // Reset "All Reviews" button state
    const allReviewsBtn = document.querySelector('.categories-button');
    allReviewsBtn.textContent = "All Reviews";
    showingAll = false;
    REVIEWS_PER_PAGE = DEFAULT_REVIEWS_PER_PAGE;
  });
});

// "All Reviews" button toggle
const allReviewsBtn = document.querySelector('.categories-button');
allReviewsBtn.addEventListener('click', function() {
  if (!showingAll) {
    REVIEWS_PER_PAGE = reviews.length;
    currentPage = 1;
    renderReviews(currentPage);
    document.querySelector('.pagination').style.display = 'none';
    allReviewsBtn.textContent = "Less Reviews";
    showingAll = true;
  } else {
    REVIEWS_PER_PAGE = DEFAULT_REVIEWS_PER_PAGE;
    currentPage = 1;
    renderReviews(currentPage);
    document.querySelector('.pagination').style.display = '';
    allReviewsBtn.textContent = "All Reviews";
    showingAll = false;
    setActiveButton(currentPage);
  }
});

// Initial render
renderReviews(currentPage);
setActiveButton(currentPage);