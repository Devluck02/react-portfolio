import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/header/Header'
import Routing from './Routes/Routing'
import "./App.css"
import Footer from './components/footer/Footer'
const App = () => {
  return (
    <Router>
      <Header />
      <div className='container page-view'>
        <Routing />
      </div>
      <Footer />
    </Router>
  )
}

export default App