<?php

namespace includes;
class Bootstrap {
	private static ?Bootstrap $_instance = null;

	public static function get_instance(): ?Bootstrap {
		return ( self::$_instance == null ) ? self::$_instance = new self() : self::$_instance;
	}

	protected function __construct() {
		add_action( 'plugins_loaded', [ $this, 'load_modules' ] );
	}

	public function load_modules() {
		add_action( 'init', [ $this, 'register_blocks' ] );
	}


	public function register_blocks() {
		register_block_type( DEP_BLOCK_DIR_PATH . '/build' );

	}
}

Bootstrap::get_instance();

