/**
 * App.js - Inisialisasi Vue Root Instance
 * Setup global Vue configuration dan root instance
 */

// Global Vue Configuration
Vue.config.productionTip = false;
Vue.config.devtools = true;

/**
 * Inisialisasi Vue Root Instance
 * Ini akan menjadi parent untuk semua component
 */
function initVueApp(elementId = '#app', componentName = null) {
    console.log(`🚀 Initializing Vue App on element: ${elementId}`);

    // Konfigurasi dasar untuk root instance
    const vueConfig = {
        el: elementId,
        data: {
            appReady: false,
            loadingData: true,
            errorMessage: null
        },
        methods: {
            /**
             * Handle global error
             */
            handleError(error, context = 'Application') {
                console.error(`❌ ${context} Error:`, error);
                this.errorMessage = error.message || 'Terjadi kesalahan';
                this.loadingData = false;
            },

            /**
             * Set app ready state
             */
            setAppReady(ready = true) {
                this.appReady = ready;
                this.loadingData = false;
                console.log(`✓ App ready state: ${ready}`);
            }
        },
        mounted() {
            console.log('✓ Vue Root Instance Mounted');
        }
    };

    // Jika ada component name, extend config
    if (componentName && window[componentName]) {
        console.log(`📦 Loading component: ${componentName}`);
        Object.assign(vueConfig, window[componentName]);
    }

    // Create Vue instance
    const app = new Vue(vueConfig);

    console.log('✓ Vue App initialized successfully');
    return app;
}

/**
 * Global helper untuk check login status
 */
function isLoggedIn() {
    return sessionStorage.getItem('currentUser') !== null;
}

/**
 * Global helper untuk get current user
 */
function getCurrentUser() {
    const userData = sessionStorage.getItem('currentUser');
    return userData ? JSON.parse(userData) : null;
}

/**
 * Global helper untuk logout
 */
function logout() {
    sessionStorage.removeItem('currentUser');
    window.location.href = '../index.html';
}

/**
 * Global alert helper untuk compatibility
 */
function showAlert(message, type = 'info') {
    console.log(`[${type.toUpperCase()}] ${message}`);
    alert(message);
}

// Export untuk digunakan di file lain
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initVueApp,
        isLoggedIn,
        getCurrentUser,
        logout,
        showAlert
    };
}
