app.component('review-form', {
    template:
        `
          <form class="review-form" @submit.prevent="onSubmit">
            <h3>Leave a review</h3>
            <label for="name">Name:</label>
            <input id="name" v-model="name">

            <label for="review">Review:</label>
            <textarea id="review" v-model="review"></textarea>

            <label for="rating">Rating:</label>
            <select id="rating" v-model.number="rating">
              <option>5</option>
              <option>4</option>
              <option>3</option>
              <option>2</option>
              <option>1</option>
            </select>
            <div>
              <input id="recommendedInput"
                     type="checkbox"
                     v-model="isRecommended"/>
              <label for="recommendedInput">Do you recommended?</label>
            </div>

            <input class="button" type="submit" value="submit"/>
          </form>
        `,
    data() {
        return {
            name: '',
            review: '',
            rating: null,
            isRecommended: false,
        }
    },
    methods: {
        onSubmit() {
            if (this.name === '' || this.review === '' || this.rating === '') {
                alert('Review is incomplete. Please fill out every field.');
            }
            else {

                let productReview = {
                    name: this.name,
                    review: this.review,
                    rating: this.rating,
                    isRecommended: this.isRecommended
                }
                this.$emit('review-submitted', productReview)

                this.name = ''
                this.review = ''
                this.rating = null
                this.isRecommended = false
            }
        }
    }
})