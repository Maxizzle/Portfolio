import React from 'react'
import linkedin from '../images/linkedin.png'
import email from '../images/email.png'

 const Footer = () => {
   return(
    <div className="footer" id='contact'>
    <h1>Contact me</h1>
    <div className="contact-links">
        <a href="https://www.linkedin.com/in/jeanmax-deslouches-165961192/">
        <img src={linkedin} alt="linkedin icon"/>
        </a> 
        <a href="mailto:jmaxdes@gmail.com">
        <img src={email} alt="email icon"/>
        
        </a>
    </div>
</div>
   )
}
export default Footer
