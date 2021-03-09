In order to bind (set the connection) between a data object property stored in a Vue instance and the HTML properties within an element like
<img src="src.png">

const app = Vue.createApp({
    data(){
        return(
            product: 'Socks',
            image: 'Socks.png',
            url: 'https://res.cloudinary.com/demo/image/upload/w_200,h_90,c_fill,g_south/pasta.jpg'
        )
    }
})

We will use v-bind: in front of src, so for example
<img v-bind:src='image'>

This will access the image property of the data object of the Vue instance.
This is called the V-BIND DIRECTIVE!

    This dynamically binds an Attribute to an Expression

There is a shorthand for the v-bind: directive, this is just using the : of v-bind:

