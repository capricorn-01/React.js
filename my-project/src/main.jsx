import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
//import './index.css'
import Header from './Header.jsx'
import Section from './Section.jsx'
import Footer from './Footer.jsx'
import './App.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Section/>
    <Footer/>
   {/* <App />*/}
  </React.StrictMode>,
)
