import React from 'react'
import Banner from "../components/Banner";
import ContactCard from "../components/ContactCard";
import { Link } from "react-router-dom";

function Entry() {
    return (
        <div>
            <Banner />
            <div className="container mt-3">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card">
                        <img src="https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg" alt="placeholder image" className="card-img-top" />
                        </div>
                        <div className="card-body">
                        <ContactCard />
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="card">
                            <div className="card-body">
                                <h3>Our Business</h3>
                                <hr />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit auctor ante vel bibendum. Cras neque felis, lacinia tempus congue eu, euismod sit amet erat. Aenean et molestie tortor. In interdum scelerisque erat, iaculis ultrices turpis euismod ut. Vestibulum dui erat, vulputate et felis sit amet, faucibus fermentum elit. Ut sagittis sit amet lacus posuere condimentum. In convallis viverra urna. Praesent euismod sollicitudin leo in aliquam.</p>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit auctor ante vel bibendum. Cras neque felis, lacinia tempus congue eu, euismod sit amet erat. Aenean et molestie tortor. In interdum scelerisque erat, iaculis ultrices turpis euismod ut. Vestibulum dui erat, vulputate et felis sit amet, faucibus fermentum elit. Ut sagittis sit amet lacus posuere condimentum. In convallis viverra urna. Praesent euismod sollicitudin leo in aliquam.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-sm d-flex justify-content-center">
                        <Link className="btn btn-lg btn-primary" to="/products">Get Started</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Entry
