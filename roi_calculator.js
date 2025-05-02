jQuery(document).ready(function ($) {
  if ($(".bigbot-calculator-container").length) {
    // reactable UI
    $("#bigbot-hours-slider").on("input", function () {
      $("#bigbot-hours-value").text($(this).val() + " hours");
    });

    

   
  }
});
