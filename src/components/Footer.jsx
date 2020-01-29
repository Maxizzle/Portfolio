import React from 'react'
import linkedin from '../images/linkedin.png'
import email from '../images/email.png'
import { Link } from 'react-router-dom'

 const Footer = () => {
   return(
       <div className='footer'>
           <h3>Contacts</h3>
         <a href={"https://www.linkedin.com/in/jeanmax-deslouches-165961192/"}><img src={linkedin} alt="linkedin icon"/></a>
           <img src={email} alt="email icon"/>
       </div>
   )
}
export default Footer