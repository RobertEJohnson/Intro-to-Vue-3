Communicating Events with Vue
--

We can pass values down with props, but what happens when we need them to go up?

We can ```emit``` the event from the component, which is sort of like bubbling the event up, then we will add ```listeners``` to the component itself.

So within the component we have a method that gets called onclick

methods: {
    addToCart(){
        this.$emit('add-to-cart')
    }
}

The above method will emit the string 'add-to-cart' with ```this.$emit``` and the string will bubble up to the top of the outer edges of the component.

On the component itself we will add a listener for the string 'add-to-cart'
This can be done like so,

<product-display :premium="premium" @add-to-cart="updateCart">

In the above code, ```updateCart``` is a method that lives upon the methods properties of main.js

--

An important thing to note is that when using props on a component
    - Make sure to use a v-bind directive if referencing data/methods/computed
      - If you don't use a : you will end up with JUST A STRING. Also no bound value.