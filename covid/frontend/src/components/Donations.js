import React, { Component } from "react";
import { render } from "react-dom";

export default class Donations extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        document.title = 'Covid | Map'

        return <h1>This is the Donations page</h1>;
    }
}