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
    "Artikel zum 'Krieg in der Ukraine'",
    label1,
    label2
  );

  const labels = ['en.wikipedia.org','ru.wikipedia.org','uk.wikipedia.org'];
    const datasets = [
      {
        label: 'Ukrainekrieg',
        data: [3434668, 1558517, 62420],
        backgroundColor: "#44546A",
      },
      {
        label: 'Ukraine (Land)',
        data: [2373594,146565,11149],
        backgroundColor: "#4472C4",
      },
      {
        label: 'Vladimir Putin',
        data: [1506221,113525,12358],
        backgroundColor: "#ED7D31",
      },
      {
        label: 'Ballistische Rakete',
        data: [10435,102792,75432],
        backgroundColor:  "#A5A5A5",
      },
      {
        label: 'SWIFT',
        data: [151576,331899,42211],
        backgroundColor:  "#FFC000",
      },
      {
        label: 'Mobilmachung',
        data: [5249,32553,39382],
        backgroundColor:  "#70AD47",
      },
    ];
  window.chartLinks = erstelleStackedBarChart(labels, datasets);
}
