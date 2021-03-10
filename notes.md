Event Handling in Vue!

When we need events to happen in response to user actions we have a wide selection of directives to work with.

v-on: directive
    - Can use things like ```v-on:click``` or ```v-on:mouseover```
    - Can use in-line logic to interact with data in data object
      - like <button v-on:click="count += 1"> where count is stored in data object
    - Can use methods defined in the Vue app PROPERTIES much like data

```v-on:click``` can be written with shorthand as ```@click```

```v-on:mouseover``` can be written with shorthand as ```@mouseover```
