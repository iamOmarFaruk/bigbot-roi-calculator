<div class="wrap">
  <h1>BigBot ROI Settings</h1>
  <form method="post" action="options.php">
    <?php settings_fields('bigbot_settings_group'); ?>
    <?php do_settings_sections('bigbot_settings_group'); ?>
    <table class="form-table">
      <tr>
        <th scope="row">Button Text</th>
        <td><input type="text" name="bigbot_btn_text" value="<?php echo esc_attr(get_option('bigbot_btn_text', 'Request a Personal Demo')); ?>" class="regular-text"></td>
      </tr>
      <tr>
        <th scope="row">Button Link</th>
        <td><input type="url" name="bigbot_btn_link" value="<?php echo esc_url(get_option('bigbot_btn_link', '#')); ?>" class="regular-text"></td>
      </tr>
      <tr>
        <th scope="row">Hourly Rate (USD)</th>
        <tr>
  <th scope="row">Hourly Rate (USD)</th>
  <td>
    <input type="number" name="bigbot_hourly_rate" 
           value="<?php echo esc_attr(get_option('bigbot_hourly_rate', 30)); ?>" 
           class="small-text" min="1" step="1" required>
  </td>
</tr>

      </tr>
    </table>
    <?php submit_button(); ?>
  </form>

  <hr>

  <h2>How to Use</h2>
  <p>Use shortcode <code>[bigbot-roi]</code> in any page or post to display the ROI calculator.</p>
</div>
