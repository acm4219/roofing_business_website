import React from 'react'
import { Container} from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Entry from "./views/Entry/Entry";
import Requests from "./views/Request";
import Form from "./components/Form/Form";
import Auth from "./components/Auth/Auth";
import Footer from "./components/Footer/Footer";

function App() {
    
    return (
        <Router>
         <Container maxWidth="lg">
             <Navbar />
                
                    <Container>
                        <Switch>
                            <Route path="/" exact component={Entry} />
                            <Route path="/requestform" exact component={Form} />                            
                            <Route path="/auth" exact component={Auth} />
                            <Route path="/requests" exact component={Requests} />
                        </Switch>
                    </Container>
               
             <Footer />
         </Container> 
        <br />
        </Router>

        
    )
}

export default App
