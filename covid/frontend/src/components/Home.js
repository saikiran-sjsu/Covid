import React, { Component } from "react";
import About from "./About";
import Map from "./Map";
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
        return (
            <Router>
                <div className="Home">
                    <ul>
                        {items.map(item => (
                            <li key={item.date}>
                                State : {item.state} | Positive Cases: {item.positive} | Negative cases: {item.negative} |
                            </li>
                        ))}
                   </ul>
                </div>
                <Switch>
                    <Route exact path='/'><h1>This is the home page</h1></Route>
                    <Route path='/about' component={About} />
                    <Route path='/map' component={Map} />
                    <Route path='/testing' component={Testing} />
                </Switch>
            </Router>
        );
    }

}