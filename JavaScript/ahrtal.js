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
  