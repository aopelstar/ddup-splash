import React, { Component } from 'react';
import './moorehead.css';
import banner from '../../images/banner.png';


export default class Moorehead extends Component {
    constructor(){
        super()
        this.state={

        }
    }


    render(){
        return(
            <div className="splash-wrapper">
<img src = { banner } className="banner" alt="dumb"/>
            </div>
        )
    }
}