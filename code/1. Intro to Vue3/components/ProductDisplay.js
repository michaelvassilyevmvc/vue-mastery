app.component('product-display', {
    template:
        `
          <div class="product-display">
            <div class="product-container">
              <div class="product-image">
                <img :class="{'out-of-stock-img':!inStock}" :src="image" alt="">
              </div>
              <div class="product-info">
                <h1>{{ title }}</h1>
                <p v-if="inventory > 10">In Stock</p>
                <p v-else-if="inventory <= 10 && inventory > 0">Almost sold</p>
                <p v-else>Out of Stock</p>

                <p>Shipping: {{ shipping }}</p>

                <p v-if="onSale">onSale</p>
                <ul>
                  <li v-for="detail in details">{{ detail }}</li>
                </ul>
                <div v-for="(variant, index) in variants"
                     :key="variant.id"
                     @mouseover="updateVariant(index)"
                     class="color-circle"
                     :style="{backgroundColor: variant.color}"
                >
                </div>
                <button :disabled="!inStock"
                        :class="{disabledButton: !inStock}"
                        class="button" @click="addToCart">Add to Cart
                </button>
                <button class="button" @click="decrementFromCart">
                  Decrement
                </button>
              </div>
            </div>
          </div>
        `,
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
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
        },
        shipping() {
            if (this.premium) {
                return 'Free';
            }
            return 2.99;
        }

    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id);
        },
        updateVariant(index) {
            this.selectedVariant = index;
        },
        decrementFromCart() {
            this.$emit('decrement-from-cart', this.variants[this.selectedVariant].id);
        },
    }

})