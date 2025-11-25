/**
 * DO Tracking Component
 * Custom Vue Component untuk menampilkan hasil tracking DO
 */

Vue.component('do-tracking', {
    template: '#do-tracking-template',
    props: {
        tracking: {
            type: Object,
            default: null
        },
        showResults: {
            type: Boolean,
            default: false
        },
        showNoResults: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        /**
         * Get CSS class untuk status badge
         */
        getStatusBadgeClass(status) {
            if (!status) return 'bg-secondary';

            switch (status.toLowerCase()) {
                case 'diterima':
                    return 'bg-info';
                case 'diproses':
                    return 'bg-warning text-dark';
                case 'dalam perjalanan':
                    return 'bg-primary';
                case 'dikirim':
                    return 'bg-success';
                case 'selesai':
                    return 'bg-success';
                default:
                    return 'bg-secondary';
            }
        },

        /**
         * Format tanggal
         */
        formatDate(dateString) {
            if (!dateString) return '-';
            const date = new Date(dateString);
            return date.toLocaleDateString('id-ID', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            });
        },

        /**
         * Format tanggal dan waktu
         */
        formatDateTime(dateTimeString) {
            if (!dateTimeString) return '-';
            const date = new Date(dateTimeString);
            return date.toLocaleString('id-ID', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        }
    }
});
