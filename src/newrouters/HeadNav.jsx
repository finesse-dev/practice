import React from "react";
import { NavLink } from "react-router-dom";

const HeadNav = () => {
    return(<div>
        <header>
                <a href="#">Logo</a>
                <nav>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/blog">Blog</NavLink></li>
                    </ul>
                </nav>
            </header>
    </div>)
}

export default HeadNav;