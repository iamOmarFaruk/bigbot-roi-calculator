jQuery(document).ready(function ($) {
  if (!$(".bigbot-calculator-container").length) return;

  /* === Constants (tweak if needed) === */
  const HOURLY_RATE = 30; // $ per employee hour
  const WORKING_DAYS_PER_MONTH = 20; // typical month
  const WEEKS_PER_MONTH = 4; // fixed at 4 weeks per month
  const CLOSE_RATE = 0.2; // 20 % of recovered leads convert

  /* Helper: currency formatter */
  const fmt = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  /* === Core calculation === */
  function updateCalculator() {
    // Raw slider values
    const dailyHours = +$("#bigbot-hours-slider").val();
    const weeklyMsgs = +$("#bigbot-messages-slider").val();
    const saleValue = +$("#bigbot-sale-slider").val();

    /* 1. Employee cost savings */
    const monthlySavings = dailyHours * HOURLY_RATE * WORKING_DAYS_PER_MONTH;

    /* 2. Revenue from leads */
    const monthlyRevenue =
      weeklyMsgs * WEEKS_PER_MONTH * CLOSE_RATE * saleValue;

    /* 3. Totals */
    const totalMonthlyImpact = monthlySavings + monthlyRevenue;
    const annualImpact = totalMonthlyImpact * 12;

    /* === Write to DOM === */
    $("#bigbot-hours-value").text(
      `${dailyHours} hour${dailyHours !== 1 ? "s" : ""}`
    );
    $("#bigbot-messages-value").text(
      `${weeklyMsgs} message${weeklyMsgs !== 1 ? "s" : ""}`
    );
    $("#bigbot-sale-value").text(fmt.format(saleValue));

    $("#bigbot-monthly-savings").text(fmt.format(monthlySavings));
    $("#bigbot-monthly-revenue").text(fmt.format(monthlyRevenue));
    $("#bigbot-monthly-impact").text(fmt.format(totalMonthlyImpact));
    $("#bigbot-annual-impact").text(fmt.format(annualImpact));
  }

  /* === Bind sliders === */
  $(".bigbot-slider").on("input", updateCalculator);

  /* First paint */
  updateCalculator();
});
