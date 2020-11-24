import React, { Component } from "react";
import { render } from "react-dom";
import Home from './Home';
// import * as ReactBoostrap from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.css';
// import Navbar from 'react-bootstrap/Navbar'
import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Dontations from "./Donations";
import Testing from "./Testing";
import About from "./About";



export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                </div>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About} />
                <Route path='/donations' component={Dontations} />
                <Route path='/testing' component={Testing} />
            </Router>

        );
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);