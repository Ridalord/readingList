import { createContext, useEffect, useReducer } from "react";
// import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types"
import { BookReducer } from "../reducers/BookReducer";


export const BookContext = createContext();


const BookContextProvider = ({children}) => {
  const [books, dispatch] = useReducer(BookReducer, [], () => {
    const localData = localStorage.getItem("books")
    return localData && JSON.parse(localData)
  })
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books))
  },[books])
  // const addBook = (title, author) => {
  //   setBooks([...books, { title, author, id: uuidv4() }])
  // }
  // const removeBook = (id) => {
  //   setBooks(books.filter(book => book.id !== id))
  // }
  return (
    <BookContext.Provider value={{books, dispatch}}>
      {children}
    </BookContext.Provider>
  )
}

BookContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default BookContextProvider;