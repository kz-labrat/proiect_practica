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

  document.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.querySelector('input[type="password"]');

  passwordInput.addEventListener("input", () => {
    const value = passwordInput.value;
    const isValid = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}/.test(value);

    if (isValid) {
      passwordInput.style.borderColor = "green";
    } else {
      passwordInput.style.borderColor = "red";
    }
  });
});
