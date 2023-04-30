import React from 'react';
import './Company.css';

function Company() {
  return (
    <div className='company container'>
        <div className='company-img-container'>
            <img src="./assets/images/partner-1.png.webp" alt="Microsoft" className='trans company-img'/>
        </div>
        <div className='company-img-container'>
            <img src="./assets/images/partner-2.png.webp" alt="Microsoft" className='trans company-img'/>
        </div>
        <div className='company-img-container'>
            <img src="./assets/images/partner-3.png.webp" alt="Microsoft" className='trans company-img'/>
        </div>
        <div className='company-img-container'>
            <img src="./assets/images/partner-4.png.webp" alt="Microsoft" className='trans company-img'/>
        </div>
        <div className='company-img-container'>
            <img src="./assets/images/partner-5.png.webp" alt="Microsoft" className='trans company-img'/>
        </div>
    </div>
  )
}

export default Company