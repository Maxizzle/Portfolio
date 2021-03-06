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
        <div className='about' id='about'>
            <h4>I am a Software engineer with a background in retail and management. Retail has
taught me the value of customer service and management taught me how to
connect with people and meet deadlines in an organized fashion. That is why I
became a developer, I believe creating and developing applications that help
solve the customer's needs while enhancing their experience altogether is
fundamental and crucial to promoting growth . These traits have become almost
a default setting in my programming style.</h4>

            <h2>Skills and Tools</h2>
            <div className='icons'>
                
                <p>HTML</p>
                <img src={html} alt="" />
                
                <p>CSS</p>
                <img src={css} alt="" />
                
                <p>JavaScript</p>
                <img src={js} alt="" />
                
                <p>React.js</p>
                <img src={react} alt="" />
                

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