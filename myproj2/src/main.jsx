import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import Header from './Header'
import './App.css'
import Img from './img'
import Content from './Content'
import Underline from './Underline'
import Products from './Products'
import About from './About'
import Aboutmore from './Aboutmore'
import Footer from './Footer'
import Endline from './Endline'
import SC12 from './SC12'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<App />*/}
    <Header/>
    <Img/>
    <Content/>
    <Underline/>
    <Products/>
    <About/>
    <Aboutmore/>
    <Footer/>
    <Endline/>
    <Header/>
    <Img/>
    <Underline/>
    <Products/>
    <SC12/>
  </React.StrictMode>,
)
