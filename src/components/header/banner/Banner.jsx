import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
      <div className='benner__img-container'>
        <img src="./assets/images/undraw_co-working_825n.svg" alt="Banner_Image" className='banner__img'/>
      </div>
      <div className='benner__text-conntainer'>
        <p className='text-md banner__text'>CLOUD TEMPLATE</p>
        <p className='title-lg banner__title'>Cloud,</p>
        <p className='title-lg banner__title'>Management,</p>
        <p className='title-lg banner__title'>Template</p>
        <p className='text-md banner__text'>Far far away, behind the word mountains, far</p>
        <p className='text-md banner__text'>from the countries Vokalia and Consonantia,</p>
        <p className='text-md banner__text'>there live the blind texts.</p>
        <button className='btn-green-lg banner__btn'>Get in tuch</button>
      </div>
    </div>
  )
}

export default Banner