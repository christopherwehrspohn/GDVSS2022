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
        data: [8484, 59391, 2186],
        backgroundColor: "#44546A",
      },
      {
        label: 'Marie-Madeleine_deBrinvilliers',
        data: [390,38519,9],
        backgroundColor: "#4472C4",
      },
      {
        label: 'Steinbachtalsperre(Nordrhein-Westfalen)',
        data: [0,32736,0],
        backgroundColor: "#ED7D31",
      },
      {
        label: 'Rurtalsperre',
        data: [1996,31334,605],
        backgroundColor:  "#A5A5A5",
      },
      {
        label: 'Peter_R._de_Vries',
        data: [19580,19426,53942],
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
        backgroundColor:  "#7030A0",
      },
      {
        label: 'Space_Jam:_A_New_Legacy',
        data: [248325,2,428],
        backgroundColor:  "#FF6699",
      },
      {
        label: 'Surekha_Sikri',
        data: [198728,0,0],
        backgroundColor:  "#6699FF",
      },
      {
        label: 'Kang_the_Conqueror',
        data: [194135,0,743],
        backgroundColor:  "#00FF99",
      },
      {
        label: 'Cleopatra',
        data: [158530,7669,237],
        backgroundColor:  "#FFFF66",
      },
    ];
  window.chartLinks = erstelleStackedBarChart(labels, datasets);
  }
  