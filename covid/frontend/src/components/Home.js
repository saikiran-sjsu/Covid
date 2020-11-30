import React, { Component } from "react";
import About from "./About";
import Map from "./Donations";
import Testing from "./Testing";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";


export default class Home extends Component {
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
        document.title = 'Covid | Home'
        var today = new Date(),
        date =  (today.getMonth() + 1) + '/' + today.getDate()  + '/' + (today.getFullYear() - 2000);
        return (
                <div className="Home">
                    <center><h1>Covid - {date}</h1></center>
                    <ul>
                        {items.map(item => (
                            <li key={item.date}>
                                State : {item.state} | Positive Cases: {item.positive} | Negative cases: {item.negative} |
                            </li>
                        ))}
                   </ul>
                </div>
        );
    }

}