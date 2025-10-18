const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            selectedVariant: 0,
            inventory: 100,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50},
                {id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0},
            ],
            sizes: ['XL', '2XL', '3XL'],
            cart: 0,
            brand: 'Vue Mastery',
        }
    },
    computed: {
        title() {
            return this.onSale ? `${this.brand} ${this.product}` : '';
        },
        image() {
            return this.variants[this.selectedVariant].image;
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity;
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateVariant(index) {
            this.selectedVariant = index;
        },
        decrementFromCart() {
            this.cart -= 1;
        },
    }
})