import '@/App.css'
import Navbar from '@/components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from '@/routes/Index'

function App () {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <RoutesIndex />
      </BrowserRouter>
    </>
  )
}

export default App
