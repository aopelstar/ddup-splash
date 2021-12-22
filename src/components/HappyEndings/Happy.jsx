import React, { Component } from 'react';
import './happy.css';
import banner from '../../images/banner.png';
import happy from '../../images/happy.png';

export default class Happy extends Component {
    constructor(){
        super()
        this.state={

        }
    }


    render(){
        return(
            <div className="happy-wrapper">
                <img src = { banner } className="banner" alt="dumb"/>
                <div className="murder-mystery-pages-header">
                    < img src = {happy} className="murder-mystery-pages-image" alt ="dumb"/>
                </div>
            </div>
        )
    }
}