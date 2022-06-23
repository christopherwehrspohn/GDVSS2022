
window.addEventListener('DOMContentLoaded', function () {

  const comboBoxArtikel = document.getElementById('linkAfghanistan').addEventListener('click', function() {
      erstelleAfghanistanDiagramme();
  });

  function erstelleAfghanistanDiagramme(){

    $(".col-4").removeClass("col-12");
    $("#auswahlNormalisierung"). css("display", "none");
    $("#diagrammBox2"). css("margin-top", "25px");
    $("#diagrammBox3"). css("margin-top", "25px");
    $("#diagrammBox4"). css("margin-top", "25px");
  
    if (window.diagramm3 != null) {
      window.diagramm3.destroy();
    }
    const zweitesCanvas = document.getElementById("diagrammBoxMitte");
    if (zweitesCanvas.style.display === "none") {
      zweitesCanvas.style.display = "block";
    }
    if(window.diagramm2 != null){
      window.diagramm2.destroy();
    }
   
  if(window.diagramm3 != null){
    window.diagramm3.destroy();
  }
  if(window.diagramm != null){
    window.diagramm.destroy();
  }
  if(window.diagramm4 != null){
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
};


  
});
