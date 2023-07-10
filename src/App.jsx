import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home.jsx'
import { BrowserRouter } from 'react-router-dom'

function App () {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home />
      </BrowserRouter>
    </>
  )
}

export default App
