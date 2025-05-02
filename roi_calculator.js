jQuery(document).ready(function ($) {
  if ($(".bigbot-calculator-container").length) {
    // ============== reactable UI
    // Hours daily
    $("#bigbot-hours-slider").on("input", function () {
      $("#bigbot-hours-value").text($(this).val() + " hours");
    });

    // Weekly message
    $("#bigbot-messages-slider").on("input", function () {
      $("#bigbot-messages-value").text($(this).val() + " messages");
    });

    // Average value of a closed sale
    $("#bigbot-sale-slider").on("input", function () {
      $("#bigbot-sale-value").text("$" + $(this).val());
    });
  }
});
