import React from 'react';
import './SoftwareBox.css';

function SoftwareBox() {
  return (
    <>
        <div className='software-box'>
            <div className='software-icon-box'>
                <i class="fa-solid fa-database software-icon"></i>
            </div>
            <div className='software-text-box'>
                <h3 className='title-sm software-box-title'>Resposive Design</h3>
                <p className='text-md software-text'>Even the all-powerful Pointing has no control about the blind texts</p>
            </div>
        </div>
    </>
  )
}

export default SoftwareBox