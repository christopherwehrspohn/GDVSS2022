window.addEventListener("DOMContentLoaded", function () {

const dataAfghanistan = getData(
    "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/Afghanistan/daily/20150101/20220509", 200);
const dataUkraine = getData(
    "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/Ukraine/daily/20150101/20220509", 200);
const dataCorona = getData(
    "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/Coronavirus/daily/20150101/20220509", 200);
const dataLibanon = getData(
    "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/Lebanon/daily/20150101/20220509", 200);

cssEinstellungenAnpassenStartseite();

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



  versteckeZweitesCanvas();
  erstelleStartseiteErstesDiagramm();
  erstelleStartseiteZweitesDiagramm(
    dataUkraine,
    dataCorona,
    dataAfghanistan,
    dataLibanon
  );

  document
    .getElementById("linkvergleich")
    .addEventListener("click", function () {

      cssEinstellungenAnpassenStartseite();

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


