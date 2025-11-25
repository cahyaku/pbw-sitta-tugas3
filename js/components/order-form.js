/**
 * Order Form Component
 * Custom Vue Component untuk form tambah delivery order
 */

Vue.component('order-form', {
    template: '#order-form-template',
    props: {
        nomorDO: {
            type: String,
            required: true
        },
        formData: {
            type: Object,
            required: true
        },
        paketList: {
            type: Array,
            default: () => []
        },
        selectedPaket: {
            type: Object,
            default: null
        },
        stokList: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        /**
         * Get nama mata kuliah dari kode
         */
        getMatkulName(kode) {
            const matkul = this.stokList.find(s => s.kode === kode);
            return matkul ? matkul.judul : 'Tidak ditemukan';
        }
    }
});
