import { Component } from "react";

import "./Header.scss"

import Soon from '../images/soon.png'

class Header extends Component{
    render(){
        return(
            <div className="header container">
                <h2>devfinder</h2>
                <div className="left">
                    <p>LIGHT</p>
                    <div className="photo"><img src={Soon} alt="soon" /></div>
                </div>
            </div>
        )
    }
}

export default Header