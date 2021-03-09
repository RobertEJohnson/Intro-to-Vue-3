How do we display data in our app

1. We create the app in our main.js file.
    - const app = Vue.createApp({})
      - inside of createApp() we pass an options object -> {}
2. The options object allows us to add ADDITIONAL PROPERTIES to configure our application  
    - Even though this is called the options object, it is NOT optional
    - We need at least an empty object

    1. We can add properties like data()


const app = Vue.createApp({
    data: (){
        return {
            product: 'Boots'
        }
    }
})