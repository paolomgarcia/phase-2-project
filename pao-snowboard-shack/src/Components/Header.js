import React from "react";
import { NavLink } from "react-router-dom";



function Header() {

    return (
        <header>
            <h1>
                Pao's Snowboard Shack 🏂
            </h1>
            <nav>
                <div classname="navbar">
                    <button>
                        <NavLink className="button" exact to ="/">
                            H0ME
                        </NavLink>
                    </button>
                    <button>
                        <NavLink className="button" exact to ="/addsnowboard">
                            ADD SN0WB0ARDS
                        </NavLink>
                    </button>
                    <button>
                        <NavLink className="button" exact to ="/aboutus">
                            AB0UT US
                        </NavLink>
                    </button>
                </div>
            </nav>
        </header>
)
}

export default Header;