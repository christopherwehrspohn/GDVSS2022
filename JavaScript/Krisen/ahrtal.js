window.addEventListener("DOMContentLoaded", function () {
    document.getElementById("linkAhrtal").addEventListener("click", function () {
      cssEinstellungenAnpassen();
      erstelleAhrtalDiagramme();
    });
  });
  
  function erstelleAhrtalDiagramme() {
    var label1 = {
      type: "label",
      xValue: 0,
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
      "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/2021_European_floods/daily/20150101/20220509",
      200
    );
  
    window.chartOben = erstelleLinienDiagramm(
      "https://en.wikipedia.org/wiki/2021_European_floods", 
      "canvasOben",
      window.chartOben,
      dataAhrtal,
      "2021_European_floods",
      "Artikel zur Flutkatastrophe im Ahrtal",
      label1,
      null
    );
  
    const labels = ['en.wikipedia.org','de.wikipedia.org','nl.wikipedia.org'];
    const datasets = [
      {
        label: 'Erftstadt',
        data: [0, 59391, 0],
        backgroundColor: "#44546A",
      },
      {
        label: 'Marie-Madeleine_de_Brinvilliers',
        data: [0,38519,0],
        backgroundColor: "#4472C4",
      },
      {
        label: 'Steinbachtalsperre_(Nordrhein-Westfalen)',
        data: [0,32736,0],
        backgroundColor: "#ED7D31",
      },
      {
        label: 'Rurtalsperre',
        data: [0,31334,0],
        backgroundColor:  "#A5A5A5",
      },
      {
        label: 'Peter_R._de_Vries',
        data: [0,0,53942],
        backgroundColor:  "#FFC000",
      },
      {
        label: 'Maas',
        data: [6375,4763,16963],
        backgroundColor:  "#70AD47",
      },
      {
        label: 'Flutkatastrophe von 1953',
        data: [3208,1968,12320],
        backgroundColor:  "#70AD47",
      },
    ];
  window.chartLinks = erstelleStackedBarChart(labels, datasets);
  }
  