Rendering with lists in Vue!

The ```v-for``` directive is awesome, its like a for loop!
We can use the v-for directive to iterate over collections like this,

(inside the data object)
    details: ['50% cotton', '30% wool', '20% polyester']

Using the v-for directive to iterate over ```details``` from data object.
    <ul>
        <li v-for="detail in details">{{ detail }}</li>
    </ul>

This will become:
    <ul>
        <li>50% cotton</li>
        <li>30% wool</li>
        <li>20% polyester</li>
    </ul>

---

In order to access a nested data structure, you may use the dot accessor.
For example,

variants: [
    { id: 2234, color: 'green'},
    { id: 2235, color: 'blue'},
]

The color property can be accessed with a ```v-for``` directive like so

<p v-for="variant in variants">{{variant.color}}</p>

This will produce two p elements, one for each object, both with their own unique properties values of color.


--

Keys in Vue:
    Whenever we iterate with a v-for directive its a good idea to have a key.
    We can set a key with using v-bind:key="object.id"

    This will be more performant and I assume will help Vue understand what to rerender, much like React.