<div class="bigbot-calculator-container">
  <!-- Input panel (same HTML you shared) -->
    <div class="bigbot-calculator-container">
    <!-- Left Panel: Input Parameters -->
    <div class="bigbot-panel">
      <h2>Calculate Your Potential Savings</h2>

      <div class="bigbot-input-section">
        <div class="bigbot-input-label">
          <span>Hours spent daily responding to messages:</span>
          <span class="bigbot-input-value" id="bigbot-hours-value">2 hours</span>
        </div>
        <div class="bigbot-slider-container">
          <input type="range" min="0" max="8" value="2" step="1" class="bigbot-slider" id="bigbot-hours-slider">
        </div>
        <div class="bigbot-slider-labels">
          <span>0h</span>
          <span>2h</span>
          <span>4h</span>
          <span>6h</span>
          <span>8h</span>
        </div>
      </div>




      <div class="bigbot-input-section">
        <div class="bigbot-input-label">
          <span>Weekly average number of messages received that take longer than 20 minutes to respond or follow up:</span>
          <span class="bigbot-input-value" id="bigbot-messages-value">10 messages</span>
        </div>
        <div class="bigbot-slider-container">
          <input type="range" min="0" max="50" value="10" step="1" class="bigbot-slider" id="bigbot-messages-slider">
        </div>
        <div class="bigbot-slider-labels">
          <span>0</span>
          <span>10</span>
          <span>20</span>
          <span>30</span>
          <span>50</span>
        </div>
      </div>





      <div class="bigbot-input-section">
        <div class="bigbot-input-label">
          <span>Average value of a closed sale:</span>
          <span class="bigbot-input-value" id="bigbot-sale-value">$500</span>
        </div>
        <div class="bigbot-slider-container">
          <input type="range" min="100" max="40000" value="500" step="100" class="bigbot-slider" id="bigbot-sale-slider">
        </div>
        <div class="bigbot-slider-labels">
          <span>$100</span>
          <span>$10,000</span>
          <span>$20,000</span>
          <span>$40,000</span>
        </div>
      </div>
    </div>




    

    <!-- Right Panel: ROI Results -->
    <div class="bigbot-panel">
      <h2>Your Potential ROI with <span class="secondary_font">BigBot </span></h2>

      <div class="bigbot-result-row">
        <span>Monthly employee cost savings:</span>
        <span class="bigbot-result-value" id="bigbot-monthly-savings"></span>
      </div>

      <div class="bigbot-result-row">
        <span>Monthly revenue from recovered leads:</span>
        <span class="bigbot-result-value" id="bigbot-monthly-revenue"></span>
      </div>

      <p class="bigbot-note">This is based on an estimated 20% close rate from recovered leads</p>

      <div class="bigbot-total-row">
        <span class="bigbot-monthly-impact-lebel">Total monthly impact:</span>
        <span class="bigbot-result-value" id="bigbot-monthly-impact"></span>
      </div>

      <div class="bigbot-annual-row">
        <span class="bigbot-annual-impact-lebel">Annual impact:</span>
        <span class="bigbot-result-value" id="bigbot-annual-impact"></span>
      </div>

     
      <a href="<?php echo esc_url($btnLink); ?>" class="bigbot-demo-button">
    <?php echo esc_html($btnText); ?>
  </a>
    </div>
  </div>
  <!-- Just change the button part -->
  </a>
</div>
