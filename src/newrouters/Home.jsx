import React from "react";
import { NavLink } from "react-router-dom";

const Home = () =>{
    return(
        <div>
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
            <h1>HOME PAGE</h1>
        </div>
    )
}

export default Home;