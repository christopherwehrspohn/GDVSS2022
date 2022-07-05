window.addEventListener("DOMContentLoaded", function () {
    document.getElementById("linkUiguren").addEventListener("click", function () {
      cssEinstellungenAnpassen();
      erstelleUigurenDiagramme();
    });
  });
  
  function erstelleUigurenDiagramme() {
    var label1 = {
      type: "label",
      xValue: 60,
      yValue: 0,
      xAdjust: 290,
      yAdjust: -125,
      backgroundColor: "rgba(245,245,245)",
      content: ["Uigurische Sportlerin entzündet olympische Flamme bei", "den Olympischen Winterspielen in Peking | 05.02.2022"],
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
    var dataUiguren = getData(
      "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/Uyghur_genocide/daily/20150101/20220509",
      200
    );
  
    window.chartOben = erstelleLinienDiagramm(
      "https://en.wikipedia.org/wiki/Uyghur_genocide",  
      "canvasOben",
      window.chartOben,
      dataUiguren,
      "Uyghur_genocide",
      "Artikel zur Verfolgung der Uiguren",
      label1,
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
  