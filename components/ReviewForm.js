app.component('review-form', {
    props: {

    },
    template: 
    /*html*/
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
        <br>
        <label for="recommendation">Would you Recommend this Product?</label>
        <textarea id="recommendation" v-model="recommendation"></textarea>
        
        <input class="button" type="submit" value="submit">
    </form>
        `,
    data(){
        return {
            name: '',
            review: '',
            rating: null,
            recommendation: '',
        }
    },
    methods: {
        onSubmit(){
            console.log('Running onSubmit!');

            if(this.name===''){
                alert('Please provide a name for your review!');
                return;
            }
            else if(this.review===''){
                alert('Review form cannot be empty!');
                return;
            }
            else if(this.rating===null){
                alert('Please provide a rating for your review!');
                return;
            }
            else if(this.recommendation===''){
                alert('Please provide a recommendation in your review!');
                return;
            }

            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                recommendation: this.recommendation,
            };
            console.log(`Emitting product Review: ${JSON.stringify(productReview)}`);
            this.$emit('review-submitted', productReview);

            this.name = '';
            this.review = '';
            this.rating = null;
            this.recommendation = '';
        }
    },
})