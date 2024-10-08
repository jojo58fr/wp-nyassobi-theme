<?php
function nyassobi_theme_scripts() {
    wp_enqueue_script('nyassobi-theme-app', get_template_directory_uri() . '/build/index.js', array('wp-element'), '1.0.0', true);
    wp_enqueue_style('nyassobi-theme-style', get_stylesheet_uri());
}

//TODO a rajouter ?
function boilerplate_add_support() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
}

add_action('wp_enqueue_scripts', 'nyassobi_theme_scripts');
add_action('after_setup_theme', 'boilerplate_add_support');