import React, { Component } from "react";
import About from "./About";
import Map from "./Donate";
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
        document.title = 'Covid | Home'
        var CurrentDate = new Date().toLocaleDateString();
        var CurrentTime = new Date().toLocaleTimeString('en-US', { hour12: false, 
            hour: "numeric", 
            minute: "numeric",
            second:"numeric"
        });

        //for(var i = item.positive; i < items.length; i++){
           // {items.map(item => (
               // totalPosCases += {item.positive}
            //))}
            
       // }       
        return (
            <div className="Home">
                <center>
                    <h1>Covid Cases</h1>
                    <h5>{CurrentDate}-{CurrentTime}</h5>
                   
                </center>
                <center> <table border="3px">
                    <th width = "5%">State</th>
                    <th width="5%">Positive</th>
                    <th width="5%">Negative</th>
                    <th width = "5%">Recovered</th>
                    <th width="5%">Last Updated</th>
                    {items.map(item => (

                        <tr key={item.date}>
                            <td>{item.state}</td>
                            <td>{item.positive}</td>
                            <td>{item.negative}</td>
                            <td>{item.recovered}</td>
                            <td>{item.lastUpdateEt}</td>
                        </tr>

                    ))}


                </table>
                </center>



            </div>
        );
    }

}