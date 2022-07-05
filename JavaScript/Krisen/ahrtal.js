window.addEventListener("DOMContentLoaded", function () {
    document.getElementById("linkAhrtal").addEventListener("click", function () {
      cssEinstellungenAnpassen();
      erstelleAhrtalDiagramme();
    });
  });
  
  function erstelleAhrtalDiagramme() {
    var label1 = {
      type: "label",
      xValue: 54,
      yValue: 0,
      xAdjust: 290,
      yAdjust: -117,
      backgroundColor: "rgba(245,245,245)",
      content: ["Erste Meldungen über starke Unwetter", "im Südwesten Deutschlands | 14.07.2021"],
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
    var dataAhrtal = getData(
      "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/de.wikipedia/all-access/all-agents/Ahrtal/daily/20150101/20220509",
      200
    );
  
    window.chartOben = erstelleLinienDiagramm(
      "https://en.wikipedia.org/wiki/Ahrtal", 
      "canvasOben",
      window.chartOben,
      dataAhrtal,
      "Ahrtal",
      "Artikel zur Flutkatastrophe im Ahrtal",
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
  