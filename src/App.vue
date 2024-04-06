<template>
  <nav>
    <router-link to="/">Login</router-link> |
    <router-link to="/browse">Browse</router-link>
    <router-link to="/cart">Cart</router-link>
  </nav>
  <router-view/>
  <div>
    <browse-books></browse-books>
    <shopping-cart></shopping-cart>
  </div>
</template>

<script>
import BrowseBooks from './components/BrowseBooks.vue'
import ShoppingCart from './components/ShoppingCart.vue'

export default {
  name: 'App',
  components: {
    'browse-books': BrowseBooks,
    'shopping-cart': ShoppingCart
  },
}
</script>

<style>
</style>
