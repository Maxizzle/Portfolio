import React from 'react'
import move from '../images/moveapp.png'
import eyesahyt from '../images/project4.png'
import sunglass from '../images/sunglass.png'

const Projects = () => {
    return (
        <div className='projects-container' id='projects'>
            <h2>Projects</h2>

            <div className='sunglass'>
                <a href={'https://github.com/Maxizzle/SunglassHouse'}><img src={sunglass} alt="" /></a>
                <h3>My first project was built after 2 weeks in the immersive program using basic html , css and javascript to create an e-commerce website. <a href={'http://sunglassesw.surge.sh/'}>Live site</a></h3>
            </div>

            <div className='move'>
                <a href={'https://github.com/Maxizzle/MoveApp'}><img src={move} alt="" /></a>
                <h3> For my second project in week six of the immersive, using React.js I Build a mobile app called Move. Design to promote healthy living through working out. <a href={'https://workoutapp.surge.sh/'}>Live site</a></h3>
            </div>
            <div className='eyesahyt'>
                <a href={'https://github.com/Maxizzle/EyeSahyt'}><img src={eyesahyt} alt="" /></a>
                <h3>Fourth project is an e-commerce  built with React and Ruby on Rails using CRUD functionalities.
                It's design to give a platform to local business owners who wants to promote their locations online. <a href={'http://eyesahyt.surge.sh/'}>Live site</a></h3>
            </div>
        </div>
    )
}

export default Projects