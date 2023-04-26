import React from 'react'
import './Footer.scss'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import { GrGooglePlus } from 'react-icons/gr'

const Footer = () => {
    return (
        <div>
            <div className="foot-up">
                <h2 className='head'>LOGO NAME with logo</h2>
                <p className='foot-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aut laborum cupiditate id corporis recusandae. Optio distinctio assumenda exercitationem eaque nisi, voluptatibus voluptate aut repudiandae veritatis deleniti reiciendis perferendis blanditiis.</p>
                <h4>Further details: <a href="">xtasy.tech</a></h4>
                <h4 className='contact-num'>Contact: 1234567890, 1234567890</h4>
                <div className="footer-logos">
                    <div className='footer-logo'><FaFacebookF /></div>
                    <div className='footer-logo insta'><AiOutlineInstagram /></div>
                    <div className='footer-logo'><BsTwitter /></div>
                    <div className='footer-logo'><GrGooglePlus /></div>
                </div>
            </div>
            <div className="foot-down">Copyright @2023 <a href=""> logo_name</a></div>
        </div>
    )
}

export default Footer
