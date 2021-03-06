import React from 'react'
import Form from '../components/Form'

 function FormPage() {
    return (
        <div>
            <div className="card">
                <div className="card-body text-center">
                    <h1>Please tell us what services you need</h1>
                </div>
            </div>
            <br />
            <Form />
        </div>
    )
}

export default FormPage;
