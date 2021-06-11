import React, { Component } from 'react';
import axios from 'axios';

export default class Results extends Component {
    constructor(){
        super();
        this.state={
            database: ""
        }
    }
    async componentDidMount(){
        axios.get('api/results').then(res=>{
            this.setState({
                database: res.data
            })
        })
    }

    render(){
        return(
            <div>

            </div>
        )
    }
}