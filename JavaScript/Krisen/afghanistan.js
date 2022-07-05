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
  
  window.chartOben = erstelleLinienDiagramm("https://en.wikipedia.org/wiki/Afghanistan_conflict_(1978–present)",
  "canvasOben", window.chartOben, Afghanistan_conflict_1978_present, "Afghanistan_conflict_(1978–present)", "Artikel zum Krieg in Afghanistan");

  const labels = ['en.wikipedia.org','de.wikipedia.org','es.wikipedia.org'];
  const datasets = [
    {
      label: '',
      data: [0, 0, 0],
      backgroundColor: "#44546A",
    },
    {
      label: ' ',
      data: [0,0,0],
      backgroundColor: "#4472C4",
    },
    {
      label: ' ',
      data: [0,0,0],
      backgroundColor: "#ED7D31",
    },
    {
      label: ' ',
      data: [0,0,0],
      backgroundColor:  "#A5A5A5",
    },
    {
      label: ' ',
      data: [0,0,0],
      backgroundColor:  "#FFC000",
    },
    {
      label: ' ',
      data: [0,0,0],
      backgroundColor:  "#70AD47",
    },
  ];
window.chartLinks = erstelleStackedBarChart(labels, datasets);
}
