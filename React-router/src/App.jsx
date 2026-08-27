import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div>
      <h1> Welcome to Routing </h1>
      <Navbar />
      {/* <Home /> */}
      <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </div>
  )
}

export default App
