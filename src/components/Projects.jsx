import React from 'react'
import move from '../images/moveapp.png'
import eyesahyt from '../images/project4.png'
import sunglass from '../images/sunglass.png'

const Projects = () => {
    return (
        <div className='projects-container' id='projects'>
            <h1>Projects</h1>

            <div className='sunglass'>
                <img src={sunglass} alt="" />
                <h3>My first project was built after 2 weeks in the immersive program using basic html , css and javascript to create an e-commerce website. 
                    <button><a href={'http://sunglassesw.surge.sh/'}>Live site</a></button></h3>
                    <button><a href={'https://github.com/Maxizzle/SunglassHouse'}>Github</a></button>
            </div>

            <div className='move'>
                <img src={move} alt="" />
                <h3> For my second project in week six of the immersive, using React.js I Build a mobile app called Move. Design to promote healthy living through working out.
                     <button><a href={'https://workoutapp.surge.sh/'}>Live site</a></button></h3>
                     <button><a href={'https://github.com/Maxizzle/MoveApp'}>Github</a></button>
            </div>
            <div className='eyesahyt'>
                <img src={eyesahyt} alt="" />
                <h3>My third project is an e-commerce  built with React and Ruby on Rails using CRUD functionalities.
                It's design to give a platform to local business owners who wants to promote their locations online. <button><a href={'http://eyesahyt.surge.sh/'}>Live site</a></button></h3>
                <button><a href={'https://github.com/Maxizzle/EyeSahyt'}>Github</a></button>
            </div>
        </div>
    )
}

export default Projects