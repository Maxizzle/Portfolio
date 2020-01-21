import React, { Component } from 'react'
import profilepic from '../images/profilePic.png'
import hero from '../images/Portfolio_hero.png'


export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>Jeanmax Deslouches</h1>
                {/* <img src={hero} alt=''/> */}

                <img src={profilepic} alt=''/>
                {/* <p>I'm a junior Web developer located in the greater new york city area. Retail manager turned software developer. My background  in retail and management has taught me the values of communication and meeting deadlines in orgaanized fashion and how to motivate the people around ne to achieve the same. These traits have became almost a default setting in my programming style.</p> */}
               
                
            </div>
        )
    }
}
