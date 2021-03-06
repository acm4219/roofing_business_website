import React from 'react'

function AboutSection() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                  <div className="card">
                     <img src="https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg" alt="placeholder image" className="card-img" />
                     <div className="card-body">Company Name</div>
                  </div>
                </div>
                <div className="col-sm-8">
                    <div className="jumbotron">
                        <h1 className="display-4">Our Past Jobs</h1>
                        <hr className="my-4" />
                        <p className="lead">This is where the carousel is going to be at</p>
                    </div>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-sm d-flex flex-row-reverse">
                    <div className="card">
                        <div className="card-body">
                            <h1>About us</h1>
                            <hr />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit auctor ante vel bibendum. Cras neque felis, lacinia tempus congue eu, euismod sit amet erat. Aenean et molestie tortor. In interdum scelerisque erat, iaculis ultrices turpis euismod ut. Vestibulum dui erat, vulputate et felis sit amet, faucibus fermentum elit. Ut sagittis sit amet lacus posuere condimentum. In convallis viverra urna. Praesent euismod sollicitudin leo in aliquam.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
