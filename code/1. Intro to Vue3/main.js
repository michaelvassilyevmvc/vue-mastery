const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        decrement(id) {
            this.cart.splice(this.cart.indexOf(id), 1);
        }
    }
})