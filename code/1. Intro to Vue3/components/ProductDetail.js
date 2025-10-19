app.component('product-detail', {
    template:
    `
     <ul>
        <li v-for="detail in details" :key="detail.id">
          {{detail}}
        </li>
     </ul>
    `,
    props: {
        details: {
            type: Array,
            required: true
        }
    }
})