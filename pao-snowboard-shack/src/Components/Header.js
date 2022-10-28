import React from "react";
import { NavLink } from "react-router-dom";
import '../Header.css'
// import { NavBar } from "semantic-ui-react";



function Header() {


    return (

<div className="header">
<h1 className="logo">
    Pao's Snowboard Shack 🏂
</h1>
<nav>
    <div className="header-right">
        <button>
            <NavLink to="/">HOME</NavLink>
        </button>
        <button>
            <NavLink to="/addsnowboard">ADD SNOWBOARDS</NavLink>
        </button>
        <button>
            <NavLink to="/aboutus">ABOUT US</NavLink>
        </button>
    </div>
</nav>
</div>



)
}

export default Header;



