import React, { Component } from "react";
import { render } from "react-dom";
import Home from './Home';
// import * as ReactBoostrap from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.css';
// import Navbar from 'react-bootstrap/Navbar'
import Navbar from "./Navbar";

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
           
                
            <div>
                <Navbar/>
                <Home />
            </div>
            
        );
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);