Conditional Rendering with Vue!

v-if 

    <p>In Stock</p>
    <p>Out of Stock</p>

    In order to conditionally render the above, just use the v-if directive!

    <p v-if="inStock">In Stock</p>
    <p v-else>Out of Stock</p>

    This will access the property of ```inStock``` to see if it should render or not! 

    v-else is NOT REQUIRED with v-if unless you have another thing you'd like to render!

    v-else does not need an argument to follow it, I assume it just goes off of the nearest conditional

v-if with logic

    v-if can also use logic to determine its truthy and falsy-ness from the data object.

    For example, 
        <p v-if="inventory > 10">Plenty in stock</p>
        <p v-else-if="inventory <= 10 && inventory > 0">Very few left!</p>
        <p v-else>We're all sold out! :(</p>

v-show

    this is used for toggling elements' visibility!
    Super useful for things that will toggle off and often, like a modal!

    This will avoid re adding and removing things from the DOM, rather
    it will simple add a ```style="display:none"``` to the element