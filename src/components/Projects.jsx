import React from 'react'
import move from '../images/moveapp.png'
import eyesahyt from '../images/project4.png'
import sunglass from '../images/sunglass.png'

const Projects = () => {
    return (
        <div className='projects-container'>
                    <h2>Projects</h2>
                    
                    <div className='sunglass'>
                    <img src={sunglass} alt="" />
                <h3>My first project was built after 2 weeks in the immersive program using basic html , css and javascript to create an e-commerce website.  </h3>
            </div>

            <div className='move'>
                <img src={move} alt="" />
                <h3> For my second project in week six of the immersive, using React.js I Build a mobile app called Move. Design to promote healthy living through working out </h3>
            </div>
                    <div className='eyesahyt'>
                <img src={eyesahyt} alt="" />
                <h3>Fourth project is an e-commerce  built with React and Ruby on Rails using CRUD functionalities.
                It's design to give a platform to local business owners who wants to promote their locations online </h3>
            </div>
          

            <div className='projects'>
            </div>
        </div>
    )
}

export default Projects