import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='footer-container'>
                <div className='footer-menu'>
                    <h2 className='title-sm footer-title'>Cloud Template</h2>
                    <p className='text-md footer-text'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className='social-container'>
                        <i class="fa-brands fa-twitter social-icon"></i>
                        <i class="fa-brands fa-facebook-f social-icon"></i>
                        <i class="fa-brands fa-instagram social-icon"></i>
                    </div>
                </div>
                <div className='footer-menu'>
                    <h2 className='footer-title'>Unseful Links</h2>
                    <a href="#" className='footer-link text-md'>Company</a>
                    <a href="#" className='footer-link text-md'>Pricing</a>
                    <a href="#" className='footer-link text-md'>Leadership</a>
                    <a href="#" className='footer-link text-md'>Blog</a>
                    <a href="#" className='footer-link text-md'>Contact</a>
                </div>
                <div className='footer-menu'>
                    <h2 className='footer-title'>Navigational</h2>
                    <a href="#" className='footer-link text-md'>Join Us</a>
                    <a href="#" className='footer-link text-md'>Blog</a>
                    <a href="#" className='footer-link text-md'>Privacy & Policy</a>
                    <a href="#" className='footer-link text-md'>Terms & Condition</a>
                </div>
                <div className='footer-menu'>
                    <h2 className='footer-title'>Office</h2>
                    <a href="#" className='footer-link text-md'><i class="fa-solid fa-location-dot address-icon"></i> 203 Fake St. Mountain View, San Francisco, California, USA</a>
                    <a href="#" className='footer-link text-md'><i class="fa-solid fa-phone address-icon"></i> 	+2 392 3929 210</a>
                    <a href="#" className='footer-link text-md'><i class="fa-solid fa-envelope address-icon"></i> info@yourdomain.com</a>
                </div>
            </div>
            <div className='copyright text-md'>Copyright ©2023 All rights reserved | This template is made with <i class="fa-solid fa-heart copyright-icon"></i> by Colorlib</div>
        </div>
    </div>
  )
}

export default Footer