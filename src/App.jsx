
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Components/HomeSection/Footer/Footer'
import Navbar from './Components/HomeSection/Navbar/Navbar'

function App() {
  

  return (
    <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      
    </>
  )
}

export default App
