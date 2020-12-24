import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
    return (
        <div>
            <div>
                <h1>
                    <a href='#menu'>
                        <FaBars />
                    </a>
                </h1>
            </div>
            <div>
                <div>
                    <button>Login</button>
                </div>
                <div>
                    <button>Sign Up</button>
                </div>
            </div>
        </div>
    );
};
export default NavBar;
