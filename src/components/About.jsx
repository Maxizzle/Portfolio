import React from 'react'
import html from '../images/icons-html-5.png'
import css from '../images/icons-css3-48.png'
import js from '../images/icons-javascript-48.png'
import react from '../images/icons-react-48.png'
import postgres from '../images/icons-postgresql-48.png'
import ruby from '../images/icons-ruby-48.png'
import git from '../images/icons-git-48.png'
import github from '../images/icons-github-48.png'
import node from '../images/icons-nodejs-48.png'


const About = () => {
    return (
        <div className='about'>
            
            <div className='icons'>
                <img src={html} alt="" />
                <p>HTML</p>
                <img src={css} alt="" />
                <p>CSS</p>
                <img src={js} alt="" />
                <p>JavaScript</p>
                <img src={react} alt="" />
                <p>React.js</p>
                <img src={postgres} alt="" />
                <p>Express.js</p>
                <img src={ruby} alt="" />
                <p>Ruby</p>
                <img src={node} alt="" />
                <p>Node.js</p>
                <img src={git} alt="" />
                <p>Git</p>
                <img src={github} alt="" />
                <p>Github</p>
            </div>
        </div>
    )
}


export default About