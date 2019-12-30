import React, { Component } from 'react'
import profile from '../images/profile.jpg'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>Welcome to my portfolio</h1>
                <img src={profile} alt=''/>
                <p>I'm a junior Web developer located in the greater new york city area</p>
            </div>
        )
    }
}
