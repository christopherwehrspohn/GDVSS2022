window.addEventListener('DOMContentLoaded', function () {

  const comboBoxArtikel = document
    .getElementById("linkCorona")
    .addEventListener("click", function () {
      erstelleCoronaVirusDiagramme();
    });
});
  function erstelleCoronaVirusDiagramme(){
   
    var dataRussoUkrainianWar = getData("https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/Coronavirus/daily/20150101/20220509", 200);

    if (window.diagramm != null) {
      window.diagramm.destroy();
    }
    if (window.diagramm2 != null) {
      window.diagramm2.destroy();
    }
    if (window.diagramm3 != null) {
      window.diagramm3.destroy();
    }
    if (window.diagramm4 != null) {
      window.diagramm4.destroy();
    }
    const canvasOben = document.getElementById("canvasOben").getContext("2d");
    window.diagramm = new Chart(canvasOben, {
      type: "line",
      data: {
        datasets: [
          {
            label: "Coronavirus",
            data: dataRussoUkrainianWar,
            borderColor:'rgb(54, 162, 235)',
            backgroundColor: 'rgb(54, 162, 235)',
            borderWidth: 2,
            pointRadius: 0,
          },
        ],
      },
      options: {
        layout: {
          padding: 10,
        },
        maintainAspectRatio: false,
        plugins: {
            autocolors: false,
            annotation: {
              annotations: {
                label1: {
                  type: 'label',
                  xValue: 60,
                  yValue: 0,
                  xAdjust: 290,
                  yAdjust: -140,
                  backgroundColor: 'rgba(245,245,245)',
                  content: ['Erster Coronavirus Fall in Deutschland'],
                  textAlign: 'start',
                  font: {
                    size: 15
                  },
                  callout: {
                    enabled: true,
                    side: 10
                  }
                },
                
                }
              
          },
          title: {
            display: true,
            text: "Artikel zur Coronapandemie",
          },
          legend: {
            position: "right",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Aufrufe",
            },
          },
          x: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Tage seit Beginn der Krise",
            },
          },
        },
      },
    });

    if (window.diagramm2 != null) {
      window.diagramm2.destroy();
    }
};
