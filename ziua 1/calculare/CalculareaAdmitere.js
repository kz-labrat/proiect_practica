const dateAdmitere = {
  informatica: [
    {
      universitate: "UAIC - Informatică",
      oras: "Iași, România",
      buget: 8.50,
      taxa: 7.80,
      link: "https://www.info.uaic.ro",
      maps: "https://www.google.com/maps?q=Universitatea+Alexandru+Ioan+Cuza+Iași"
    },
    {
      universitate: "TUIASI - Calculatoare",
      oras: "Iași, România",
      buget: 8.70,
      taxa: 7.90,
      link: "https://www.ac.tuiasi.ro",
      maps: "https://www.google.com/maps?q=Universitatea+Tehnică+Gheorghe+Asachi+Iași"
    },
    {
      universitate: "USV - Informatică",
      oras: "Suceava, România",
      buget: 8.20,
      taxa: 7.40,
      link: "https://www.eed.usv.ro",
      maps: "https://www.google.com/maps?q=Universitatea+Ștefan+cel+Mare+Suceava"
    },
    {
      universitate: "UGAL - Informatică",
      oras: "Galați, România",
      buget: 8.00,
      taxa: 7.20,
      link: "https://www.ugal.ro",
      maps: "https://www.google.com/maps?q=Universitatea+Dunărea+de+Jos+din+Galați"
    },
    {
      universitate: "UBc - Informatică",
      oras: "Bacău, România",
      buget: 7.90,
      taxa: 7.00,
      link: "https://www.ub.ro",
      maps: "https://www.google.com/maps?q=Universitatea+Vasile+Alecsandri+din+Bacău"
    },
    {
      universitate: "Universitatea Petre Andrei",
      oras: "Iași, România",
      buget: 7.80,
      taxa: 6.80,
      link: "https://upa.ro",
      maps: "https://www.google.com/maps?q=Universitatea+Petre+Andrei+Iași"
    },
    {
      universitate: "UTM - Universitatea Tehnică a Moldovei",
      oras: "Chișinău, Moldova",
      buget: 8.00,
      taxa: 7.00,
      link: "https://utm.md",
      maps: "https://www.google.com/maps?q=Universitatea+Tehnică+a+Moldovei+Chișinău"
    },
    {
      universitate: "USM - Universitatea de Stat din Moldova",
      oras: "Chișinău, Moldova",
      buget: 8.30,
      taxa: 7.50,
      link: "https://usm.md",
      maps: "https://www.google.com/maps?q=Universitatea+de+Stat+din+Moldova+Chișinău"
    },
    {
      universitate: "Universitatea de Stat „Alecu Russo” din Bălți",
      oras: "Bălți, Moldova",
      buget: 7.80,
      taxa: 7.00,
      link: "https://usarb.md",
      maps: "https://www.google.com/maps?q=Universitatea+de+Stat+Alecu+Russo+din+Bălți"
    },
    {
      universitate: "Universitatea de Studii Europene",
      oras: "Chișinău, Moldova",
      buget: 7.50,
      taxa: 6.80,
      link: "https://usem.md",
      maps: "https://www.google.com/maps?q=Universitatea+de+Studii+Europene+Chișinău"
    }
  ],

  medicina: [
    {
      universitate: "UMF Iași",
      oras: "Iași, România",
      buget: 9.40,
      taxa: 8.60,
      link: "https://www.umfiasi.ro",
      maps: "https://www.google.com/maps?q=Universitatea+de+Medicină+și+Farmacie+Iași"
    },
    {
      universitate: "UMFST Târgu Mureș - extensie Bacău",
      oras: "Bacău, România",
      buget: 9.10,
      taxa: 8.30,
      link: "https://www.umfst.ro",
      maps: "https://www.google.com/maps?q=UMFST+Târgu+Mureș+extensie+Bacău"
    },
    {
      universitate: "USMF „Nicolae Testemițanu”",
      oras: "Chișinău, Moldova",
      buget: 9.20,
      taxa: 8.50,
      link: "https://usmf.md",
      maps: "https://www.google.com/maps?q=Universitatea+de+Stat+de+Medicină+și+Farmacie+Nicolae+Testemițanu"
    }
  ],

  drept: [
    {
      universitate: "UAIC - Drept",
      oras: "Iași, România",
      buget: 8.70,
      taxa: 7.90,
      link: "https://www.laws.uaic.ro",
      maps: "https://www.google.com/maps?q=Facultatea+de+Drept+UAIC+Iași"
    },
    {
      universitate: "UGAL - Drept",
      oras: "Galați, România",
      buget: 8.10,
      taxa: 7.30,
      link: "https://www.ugal.ro",
      maps: "https://www.google.com/maps?q=Facultatea+de+Drept+UGAL+Galați"
    },
    {
      universitate: "USV - Drept",
      oras: "Suceava, România",
      buget: 8.00,
      taxa: 7.20,
      link: "https://www.usv.ro",
      maps: "https://www.google.com/maps?q=Facultatea+de+Drept+USV+Suceava"
    },
    {
      universitate: "USM - Drept",
      oras: "Chișinău, Moldova",
      buget: 8.50,
      taxa: 7.70,
      link: "https://usm.md",
      maps: "https://www.google.com/maps?q=Facultatea+de+Drept+USM+Chișinău"
    },
    {
      universitate: "ULIM - Facultatea de Drept",
      oras: "Chișinău, Moldova",
      buget: 8.10,
      taxa: 7.20,
      link: "https://ulim.md",
      maps: "https://www.google.com/maps?q=ULIM+Facultatea+de+Drept+Chișinău"
    }
  ]
};

  function calculeazaAdmiterea() {
  // Get grades from localStorage
  const grades = JSON.parse(localStorage.getItem('grades') || '{}');
  const domeniu = document.getElementById("domeniu").value;
  const tara = document.getElementById("tara").value;
  const rezultateDiv = document.getElementById("rezultate");

  // Helper: fallback to 0 if not present
  const g = n => typeof grades[n] === "number" ? grades[n] : 0;

  // Define formulas for each university (by name)
const formule = {
  "UTM - Universitatea Tehnică a Moldovei": {
    calc: g =>
      0.10 * g("matematica") +
      0.10 * g("informatica") +
      0.10 * g("fizica") +
      0.10 * g("engleza") +
      0.20 * g("anual") +
      0.20 * g("examen") +
      0.20 * g("bac"),
    descriere: "10% Matematică + 10% Informatică + 10% Fizică + 10% Engleză + 20% Media anuală + 20% Examen + 20% BAC"
  },
  "UAIC - Informatică": {
    calc: g =>
      0.25 * g("matematica") +
      0.25 * g("informatica") +
      0.10 * g("romana") +
      0.10 * g("engleza") +
      0.10 * g("fizica") +
      0.10 * g("anual") +
      0.10 * g("examen") +
      0.10 * g("bac"),
    descriere: "25% Matematică + 25% Informatică + 10% Română + 10% Engleză + 10% Fizică + 10% Media anuală + 10% Examen + 10% BAC"
  },
  "TUIASI - Calculatoare": {
    calc: g =>
      0.30 * g("matematica") +
      0.20 * g("informatica") +
      0.10 * g("romana") +
      0.10 * g("engleza") +
      0.10 * g("anual") +
      0.10 * g("examen") +
      0.10 * g("bac"),
    descriere: "30% Matematică + 20% Informatică + 10% Română + 10% Engleză + 10% Media anuală + 10% Examen + 10% BAC"
  },
  "USV - Informatică": {
    calc: g =>
      0.25 * g("matematica") +
      0.25 * g("informatica") +
      0.10 * g("romana") +
      0.10 * g("engleza") +
      0.10 * g("anual") +
      0.10 * g("examen") +
      0.10 * g("bac"),
    descriere: "25% Matematică + 25% Informatică + 10% Română + 10% Engleză + 10% Media anuală + 10% Examen + 10% BAC"
  },
  "UGAL - Informatică": {
    calc: g =>
      0.25 * g("matematica") +
      0.25 * g("informatica") +
      0.10 * g("romana") +
      0.10 * g("fizica") +
      0.10 * g("anual") +
      0.10 * g("examen") +
      0.10 * g("bac"),
    descriere: "25% Matematică + 25% Informatică + 10% Română + 10% Fizică + 10% Media anuală + 10% Examen + 10% BAC"
  },
  "UBc - Informatică": {
    calc: g =>
      0.25 * g("matematica") +
      0.25 * g("informatica") +
      0.10 * g("romana") +
      0.10 * g("engleza") +
      0.10 * g("anual") +
      0.10 * g("examen") +
      0.10 * g("bac"),
    descriere: "25% Matematică + 25% Informatică + 10% Română + 10% Engleză + 10% Media anuală + 10% Examen + 10% BAC"
  },
  "Universitatea Petre Andrei": {
    calc: g =>
      0.20 * g("matematica") +
      0.20 * g("informatica") +
      0.10 * g("romana") +
      0.10 * g("engleza") +
      0.10 * g("anual") +
      0.10 * g("examen") +
      0.20 * g("bac"),
    descriere: "20% Matematică + 20% Informatică + 10% Română + 10% Engleză + 10% Media anuală + 10% Examen + 20% BAC"
  },
  "USM - Universitatea de Stat din Moldova": {
    calc: g =>
      0.20 * g("matematica") +
      0.20 * g("informatica") +
      0.10 * g("romana") +
      0.10 * g("fizica") +
      0.10 * g("anual") +
      0.10 * g("examen") +
      0.20 * g("bac"),
    descriere: "20% Matematică + 20% Informatică + 10% Română + 10% Fizică + 10% Media anuală + 10% Examen + 20% BAC"
  },
  "Universitatea de Stat „Alecu Russo” din Bălți": {
    calc: g =>
      0.20 * g("matematica") +
      0.20 * g("informatica") +
      0.10 * g("romana") +
      0.10 * g("engleza") +
      0.10 * g("anual") +
      0.10 * g("examen") +
      0.20 * g("bac"),
    descriere: "20% Matematică + 20% Informatică + 10% Română + 10% Engleză + 10% Media anuală + 10% Examen + 20% BAC"
  },
  "Universitatea de Studii Europene": {
    calc: g =>
      0.20 * g("matematica") +
      0.20 * g("informatica") +
      0.10 * g("romana") +
      0.10 * g("engleza") +
      0.10 * g("anual") +
      0.10 * g("examen") +
      0.20 * g("bac"),
    descriere: "20% Matematică + 20% Informatică + 10% Română + 10% Engleză + 10% Media anuală + 10% Examen + 20% BAC"
  },

  // MEDICINA
  "UMF Iași": {
    calc: g =>
      0.22 * g("chimie") +
      0.22 * g("biologie") +
      0.10 * g("romana") +
      0.10 * g("engleza") +
      0.10 * g("fizica") +
      0.08 * g("anual") +
      0.08 * g("examen") +
      0.10 * g("bac"),
    descriere: "22% Chimie + 22% Biologie + 10% Română + 10% Engleză + 10% Fizică + 8% Media anuală + 8% Examen + 10% BAC"
  },
  "UMFST Târgu Mureș - extensie Bacău": {
    calc: g =>
      0.22 * g("chimie") +
      0.22 * g("biologie") +
      0.10 * g("romana") +
      0.10 * g("engleza") +
      0.10 * g("fizica") +
      0.08 * g("anual") +
      0.08 * g("examen") +
      0.10 * g("bac"),
    descriere: "22% Chimie + 22% Biologie + 10% Română + 10% Engleză + 10% Fizică + 8% Media anuală + 8% Examen + 10% BAC"
  },
  "USMF „Nicolae Testemițanu”": {
    calc: g =>
      0.22 * g("chimie") +
      0.22 * g("biologie") +
      0.10 * g("romana") +
      0.10 * g("engleza") +
      0.10 * g("fizica") +
      0.08 * g("anual") +
      0.08 * g("examen") +
      0.10 * g("bac"),
    descriere: "22% Chimie + 22% Biologie + 10% Română + 10% Engleză + 10% Fizică + 8% Media anuală + 8% Examen + 10% BAC"
  },

  // DREPT
  "UAIC - Drept": {
    calc: g =>
      0.30 * g("istorie") +
      0.30 * g("romana") +
      0.10 * g("engleza") +
      0.10 * g("anual") +
      0.10 * g("examen") +
      0.10 * g("bac"),
    descriere: "30% Istorie + 30% Română + 10% Engleză + 10% Media anuală + 10% Examen + 10% BAC"
  },
  "UGAL - Drept": {
    calc: g =>
      0.30 * g("istorie") +
      0.30 * g("romana") +
      0.10 * g("engleza") +
      0.10 * g("anual") +
      0.10 * g("examen") +
      0.10 * g("bac"),
    descriere: "30% Istorie + 30% Română + 10% Engleză + 10% Media anuală + 10% Examen + 10% BAC"
  },
  "USV - Drept": {
    calc: g =>
      0.30 * g("istorie") +
      0.30 * g("romana") +
      0.10 * g("engleza") +
      0.10 * g("anual") +
      0.10 * g("examen") +
      0.10 * g("bac"),
    descriere: "30% Istorie + 30% Română + 10% Engleză + 10% Media anuală + 10% Examen + 10% BAC"
  },
  "USM - Drept": {
    calc: g =>
      0.30 * g("istorie") +
      0.30 * g("romana") +
      0.10 * g("engleza") +
      0.10 * g("anual") +
      0.10 * g("examen") +
      0.10 * g("bac"),
    descriere: "30% Istorie + 30% Română + 10% Engleză + 10% Media anuală + 10% Examen + 10% BAC"
  },
  "ULIM - Facultatea de Drept": {
    calc: g =>
      0.30 * g("istorie") +
      0.30 * g("romana") +
      0.10 * g("engleza") +
      0.10 * g("anual") +
      0.10 * g("examen") +
      0.10 * g("bac"),
    descriere: "30% Istorie + 30% Română + 10% Engleză + 10% Media anuală + 10% Examen + 10% BAC"
  }
};


  // Filter and map results
  const rezultate = dateAdmitere[domeniu]
  .filter(fac => {
    if (tara === "toate") return true;
    if (tara === "romania") return fac.oras.includes("România");
    if (tara === "moldova") return fac.oras.includes("Moldova");
  })
  .map(fac => {
    let medie, formulaText;
    if (formule[fac.universitate]) {
      medie = formule[fac.universitate].calc(n => g(n));
      formulaText = formule[fac.universitate].descriere;
    } else {
      medie = g("bac");
      formulaText = "Doar media BAC";
    }

    let mesaj = "";
    if (medie >= fac.buget)
      mesaj = `<span style='color:green;'>buget</span>`;
    else if (medie >= fac.taxa)
      mesaj = `<span style='color:orange;'>taxă</span>`;
    else
      mesaj = `<span style='color:red;'>Media insuficientă</span>`;

    return `
      <div style="margin-bottom:20px; padding: 10px; border: 1px solid #ccc; border-radius: 8px;">
        <strong>${fac.universitate}</strong> – ${fac.oras}<br>
        <span style="font-size:0.95em;color:#888;">Formula: ${formulaText}</span><br>
        Media ta calculată: <b>${medie.toFixed(2)}</b><br>
        Poți intra la: ${mesaj}<br>
        <a href="${fac.link}" target="_blank">🔗 Vizitează site-ul oficial</a><br>
        <div class="map-container">
          <a href="${fac.maps}" target="_blank">📍 Vezi locația pe Google Maps</a>
          <div class="map-preview">
            <iframe
              src="${fac.maps.replace("https://www.google.com/maps?q=", "https://maps.google.com/maps?q=")}&output=embed"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    `;
  }).join("");

  rezultateDiv.innerHTML = `<h3>Rezultate posibile:</h3>${rezultate}`;
}