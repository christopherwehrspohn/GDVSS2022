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

const labels = ['en.wikipedia.org','de.wikipedia.org','zh.wikipedia.org'];
  const datasets = [
    {
      label: 'Pam & Tommy',
      data: [503464, 19585, 1047],
      backgroundColor: "#44546A",
    },
    {
      label: 'Reacher_(TV_series)',
      data: [389401,19962,0],
      backgroundColor: "#4472C4",
    },
    {
      label: '2022_Winter_Olympics',
      data: [250087,37048,45816],
      backgroundColor: "#ED7D31",
    },
    {
      label: 'Ich_bin_ein_Star_–_Holt_mich_hier_raus!',
      data: [612,167144,0],
      backgroundColor:  "#A5A5A5",
    },
    {
      label: 'Franz_Klammer',
      data: [2370,75957,11],
      backgroundColor:  "#FFC000",
    },
    {
      label: 'Who Rules the World (TV series)',
      data: [0,0,30042],
      backgroundColor:  "#70AD47",
    },
    {
      label: 'LE_SSERAFIM',
      data: [0,0,22080],
      backgroundColor:  "#7030A0",
    },
    {
      label: 'Our Blues',
      data: [642,0,17999],
      backgroundColor:  "#FF6699",
    },
  ];
window.chartLinks = erstelleStackedBarChart(labels, datasets);
  }
  