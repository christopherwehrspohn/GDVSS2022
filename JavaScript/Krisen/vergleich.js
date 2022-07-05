window.addEventListener("DOMContentLoaded", function () {

  const dataAfghanistan = getData(
    "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/2021_Taliban_offensive/daily/20150101/20220509", 179);
const dataUkraine = getData(
    "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/Russo-Ukrainian_War/daily/20150101/20220509", 200);
const dataCorona = getData(
    "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/Coronavirus/daily/20150101/20220509", 200);
const dataLibanon = getData(
    "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/2020_Beirut_explosions/daily/20150101/20211201", 141);
const dataAhrtal = getData(
      "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/2021_European_floods/daily/20150101/20220509",
      141
    );
    const dataUiguren = getData(
      "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/Uyghur_genocide/daily/20150101/20220509",
      200
    );
cssEinstellungenAnpassenStartseite();

  // const auswahl = document.getElementById("auswahlNormalisierung");

  // auswahl.addEventListener("change", function () {
    
  //   if (auswahl.value == "median") {
  //     erstelleStartseiteViertesDiagramm(
  //       dataUkraine,
  //       dataCorona,
  //       dataAfghanistan,
  //       dataLibanon,
  //       dataAhrtal,
  //       dataUiguren
  //     );
  //   }
  //   if (auswahl.value == "25erQuantil") {
  //     erstelleStartseiteFuenftesDiagramm(
  //       dataUkraine,
  //       dataCorona,
  //       dataAfghanistan,
  //       dataLibanon,
  //       dataAhrtal,
  //       dataUiguren
  //     );
  //   }
  //   if (auswahl.value == "prozent") {
  //     erstelleStartseiteZweitesDiagramm(
  //       dataUkraine,
  //       dataCorona,
  //       dataAfghanistan,
  //       dataLibanon,
  //       dataAhrtal,
  //       dataUiguren
  //     );
  //   }
  //   if (auswahl.value == "aufErstenTag") {
  //     erstelleStartseiteDrittesDiagramm(
  //       dataUkraine,
  //       dataCorona,
  //       dataAfghanistan,
  //       dataLibanon,
  //       dataAhrtal,
  //       dataUiguren
  //     );
  //   }
  // });



  erstelleStartseiteErstesDiagramm();
  erstelleStartseiteZweitesDiagramm(
    dataUkraine,
    dataCorona,
    dataAfghanistan,
    dataLibanon,
    dataAhrtal,
    dataUiguren
  );

  document
    .getElementById("linkvergleich")
    .addEventListener("click", function () {

      cssEinstellungenAnpassenStartseite();

      erstelleStartseiteErstesDiagramm(
      );
      erstelleStartseiteZweitesDiagramm(
        dataUkraine,
        dataCorona,
        dataAfghanistan,
        dataLibanon,
        dataAhrtal,
        dataUiguren
      );
    });
});


