window.addEventListener('DOMContentLoaded', function () {

  const comboBoxArtikel = document.getElementById('artikelAuswahl').addEventListener('change', function() {
    console.log('You selected: ', this.value);
    if (this.value == "libanon") {
      erstelleLibanonDiagramme();
    }
  });

  function erstelleLibanonDiagramme(){
    var dataEnglisch = [{"x":"2020072000","y":7168},{"x":"2020072100","y":6963},{"x":"2020072200","y":6706},{"x":"2020072300","y":6409},{"x":"2020072400","y":6593},{"x":"2020072500","y":6773},{"x":"2020072600","y":7200},{"x":"2020072700","y":8049},{"x":"2020072800","y":7825},{"x":"2020072900","y":6564},{"x":"2020073000","y":7328},{"x":"2020073100","y":5965},{"x":"2020080100","y":5974},{"x":"2020080200","y":6405},{"x":"2020080300","y":7679},{"x":"2020080400","y":274529},{"x":"2020080500","y":688675},{"x":"2020080600","y":337960},{"x":"2020080700","y":169350},{"x":"2020080800","y":111535},{"x":"2020080900","y":95115},{"x":"2020081000","y":86052},{"x":"2020081100","y":64123},{"x":"2020081200","y":34396},{"x":"2020081300","y":26836},{"x":"2020081400","y":20291},{"x":"2020081500","y":16602},{"x":"2020081600","y":16122},{"x":"2020081700","y":13414},{"x":"2020081800","y":13341},{"x":"2020081900","y":10787},{"x":"2020082000","y":9231},{"x":"2020082100","y":9053},{"x":"2020082200","y":8698},{"x":"2020082300","y":8487},{"x":"2020082400","y":7620},{"x":"2020082500","y":7757},{"x":"2020082600","y":7376},{"x":"2020082700","y":7098},{"x":"2020082800","y":6546},{"x":"2020082900","y":6719},{"x":"2020083000","y":7223},{"x":"2020083100","y":9825},{"x":"2020090100","y":11445},{"x":"2020090200","y":8976},{"x":"2020090300","y":6776},{"x":"2020090400","y":7164},{"x":"2020090500","y":6214},{"x":"2020090600","y":6606},{"x":"2020090700","y":5882},{"x":"2020090800","y":6310},{"x":"2020090900","y":5510},{"x":"2020091000","y":7779},{"x":"2020091100","y":6228},{"x":"2020091200","y":5807},{"x":"2020091300","y":5762},{"x":"2020091400","y":5657},{"x":"2020091500","y":5788},{"x":"2020091600","y":5647},{"x":"2020091700","y":5863},{"x":"2020091800","y":6175},{"x":"2020091900","y":5551},{"x":"2020092000","y":5871},{"x":"2020092100","y":5771},{"x":"2020092200","y":5731},{"x":"2020092300","y":6279},{"x":"2020092400","y":5188},{"x":"2020092500","y":5107},{"x":"2020092600","y":6261},{"x":"2020092700","y":6539},{"x":"2020092800","y":6081},{"x":"2020092900","y":6187},{"x":"2020093000","y":5534}];

    if(window.diagramm != null){
      window.diagramm.destroy();
    }
    const diagrammBox = document.getElementById('diagrammBox').getContext('2d');
    window.diagramm = new Chart(diagrammBox, {
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
          beginAtZero: true,
          title: {
            display: true,
            text: "Aufrufe"
          }
        },
        x: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Datum"
          }
        }
      }
    }
  });
  if(window.diagramm2 != null){
    window.diagramm2.destroy();
  }
};
});
