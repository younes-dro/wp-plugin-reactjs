
// Default static configuration
const defaultConfig = {
    apiBaseUrl: "https://example.com/wp-json", // Default WordPress REST API base URL
    featureToggles: {
        enableExperimentalFeature: false, // Example feature toggle
    },
    appVersion: "1.0.0", // Example constant
};

// Merge default configuration with dynamic values from WordPress
const dynamicConfig = window.wpPluginReactConfig || {}; // wp_localize_script will populate this
const config = { ...defaultConfig, ...dynamicConfig };

export default config;
