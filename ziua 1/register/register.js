document.getElementById('register-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const phone = document.getElementById('phone').value.trim();

  // Simple validations
  if (!username) {
    alert('Please enter a username.');
    return;
  }
  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    alert('Please enter a valid email.');
    return;
  }
  if (!password || password.length < 8) {
    alert('Password must be at least 8 characters.');
    return;
  }
  if (!phone || !/^[0-9+\-\s]{7,}$/.test(phone)) {
    alert('Please enter a valid phone number.');
    return;
  }

  // If all validations pass, redirect to login page
  window.location.href = "../logare/login.html";
});