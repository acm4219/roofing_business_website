import React from 'react'
import {Link} from "react-router-dom"

function ContactCard() {
    return (
        <div>      
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit auctor ante vel bibendum.</p>
                <Link className="btn btn-primary mt-2" to ="/form">Contact us!</Link>                     
        </div>
    )
}

export default ContactCard;