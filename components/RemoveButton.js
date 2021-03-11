app.component('remove-button', {
    props: {
        itemId: {
            required: true,
        }
    },
    template: 
        /*html*/
        `<button
            @click="searchCart"
            class="button">
            Remove Item {{itemId}}
        </button>`,
    methods: {
        searchCart(){
            console.log(`remove button clicked with id: ${this.itemId}`);
            this.$emit('search-cart', this.itemId)
        }
    }
})