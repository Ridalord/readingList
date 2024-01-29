import { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

const NewBookform = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] =useState('')
  const [author, setAuthor] = useState('')
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addBook(title, author);
    setTitle('')
    setAuthor('')
  }
  return ( 
    <form onSubmit={handleFormSubmit}>
      <input type="text" placeholder="book title" value={title} onChange={(e)=> setTitle(e.target.value)} required />
      <input type="text" placeholder="book autor" value={author} onChange={(e) => setAuthor(e.target.value)} required />
      <input type="submit" value="Add Book" /> 
    </form>
  );
}
 
export default NewBookform;
