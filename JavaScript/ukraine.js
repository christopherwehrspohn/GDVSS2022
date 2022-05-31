window.addEventListener("DOMContentLoaded", function () {
  const comboBoxArtikel = document
    .getElementById("linkUkraine")
    .addEventListener("click", function () {
      erstelleUkraineDiagramme();
    });
});
function erstelleUkraineDiagramme() {
  if (window.diagramm3 != null) {
    window.diagramm3.destroy();
  }
  const zweitesCanvas = document.getElementById("diagrammBox2");
  if (zweitesCanvas.style.display === "none") {
    zweitesCanvas.style.display = "block";
  }

  var dataEnglisch = [
    { x: "20220220", y: 156699 },
    { x: "20220221", y: 296182 },
    { x: "20220222", y: 619563 },
    { x: "20220223", y: 401084 },
    { x: "20220224", y: 2394887 },
    { x: "20220225", y: 1699683 },
    { x: "20220226", y: 1242560 },
    { x: "20220227", y: 937016 },
    { x: "20220228", y: 741812 },
    { x: "20220301", y: 660741 },
    { x: "20220302", y: 554038 },
    { x: "20220303", y: 468390 },
    { x: "20220304", y: 381315 },
    { x: "20220305", y: 317459 },
    { x: "20220306", y: 301806 },
    { x: "20220307", y: 263095 },
    { x: "20220308", y: 231234 },
    { x: "20220309", y: 202188 },
    { x: "20220310", y: 169678 },
    { x: "20220311", y: 159909 },
    { x: "20220312", y: 151594 },
    { x: "20220313", y: 153025 },
    { x: "20220314", y: 140438 },
    { x: "20220315", y: 135711 },
    { x: "20220316", y: 138301 },
    { x: "20220317", y: 127984 },
    { x: "20220318", y: 115032 },
    { x: "20220319", y: 106090 },
    { x: "20220320", y: 114068 },
    { x: "20220321", y: 110528 },
    { x: "20220322", y: 96808 },
    { x: "20220323", y: 88042 },
    { x: "20220324", y: 87041 },
    { x: "20220325", y: 81248 },
    { x: "20220326", y: 77162 },
    { x: "20220327", y: 74869 },
    { x: "20220328", y: 68911 },
    { x: "20220329", y: 64455 },
    { x: "20220330", y: 59867 },
  ];
  var i;
  for (i = 0; i < dataEnglisch.length; i++) {
    dataEnglisch[i].x = "" + i + "";
  }

  if (window.diagramm2 != null) {
    window.diagramm2.destroy();
  }
  $(".col-6").removeClass("col-12");
  const diagrammBox2 = document.getElementById("diagrammBox2").getContext("2d");
  window.diagramm2 = new Chart(diagrammBox2, {
    type: "line",
    data: {
      datasets: [
        {
          label: "Ukraine",
          data: dataEnglisch,
          borderWidth: 1,
          borderColor: "orange",
          backgroundColor: "orange",
          borderWidth: 3,
        },
      ],
    },
    options: {
      layout: {
        padding: 10,
      },
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "Artikel zur  Ukraine-Krise",
        },
        legend: {
          position: "right",
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Aufrufe",
          },
        },
        x: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Tage seit Beginn der Krise",
          },
        },
      },
    },
  });
  if (window.diagramm3 != null) {
    window.diagramm3.destroy();
  }
  const drittesCanvas = document.getElementById("diagrammBox3");
  if (drittesCanvas.style.display === "none") {
    drittesCanvas.style.display = "block";
  }

  const diagrammBox3 = document.getElementById("diagrammBox3").getContext("2d");
  window.diagramm3 = new Chart(diagrammBox3, {
    type: "bar",
    data: {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      datasets: [
        {
          label: "Englisch",
          data: [
            156699, 296182, 619563, 401084, 2394887, 1699000, 1242560, 741812,
            660741, 554038,
          ],
          borderWidth: 1,
          borderColor: "orange",
          backgroundColor: "orange",
          borderWidth: 3,
        },
        {
          label: "Deutsch",
          data: [
            61000, 150000, 309000, 151000, 653000, 403000, 256000, 265000,
            222000, 190000,
          ],
          borderWidth: 1,
          backgroundColor: "green",
          borderColor: "green",
          borderWidth: 3,
        },
        {
          label: "Russisch",
          data: [
            17000, 50000, 80000, 52000, 146000, 113000, 96000, 89000, 79000,
            76000,
          ],
          borderWidth: 1,
          backgroundColor: "purple",
          borderColor: "purple",
          borderWidth: 3,
        },
      ],
    },
    options: {
      layout: {
        padding: 10,
      },
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Aufrufzahlen des Wikipedia Artikels "Ukraine" in verschiedenen Sprachen',
        },
        legend: {
          position: "right",
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Aufrufe",
          },
        },
        x: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Tage seit Beginn der Krise",
          },
        },
      },
    },
  });
}
