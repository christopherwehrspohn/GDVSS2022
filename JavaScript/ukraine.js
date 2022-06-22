window.addEventListener("DOMContentLoaded", function () {
  const comboBoxArtikel = document
    .getElementById("linkUkraine")
    .addEventListener("click", function () {
      erstelleUkraineDiagramme();
    });
});
function erstelleUkraineDiagramme() {
  $("#auswahlNormalisierung"). css("display", "none");
  $("#diagrammBox2"). css("margin-top", "25px");
  $("#diagrammBox3"). css("margin-top", "25px");
  $("#diagrammBox4"). css("margin-top", "25px");

  if (window.diagramm3 != null) {
    window.diagramm3.destroy();
  }
  const zweitesCanvas = document.getElementById("diagrammBox2");
  if (zweitesCanvas.style.display === "none") {
    zweitesCanvas.style.display = "block";
  }
  var dataUkraine = getData("https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/Ukraine/daily/20150101/20220509", 200);
  
  var dataNato = getData("https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/NATO/daily/20150101/20220509", 200);
  
  var dataRussoUkrainianWar = getData("https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/Russo-Ukrainian_War/daily/20150101/20220509", 200);

  if (window.diagramm2 != null) {
    window.diagramm2.destroy();
  }
  if (window.diagramm != null) {
    window.diagramm.destroy();
  }
  $(".col-4").removeClass("col-12");

  const diagrammBox = document.getElementById("diagrammBox").getContext("2d");
  window.diagramm = new Chart(diagrammBox, {
    type: "line",
    data: {
      datasets: [
        // {
        //   label: "Ukraine",
        //   data: dataUkraine,
        //   borderColor: "orange",
        //   backgroundColor: "orange",
        //   borderWidth: 2,
        //   pointRadius: 0,
        // },
        // {
        //   label: "NATO",
        //   data: dataNato,
        //   borderColor: "blue",
        //   backgroundColor: "blue",
        //   borderWidth: 2,
        //   pointRadius: 0,
        // },
        {
          label: "RussoUkrainianWar",
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
                yAdjust: -100,
                backgroundColor: 'rgba(245,245,245)',
                content: ['Start der Invasion'],
                textAlign: 'start',
                font: {
                  size: 15
                },
                callout: {
                  enabled: true,
                  side: 10
                }
              },
              // line1: {
              //   type: 'line',
              //   xMin: 60,
              //   xMax: 60,
              //   borderColor: 'rgb(255, 99, 132)',
              //   borderWidth: 2,
              // },
              // line2: {
              //   type: 'line',
              //   xMin: 58,
              //   xMax: 58,
              //   borderColor: 'rgb(255, 99, 132)',
              //   borderWidth: 2,
              // },
              label2: {
                type: 'label',
                xValue: 58,
                yValue: 0,
                xAdjust: -230,
                yAdjust: -100,
                borderRadius: 15,
                backgroundColor: 'rgba(245,245,245)',
                content: ['Anerkennung der Volksrepubliken', '"Luhansk" und "Donezk" durch Russland'],
                textAlign: 'start',
                font: {
                  size: 15
                },
                callout: {
                  enabled: true,
                  side: 10
                }
              }
            }
        },
        title: {
          display: true,
          text: "Artikel zum Ukrainekrieg",
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
  
  if (window.diagramm3 != null) {
    window.diagramm3.destroy();
  }

  const drittesCanvas = document.getElementById("diagrammBox3");
  if (drittesCanvas.style.display === "none") {
    drittesCanvas.style.display = "block";
  }
  const viertesCanvas = document.getElementById("diagrammBoxMitte");
  if (viertesCanvas.style.display === "none") {
    viertesCanvas.style.display = "block";
  }

  const diagrammBox3 = document.getElementById("diagrammBox3").getContext("2d");
  window.diagramm3 = new Chart(diagrammBox3, {
    type: "doughnut",
    data:  {
      labels: [
        'Ukraine',
        '2022_Russian_invasion_of_Ukraine',
        'Putin'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [2373594, 2095287, 1506221],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }],
    },
    options: {
      layout: {
        padding: 10,
      },
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'en.wikipedia.org',
        },
        legend: {
          position: "bottom",
        },
      },
      // scales: {
      //   y: {
      //     beginAtZero: true,
      //     title: {
      //       display: false,
      //       text: "Aufrufe",
      //     },
      //   },
      //   x: {
      //     beginAtZero: true,
      //     title: {
      //       display: false,
      //     },
      //   },
      // },
    },
  });


  const diagrammBox2 = document.getElementById("diagrammBox2").getContext("2d");
  window.diagramm2 = new Chart(diagrammBox2, {
    type: "doughnut",
    data:  {
      labels: [
        'Russischer_Überfall_auf_die_Ukraine_2022',
        'Krieg_im_Donbas',
        'Russisch-Ukrainischer_Krieg',
        'SWIFT'
      ],
      datasets: [{
        data: [809398, 409978, 339141, 331899],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(53, 230, 82)'
        ],
        hoverOffset: 4
      }],
    },
    options: {
      layout: {
        padding: 10,
      },
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'ru.wikipedia.org',
        },
        legend: {
          position: "bottom",
        },
      },
      // scales: {
      //   y: {
      //     beginAtZero: true,
      //     title: {
      //       display: false,
      //       text: "Aufrufe",
      //     },
      //   },
      //   x: {
        //     beginAtZero: true,
        //     title: {
      //       display: false,
      //     },
      //   },
      // },
    },
  });

  if (window.diagramm4 != null) {
    window.diagramm4.destroy();
  }
  const diagrammBox4 = document.getElementById("diagrammBoxMitte").getContext("2d");
  window.diagramm4 = new Chart(diagrammBox4, {
    type: "doughnut",
    data:  {
      labels: [
        'Russischer_Überfall_auf_die_Ukraine_2022',
        'Krieg_im_Donbas',
        'Russisch-Ukrainischer_Krieg',
        'SWIFT'
      ],
      datasets: [{
        data: [809398, 409978, 339141, 331899],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(53, 230, 82)'
        ],
        hoverOffset: 4
      }],
    },
    options: {
      layout: {
        padding: 10,
      },
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'uk.wikipedia.org',
        },
        legend: {
          position: "bottom",
        }
      }
    }
  });

  

}
