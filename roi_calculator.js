/**
 * Formats a number into USD currency (no decimal places).
 * @param {number} amount The amount to format.
 * @returns {string} The formatted currency string.
 */
function bigbot_format_currency(amount) {
  // Use Intl.NumberFormat for US currency
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Calculates the ROI based on user inputs and updates the UI.
 */
function bigbot_calculate_roi() {
  try {
    // Grab DOM elements (throw if not found)
    const hoursSlider = document.getElementById("bigbot-hours-slider");
    const messagesSlider = document.getElementById("bigbot-messages-slider");
    const saleSlider = document.getElementById("bigbot-sale-slider");

    const hoursValueEl = document.getElementById("bigbot-hours-value");
    const messagesValueEl = document.getElementById("bigbot-messages-value");
    const saleValueEl = document.getElementById("bigbot-sale-value");

    const dailySavingsEl = document.getElementById("bigbot-daily-savings");
    const monthlySavingsEl = document.getElementById("bigbot-monthly-savings");
    const monthlyRevenueEl = document.getElementById("bigbot-monthly-revenue");
    const monthlyImpactEl = document.getElementById("bigbot-monthly-impact");
    const annualImpactEl = document.getElementById("bigbot-annual-impact");

    if (
      !hoursSlider ||
      !messagesSlider ||
      !saleSlider ||
      !hoursValueEl ||
      !messagesValueEl ||
      !saleValueEl ||
      !dailySavingsEl ||
      !monthlySavingsEl ||
      !monthlyRevenueEl ||
      !monthlyImpactEl ||
      !annualImpactEl
    ) {
      throw new Error("Required DOM elements are missing.");
    }

    // Parse user input
    const hours = parseFloat(hoursSlider.value);
    const messages = parseInt(messagesSlider.value);
    const saleValue = parseFloat(saleSlider.value);

    // Display slider values to UI
    hoursValueEl.textContent = `${hours} hours`;
    messagesValueEl.textContent = `${messages} messages`;
    saleValueEl.textContent = bigbot_format_currency(saleValue);

    // Perform ROI calculations
    // const hourlyRate = 30;
    const hourlyRate =
      typeof bigbotSettings !== "undefined"
        ? parseFloat(bigbotSettings.hourlyRate) || 30
        : 30;

    const dailyTimeSavings = hours * hourlyRate;
    const monthlyEmployeeCostSavings = dailyTimeSavings * 22;
    const monthlyRevenueFromRecoveredLeads = messages * saleValue * 0.2 * 30;
    const totalMonthlyImpact =
      monthlyEmployeeCostSavings + monthlyRevenueFromRecoveredLeads;
    const annualImpact = totalMonthlyImpact * 12;

    // Update UI with calculation results
    dailySavingsEl.textContent = bigbot_format_currency(dailyTimeSavings);
    monthlySavingsEl.textContent = bigbot_format_currency(
      monthlyEmployeeCostSavings
    );
    monthlyRevenueEl.textContent = bigbot_format_currency(
      monthlyRevenueFromRecoveredLeads
    );
    monthlyImpactEl.textContent = bigbot_format_currency(totalMonthlyImpact);
    annualImpactEl.textContent = bigbot_format_currency(annualImpact);
  } catch (error) {
    console.error("Error during ROI calculation:", error);
  }
}

// Attach event listeners on page load
document.addEventListener("DOMContentLoaded", () => {
  try {
    // IDs for each slider we want to watch
    const sliderIds = [
      "bigbot-hours-slider",
      "bigbot-messages-slider",
      "bigbot-sale-slider",
    ];

    // Add input event listeners to each slider
    sliderIds.forEach((id) => {
      const slider = document.getElementById(id);
      if (slider) {
        slider.addEventListener("input", bigbot_calculate_roi);
      }
    });

    // Initial calculation on page load
    bigbot_calculate_roi();
  } catch (error) {
    console.error("Error initializing ROI calculator:", error);
  }
});
