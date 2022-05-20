window.addEventListener('DOMContentLoaded', function () {
  var erzeugteDiagramme;
  const comboBoxArtikel = document.getElementById('artikelAuswahl').addEventListener('change', function() {
    console.log('You selected: ', this.value);
    if (this.value == "ukraine") {
      erzeugteDiagramme = erstelleUkraineDiagramme();
    }else {
      erzeugteDiagramme[0].destroy();
      erzeugteDiagramme[1].destroy();
    }
  });

  function erstelleUkraineDiagramme(){
    var dataEnglisch = [{"x":"2022022000","y":156699},{"x":"2022022100","y":296182},{"x":"2022022200","y":619563},{"x":"2022022300","y":401084},{"x":"2022022400","y":2394887},{"x":"2022022500","y":1699683},{"x":"2022022600","y":1242560},{"x":"2022022700","y":937016},{"x":"2022022800","y":741812},{"x":"2022030100","y":660741},{"x":"2022030200","y":554038},{"x":"2022030300","y":468390},{"x":"2022030400","y":381315},{"x":"2022030500","y":317459},{"x":"2022030600","y":301806},{"x":"2022030700","y":263095},{"x":"2022030800","y":231234},{"x":"2022030900","y":202188},{"x":"2022031000","y":169678},{"x":"2022031100","y":159909},{"x":"2022031200","y":151594},{"x":"2022031300","y":153025},{"x":"2022031400","y":140438},{"x":"2022031500","y":135711},{"x":"2022031600","y":138301},{"x":"2022031700","y":127984},{"x":"2022031800","y":115032},{"x":"2022031900","y":106090},{"x":"2022032000","y":114068},{"x":"2022032100","y":110528},{"x":"2022032200","y":96808},{"x":"2022032300","y":88042},{"x":"2022032400","y":87041},{"x":"2022032500","y":81248},{"x":"2022032600","y":77162},{"x":"2022032700","y":74869},{"x":"2022032800","y":68911},{"x":"2022032900","y":64455},{"x":"2022033000","y":59867}];

    const diagrammBox = document.getElementById('diagrammBox').getContext('2d');
    const diagramm = new Chart(diagrammBox, {
      type: 'line',
      data: {
        datasets: [{
          label: 'Englisch',
          data: dataEnglisch,
          borderWidth: 1,
          borderColor: 'orange',
          backgroundColor: 'orange',
          borderWidth: 3
        }
      ]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Aufrufzahlen des englischen Wikipedia Artikels "Ukraine"'
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
            text: "Tage seit Beginn der Krise"
          }
        }
      }
    }
  });

  const diagrammBox2 = document.getElementById('diagrammBox2').getContext('2d');
  const diagramm2 = new Chart(diagrammBox2, {
    type: 'line',
    data: {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      datasets: [{
        label: 'Englisch',
        data: [156699, 296182, 619563, 401084, 2394887, 1699000, 1242560, 741812, 660741, 554038 ],
        borderWidth: 1,
        borderColor: 'orange',
        backgroundColor: 'orange',
        borderWidth: 3
      },{
        label: 'Deutsch',
        data: [61000, 150000, 309000, 151000, 653000, 403000, 256000, 265000, 222000, 190000 ],
        borderWidth: 1,
        backgroundColor: 'green',
        borderColor: 'green',
        borderWidth: 3
      },
      {
        label: 'Russisch',
        data: [17000, 50000, 80000, 52000, 146000, 113000, 96000, 89000, 79000, 76000 ],
        borderWidth: 1,
        backgroundColor: 'purple',
        borderColor: 'purple',
        borderWidth: 3
      },
    ]
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Aufrufzahlen des Wikipedia Artikels "Ukraine" in verschiedenen Sprachen'
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
          text: "Tage seit Beginn der Krise"
        }
      }
    }
  }
});
return [diagramm, diagramm2];
};
});
