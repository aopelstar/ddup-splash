import React, { Component } from 'react';
import './slaughter.css';
import banner from '../../images/banner.png';
import slaughter from '../../images/slaughter.png';

export default class Slaughter extends Component {
    constructor(){
        super()
        this.state={

        }
    }


    render(){
        return(
            <div className="slaughter-wrapper">
                <img src = { banner } className="banner" alt="dumb"/>
                <div className="murder-mystery-pages-header">
                    < img src = {slaughter} className="murder-mystery-pages-image " alt ="dumb"/>
                    <div className="murder-myster-pages-desc slaughter-desc" >
                        

                    It is 1998 and times are slammin' in the town of Short Beach. From the 			
                       video arcade to the shopping mall, you are going to always find a good 	     
                         time. To an outsider, living in Short Beach seems like the absolute dream. 
                         But behind all the activities and smiling faces, this small town is full of 
                         liars, cheaters, 
                    abusers, and criminals.
                        <br/>
                        <br/>
                    Short Beach is currently buzzing about a wicked homecoming house party for 
                    Nico Lodian, hosted by Nico Lodian. Everyone is invited to honor the town 
                    celebrity and it has already been coined as the party of the century.

                    Needless to say, the locals are absolutely stoked to kick it with their famous 
                    friend. However, with so many shady individuals and dirty secrets running around 
                    town, shit is primed and ready to hit the fan.
                    </div>
                    <iframe src="https://www.youtube.com/embed/4bIc89Gi12w" 
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                    picture-in-picture" allowfullscreen></iframe>
                        
                    <img src = "https://res.cloudinary.com/http-www-deathdousparties-com/image/upload/v1640151347/character%20tables/SS98_Character_List-01_qcktzd.png" className="character-desc-img" alt = "dumb"/>
                    
                    <div className="sb-hype-video">Watch this video to learn more about Short Beach</div>

                    <iframe width="70%" height="auto" src="https://www.youtube.com/embed/Wpwg15Ct7IQ" 
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                    picture-in-picture" allowfullscreen></iframe>
                    <div className="murder-myster-pages-desc slaughter-desc">

                        Having trouble with your costume?  Are you worried you're going to arrive at the party
                        and be the worst dressed there?  NBD, we've got you covered.  
                        <div className="murder-myster-link slaught-butt">
                           <a href="https://www.pinterest.com/deathdousparties/summer-slaughter-of-98/"> 
                           Click Here For Costume Ideas</a>
                        </div>

                    </div>
                    
                </div>
            </div>
        )
    }
}