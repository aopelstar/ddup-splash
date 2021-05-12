import React, { Component } from 'react';
import './App.css';
import banner from './images/banner.png';
import death from './images/thanks.png'

export default class Thanks extends Component {
    render(){

        return(
            <div className="splash-wrapper">
          <img src = { banner } className="banner" alt="dumb"/>
          <img src ={ death } className="death-image" alt="dumb"/>
        
      </div>
        )
    }

}