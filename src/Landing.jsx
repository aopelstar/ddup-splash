import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import death from './images/box.png';
import banner from './images/banner.png';
import worker from './images/construction.png';


export default class Landing extends Component {
  constructor(){
    super()
    this.state={
      name:"",
      email:"",
      validation: true,
      invalid: true
    }
  }

  handleChange(key, val){
    

      this.setState({
        [key]: val
      })
    
  }

  clicked(){
    this.setState({
      validation: !this.state.validation
    })
  }

  submit(){
    let mail = this.state.email

    if(mail.includes("@" && ".") && this.state.validation===true){
      
      let body = {
        name: this.state.name,
        email: this.state.email
      }
      let promise = axios.post('/api/getemail', body)
        promise.then( () => {
            window.location.assign('/#/thanks');
            
        })
    }

    else {
      this.setState({
        invalid: false
      })
    }
  }


  render(){
    return(
      <div className="splash-wrapper">
          <img src = { banner } className="banner" alt="dumb"/>
          <img src ={ death } className="death-image" alt="dumb"/>
        <div className="splash-elements-wrapper">
          <div className="text-container">
            <div className="name-container">
              <div className="name">Name:</div>
              <div className="name-text"><input className="actual-input" type="text" onChange={(e) => this.handleChange("name", e.target.value)}/></div>

            </div>
            <div className="email-container">
              <div className="email">Email:</div>
              <div className="email-text"><input type="text" className={this.state.invalid?"actual-input":"actual-input actual-input-false"} onChange={(e) => this.handleChange("email", e.target.value)}/>
              </div>
              </div>
              <div className={this.state.invalid?"whatevs":"whatevs whatevs-false"}>You trying to pull a fast one? Let's get a real e-mail, Harambe.</div>

              <div className="submit-container">
                <div className="radio-container">
                  <div className="checkbox-container">

                    <input type="checkbox" className="actual-radio" onClick={ () => this.clicked() } checked={this.state.validation?"checked":""}/>
                    <div type="actual-checkbox"></div>
                  </div>
                  <div className={this.state.validation?"radio-text":"radio-text radio-text-false"}>Hell ya, send me emails regarding Death Do Us Parties</div>
                </div>
                <button className="submit-button" onClick={ () => this.submit()}> 
                  SUBMIT
                </button>

            </div>
          </div>
            <div className="construction-img">
              <img src={worker} className="worker-img" alt="dumb"/>
            </div>
        </div>
      </div>
    )
}
}