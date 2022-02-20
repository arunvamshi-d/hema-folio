import React from 'react'
import Separator from '../../common/separator'
import SocialContact from '../../common/social-contact'
import './contact.css'
function Contact() {
  return (
    <div className='contact'>
        <Separator/>
        <label className='section-title'>Contact</label>
        <div className='contact-container'>
            <div className='contact-left'>
                <p>
                    Want to get in touch? Contact me on any of the platform
                
                </p>
                {/* <SocialContact/> */}
            <div>
                <div className='contact-container'>
                    <div className='contact-phone' ><b>Phone</b> : 7032385736</div>
                </div>
                <div className='contact-container'>
                    <div><b>Mail</b> : hemagopisetty2@gmail.com</div>
                </div>
            </div>
            </div>
                <div className='download'>
                    <a  className='download' href="https://drive.google.com/file/d/1rNlqdYp7vO-vspAz_CTTXrfgPWW3ngCy/view?usp=sharing" target="_blank" >
                        My Resume </a>
                </div>
        </div>
    </div>
  )
}

export default Contact