import Navbar from './components/Navbar'
import BookContextProvider from './contexts/BookContext'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BookContextProvider>
      <Navbar/>
    </BookContextProvider>
  )
}

export default App
