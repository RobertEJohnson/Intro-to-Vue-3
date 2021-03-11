const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id){
            this.cart.push(id);
        },
        removeFromCart(id){
            console.log(`in removeFromCart with ${id}`)
            if(this.cart.indexOf(id) === -1){
                console.log('Nothing found!');
                return false;
            }
            this.cart.splice(this.cart.indexOf(id), 1);
        }
    }
})
