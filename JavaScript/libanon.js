window.addEventListener("DOMContentLoaded", function () {
  document.getElementById("linkLibanon").addEventListener("click", function () {
    cssEinstellungenAnpassen();
    erstelleLibanonDiagramme();
  });
});

function erstelleLibanonDiagramme() {
  var label1 = {
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
  };
  var label2 = {
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
  };
  // Daten aus API laden
  var data2020_Beirut_explosion = getData(
    "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/2020_Beirut_explosion/daily/20150101/20220509",
    200
  );

  window.chartOben = erstelleLinienDiagramm(
    "https://en.wikipedia.org/wiki/2020_Beirut_explosion",
    "canvasOben",
    window.chartOben,
    data2020_Beirut_explosion,
    "2020_Beirut_explosion",
    "Artikel zur Explosionskatastrophe im Libanon",
    null,
    null
  );

  // rechtes Diagramm
  var labelsArrayRechts = [
  ];

  var dataArrayRechts = [];

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
  ];

  dataArrayLinks = [];

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
  ];

  dataArrayMitte = [];

  window.chartMitte = erstelleKreisDiagramm(
    "canvasMitte",
    window.chartMitte,
    dataArrayMitte,
    "doughnut",
    labelsArrayMitte,
    "uk.wikipedia.org"
  );
}
