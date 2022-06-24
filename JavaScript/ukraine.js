window.addEventListener("DOMContentLoaded", function () {

  document.getElementById("linkUkraine").addEventListener("click", function () {

    cssEinstellungenAnpassen();

    erstelleUkraineDiagramme();
    
  });
});

function erstelleUkraineDiagramme() {
  
  erstelleLinienDiagramm();

  // rechtes Diagramm
  var labelsArrayRechts = [
    "Ukraine",
    "2022_Russian_invasion_of_Ukraine",
    "Putin",
    "Selensky",
  ];

  var dataArrayRechts = [2373594, 2095287, 1506221, 1246332];

  window.chartRechts = erstelleKreisDiagramm(
    "canvasRechts",
    window.chartRechts,
    dataArrayRechts,
    "doughnut",
    labelsArrayRechts,
    "en.wikipedia.org"
  );


  // linkes Diagramm
  
  labelsArrayLinks = [
    "Russischer_Überfall_auf_die_Ukraine_2022",
    "Krieg_im_Donbas",
    "Russisch-Ukrainischer_Krieg",
    "SWIFT",
  ];

  dataArrayLinks = [809398, 409978, 339141, 331899];

  window.chartLinks = erstelleKreisDiagramm(
    "canvasLinks",
    window.chartLinks,
    dataArrayLinks,
    "doughnut",
    labelsArrayLinks,
    "ru.wikipedia.org"
  );
  // mittleres Diagramm

  labelsArrayMitte = [
    "Russischer_Überfall_auf_die_Ukraine_2022",
    "Krieg_im_Donbas",
    "Russisch-Ukrainischer_Krieg",
    "SWIFT",
  ];

  dataArrayMitte = [809398, 409978, 339141, 331899];

  window.chartMitte = erstelleKreisDiagramm(
    "canvasMitte",
    window.chartMitte,
    dataArrayMitte,
    "doughnut",
    labelsArrayMitte,
    "uk.wikipedia.org"
  );

}

function cssEinstellungenAnpassen() {
  // ComboBox zur Normalisierung ausblenden
  $("#auswahlNormalisierung").css("display", "none");

  $("#canvasLinks").css("margin-top", "25px");
  $("#canvasMitte").css("margin-top", "25px");
  $("#canvasRechts").css("margin-top", "25px");

  // Alle verborgenen Canvasse einblenden
  const linkesCanvas = document.getElementById("canvasLinks");

  const rechtesCanvas = document.getElementById("canvasRechts");

  const mittleresCanvas = document.getElementById("canvasMitte");

  if (linkesCanvas.style.display === "none") {
    linkesCanvas.style.display = "block";
  }

  if (mittleresCanvas.style.display === "none") {
    mittleresCanvas.style.display = "block";
  }

  if (rechtesCanvas.style.display === "none") {
    rechtesCanvas.style.display = "block";
  }

  // Breite der unteren drei Spalten wieder auf vier setzen
  $(".col-4").removeClass("col-12");
}

function erstelleKreisDiagramm(canvasID, globaleVariable, dataArray, diagrammType, labelsArray, ueberSchrift) {
  console.log(globaleVariable);

  // Ueberpruefe ob Diagramm schon existiert, wenn ja, dann entferne es
  if (globaleVariable != null) {
    globaleVariable.destroy();
  }
  console.log(globaleVariable);

  // Erstelle Diagramm
  const canvas = document.getElementById(canvasID).getContext("2d");
  globaleVariable = new Chart(canvas, {
    type: diagrammType,
    data: {
      labels: labelsArray,
      datasets: [
        {
          data: dataArray,
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
            "rgb(64, 227, 181)",
          ],
          hoverOffset: 4,
        },
      ],
    },
    options: {
      layout: {
        padding: 10,
      },
//      responsive: false,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: ueberSchrift,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  });
  console.log(globaleVariable);
  return globaleVariable;
}

function erstelleLinienDiagramm() {
  if (window.chartOben != null) {
    window.chartOben.destroy();
  }
  // Daten aus API laden
  var dataRussoUkrainianWar = getData(
    "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/Russo-Ukrainian_War/daily/20150101/20220509",
    200
  );

  const canvasOben = document.getElementById("canvasOben").getContext("2d");
  window.chartOben = new Chart(canvasOben, {
    type: "line",
    data: {
      datasets: [
        {
          label: "RussoUkrainianWar",
          data: dataRussoUkrainianWar,
          borderColor: "rgb(54, 162, 235)",
          backgroundColor: "rgb(54, 162, 235)",
          borderWidth: 2,
          pointRadius: 0,
          pointHitRadius: 20,
        },
      ],
    },
    options: {
      layout: {
        padding: 10,
      },
      maintainAspectRatio: false,
      plugins: {
        autocolors: false,
        annotation: {
          annotations: {
            label1: {
              type: "label",
              xValue: 60,
              yValue: 0,
              xAdjust: 290,
              yAdjust: -100,
              backgroundColor: "rgba(245,245,245)",
              content: ["Start der Invasion"],
              textAlign: "start",
              font: {
                size: 15,
              },
              callout: {
                enabled: true,
                side: 10,
              },
            },
            // line1: {
            //   type: 'line',
            //   xMin: 60,
            //   xMax: 60,
            //   borderColor: 'rgb(255, 99, 132)',
            //   borderWidth: 2,
            // },
            // line2: {
            //   type: 'line',
            //   xMin: 58,
            //   xMax: 58,
            //   borderColor: 'rgb(255, 99, 132)',
            //   borderWidth: 2,
            // },
            label2: {
              type: "label",
              xValue: 58,
              yValue: 0,
              xAdjust: -230,
              yAdjust: -100,
              borderRadius: 15,
              backgroundColor: "rgba(245,245,245)",
              content: [
                "Anerkennung der Volksrepubliken",
                '"Luhansk" und "Donezk" durch Russland',
              ],
              textAlign: "start",
              font: {
                size: 15,
              },
              callout: {
                enabled: true,
                side: 10,
              },
            },
          },
        },
        title: {
          display: true,
          text: "Artikel zum Ukrainekrieg",
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