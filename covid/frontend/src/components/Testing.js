import React, { Component } from "react";
import { render } from "react-dom";

export default class Testing extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        document.title = 'Covid | Testing'
        return(
            <div>
                <br></br>
                <h1>Test for Coronavirus</h1>
                <br></br>
                <h3> Below are wesbites to find an area near you to get tested</h3>
                <br></br>
                <a class="btn btn-link" href="https://www.hhs.gov/coronavirus/community-based-testing-sites/index.html" target="_blank">Health and Human Services</a>
                <br></br>
                <a class="btn btn-link" href="https://my.castlighthealth.com/corona-virus-testing-sites/" target="_blank">Castlight</a>

                



            </div>


                
        
        );

        
        
    }
}
