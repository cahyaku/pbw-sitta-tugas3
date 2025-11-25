/**
 * Stock Table Component
 * Custom Vue Component untuk menampilkan tabel stok bahan ajar
 */

Vue.component('stock-table', {
    template: '#stock-table-template',
    props: {
        items: {
            type: Array,
            required: true,
            default: () => []
        }
    },
    computed: {
        itemCount() {
            return this.items.length;
        }
    },
    methods: {
        /**
         * Mendapatkan kelas CSS untuk warna stok
         */
        getStockClass(qty) {
            if (qty === 0) {
                return 'text-danger';
            } else if (qty <= 10) {
                return 'text-warning';
            } else {
                return 'text-success';
            }
        },

        /**
         * Mendapatkan teks status berdasarkan stok dan safety stock
         */
        getStatusText(item) {
            if (item.qty === 0) {
                return 'Habis';
            } else if (item.qty < item.safety) {
                return 'Stok Rendah';
            } else {
                return 'Tersedia';
            }
        },

        /**
         * Mendapatkan kelas badge untuk status
         */
        getStatusBadgeClass(item) {
            if (item.qty === 0) {
                return 'bg-danger';
            } else if (item.qty < item.safety) {
                return 'bg-warning text-dark';
            } else {
                return 'bg-success';
            }
        }
    }
});
