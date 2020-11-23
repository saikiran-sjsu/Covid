import React, { Component } from "react";
import { render } from "react-dom";

export default class About extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        document.title = 'Covid | About'

        return <h1>This is the about page</h1>;
    }
}