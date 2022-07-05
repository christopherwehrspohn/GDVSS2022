window.addEventListener("DOMContentLoaded", function () {
  document.getElementById("linkLibanon").addEventListener("click", function () {
    cssEinstellungenAnpassen();
    erstelleLibanonDiagramme();
  });
});

function erstelleLibanonDiagramme() {
  var label1 = {
    type: "label",
    xValue: 0,
    yValue: 0,
    xAdjust: 290,
    yAdjust: -100,
    backgroundColor: "rgba(245,245,245)",
    content: ["Explosion im Hafen von Beirut | 04.08.2020"],
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
    xValue: 0,
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
    "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/2020_Beirut_explosions/daily/20150101/20220509",
    140
  );

  window.chartOben = erstelleLinienDiagramm(
    "https://en.wikipedia.org/wiki/2020_Beirut_explosion",
    "canvasOben",
    window.chartOben,
    data2020_Beirut_explosion,
    "2020_Beirut_explosion",
    "Artikel zur Explosionskatastrophe im Libanon",
    label1,
    null
  );
  const labels = ['en.wikipedia.org','de.wikipedia.org','ar.wikipedia.org'];
  const datasets = [
    {
      label: 'Ammoniumnitrat',
      data: [586565, 273989, 66896],
      backgroundColor: "#44546A",
    },
    {
      label: 'Libanon',
      data: [685244,114565,30468],
      backgroundColor: "#4472C4",
    },
    {
      label: 'Explosionskatastrophe im Hafen von Beirut 2020',
      data: [484606,97659,22288],
      backgroundColor: "#ED7D31",
    },
    {
      label: 'Explosion des Oppauer Stickstoffwerkes',
      data: [90915,95824,0],
      backgroundColor:  "#A5A5A5",
    },
    {
      label: 'Beirut',
      data: [431572,81031,14243],
      backgroundColor:  "#FFC000",
    },
    {
      label: 'Atombombenabwürfe auf Hiroshima und Nagasaki',
      data: [137667,15281,35270],
      backgroundColor:  "#70AD47",
    },
  ];
window.chartLinks = erstelleStackedBarChart(labels, datasets);
}
