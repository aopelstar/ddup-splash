import React, { Component } from 'react';
import './moorehead.css';
import banner from '../../images/banner.png';
import head from '../../images/moorehead.png'


export default class Moorehead extends Component {
    constructor(){
        super()
        this.state={

        }
    }


    render(){
        return(
            <div className="head-wrapper">
<img src = { banner } className="banner" alt="dumb"/>
<div className="murder-mystery-pages-header">
                    < img src = {head} className="murder-mystery-pages-image" alt ="dumb"/>
                    <div className="murder-myster-pages-desc">
                    Located in the Colorado territory, Moorhead Mount is your typical old west town.  
                    You got your bar, your guns, your hangings, your booze, your injuns and don't 
                    worry, there are plenty of prostitutes to go around.
                    <br/>
                    <br/>
                    1864 looks to be a promising time for Moorhead Mount with the construction 
                    of the new clock tower.  Sheriff Gino Cents has decided to put together a 
                    party to celebrate the new clock and has invited some of the town's finest.
                    Sheriff Cents hopes the townsfolk can look past their differences for one 
                    night and get together to celebrate what they have achieved within the community. 
                     However, that is a tough ask considering all the recent events that have happened 
                     throughout the town.
                    </div>
                    <iframe width="70%" height="auto" src="https://www.youtube.com/embed/_csaWP6N52E" 
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                    picture-in-picture" allowfullscreen></iframe>
                        
                    <img src = "https://res.cloudinary.com/http-www-deathdousparties-com/image/upload/v1640151340/character%20tables/MMM_Character_List-01_kizutd.png" className="character-desc-img" alt = "dumb"/>
                    
                        
                    <div className="murder-myster-pages-desc">
                        Having trouble with your costume?  Are you worried you're going to arrive at the party
                        and be the worst dressed there?  NBD, we've got you covered.  
                        <div className="murder-myster-link">
                           <a href="https://www.pinterest.com/deathdousparties/moorhead-mount-murder-murder-mystery-party/western-costume-inspirations/"> 
                           Click Here For Costume Ideas</a>
                        </div>

                    </div>
                    
                </div>
            </div>
        )
    }
}