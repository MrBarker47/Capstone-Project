import {Routes, Route} from 'react-router-dom'
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Contact} from "./pages/Contact"
import {Navbar} from "./Links/Navbar"


import './App.css'

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact />} />
  </Routes>
  </>
  )
}

export default App
