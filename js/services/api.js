/**
 * API Service untuk menangani fetch data dari JSON
 * Menggunakan fetch API untuk mengambil data dari dataBahanAjar.json
 */

const API = {
    /**
     * Base URL untuk data JSON
     */
    baseURL: '../data/',

    /**
     * Fetch data dari dataBahanAjar.json
     * @returns {Promise<Object>} Data bahan ajar lengkap
     */
    async fetchBahanAjarData() {
        try {
            const response = await fetch(`${this.baseURL}dataBahanAjar.json`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('✓ Data berhasil di-fetch dari JSON:', data);
            return data;
        } catch (error) {
            console.error('❌ Error fetching data dari JSON:', error);
            throw error;
        }
    },

    /**
     * Fetch data stok saja
     * @returns {Promise<Array>} Array data stok
     */
    async fetchStokData() {
        try {
            const data = await this.fetchBahanAjarData();
            return data.stok || [];
        } catch (error) {
            console.error('❌ Error fetching stok data:', error);
            return [];
        }
    },

    /**
     * Fetch data tracking saja
     * @returns {Promise<Array>} Array data tracking
     */
    async fetchTrackingData() {
        try {
            const data = await this.fetchBahanAjarData();
            return data.tracking || [];
        } catch (error) {
            console.error('❌ Error fetching tracking data:', error);
            return [];
        }
    },

    /**
     * Fetch data paket saja
     * @returns {Promise<Array>} Array data paket
     */
    async fetchPaketData() {
        try {
            const data = await this.fetchBahanAjarData();
            return data.paket || [];
        } catch (error) {
            console.error('❌ Error fetching paket data:', error);
            return [];
        }
    },

    /**
     * Fetch list UPBJJ
     * @returns {Promise<Array>} Array list UPBJJ
     */
    async fetchUpbjjList() {
        try {
            const data = await this.fetchBahanAjarData();
            return data.upbjjList || [];
        } catch (error) {
            console.error('❌ Error fetching UPBJJ list:', error);
            return [];
        }
    },

    /**
     * Fetch list kategori
     * @returns {Promise<Array>} Array list kategori
     */
    async fetchKategoriList() {
        try {
            const data = await this.fetchBahanAjarData();
            return data.kategoriList || [];
        } catch (error) {
            console.error('❌ Error fetching kategori list:', error);
            return [];
        }
    }
};

// Export untuk digunakan di file lain
if (typeof module !== 'undefined' && module.exports) {
    module.exports = API;
}
