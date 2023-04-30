import React, { useState } from 'react'
import './Header.css'
import Menu from './menu/Menu'
import Banner from './banner/Banner'

function Header() {

  let [width , setWidth] = useState(null)

  window.addEventListener("resize" , () => {
    setWidth(width = window.screen.width)
  })

  return (
    <header className='header'>
        <div className={width > 976 ? 'container' : 'header__container'}>
            <Menu/>
            <Banner/>
        </div>
    </header>
  )
}

export default Header