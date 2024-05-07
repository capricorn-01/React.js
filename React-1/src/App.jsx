import React from 'react'

import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Blog from './Components/Blog/Blog'
import Contact from './Components/Contacts/Contacts'
import { Routes,Route } from 'react-router-dom'
function App() {
  

  return (
    <>
      <Header />
      <Routes>

      <Route path='/' element ={ <Home />} />
      <Route path='/About' element = {<About />} />
     <Route path='/Blog' element = {<Blog />} />
     <Route path='/Contact' element = {<Contact />} />

      </Routes>
    </>
  )
}

export default App
