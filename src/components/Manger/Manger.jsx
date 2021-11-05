import React, { Component } from 'react';
import './manger.css';
import banner from '../../images/banner.png';
import manger from '../../images/manger.png';


export default class Manger extends Component {
    constructor(){
        super()
        this.state={

        }
    }


    render(){
        return(
            <div className="splash-wrapper">
                <img src = { banner } className="banner" alt="dumb"/>
                <div className="murder-mystery-pages-header">
                    < img src = {manger} className="murder-mystery-pages-image" alt ="dumb"/>
                    <div className="murder-myster-pages-desc">
                    The Virgin Mary is about to give birth at any moment. Star has called together 
                    all those close to Mary to celebrate the miraculous birth. While most of those 
                    invited are attending with good intentions, there are some that have some unfinished 
                    business to take care of. With all the heated issues coming through town, Bethlehem 
                    is going to have a not-so-silent night.
                    </div>
                    <iframe width="90%" height="auto" src="https://www.youtube.com/embed/Y3nXG1mf3xA" 
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                    picture-in-picture" allowfullscreen></iframe>
                    <div className="murder-myster-pages-desc">
                        Having trouble with your costume?  Are you worried you're going to arrive at the party
                        and be the worst dressed there?  NBD, we've got you covered.  
                        <div className="murder-myster-link">
                           <a href="https://www.pinterest.com/deathdousparties/murder-at-the-manger/nativity-costume-inspiration/"> 
                           Click Here For Costume Ideas</a>
                        </div>

                    </div>
                    <table>
                        <tr>
                            <th>
                                Character
                            </th>
                            <th>
                                Description
                            </th>
                        </tr>
                        <tr>
                            <td>Enrique</td>
                            <td>Enrique is a champion gladiator known for his brutal strength and even stronger charm.
                                Although he lacks a bit in brains, he makes up for it in brawn
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>

                    </table>
                </div>
            </div>
        )
    }
}