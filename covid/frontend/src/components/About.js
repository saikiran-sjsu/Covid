import React, { Component } from "react";
import { render } from "react-dom";




export default class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        document.title = 'Covid | About'
        return(

            <div class='About'>
                <br></br>
                
                <body>
                <h1>Reason of Creation</h1>
                <br></br>

                  We want people in the United States to be informed about COVID-19, also known as the Coronavirus.
                  We hope people will use our website to get the consistent daily updates of cases within each state and to 
                  be aware of the severity of this virus. ---add more here if we want---
                </body>
                <br></br>
                <br></br>
                <br></br>


                <body> 
                <h1>Creators</h1>
                <br></br>

                    <h3>Elias F.</h3>
                    
                    I am a Senior at San Jose State Univeristy studying Software Engineering.
                    My hobby is playing basketball and spending time with family. I hope this 
                    website will be beneficial to all who need to be informed. 
                    <br></br>
                    <h3>Saikiran N.</h3>

                    --- input whatever ----
                    <br></br>
                    <h3>Renad M.</h3>

                     --- input whatever -----
                </body>

                
          </div>

            

        );
    }
}