import React from 'react'
import html from '../images/icons-html-5-96.png'
import css from '../images/icons-css3-96.png'
import js from '../images/icons-javascript-96.png'
import react from '../images/icons-react-native-96.png'
import postgres from '../images/icons-postgresql-96.png'
import ruby from '../images/icons-ruby-96.png'
import git from '../images/icons-git-96.png'
import github from '../images/icons-github-96.png'
import node from '../images/icons-nodejs-96.png'



const About = () => {
    return (
        <div className='about'>
            <h2>Skills and Tools</h2>
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