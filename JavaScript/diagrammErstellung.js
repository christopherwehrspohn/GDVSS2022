function cssEinstellungenAnpassen() {
  // ComboBox zur Normalisierung ausblenden
  $("#auswahlNormalisierung").css("display", "none");

  $("#canvasLinks").css("margin-top", "25px");
  $("#canvasMitte").css("margin-top", "25px");
  $("#canvasRechts").css("margin-top", "25px");

  // Alle verborgenen Canvasse einblenden
  const linkesCanvas = document.getElementById("canvasLinks");

  const rechtesCanvas = document.getElementById("canvasRechts");

  const mittleresCanvas = document.getElementById("canvasMitte");

  if (linkesCanvas.style.display === "none") {
    linkesCanvas.style.display = "block";
  }

  if (mittleresCanvas.style.display === "none") {
    mittleresCanvas.style.display = "block";
  }

  if (rechtesCanvas.style.display === "none") {
    rechtesCanvas.style.display = "block";
  }

  // Breite der unteren drei Spalten wieder auf vier setzen
  $(".col-4").removeClass("col-12");
}

function erstelleKreisDiagramm(
  canvasID,
  globaleVariable,
  dataArray,
  diagrammType,
  labelsArray,
  ueberSchrift
) {
  // Ueberpruefe ob Diagramm schon existiert, wenn ja, dann entferne es
  if (globaleVariable != null) {
    globaleVariable.destroy();
  }

  // Erstelle Diagramm
  const canvas = document.getElementById(canvasID).getContext("2d");
  globaleVariable = new Chart(canvas, {
    type: diagrammType,
    data: {
      labels: labelsArray,
      datasets: [
        {
          data: dataArray,
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
            "rgb(64, 227, 181)",
          ],
          hoverOffset: 4,
        },
      ],
    },
    options: {
      layout: {
        padding: 10,
      },
      //      responsive: false,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: ueberSchrift,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  });
  return globaleVariable;
}

function erstelleLinienDiagramm(
  artikelUrl,
  canvasID,
  globaleVariable,
  data,
  label,
  titel,
  label1,
  label2
) {
  // Ueberpruefe ob Diagramm schon existiert, wenn ja, dann entferne es
  if (globaleVariable != null) {
    globaleVariable.destroy();
  }

  // Erstelle Diagramm
  const canvasOben = document.getElementById(canvasID).getContext("2d");
  globaleVariable = new Chart(canvasOben, {
    type: "line",
    data: {
      datasets: [
        {
          label: label,
          data: data,
          borderColor: "rgb(54, 162, 235)",
          backgroundColor: "rgb(54, 162, 235)",
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
        autocolors: false,
        annotation: {
          annotations: {
            label1,
            label2,
          },
        },
        title: {
          display: true,
          text: titel,
        },
        legend: {
          onClick(){
            window.open(artikelUrl);
          },
          position: "right",
        },
        tooltip: {
          backgroundColor: 'white',
          borderColor: "rgb(54, 162, 235)",
          borderWidth: 1, 
          titleColor: 'black',
          titleAlign: 'center',
          displayColors: false,
          bodyAlign: 'center',
          bodyColor: 'black',
          callbacks: {
            title: (context) =>{
              return `Tag: ${context[0].label}`;
            },
            label: (context) =>{
              return `Aufrufe: ${context.formattedValue}`;
            },
          },
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
  return globaleVariable;
}
