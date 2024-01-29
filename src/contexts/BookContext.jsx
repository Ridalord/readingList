import { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types"


export const BookContext = createContext();


const BookContextProvider = ({children}) => {
  const [books, setBooks] = useState([
    {title: 'name of the wind', author: 'patrick rothfus', id: 1},
    {title: 'name final empire', author: 'brandon sanderson', id: 2},
  ])
  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuidv4() }])
  }
  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id))
  }
  return (
    <BookContext.Provider value={{books, addBook, removeBook}}>
      {children}
    </BookContext.Provider>
  )
}

BookContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default BookContextProvider;