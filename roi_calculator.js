jQuery(document).ready(function ($) {
  if ($(".bigbot-calculator-container").length) {
    // ============== reactable UI
    // Hours daily
    function calculateMonthlySavings() {
      const dailyHours = parseInt($("#bigbot-hours-slider").val(), 10);
      const hourlyRate = 30; // fixed
      const workingDays = 20;
      const monthlySavings = dailyHours * hourlyRate * workingDays;

      $("#bigbot-monthly-savings").text("$" + monthlySavings.toLocaleString());
    }

    // Update on slider move
    $("#bigbot-hours-slider").on("input", function () {
      $("#bigbot-hours-value").text($(this).val() + " hours");
      calculateMonthlySavings();
    });

    // Initial run
    calculateMonthlySavings();


    // Weekly message
    $("#bigbot-messages-slider").on("input", function () {
      $("#bigbot-messages-value").text($(this).val() + " messages");
    });

    // Average value of a closed sale
    $("#bigbot-sale-slider").on("input", function () {
      $("#bigbot-sale-value").text("$" + $(this).val());
    });





    // calculation part



  }
});
