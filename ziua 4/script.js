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