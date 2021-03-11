Forms and V-Model:

--

So far we know about v-bind, this is great for ONE WAY binding
    -The information on the data object, will be bound to the template

But when there are forms one way binding is not ideal, as the information a user enters could need to alter the data stored on the data object.

This is where v-model comes in.
    - v-model will create a TWO-WAY bind from the data object to the template and from the template to the data object!

--

Here is an example of using v-model

data(){
    return{
        ```name:''```
    }
}

The above will be two way bound with the below

<input id="name" v-model="name">

-- 

There are useful modifiers to ```typecast``` as certain types!
They are usually accessed with a ```. accessor``` on the directive.

For example,
    <select id="rating" v-model.number="rating">

The above will make sure rating will be typecast as a number and v-model will ensure that the information is bound both ways, 

template <- v-model -> data

--

Another useful modifer is ```.prevent``` which can be used with ```@submit``` to prevent the default browser refresh, like so,

    <form class="review-form" @submit-prevent="onSubmit"></form>