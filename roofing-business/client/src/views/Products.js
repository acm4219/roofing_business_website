import React from 'react'
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

function Products() {
    return (
        <div>
            <div>
                <h1 className="text-center">Our Services</h1>
                <hr />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                         <div className="card">
                             <img src="https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg" alt="placeholder image" className="card-img" />
                        </div> 
                    </div>
                    <div className="col-sm-8">
                        <ProductCard />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-sm d-flex justify-content-center">
                        <Link className="btn btn-lg btn-primary" to="/form">Order Service</Link>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-sm-4">
                         <div className="card">
                             <img src="https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg" alt="placeholder image" className="card-img" />
                        </div> 
                    </div>
                    <div className="col-sm-8">
                        <ProductCard />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-sm d-flex justify-content-center">
                        <Link className="btn btn-lg btn-primary" to="/form">Order Service</Link>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-sm-4">
                         <div className="card">
                             <img src="https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg" alt="placeholder image" className="card-img" />
                        </div> 
                    </div>
                    <div className="col-sm-8">
                        <ProductCard />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-sm d-flex justify-content-center">
                        <Link className="btn btn-lg btn-primary" to="/form">Order Service</Link>
                    </div>
                </div>
                <br />
            </div>
        </div>
    )
}

export default Products
