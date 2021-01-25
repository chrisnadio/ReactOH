import React from "react";
import { Link } from "react-router-dom";  
import { Button } from 'antd';
import '../../assets/css/navbar.css';
    
const NavBar = () => {
    return (
      <div className='navbar'>
            <Link to="/home">
                  <Button type="primary">HOME</Button>
            </Link>
            <Link to="/bpcard">
                  <Button type="primary">BP CARD</Button>
            </Link>
            <Link to="/aboutme">
                  <Button type="primary">ABOUT ME</Button>
            </Link>
            <Link to="/books">
                  <Button type="primary">BOOK</Button>
            </Link>
            <Link to="/contribute">
                  <Button type="primary">Contribute</Button>
            </Link>
            <Link to="/counter">
                  <Button type="primary">Counter</Button>
            </Link>
      </div>
    )
}

export default NavBar;