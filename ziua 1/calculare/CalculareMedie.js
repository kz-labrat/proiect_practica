document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('media-form');
  const rezultatDiv = document.getElementById('media-rezultat');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const bac = parseFloat(document.getElementById('bac').value);
    const anual = parseFloat(document.getElementById('anual').value);
    const examenInput = document.getElementById('examen').value;
    const examen = examenInput ? parseFloat(examenInput) : null;

    if (isNaN(bac) || bac < 5 || bac > 10) {
      rezultatDiv.innerHTML = "<p style='color:red;'>Introduceți o medie BAC validă între 5 și 10.</p>";
      return;
    }
    if (isNaN(anual) || anual < 5 || anual > 10) {
      rezultatDiv.innerHTML = "<p style='color:red;'>Introduceți o medie anuală validă între 5 și 10.</p>";
      return;
    }
    if (examenInput && (isNaN(examen) || examen < 0 || examen > 10)) {
      rezultatDiv.innerHTML = "<p style='color:red;'>Introduceți o notă de examen validă între 0 și 10 sau lăsați gol.</p>";
      return;
    }

    // Formula exemplu: 50% BAC, 25% anual, 25% examen (dacă există examen)
    let medie;
    if (examenInput) {
      medie = (0.5 * bac) + (0.25 * anual) + (0.25 * examen);
    } else {
      medie = (0.6 * bac) + (0.4 * anual); // exemplu fără examen
    }

    rezultatDiv.innerHTML = `
      <h3 class="text-lg font-bold text-orange-600 mb-2">Media ta de admitere este:</h3>
      <div style="font-size:2rem; color:#ff7e22; font-weight:bold;">${medie.toFixed(2)}</div>
      <p class="mt-2 text-gray-700">* Formula folosită: ${examenInput ? "50% BAC + 25% anual + 25% examen" : "60% BAC + 40% anual"}</p>
    `;
  });
});

// Adaugă la finalul fișierului CalculareMedie.js
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('media-form');
  const rezultatDiv = document.getElementById('media-rezultat');
  const goToAdmitereBtn = document.getElementById('go-to-admitere');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const bac = parseFloat(document.getElementById('bac').value);
    const anual = parseFloat(document.getElementById('anual').value);
    const examenInput = document.getElementById('examen').value;
    const examen = examenInput ? parseFloat(examenInput) : null;

    if (isNaN(bac) || bac < 5 || bac > 10) {
      rezultatDiv.innerHTML = "<p style='color:red;'>Introduceți o medie BAC validă între 5 și 10.</p>";
      goToAdmitereBtn.style.display = "none";
      return;
    }
    if (isNaN(anual) || anual < 5 || anual > 10) {
      rezultatDiv.innerHTML = "<p style='color:red;'>Introduceți o medie anuală validă între 5 și 10.</p>";
      goToAdmitereBtn.style.display = "none";
      return;
    }
    if (examenInput && (isNaN(examen) || examen < 0 || examen > 10)) {
      rezultatDiv.innerHTML = "<p style='color:red;'>Introduceți o notă de examen validă între 0 și 10 sau lăsați gol.</p>";
      goToAdmitereBtn.style.display = "none";
      return;
    }

    let medie;
    if (examenInput) {
      medie = (0.5 * bac) + (0.25 * anual) + (0.25 * examen);
    } else {
      medie = (0.6 * bac) + (0.4 * anual);
    }

    rezultatDiv.innerHTML = `
      <h3 class="text-lg font-bold text-orange-600 mb-2">Media ta de admitere este:</h3>
      <div style="font-size:2rem; color:#ff7e22; font-weight:bold;">${medie.toFixed(2)}</div>
      <p class="mt-2 text-gray-700">* Formula folosită: ${examenInput ? "50% BAC + 25% anual + 25% examen" : "60% BAC + 40% anual"}</p>
    `;
    goToAdmitereBtn.style.display = "block";
  });

  goToAdmitereBtn.addEventListener('click', function() {
    window.location.href = "index.html";
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('media-form');
  const rezultatDiv = document.getElementById('media-rezultat');
  const goToAdmitereBtn = document.getElementById('go-to-admitere');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Collect all grades
    const grades = {
      bac: parseFloat(document.getElementById('bac').value),
      anual: parseFloat(document.getElementById('anual').value),
      examen: parseFloat(document.getElementById('examen').value) || 0,
      matematica: parseFloat(document.getElementById('matematica').value) || 0,
      informatica: parseFloat(document.getElementById('informatica').value) || 0,
      fizica: parseFloat(document.getElementById('fizica').value) || 0,
      chimie: parseFloat(document.getElementById('chimie').value) || 0,
      biologie: parseFloat(document.getElementById('biologie').value) || 0,
      romana: parseFloat(document.getElementById('romana').value) || 0,
      engleza: parseFloat(document.getElementById('engleza').value) || 0,
    };
    // Save to localStorage
    localStorage.setItem('grades', JSON.stringify(grades));

    rezultatDiv.innerHTML = `<p class="text-green-600 font-bold">Notele au fost salvate! Apasă pe Admitere pentru a vedea la ce universități poți intra.</p>`;
    goToAdmitereBtn.style.display = "block";
  });

  goToAdmitereBtn.addEventListener('click', function() {
    window.location.href = "index.html";
  });
});