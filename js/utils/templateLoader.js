/**
 * Template Loader Utility
 * Utility untuk memuat template HTML external ke dalam DOM
 * agar bisa digunakan oleh Vue components
 */

const TemplateLoader = {
    /**
     * Load template dari file HTML external
     * @param {string} templatePath - Path ke file template
     * @param {string} targetId - ID untuk template yang akan di-inject (optional)
     * @returns {Promise<string>} HTML content dari template
     */
    async loadTemplate(templatePath, targetId = null) {
        try {
            console.log(`📄 Loading template: ${templatePath}`);
            const response = await fetch(templatePath);

            if (!response.ok) {
                throw new Error(`Failed to load template: ${response.status}`);
            }

            const html = await response.text();

            // Jika targetId diberikan, inject ke DOM
            if (targetId) {
                this.injectTemplate(html, targetId);
            }

            console.log(`✓ Template loaded: ${templatePath}`);
            return html;
        } catch (error) {
            console.error(`❌ Error loading template ${templatePath}:`, error);
            throw error;
        }
    },

    /**
     * Inject template HTML ke dalam DOM
     * @param {string} html - HTML content
     * @param {string} targetId - ID untuk template element
     */
    injectTemplate(html, targetId) {
        // Cek apakah template sudah ada
        if (document.getElementById(targetId)) {
            console.log(`⚠️ Template ${targetId} already exists, skipping...`);
            return;
        }

        // Parse HTML
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        // Cari script type="text/x-template" atau template tag
        let templateElement = doc.querySelector('script[type="text/x-template"]');

        if (!templateElement) {
            templateElement = doc.querySelector('template');
        }

        if (templateElement) {
            // Set ID jika belum ada
            if (!templateElement.id) {
                templateElement.id = targetId;
            }

            // Append ke body
            document.body.appendChild(templateElement);
            console.log(`✓ Template injected: ${targetId}`);
        } else {
            console.warn(`⚠️ No template tag found in ${targetId}`);
        }
    },

    /**
     * Load multiple templates sekaligus
     * @param {Array} templates - Array of {path, id} objects
     * @returns {Promise<void>}
     */
    async loadMultipleTemplates(templates) {
        console.log(`📦 Loading ${templates.length} templates...`);

        const promises = templates.map(({ path, id }) =>
            this.loadTemplate(path, id)
        );

        try {
            await Promise.all(promises);
            console.log(`✓ All templates loaded successfully`);
        } catch (error) {
            console.error('❌ Error loading templates:', error);
            throw error;
        }
    }
};

// Export untuk digunakan di file lain
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TemplateLoader;
}
