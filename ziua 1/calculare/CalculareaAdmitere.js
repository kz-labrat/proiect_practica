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
    const media = parseFloat(document.getElementById("media").value);
    const domeniu = document.getElementById("domeniu").value;
    const rezultateDiv = document.getElementById("rezultate");

    if (isNaN(media) || media < 5 || media > 10) {
      rezultateDiv.innerHTML = "<p style='color:red;'>Introduce o medie validă între 5 și 10.</p>";
      return;
    }

    const tara = document.getElementById("tara").value;

const rezultate = dateAdmitere[domeniu]
  .filter(fac => {
    if (tara === "toate") return true;
    if (tara === "romania") return fac.oras.includes("România");
    if (tara === "moldova") return fac.oras.includes("Moldova");
  })
  .map(fac => {
    let mesaj = "";
    if (media >= fac.buget)
      mesaj = `<span style='color:green;'>buget</span>`;
    else if (media >= fac.taxa)
      mesaj = `<span style='color:orange;'>taxă</span>`;
    else
      mesaj = `<span style='color:red;'>Media insuficientă</span>`;

      return `
      <div style="margin-bottom:20px; padding: 10px; border: 1px solid #ccc; border-radius: 8px;">
        <strong>${fac.universitate}</strong> – ${fac.oras}<br>
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