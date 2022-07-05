function getHochpunkt(array) {
    var hoechsterPunkt = 0;
    for (i = 0; i < array.length - 1; i++) {
      if (array[i].y > hoechsterPunkt) {
        hoechsterPunkt = array[i].y;
      }
    }
    return hoechsterPunkt;
  }

function cssEinstellungenAnpassenStartseite() {
    $("#linkvergleich").addClass("highlights");
    $("canvas").css("margin-top", "5px");  
    $("#wrapper").css("display", "none");
    $("canvas").css("margin-top", "5px");
    $("#auswahlNormalisierung").css("display", "block");
    $("#wrapperNormalisierung").css("display", "block");

}

function erstelleStartseiteErstesDiagramm() {

  const dataAfghanistan = getData(
    "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/Afghanistan/daily/20150101/20220509", 200);
const dataUkraine = getData(
    "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/Ukraine/daily/20150101/20220509", 200);
const dataCorona = getData(
    "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/Coronavirus/daily/20150101/20220509", 200);
const dataLibanon = getData(
    "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/Lebanon/daily/20150101/20220509", 200);
const dataAhrtal = getData(
      "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/de.wikipedia/all-access/all-agents/Ahrtal/daily/20150101/20220509",
      200
    );

    if (window.chartOben != null) {
      window.chartOben.destroy();
    }
  
    Chart.defaults.font.family = '"Poppins" , sans-serif';
    Chart.defaults.color = "#11101D";
    Chart.defaults.plugins.title.font.size = 20;
    Chart.defaults.plugins.title.font.weight = "normal";
  
    const diagrammBox = document.getElementById("canvasOben").getContext("2d");
    window.chartOben = new Chart(diagrammBox, {
      type: "line",
      data: {
        datasets: [
          {
            label: "Ukrainekrieg",
            data: dataUkraine,
            borderColor: "orange",
            backgroundColor: "orange",
            borderWidth: 2,
            pointRadius: 0,
            pointHitRadius: 20,
          },
          {
            label: "Corona-Pandemie",
            data: dataCorona,
            backgroundColor: "green",
            borderColor: "green",
            borderWidth: 2,
            pointRadius: 0,
            pointHitRadius: 20,
          },
          {
            label: "Explosion im Libanon",
            data: dataLibanon,
            backgroundColor: "purple",
            borderColor: "purple",
            borderWidth: 2,
            pointRadius: 0,
            pointHitRadius: 20,
          },
          {
            label: "Afghanistankrieg",
            data: dataAfghanistan,
            backgroundColor: "red",
            borderColor: "red",
            borderWidth: 2,
            pointRadius: 0,
            pointHitRadius: 20,
          },
          {
            label: "Überschwemmung im Ahrtal",
            data: dataAhrtal,
            backgroundColor: "blue",
            borderColor: "blue",
            borderWidth: 2,
            pointRadius: 0,
            pointHitRadius: 20,
          },
        ],
      },
      options: {
        layout: {
          padding: 10,
        },
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "Vergleich verschiedener Krisen",
          },
          legend: {
            position: "right",
          },
        },
        scales: {
          y: {
            title: {
              display: true,
              text: "Aufrufe",
            },
          },
          x: {
            beginAtZero: false,
            title: {
              display: true,
              text: "Tage seit 60 Tage vor Hochpunkt der Aufrufzahlen",
            },
          },
        },
      },
    });
    if (window.chartRechts != null) {
      window.chartRechts.destroy();
    }
  }
  
  function erstelleStartseiteZweitesDiagramm(
    dataUkraine,
    dataCorona,
    dataAfghanistan,
    dataLibanon
  ) {
    if (window.chartLinks != null) {
      window.chartLinks.destroy();
    }
  
      var ukraineTag = getHochpunkt(dataUkraine);
      var coronaTag = getHochpunkt(dataCorona);
      var afghanistanTag = getHochpunkt(dataAfghanistan);
      var libanonTag = getHochpunkt(dataLibanon);
  
      var ergebnis = getWertDurchHochpunkt(dataUkraine, ukraineTag, dataAfghanistan, afghanistanTag, dataLibanon, libanonTag, dataCorona, coronaTag);
        console.log(ergebnis.dataAfghanistan);
   
    const canvasLinks = document.getElementById("canvasLinks").getContext("2d");
    window.chartLinks = new Chart(canvasLinks, {
      type: "line",
      data: {
        datasets: [
          {
            label: "Ukrainekrieg",
            data: ergebnis.dataUkraine,
            borderColor: "orange",
            backgroundColor: "orange",
            borderWidth: 2,
            pointRadius: 0,
          },
          {
            label: "Corona-Pandemie",
            data: ergebnis.dataCorona,
            backgroundColor: "green",
            borderColor: "green",
            borderWidth: 2,
            pointRadius: 0,
          },
          {
            label: "Explosion im Libanon",
            data: ergebnis.dataLibanon,
            backgroundColor: "purple",
            borderColor: "purple",
            borderWidth: 2,
            pointRadius: 0,
          },
          {
            label: "Afghanistankrieg",
            data: ergebnis.dataAfghanistan,
            backgroundColor: "red",
            borderColor: "red",
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
          title: {
            display: true,
            text: "Aufrufe verschiedener Wikipedia-Artikel zu Krisen normiert auf den hoechsten Punkt",
          },
          legend: {
            position: "right",
          },
        },
        scales: {
          y: {
            title: {
              display: true,
              text: "Prozent",
            },
          },
          x: {
            title: {
              display: true,
              text: "Tage seit 60 Tage vor Hochpunkt der Aufrufzahlen",
            },
          },
        },
      },
    });
  
   
  
  
  }
  
function getWertDurchHochpunkt(dataUkraine, ukraineTag, dataAfghanistan, afghanistanTag, dataLibanon, libanonTag, dataCorona, coronaTag) {
    var i = 0;
    for (i = 0; i < 201; i++) {
        if (dataUkraine[i] == null) {
        } else {
            dataUkraine[i].y = (dataUkraine[i].y / ukraineTag) * 100;
        }
        if (dataAfghanistan[i] == null) {
        } else {
            dataAfghanistan[i].y = (dataAfghanistan[i].y / afghanistanTag) * 100;
        }
        if (dataLibanon[i] == null) {
        } else {
            dataLibanon[i].y = (dataLibanon[i].y / libanonTag) * 100;
        }
        if (dataCorona[i] == null) {
        } else {
            dataCorona[i].y = (dataCorona[i].y / coronaTag) * 100;
        }
    }
    return {dataUkraine, dataCorona, dataAfghanistan, dataLibanon};
}

  function erstelleStartseiteDrittesDiagramm(
    dataUkraine,
    dataCorona,
    dataAfghanistan,
    dataLibanon
  ) {
    if (window.chartLinks != null) {
      window.chartLinks.destroy();
    }
  
    var i;
    var ukraineTag = dataUkraine[0].y;
    var coronaTag = dataCorona[0].y;
    var afghanistanTag = dataAfghanistan[0].y;
    var libanonTag = dataLibanon[0].y;
  
    for (i = 0; i < 201; i++) {
      if (dataUkraine[i] == null) {
      } else {
        dataUkraine[i].y = dataUkraine[i].y / ukraineTag;
      }
      if (dataAfghanistan[i] == null) {
      } else {
        dataAfghanistan[i].y = dataAfghanistan[i].y / afghanistanTag;
      }
      if (dataLibanon[i] == null) {
      } else {
        dataLibanon[i].y = dataLibanon[i].y / libanonTag;
      }
      if (dataCorona[i] == null) {
      } else {
        dataCorona[i].y = dataCorona[i].y / coronaTag;
      }
    }
  
    const canvasLinks = document.getElementById("canvasLinks").getContext("2d");
    window.chartLinks = new Chart(canvasLinks, {
      type: "line",
      data: {
        datasets: [
          {
            label: "Ukrainekrieg",
            data: dataUkraine,
            borderColor: "orange",
            backgroundColor: "orange",
            borderWidth: 2,
            pointRadius: 0,
          },
          {
            label: "Corona-Pandemie",
            data: dataCorona,
            backgroundColor: "green",
            borderColor: "green",
            borderWidth: 2,
            pointRadius: 0,
          },
          {
            label: "Explosion im Libanon",
            data: dataLibanon,
            backgroundColor: "purple",
            borderColor: "purple",
            borderWidth: 2,
            pointRadius: 0,
          },
          {
            label: "Afghanistankrieg",
            data: dataAfghanistan,
            backgroundColor: "red",
            borderColor: "red",
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
          title: {
            display: true,
            text: "Aufrufe verschiedener Krisen im Vergleich zur Normalsituation",
          },
          legend: {
            position: "right",
          },
        },
        scales: {
          y: {
            title: {
              display: true,
              text: "Änderung der Aufrufe um Faktor",
            },
          },
          x: {
            title: {
              display: true,
              text: "Tage seit 60 Tage vor Hochpunkt der Aufrufzahlen",
            },
          },
        },
      },
    });
  }
  
  function erstelleStartseiteViertesDiagramm(
    dataUkraine,
    dataCorona,
    dataAfghanistan,
    dataLibanon
  ) {
    if (window.chartLinks != null) {
      window.chartLinks.destroy();
    }
  
    var i;
    var medianUkraineArray = [];
    for (i = 0; i < dataUkraine.length; i++) {
      medianUkraineArray.push(dataUkraine[i].y);
    }
    var medianUkraine = math.quantileSeq(medianUkraineArray, 0.5);
  
    var medianCoronaArray = [];
    for (i = 0; i < dataCorona.length; i++) {
      medianCoronaArray.push(dataCorona[i].y);
    }
    var medianCorona = math.quantileSeq(medianCoronaArray, 0.5);
  
    var medianLibanonArray = [];
    for (i = 0; i < dataLibanon.length; i++) {
      medianLibanonArray.push(dataLibanon[i].y);
    }
    var medianLibanon = math.quantileSeq(medianLibanonArray, 0.5);
  
    var medianAfghanistanArray = [];
    for (i = 0; i < dataAfghanistan.length; i++) {
      medianAfghanistanArray.push(dataAfghanistan[i].y);
    }
    var medianAfghanistan = math.quantileSeq(medianAfghanistanArray, 0.5);
  
    for (i = 0; i < 201; i++) {
      if (dataUkraine[i] == null) {
      } else {
        dataUkraine[i].y = dataUkraine[i].y / medianUkraine;
      }
      if (dataAfghanistan[i] == null) {
      } else {
        dataAfghanistan[i].y = dataAfghanistan[i].y / medianAfghanistan;
      }
      if (dataLibanon[i] == null) {
      } else {
        dataLibanon[i].y = dataLibanon[i].y / medianLibanon;
      }
      if (dataCorona[i] == null) {
      } else {
        dataCorona[i].y = dataCorona[i].y / medianCorona;
      }
    }
  
    const canvasLinks = document.getElementById("canvasLinks").getContext("2d");
    window.chartLinks = new Chart(canvasLinks, {
      type: "line",
      data: {
        datasets: [
          {
            label: "Ukraine",
            data: dataUkraine,
            borderColor: "orange",
            backgroundColor: "orange",
            borderWidth: 2,
            pointRadius: 0,
          },
          {
            label: "Coronavirus",
            data: dataCorona,
            backgroundColor: "green",
            borderColor: "green",
            borderWidth: 2,
            pointRadius: 0,
          },
          {
            label: "Libanon",
            data: dataLibanon,
            backgroundColor: "purple",
            borderColor: "purple",
            borderWidth: 2,
            pointRadius: 0,
          },
          {
            label: "Afghanistan",
            data: dataAfghanistan,
            backgroundColor: "red",
            borderColor: "red",
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
          title: {
            display: true,
            text: "Aufrufe verschiedener Krisen normiert auf den Median",
          },
          legend: {
            position: "right",
          },
        },
        scales: {
          y: {
            title: {
              display: true,
              text: "Aufrufe/Median",
            },
          },
          x: {
            title: {
              display: true,
              text: "Tage seit 60 Tage vor Hochpunkt der Aufrufzahlen",
            },
          },
        },
      },
    });
  }
  
  function erstelleStartseiteFuenftesDiagramm(
    dataUkraine,
    dataCorona,
    dataAfghanistan,
    dataLibanon
  ) {
    if (window.chartLinks != null) {
      window.chartLinks.destroy();
    }
  
    var i;
    for (i = 0; i < 201; i++) {
      if (dataUkraine[i] == null) {
      } else {
        dataUkraine[i].x = "" + i + "";
      }
      if (dataAfghanistan[i] == null) {
      } else {
        dataAfghanistan[i].x = "" + i + "";
      }
      if (dataLibanon[i] == null) {
      } else {
        dataLibanon[i].x = "" + i + "";
      }
      if (dataCorona[i] == null) {
      } else {
        dataCorona[i].x = "" + i + "";
      }
    }
  
    var i;
    var medianUkraineArray = [];
    for (i = 0; i < dataUkraine.length; i++) {
      medianUkraineArray.push(dataUkraine[i].y);
    }
    var medianUkraine = math.quantileSeq(medianUkraineArray, 0.25);
  
    var medianCoronaArray = [];
    for (i = 0; i < dataCorona.length; i++) {
      medianCoronaArray.push(dataCorona[i].y);
    }
    var medianCorona = math.quantileSeq(medianCoronaArray, 0.25);
  
    var medianLibanonArray = [];
    for (i = 0; i < dataLibanon.length; i++) {
      medianLibanonArray.push(dataLibanon[i].y);
    }
    var medianLibanon = math.quantileSeq(medianLibanonArray, 0.25);
  
    var medianAfghanistanArray = [];
    for (i = 0; i < dataAfghanistan.length; i++) {
      medianAfghanistanArray.push(dataAfghanistan[i].y);
    }
    var medianAfghanistan = math.quantileSeq(medianAfghanistanArray, 0.25);
  
    for (i = 0; i < 201; i++) {
      if (dataUkraine[i] == null) {
      } else {
        dataUkraine[i].y = dataUkraine[i].y / medianUkraine;
      }
      if (dataAfghanistan[i] == null) {
      } else {
        dataAfghanistan[i].y = dataAfghanistan[i].y / medianAfghanistan;
      }
      if (dataLibanon[i] == null) {
      } else {
        dataLibanon[i].y = dataLibanon[i].y / medianLibanon;
      }
      if (dataCorona[i] == null) {
      } else {
        dataCorona[i].y = dataCorona[i].y / medianCorona;
      }
    }
  
    const canvasLinks = document.getElementById("canvasLinks").getContext("2d");
    window.chartLinks = new Chart(canvasLinks, {
      type: "line",
      data: {
        datasets: [
          {
            label: "Ukraine",
            data: dataUkraine,
            borderColor: "orange",
            backgroundColor: "orange",
            borderWidth: 2,
            pointRadius: 0,
          },
          {
            label: "Coronavirus",
            data: dataCorona,
            backgroundColor: "green",
            borderColor: "green",
            borderWidth: 2,
            pointRadius: 0,
          },
          {
            label: "Libanon",
            data: dataLibanon,
            backgroundColor: "purple",
            borderColor: "purple",
            borderWidth: 2,
            pointRadius: 0,
          },
          {
            label: "Afghanistan",
            data: dataAfghanistan,
            backgroundColor: "red",
            borderColor: "red",
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
          title: {
            display: true,
            text: "Aufrufe verschiedener Krisen normiert auf das 25erQuantil",
          },
          legend: {
            position: "right",
          },
        },
        scales: {
          y: {
            title: {
              display: true,
              text: "Aufrufe/25erQuantil",
            },
          },
          x: {
            title: {
              display: true,
              text: "Tage seit 60 Tage vor Hochpunkt der Aufrufzahlen",
            },
          },
        },
      },
    });
  }
  