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

  const labels = ['en.wikipedia.org','de.wikipedia.org','es.wikipedia.org'];
  const datasets = [
    {
      label: 'Tod von Kobe Bryant',
      data: [9701850, 484637, 936419],
      backgroundColor: "#44546A",
    },
    {
      label: 'Coronavirus',
      data: [982596,115875,232649],
      backgroundColor: "#4472C4",
    },
    {
      label: 'KZ Auschwitz',
      data: [154385,87414,32018],
      backgroundColor: "#ED7D31",
    },
    {
      label: 'Billie Eilish',
      data: [1051200,83206,73197],
      backgroundColor:  "#A5A5A5",
    },
    {
      label: 'Royal Rumble (2020)',
      data: [1419023,0,85222],
      backgroundColor:  "#FFC000",
    },
  ];
window.chartLinks = erstelleStackedBarChart(labels, datasets);
}
