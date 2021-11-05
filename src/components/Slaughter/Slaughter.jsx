import React, { Component } from 'react';
import './slaughter.css';
import banner from '../../images/banner.png';

export default class Slaughter extends Component {
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