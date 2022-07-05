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
