const dateAdmitere = {
    informatica: [
      // România – Regiunea Moldova
      {
        universitate: "UAIC - Informatică",
        oras: "Iași, România",
        buget: 8.50,
        taxa: 7.80,
        link: "https://www.info.uaic.ro"
      },
      {
        universitate: "TUIASI - Calculatoare",
        oras: "Iași, România",
        buget: 8.70,
        taxa: 7.90,
        link: "https://www.ac.tuiasi.ro"
      },
      {
        universitate: "USV - Informatică",
        oras: "Suceava, România",
        buget: 8.20,
        taxa: 7.40,
        link: "https://www.eed.usv.ro"
      },
      {
        universitate: "UGAL - Informatică",
        oras: "Galați, România",
        buget: 8.00,
        taxa: 7.20,
        link: "https://www.ugal.ro"
      },
      {
        universitate: "UBc - Informatică",
        oras: "Bacău, România",
        buget: 7.90,
        taxa: 7.00,
        link: "https://www.ub.ro"
      },
  
      // Republica Moldova
      {
        universitate: "UTM - Universitatea Tehnică a Moldovei",
        oras: "Chișinău, Moldova",
        buget: 8.00,
        taxa: 7.00,
        link: "https://utm.md"
      },
      {
        universitate: "USM - Universitatea de Stat din Moldova",
        oras: "Chișinău, Moldova",
        buget: 8.30,
        taxa: 7.50,
        link: "https://usm.md"
      },
      {
        universitate: "Universitatea de Stat „Alecu Russo” din Bălți",
        oras: "Bălți, Moldova",
        buget: 7.80,
        taxa: 7.00,
        link: "https://usarb.md"
      }
    ],
  
    medicina: [
      {
        universitate: "UMF Iași",
        oras: "Iași, România",
        buget: 9.40,
        taxa: 8.60,
        link: "https://www.umfiasi.ro"
      },
      {
        universitate: "USMF „Nicolae Testemițanu”",
        oras: "Chișinău, Moldova",
        buget: 9.20,
        taxa: 8.50,
        link: "https://usmf.md"
      }
    ],
  
    drept: [
      {
        universitate: "UAIC - Drept",
        oras: "Iași, România",
        buget: 8.70,
        taxa: 7.90,
        link: "https://www.laws.uaic.ro"
      },
      {
        universitate: "UGAL - Drept",
        oras: "Galați, România",
        buget: 8.10,
        taxa: 7.30,
        link: "https://www.ugal.ro"
      },
      {
        universitate: "USM - Drept",
        oras: "Chișinău, Moldova",
        buget: 8.50,
        taxa: 7.70,
        link: "https://usm.md"
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
      <div style="margin-bottom:10px;">
        <strong>${fac.universitate}</strong> – ${fac.oras}<br>
        Poți intra la: ${mesaj}<br>
        <a href="${fac.link}" target="_blank">🔗 Vizitează site-ul oficial</a>
      </div>
    `;
  }).join("");

    rezultateDiv.innerHTML = `<h3>Rezultate posibile:</h3>${rezultate}`;
  }
