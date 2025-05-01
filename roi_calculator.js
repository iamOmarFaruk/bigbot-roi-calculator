/**
 * Formats a number into USD currency (no decimal places).
 * @param {number} amount The amount to format.
 * @returns {string} The formatted currency string.
 */
function bigbot_format_currency(amount) {
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
    const hoursSlider = document.getElementById("bigbot-hours-slider");
    if (!hoursSlider) return; // Exit if calculator is not on this page

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

    // Parse input values
    const hours = parseFloat(hoursSlider.value);
    const messages = parseInt(messagesSlider.value); // Now treated as weekly messages
    const saleValue = parseFloat(saleSlider.value);

    // Update UI
    hoursValueEl.textContent = `${hours} hours`;
    messagesValueEl.textContent = `${messages} messages`;
    saleValueEl.textContent = bigbot_format_currency(saleValue);

    const hourlyRate =
      typeof bigbotSettings !== "undefined"
        ? parseFloat(bigbotSettings.hourlyRate) || 30
        : 30;

    const dailyTimeSavings = hours * hourlyRate;
    const monthlyEmployeeCostSavings = dailyTimeSavings * 22;

    // 🔄 UPDATED LOGIC: Use weekly messages instead of daily; 4.33 weeks/month assumed
    const monthlyRecoveredMessages = messages * 4.33;
    const monthlyRevenueFromRecoveredLeads =
      monthlyRecoveredMessages * saleValue * 0.2;

    const totalMonthlyImpact =
      monthlyEmployeeCostSavings + monthlyRevenueFromRecoveredLeads;
    const annualImpact = totalMonthlyImpact * 12;

    // Update calculated fields
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

document.addEventListener("DOMContentLoaded", () => {
  const isROIPage = document.getElementById("bigbot-hours-slider");
  if (!isROIPage) return; // Don’t run on pages without the calculator

  try {
    [
      "bigbot-hours-slider",
      "bigbot-messages-slider",
      "bigbot-sale-slider",
    ].forEach((id) => {
      const slider = document.getElementById(id);
      if (slider) {
        slider.addEventListener("input", bigbot_calculate_roi);
      }
    });

    // Initial run
    bigbot_calculate_roi();
  } catch (error) {
    console.error("Error initializing ROI calculator:", error);
  }
});
