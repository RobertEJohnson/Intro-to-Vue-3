const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            altText: 'A pair of green socks with a Vue logo.',
            url: 'https://res.cloudinary.com/demo/image/upload/w_200,h_90,c_fill,g_south/pasta.jpg'
        }
    }
})
