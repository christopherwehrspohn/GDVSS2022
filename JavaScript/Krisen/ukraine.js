window.addEventListener("DOMContentLoaded", function () {
  document.getElementById("linkUkraine").addEventListener("click", function () {
    cssEinstellungenAnpassen();
    erstelleUkraineDiagramme();
  });
});

function erstelleUkraineDiagramme() {
  var label1 = {
    type: "label",
    xValue: 60,
    yValue: 0,
    xAdjust: 290,
    yAdjust: -100,
    backgroundColor: "rgba(245,245,245)",
    content: ["Start der Invasion | 24.02.2022"],
    textAlign: "start",
    font: {
      size: 15,
    },
    callout: {
      enabled: true,
      side: 10,
    },
  };
  var label2 = {
    type: "label",
    xValue: 58,
    yValue: 0,
    xAdjust: -230,
    yAdjust: -100,
    backgroundColor: "rgba(245,245,245)",
    content: [
      "Anerkennung der Volksrepubliken",
      '"Luhansk" und "Donezk" durch Russland | 22.02.2022',
    ],
    textAlign: "start",
    font: {
      size: 15,
    },
    callout: {
      enabled: true,
      side: 10,
    },
  };
  // Daten aus API laden
  var dataRussoUkrainianWar = getData(
    "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/Russo-Ukrainian_War/daily/20150101/20220509",
    200
  );

  window.chartOben = erstelleLinienDiagramm(
    "https://en.wikipedia.org/wiki/Russo-Ukrainian_War",
    "canvasOben",
    window.chartOben,
    dataRussoUkrainianWar,
    "RussoUkrainianWar",
    "Artikel zum Krieg in der Ukraine",
    label1,
    label2
  );

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
