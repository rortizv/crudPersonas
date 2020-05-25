import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import PersonasList from "./components/personas-list.component";
import EditPersona from "./components/edit-personas.component";
import CreatePersona from "./components/create-persona.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={PersonasList} />
      <Route path="/edit/:id" component={EditPersona} />
      <Route path="/create" component={CreatePersona} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
