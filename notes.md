Computed Properties in Vue:

```computed``` can be added on to the Vue app instance as a property much like ```data``` and ```methods```

```computed``` stands for computed properties, these are calculations run and then stored for later. This makes computed properties a very large performance boost.
    - Computed properties will automatically update when one of their dependencies change!
    - Computed properties can be used the exact same as ```data``` properties
      - For example if we remove ```inStock``` from data and use ```inStock``` within ```computed```, our elements that access instock will be directed to the only remaing instance of inStock which is a computed property rather than a data property.
        - Having a data property and computed property named the same thing causes problems