window.addEventListener("DOMContentLoaded", function () {

  Chart.register(ChartjsPluginStacked100.default);

    $(document).ready(function () {
        $("a").click(function () {
          $("a").removeClass("highlights");
          $(this).addClass("highlights");
        });
      });

});
