Event Handling in Vue!

When we need events to happen in response to user actions we have a wide selection of directives to work with.

v-on: directive
    - Can use things like ```v-on:click``` or ```v-on:mouseover```
    - Can use in-line logic to interact with data in data object
      - like <button v-on:click="count += 1"> where count is stored in data object
    - Can use methods defined in the Vue app PROPERTIES much like data

```v-on:click``` can be written with shorthand as ```@click```

```v-on:mouseover``` can be written with shorthand as ```@mouseover```

--

Class Binding and Ternary operators

When using ```v-bind:class``` you can add logic to determine with the class
should be added or not, this can be done with the following

                   class: boolean value
    <div :class="{active: activeClass}">

    The above line of code will give the div the class of ```active``` IF ```activeClass`` equates to true.

We can also use Ternary operators within square brackets [ ] to add conditional logic
for rendering classes
                
                 boolean ? class if true : class if false
    <div :class=[activeClass ? active : yellowBackground]>

    The above line of code will set the class to 
        - ```active``` if ```activeClass``` is true
        - ```yellowBackground``` if ```activeClass``` is false