window.addEventListener("DOMContentLoaded", function () {
  document.getElementById("linkCorona").addEventListener("click", function () {
    cssEinstellungenAnpassen();
    erstelleCoronaDiagramme();
  });
});

function erstelleCoronaDiagramme() {
  var label1 = {
    type: "label",
    xValue: 60,
    yValue: 0,
    xAdjust: 290,
    yAdjust: -140,
    backgroundColor: "rgba(245,245,245)",
    content: ["Erster Coronavirus-Fall in Deutschland | 27.01.2020"],
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
  var dataCoronavirus = getData(
    "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/Coronavirus/daily/20150101/20220509",
    200
  );

  window.chartOben = erstelleLinienDiagramm(
    "https://en.wikipedia.org/wiki/Coronavirus",
    "canvasOben",
    window.chartOben,
    dataCoronavirus,
    "Coronavirus",
    "Artikel zur Corona-Pandemie",
    label1,
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
