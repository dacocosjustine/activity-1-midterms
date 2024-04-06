<template>
    <div>
        <h1>Browse Books</h1>
        <ul>
            <li v-for="book in salesBooks" :key="book.id">
                <span class="title">Title: {{ book.title }}</span> <br>
                <span class="author"> Author: {{ book.author }}</span> <br>
                <span class="price"> Price: {{ book.price }}</span> <br>
                <button>Add to Cart</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        books() {
            return this.$store.state.books
        },
        salesBooks() {
            return this.$store.getters.salesBooks
        }
    }
}
</script>

<style>
#browse-books ul {
    padding: 0;
    list-style-type: none;
}
.title {
    font-weight: bold;
}
li {
    list-style-type: none;

}
</style>