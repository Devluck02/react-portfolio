

import Navbar from '../navbar/Navbar'
import "./header.css"
const Header = () => {
  return (
    <header>
        <div className='container flex flex-x-between flex-y-center'>
            <Navbar />
        </div>
    </header>
  )
}

export default Header