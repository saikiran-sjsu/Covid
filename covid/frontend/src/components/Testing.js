import React, { Component } from "react";
import { render } from "react-dom";

export default class Testing extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        document.title = 'Covid |Testing'
        return(
        <h1>This is the testing pages</h1>);
        
    }
}