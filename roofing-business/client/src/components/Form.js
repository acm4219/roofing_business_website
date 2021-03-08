import React from 'react'
import { Link } from 'react-router-dom';
 
function Form() {
    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" className="form-control" id="emailInput" />
                    <small className="form-text text-muted">Please enter your email</small>
                    <label for="phone" className="mt-1">Phone number</label>
                    <input type="tel" className="form-control" />
                    <small className="form-text text-muted">Please enter your phone number</small>
                    <label for="address" className="mt-1">Home Address</label>
                    <input type="text" className="form-control"/>
                    <small className="form-text text-muted">Please enter your home address</small>
                    <label for="insurance" className="mt-1">Insurance Provider</label>
                    <input type="text" className="form-control"/>
                    <small className="form-text text-muted">Please enter your Insurance Provider</small>
                </div>
                <div className="form-group">
                    <label for="services">Please select your service</label>
                    <select className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="additionalinfo">Any additional information?</label>
                    <textarea className="form-control" rows="3"></textarea>
                </div>
                <Link to="/backend" className="btn btn-lg btn-primary">Submit</Link>
            </form>
        </div>
    )
}

export default Form