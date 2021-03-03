import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-extend navbar-dark bg-primary">
                <div className="container-fluid">
                    <div>
                    <img src="./homestock2.jpg" alt="business-placeholder" style={{height: 50, marginRight: 20}}/>
                    <Link className="navbar-brand" to="/">Working Title</Link>
                    </div>
                        <ul className="nav justify-content-end">
                        <li className="nav-item">
                        <Link to="/form" className="nav-link text-white">Work Request</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/products" className="nav-link text-white">Products</Link>
                        </li>
                        
                        <li className="nav-item">
                        <Link to ="/about" className="nav-link text-white">About</Link>
                        </li>
                       
                        </ul>
                    </div>
            </nav>
        </div>
    )
    }

    export default Navbar
