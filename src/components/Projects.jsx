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
                <p>My first project was built after 2 weeks in the immersive program using basic html , css and javascript to create an e-commerce website.  </p>
            </div>
            <div className='move'>
                <img src={move} alt="" />
                <p> For my second project in week six of the immersive, using React.js I Build a mobile app called Move. Design to promote healthy living through working out </p>
            </div>
                    <div className='eyesahyt'>
                <img src={eyesahyt} alt="" />
                <p>Fourth project is an e-commerce  built with React and Ruby on Rails using CRUD functionalities.
                It's design to give a platform to local business owners who wants to promote their locations online </p>
            </div>
          

            
            
            {/* <div className='pr3'>
                <img src={move} alt="" />
            </div>
            <div className='pr4'>
                <img src={move} alt="" />
            </div> */}
            <div className='projects'>
            </div>
        </div>
    )
}

export default Projects