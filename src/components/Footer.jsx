import React from 'react'
import linkedin from '../images/linkedin.png'
import email from '../images/email.png'

 const Footer = () => {
   return(
       <div className='footer'>
           <h3>Contacts</h3>
           <img src={linkedin} alt="linkedin icon"/>
           <img src={email} alt="email icon"/>
       </div>
   )
}
export default Footer