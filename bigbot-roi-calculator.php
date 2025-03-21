<?php
/*
Plugin Name: BigBot ROI Calculator
Description: Custom ROI calculator with shortcode.
Version: 1.0.0
Author: Omar and Purely Team
Author URI: https://www.purelydigitalmarketing.com/
*/

defined('ABSPATH') or die('No script kiddies please!');

// Load assets
function bigbot_enqueue_assets() {
    wp_enqueue_style('bigbot-roi-style', plugin_dir_url(__FILE__) . 'roi_style.css');
    wp_enqueue_script('bigbot-roi-script', plugin_dir_url(__FILE__) . 'roi_calculator.js', [], false, true);
     // Pass hourly rate to JS
    $hourlyRate = get_option('bigbot_hourly_rate', 30);
    wp_localize_script('bigbot-roi-script', 'bigbotSettings', [
        'hourlyRate' => floatval($hourlyRate)
    ]);
}
add_action('wp_enqueue_scripts', 'bigbot_enqueue_assets');

// Shortcode: [bigbot-roi]
function bigbot_roi_shortcode() {
    $btnText = get_option('bigbot_btn_text', 'Request a Personal Demo');
    $btnLink = get_option('bigbot_btn_link', '#');

    ob_start();
    include plugin_dir_path(__FILE__) . 'layout.php';
    return ob_get_clean();
}
add_shortcode('bigbot-roi', 'bigbot_roi_shortcode');

// Admin menu
function bigbot_add_settings_menu() {
    add_options_page('BigBot ROI Settings', 'BigBot ROI', 'manage_options', 'bigbot-roi-settings', 'bigbot_render_settings_page');
}
add_action('admin_menu', 'bigbot_add_settings_menu');

// Register settings
function bigbot_register_settings() {
    register_setting('bigbot_settings_group', 'bigbot_btn_text');
    register_setting('bigbot_settings_group', 'bigbot_btn_link');
    register_setting('bigbot_settings_group', 'bigbot_hourly_rate');
}
add_action('admin_init', 'bigbot_register_settings');

// Settings Page
function bigbot_render_settings_page() {
    include plugin_dir_path(__FILE__) . 'admin/settings-page.php';
}
