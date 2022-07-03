window.addEventListener("DOMContentLoaded", function () {

    
    $(document).ready(function () {
        $("a").click(function () {
          $("a").removeClass("highlights");
          $(this).addClass("highlights");
        });
      });

});
