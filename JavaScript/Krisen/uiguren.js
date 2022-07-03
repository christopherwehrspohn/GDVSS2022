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
  