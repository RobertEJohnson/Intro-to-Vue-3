Encapsulating reusable code with components.

In order to create a component in Vue, much like React, place it in a component folder.

Then name it PascalCased, and do the following

    app.component('component-name', {
        props: {
            premium : {
                type: Boolean,
                required: true
            }
        }
        template:
            `<h1>Templates hold the html</h1>`,
        data(){ 
            return {
                 information: 'Data objects properties still hold data'
            }
        },
        methods: {
            moreInfo(){
                return "Methods also get listed on the component properties"
            }
        },
        computed: {
            details: "Computed properties can also be added to a component"
        }
    })


If a component ever needs to access data that is outside of itself, we can use props.

Props:
    A custom attribute for passing data into a component.

All Props can have ```Prop Validation``` where we can ```configure``` Props to declare the things like whether they are required or not, or their type allowed.

--

Adding a prop can be done like so
    <product-display premium="premium"/>

It can be done better with a v-bind: directive added onto the prop,
this way it can reactively update whenever the prop value updates from data.

So with a v-bind it becomes,
    <product-display :premium="premium"/>

Now it will update reactively with new values.

--