import React from "react";
function Navbar() {
    return (
        <div className="w3-bar w3-blue">
            <a className="w3-bar-item w3-button" href="/">
                Home
            </a>
            <div style={{ float: "right" }}>
                <a className="w3-bar-item w3-button" href="/about">
                    About
                </a>
                <a className="w3-bar-item w3-button">
                    Register
                </a>
            </div>
        </div>
    );
}

export default Navbar;
