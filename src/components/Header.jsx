import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import NavbarWrap from './NavbarWrap'
import Routing from '../Routes/Routing';

const Header = () => {
  return (
    <Router>
        <header>
            <NavbarWrap />
        </header>
        <Routing />
    </Router>
  )
}

export default Header