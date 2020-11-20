import React, { Component } from "react";
import { render } from "react-dom";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,

        }
    }

    componentDidMount() {

        fetch('https://api.covidtracking.com/v1/states/current.json')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });

    }

    render() {

        var { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>;
        }
        else {
            return (
                <div className="App">
                   <ul>
                      {items.map(item => (
                        <li key = {item.date}>
                            State : {item.state} | Positive Cases: {item.positive} | Negative cases: {item.negative} | 
                        </li>
                      ))}; 
                   </ul>


                </div>
            );
        }

    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);