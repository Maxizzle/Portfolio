import React from 'react'
import { Link } from 'react-router-dom'
import Projects from './Projects'

const Nav = () => {
        return (
            <div className="nav">
                <ul>    
                    <div className='about-me'>
                    <a href="#about">About</a>
                    </div>

                    <div className='pro'>
                    <a href="#projects">Projects</a>
                    </div>

                    <div className='contacts'>
                    <a href="#contact">Contact</a>
                    </div>
                </ul>
            </div>
        )
}
export default Nav