import React from "react";
import { NavLink } from "react-router-dom";



function Header() {

    return (
        <div className="header">
            <h1 className="logo">
                Pao's Snowboard Shack 🏂
            </h1>
            <nav>
                <div className="header-right">
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
            </div>

)
}

export default Header;