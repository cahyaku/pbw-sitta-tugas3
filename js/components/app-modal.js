/**
 * App Modal Component
 * Custom Vue Component untuk modal yang reusable
 */

Vue.component('app-modal', {
    template: '#app-modal-template',
    props: {
        modalId: {
            type: String,
            required: true
        },
        title: {
            type: String,
            default: 'Modal'
        },
        size: {
            type: String,
            default: 'md', // sm, md, lg, xl
            validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value)
        },
        headerClass: {
            type: String,
            default: 'bg-primary text-white'
        },
        iconClass: {
            type: String,
            default: 'bi bi-info-circle'
        },
        showFooter: {
            type: Boolean,
            default: true
        },
        cancelText: {
            type: String,
            default: 'Batal'
        },
        confirmText: {
            type: String,
            default: 'Simpan'
        },
        confirmBtnClass: {
            type: String,
            default: 'btn-primary'
        }
    },
    computed: {
        sizeClass() {
            return this.size !== 'md' ? `modal-${this.size} modal-dialog-centered` : 'modal-dialog-centered';
        },
        closeButtonClass() {
            return this.headerClass.includes('text-white') ? 'btn-close-white' : '';
        }
    }
});
