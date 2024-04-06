import Vuex from 'vuex'

export const store = new Vuex.Store({
    name: 'store',
    state: {
      books: [
        { id: 1, title: 'Name of the Wind', author: 'Patrick Rothfuss', price: 100.99 },
        { id: 2, title: 'The Catcher in the Rye', author: 'J.D. Salinger', price: 808.99 },
        { id: 3, title: 'War and Peace', author: 'Leo Tolstoy', price: 172.99 },
        { id: 4, title: 'The Grapes of Wrath', author: 'John Steinbeck', price: 659.99 },
        { id: 5, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 757.99 },
        { id: 6, title: 'Pride and Prejudice', author: 'Jane Austen', price: 123.99 },
        { id: 7, title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', price: 999.99 },
        { id: 8, title: 'The Diary of a Young Girl', author: 'Anne Frank', price: 808.99 },
        { id: 9, title: 'Brave New World', author: 'Aldous Huxley', price: 172.99 },
        { id: 10, title: '1984', author: 'George Orwell', price: 659.99 }
      ]
  },
  getters: {
      salesBooks: state => {
          var salesBooks = state.books.map(book => {
              return{
                  id: book.id,
                  title: book.title,
                  author: book.author,
                  price: book.price
              }
          })
          return salesBooks
      }
  }
})
