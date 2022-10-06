import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [width, setWidth] = useState('0px')
    const closeNav = () => {
        setWidth('0px')
    }
    useEffect(() => {
        document.addEventListener('openNav', () => {
            setWidth('250px')
        })
    }, [])
    return(
        <div id="mySidenav" className="sidenav cursor-pointer" style={{width}}>
        <span className="closebtn" onClick={closeNav}>&times;</span>
        <div className="sidemenu">
        <Link to="/about">About</Link>
        <Link to="/partners">Partners</Link>
        <Link to="/faq">FAQ</Link>
        {/* <a href="/">Services</a>
        <a href="/">Clients</a>
        <a href="/">Contact</a> */}
      </div>
  </div>	
    )
}
export default Navbar;