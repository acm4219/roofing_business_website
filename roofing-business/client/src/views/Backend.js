import React from 'react'
import { Link } from 'react-router-dom';

function Backend() {
    return (
        <div className="container">
            <h3>Current Leads</h3>
            <hr />
            <label for="filter">Narrow your search</label>
            <div className="input-group mb-3"> 
                <input type="text" className="form-control" placeholder="Search Leads" />
                <Link to="/leads" className="btn btn-primary">Search</Link>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <div className="card">
                        <img className="card-img-top" src=
                        "https://media.istockphoto.com/photos/beautiful-luxury-home-exterior-at-twilight-picture-id1026205392?k=6&m=1026205392&s=612x612&w=0&h=pe0Pqbm7GKHl7cmEjf9Drc7Fp-JwJ6aTywsGfm5eQm4=" alt="stock photo"/>
                        <div className="card-body">
                            <h5 className="card-title"> Example title</h5>
                            <p className="card-text">Home Description</p>
                            <Link to="/leads" className="btn btn-primary m-1">Investigate</Link>
                            <Link to="/leads" className="btn btn-danger m-1">Delete Job</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <img className="card-img-top" src=
                        "https://media.istockphoto.com/photos/beautiful-luxury-home-exterior-at-twilight-picture-id1026205392?k=6&m=1026205392&s=612x612&w=0&h=pe0Pqbm7GKHl7cmEjf9Drc7Fp-JwJ6aTywsGfm5eQm4=" alt="stock photo"/>
                        <div className="card-body">
                            <h5 className="card-title"> Example title</h5>
                            <p className="card-text">Home Description</p>
                            <Link to="/leads" className="btn btn-primary m-1">Investigate</Link>
                            <Link to="/leads" className="btn btn-danger m-1">Delete Job</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <img className="card-img-top" src=
                        "https://media.istockphoto.com/photos/beautiful-luxury-home-exterior-at-twilight-picture-id1026205392?k=6&m=1026205392&s=612x612&w=0&h=pe0Pqbm7GKHl7cmEjf9Drc7Fp-JwJ6aTywsGfm5eQm4=" alt="stock photo"/>
                        <div className="card-body">
                            <h5 className="card-title"> Example title</h5>
                            <p className="card-text">Home Description</p>
                            <Link to="/leads" className="btn btn-primary m-1">Investigate</Link>
                            <Link to="/leads" className="btn btn-danger m-1">Delete Job</Link>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-sm-4">
                    <div className="card">
                        <img className="card-img-top" src=
                        "https://media.istockphoto.com/photos/beautiful-luxury-home-exterior-at-twilight-picture-id1026205392?k=6&m=1026205392&s=612x612&w=0&h=pe0Pqbm7GKHl7cmEjf9Drc7Fp-JwJ6aTywsGfm5eQm4=" alt="stock photo"/>
                        <div className="card-body">
                            <h5 className="card-title"> Example title</h5>
                            <p className="card-text">Home Description</p>
                            <Link to="/leads" className="btn btn-primary m-1">Investigate</Link>
                            <Link to="/leads" className="btn btn-danger m-1">Delete Job</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <img className="card-img-top" src=
                        "https://media.istockphoto.com/photos/beautiful-luxury-home-exterior-at-twilight-picture-id1026205392?k=6&m=1026205392&s=612x612&w=0&h=pe0Pqbm7GKHl7cmEjf9Drc7Fp-JwJ6aTywsGfm5eQm4=" alt="stock photo"/>
                        <div className="card-body">
                            <h5 className="card-title"> Example title</h5>
                            <p className="card-text">Home Description</p>
                            <Link to="/leads" className="btn btn-primary m-1">Investigate</Link>
                            <Link to="/leads" className="btn btn-danger m-1">Delete Job</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <img className="card-img-top" src=
                        "https://media.istockphoto.com/photos/beautiful-luxury-home-exterior-at-twilight-picture-id1026205392?k=6&m=1026205392&s=612x612&w=0&h=pe0Pqbm7GKHl7cmEjf9Drc7Fp-JwJ6aTywsGfm5eQm4=" alt="stock photo"/>
                        <div className="card-body">
                            <h5 className="card-title"> Example title</h5>
                            <p className="card-text">Home Description</p>
                            <Link to="/leads" className="btn btn-primary m-1">Investigate</Link>
                            <Link to="/leads" className="btn btn-danger m-1">Delete Job</Link>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}

export default Backend
