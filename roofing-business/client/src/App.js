import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 
import Navbar from "./components/Navbar";
import About from "./views/About";
import Backend from "./views/Backend";
import Entry from "./views/Entry";
import FormPage from "./views/FormPage";
import LeadPage from "./views/LeadPage";
import Products from "./views/Products";

function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route exact path="/">
            <Entry />
          </Route>
          <Route>
            <About />
          </Route>
          <Route>
            <Backend />
          </Route>
          <Route>
            <FormPage />
          </Route>
          <Route>
            <LeadPage />
          </Route>
          <Route>
            <Products />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
