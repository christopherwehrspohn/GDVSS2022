window.addEventListener("DOMContentLoaded", function () {

  document.getElementById("linkAfghanistan").addEventListener("click", function () {

    cssEinstellungenAnpassen();

    erstelleAfghanistanDiagramme();
    
  });
});

function erstelleAfghanistanDiagramme() {

    // Daten aus API laden
    var Afghanistan_conflict_1978_present = getData(
      "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/Afghanistan_conflict_(1978–present)/daily/20150101/20220509",
      200
    );
  
  window.chartOben = erstelleLinienDiagramm(    "https://en.wikipedia.org/wiki/Afghanistan_conflict_(1978–present)",
  "canvasOben", window.chartOben, Afghanistan_conflict_1978_present, "Afghanistan_conflict_(1978–present)", "Artikel zum Krieg in Afghanistan");

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
