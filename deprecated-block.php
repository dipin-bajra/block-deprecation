<?php
/**
 * Plugin Name:       Deprecated Block
 * Description:       Deprecated Block Test
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       deprecated-block
 *
 * @package           create-block
 */


defined( 'ABSPATH' ) || exit;
defined( 'DEP_BLOCK_FILE_PATH' ) || define( 'DEP_BLOCK_FILE_PATH', __FILE__ );
defined( 'DEP_BLOCK_DIR_PATH' ) || define( 'DEP_BLOCK_DIR_PATH', dirname( __FILE__ ) );
defined( 'DEP_BLOCK_DIR_PATH_URL' ) || define( 'DEP_BLOCK_DIR_PATH_URL', plugin_dir_url( __FILE__ ) );
require_once DEP_BLOCK_DIR_PATH . '/includes/Bootstrap.php';
