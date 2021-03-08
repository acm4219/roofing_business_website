import React from 'react'
import { Link } from 'react-router-dom';

function LeadPage() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-header"><h5>Client Name</h5></div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">John Honderson</li>
                            <li className="list-group-item">123 Mockingbird Lane, Hopkins, Mn</li>
                            <li className="list-group-item">1 (777) 614-9938</li>
                            <li className="list-group-item">email@email.com</li>
                            <li className="list-group-item">Insurance person</li>
                            <li className="list-group-item">7.5 mi</li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-7">
                    <img src=
                        "https://media.istockphoto.com/photos/beautiful-luxury-home-exterior-at-twilight-picture-id1026205392?k=6&m=1026205392&s=612x612&w=0&h=pe0Pqbm7GKHl7cmEjf9Drc7Fp-JwJ6aTywsGfm5eQm4=" alt="stock photo" />
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5>Description of the job</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit auctor ante vel bibendum.</p>
                            <Link to="/backend" className="btn btn-primary m-1">Follow Up</Link>
                            <Link to="/backend" className="btn btn-success m-1">Job Completed</Link>
                            <Link to="/backend" className="btn btn-danger m-1">Delete Job</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeadPage;