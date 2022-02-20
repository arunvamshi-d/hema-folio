import React from 'react'
import SocialContact from '../../common/social-contact/index'
import './about.css'
function About() {
  return (
    <div className='about'>
        <div className='about-top'>
            <div className='about-info'>
                Hello there,I am 
                <br/><span className='info-name'>Hema Gopisetty</span>.
                <br/> Certified Full Stack Developer
            </div>
            <div className='about-photo'>
                <img src={require('../../../assets/coding.png')} className="picture" alt=""/>
            </div>
        </div>
        <SocialContact/>
    </div>
  )
}

export default About
