import {Routes, Route} from 'react-router-dom'
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Contact} from "./pages/Contact"
import {Service} from "./pages/Service"
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
      <Route path="/Service" element={<Service />} />
  </Routes>
  </>
  )
}

export default App
