import React from 'react'
import move from '../images/movescreenshot.png'

const Projects = () => {
    return (
        <div className='projects-container'>
                    <h2>Projects</h2>
                    <div className='projects'>
            {/* <div className='pr1'> */}
                <img src={move} alt="" />
            {/* </div> */}
            {/* <div className='pr2'> */}
                <img src={move} alt="" />
            {/* </div> */}
            {/* <div className='pr3'>
                <img src={move} alt="" />
            </div>
            <div className='pr4'>
                <img src={move} alt="" />
            </div> */}
            </div>
        </div>
    )
}

export default Projects