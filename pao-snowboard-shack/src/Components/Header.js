import React from "react";
import { NavLink } from "react-router-dom";



function Header() {

    return (
        <header>
            <h1 className="header">
                Pao's Snowboard Shack 🏂
            </h1>
            <nav>
                <div className="navbar">
                    <button>
                        <NavLink className="button"  to="/">
                            HOME
                        </NavLink>
                    </button>
                    <button>
                        <NavLink className="button"  to="/addsnowboard">
                            ADD SNOWBOARDS
                        </NavLink>
                    </button>
                    <button>
                        <NavLink className="button"  to="/aboutus">
                            ABOUT US
                        </NavLink>
                    </button>
                </div>
            </nav>
        </header>
)
}

export default Header;