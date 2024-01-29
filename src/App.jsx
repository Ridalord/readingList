import NewBookform from './components/BookForm'
import BookList from './components/BookList'
import Navbar from './components/Navbar'
import BookContextProvider from './contexts/BookContext'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BookContextProvider>
      <Navbar />
      <BookList />
      <NewBookform/>
    </BookContextProvider>
  )
}

export default App
