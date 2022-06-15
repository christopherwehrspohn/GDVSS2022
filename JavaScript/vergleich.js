window.addEventListener("DOMContentLoaded", function () {
  var dataAfghanistan = getData(
    "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/Afghanistan/daily/20150101/20220509"
  );
  var dataUkraine = getData(
    "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/Ukraine/daily/20150101/20220509"
  );
  var dataCorona = getData(
    "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/Coronavirus/daily/20150101/20220509"
  );
  var dataLibanon = getData(
    "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/Lebanon/daily/20150101/20220509"
  );

  $("#linkvergleich").addClass("highlights");
  $("canvas").css("margin-top", "5px");

  const auswahl = document.getElementById("auswahlNormalisierung");

  auswahl.addEventListener("change", function () {
    if (auswahl.value == "median") {
      erstelleStartseiteViertesDiagramm(
        dataUkraine,
        dataCorona,
        dataAfghanistan,
        dataLibanon
      );
    }
    if (auswahl.value == "25erQuantil") {
      erstelleStartseiteFuenftesDiagramm(
        dataUkraine,
        dataCorona,
        dataAfghanistan,
        dataLibanon
      );
    }
    if (auswahl.value == "prozent") {
      erstelleStartseiteZweitesDiagramm(
        dataUkraine,
        dataCorona,
        dataAfghanistan,
        dataLibanon
      );
    }
    if (auswahl.value == "aufErstenTag") {
      erstelleStartseiteDrittesDiagramm(
        dataUkraine,
        dataCorona,
        dataAfghanistan,
        dataLibanon
      );
    }
  });

  $(document).ready(function () {
    $("a").click(function () {
      $("a").removeClass("highlights");
      $(this).addClass("highlights");
    });
  });

  versteckeZweitesCanvas();
  erstelleStartseiteErstesDiagramm(
    dataUkraine,
    dataCorona,
    dataAfghanistan,
    dataLibanon
  );
  erstelleStartseiteZweitesDiagramm(
    dataUkraine,
    dataCorona,
    dataAfghanistan,
    dataLibanon
  );

  document
    .getElementById("linkvergleich")
    .addEventListener("click", function () {
      $("canvas").css("margin-top", "5px");
      $("#auswahlNormalisierung").css("display", "block");
      erstelleStartseiteErstesDiagramm(
        dataUkraine,
        dataCorona,
        dataAfghanistan,
        dataLibanon
      );
      erstelleStartseiteZweitesDiagramm(
        dataUkraine,
        dataCorona,
        dataAfghanistan,
        dataLibanon
      );
    });
});

function erstelleStartseiteErstesDiagramm(
) {
  var dataAfghanistan = getData(
    "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/Afghanistan/daily/20150101/20220509"
  );
  var dataUkraine = getData(
    "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/Ukraine/daily/20150101/20220509"
  );
  var dataCorona = getData(
    "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/Coronavirus/daily/20150101/20220509"
  );
  var dataLibanon = getData(
    "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/Lebanon/daily/20150101/20220509"
  );
  if (window.diagramm != null) {
    window.diagramm.destroy();
  }

  Chart.defaults.font.family = '"Poppins" , sans-serif';
  Chart.defaults.color = "white";
  Chart.defaults.plugins.title.font.size = 20;
  Chart.defaults.plugins.title.font.weight = "normal";

  const diagrammBox = document.getElementById("diagrammBox").getContext("2d");
  window.diagramm = new Chart(diagrammBox, {
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
  if (window.diagramm3 != null) {
    window.diagramm3.destroy();
  }
}

function erstelleStartseiteZweitesDiagramm(
  dataUkraine,
  dataCorona,
  dataAfghanistan,
  dataLibanon
) {
  if (window.diagramm2 != null) {
    window.diagramm2.destroy();
  }

    var i;
    var ukraineTag = dataUkraine[60].y;
    var coronaTag = dataCorona[60].y;
    var afghanistanTag = dataAfghanistan[60].y;
    var libanonTag = dataLibanon[60].y;

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

  $(".col-6").addClass("col-12");

  const diagrammBox2 = document.getElementById("diagrammBox2").getContext("2d");
  window.diagramm2 = new Chart(diagrammBox2, {
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
          text: "Aufrufe verschiedener Krisen normiert auf den hoechsten Punkt",
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
function erstelleStartseiteDrittesDiagramm(
  dataUkraine,
  dataCorona,
  dataAfghanistan,
  dataLibanon
) {
  if (window.diagramm2 != null) {
    window.diagramm2.destroy();
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
  $(".col-6").addClass("col-12");

  const diagrammBox2 = document.getElementById("diagrammBox2").getContext("2d");
  window.diagramm2 = new Chart(diagrammBox2, {
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
  if (window.diagramm2 != null) {
    window.diagramm2.destroy();
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
  $(".col-6").addClass("col-12");

  const diagrammBox2 = document.getElementById("diagrammBox2").getContext("2d");
  window.diagramm2 = new Chart(diagrammBox2, {
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
  if (window.diagramm2 != null) {
    window.diagramm2.destroy();
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
  $(".col-6").addClass("col-12");

  const diagrammBox2 = document.getElementById("diagrammBox2").getContext("2d");
  window.diagramm2 = new Chart(diagrammBox2, {
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
function versteckeZweitesCanvas() {
  // const zweitesCanvas = document.getElementById("diagrammBox2");
  // zweitesCanvas.style.display = "none";
  const drittesCanvas = document.getElementById("diagrammBox3");
  drittesCanvas.style.display = "none";
}
