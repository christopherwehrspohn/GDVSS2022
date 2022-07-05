window.addEventListener("DOMContentLoaded", function () {

  document.getElementById("linkAfghanistan").addEventListener("click", function () {

    cssEinstellungenAnpassen();

    erstelleAfghanistanDiagramme();
    
  });
});

function erstelleAfghanistanDiagramme() {

    // Daten aus API laden
    var Afghanistan_conflict_1978_present = getData(
      "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/2021_Taliban_offensive/daily/20150101/20220509",
      200
    );
    var label1 = {
      type: "label",
      xValue: 39,
      yValue: 0,
      xAdjust: 290,
      yAdjust: -50,
      backgroundColor: "rgba(245,245,245)",
      content: ["Bundeswehr beginnt mit Evakuierung", "der Ortskräfte in Kabul | 17.08.2021"],
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
      xValue: 28,
      yValue: 0,
      xAdjust: 290,
      yAdjust: -117,
      backgroundColor: "rgba(245,245,245)",
      content: ["Taliban erobern erste", "Provinzhauptstadt | 06.08.2021"],
      textAlign: "start",
      font: {
        size: 15,
      },
      callout: {
        enabled: true,
        side: 10,
      },
    };
  window.chartOben = erstelleLinienDiagramm("https://en.wikipedia.org/wiki/2021_Taliban_offensive",
  "canvasOben", window.chartOben, Afghanistan_conflict_1978_present, "2021_Taliban_offensive", "Artikel zum Krieg in Afghanistan", label1, label2);

  const labels = ['en.wikipedia.org','de.wikipedia.org','ar.wikipedia.org'];
  const datasets = [
    {
      label: 'Taliban',
      data: [1951627,349282,187997],
      backgroundColor: "#44546A",
    },
    {
      label: 'Afghanistan (Land)',
      data: [1345226,294317,77562],
      backgroundColor: "#4472C4",
    },
    {
      label: 'Islamisches Emirat Afghanistan',
      data: [552366,26545,0],
      backgroundColor: "#ED7D31",
    },
    {
      label: 'Ashraf Ghani (Präsident Afghanistan)',
      data: [428566,47047,9278],
      backgroundColor:  "#A5A5A5",
    },
    {
      label: 'Gerd Müller',
      data: [83123,126012,1503],
      backgroundColor:  "#FFC000",
    },
    {
      label: 'Airbus A400M',
      data: [11382,53106,48],
      backgroundColor:  "#70AD47",
    },
    {
      label: 'Aschura',
      data: [16220,712,34551],
      backgroundColor:  "#7030A0",
    },
    {
      label: 'Mohammed Omar',
      data: [227924,29710,26956],
      backgroundColor:  "#FF6699",
    },
  ];
window.chartLinks = erstelleStackedBarChart(labels, datasets);
}
