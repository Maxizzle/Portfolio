import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

const Nav = () => {
        return (
            <div className="nav">
                <ul>    
                    <div className='about-me'>
                   <Link to="/" component={Header}>About me</Link>
                    </div>
                    <div className='pro'>
                    <p>Projects</p>
                    </div>
                    <div className='contacts'>
                    <p>Contacts</p>
                    </div>
                </ul>
            </div>
        )
}
export default Nav