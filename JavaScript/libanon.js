window.addEventListener('DOMContentLoaded', function () {

  const comboBoxArtikel = document.getElementById('linkLibanon').addEventListener('click', function() {
      erstelleLibanonDiagramme();
  });

  function erstelleLibanonDiagramme(){
    var dataEnglisch = [{"x":"20200720","y":7168},{"x":"20200721","y":6963},{"x":"20200722","y":6706},{"x":"20200723","y":6409},{"x":"20200724","y":6593},{"x":"20200725","y":6773},{"x":"20200726","y":7200},{"x":"20200727","y":8049},{"x":"20200728","y":7825},{"x":"20200729","y":6564},{"x":"20200730","y":7328},{"x":"20200731","y":5965},{"x":"20200801","y":5974},{"x":"20200802","y":6405},{"x":"20200803","y":7679},{"x":"20200804","y":274529},{"x":"20200805","y":688675},{"x":"20200806","y":337960},{"x":"20200807","y":169350},{"x":"20200808","y":111535},{"x":"20200809","y":95115},{"x":"20200810","y":86052},{"x":"20200811","y":64123},{"x":"20200812","y":34396},{"x":"20200813","y":26836},{"x":"20200814","y":20291},{"x":"20200815","y":16602},{"x":"20200816","y":16122},{"x":"20200817","y":13414},{"x":"20200818","y":13341},{"x":"20200819","y":10787},{"x":"20200820","y":9231},{"x":"20200821","y":9053},{"x":"20200822","y":8698},{"x":"20200823","y":8487},{"x":"20200824","y":7620},{"x":"20200825","y":7757},{"x":"20200826","y":7376},{"x":"20200827","y":7098},{"x":"20200828","y":6546},{"x":"20200829","y":6719},{"x":"20200830","y":7223},{"x":"20200831","y":9825},{"x":"20200901","y":11445},{"x":"20200902","y":8976},{"x":"20200903","y":6776},{"x":"20200904","y":7164},{"x":"20200905","y":6214},{"x":"20200906","y":6606},{"x":"20200907","y":5882},{"x":"20200908","y":6310},{"x":"20200909","y":5510},{"x":"20200910","y":7779},{"x":"20200911","y":6228},{"x":"20200912","y":5807},{"x":"20200913","y":5762},{"x":"20200914","y":5657},{"x":"20200915","y":5788},{"x":"20200916","y":5647},{"x":"20200917","y":5863},{"x":"20200918","y":6175},{"x":"20200919","y":5551},{"x":"20200920","y":5871},{"x":"20200921","y":5771},{"x":"20200922","y":5731},{"x":"20200923","y":6279},{"x":"20200924","y":5188},{"x":"20200925","y":5107},{"x":"20200926","y":6261},{"x":"20200927","y":6539},{"x":"20200928","y":6081},{"x":"20200929","y":6187},{"x":"20200930","y":5534}];

    var i;
   var iLength = dataEnglisch.length;
    for (i = 0; i < iLength; i++) {
    dataEnglisch[i].x = "" + i + "";
    }

    if(window.diagramm2 != null){
      window.diagramm2.destroy();
    }

    const diagrammBox2 = document.getElementById('diagrammBox2').getContext('2d');
    window.diagramm2 = new Chart(diagrammBox2, {
      type: 'line',
      data: {
        datasets: [{
          label: 'Englisch',
          data: dataEnglisch,
          borderColor: 'orange',
          backgroundColor: 'orange',
          borderWidth: 3,
          pointRadius: 2
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Aufrufzahlen des englischen Wikipedia Artikels "Libanon"'
        },
        legend: {
          position: 'bottom',
        }
      },
      scales: {
        y: {
          title: {
            display: true,
            text: "Aufrufe"
          }
        },
        x: {
          title: {
            display: true,
            text: "Datum"
          }
        }
      }
    }
  });
  if(window.diagramm3 != null){
    window.diagramm3.destroy();
  }
};
});
