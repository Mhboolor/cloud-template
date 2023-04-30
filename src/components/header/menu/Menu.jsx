import React, { useState } from 'react'
import './Menu.css';

function Menu() {

  let [toggle , setToggle] = useState(false)

  let toggleMenu = () => {
    setToggle(toggle = !toggle)
  }


  return (
    <div className={`header__top`}>
        <div className='logo-container'>
            <a href="#" className='logo text-lg'>Cloud Template</a>
        </div>
        <nav className='navbar'>
            <a href="#" className='menu-toggle text-md' onClick={toggleMenu}>MENU</a>
            <ul className={`menu ${toggle && 'active'}`}>
                <li className='menu__item'><a href="#" className='menu__link text-md'>Home</a></li>
                <li className='menu__item'><a href="#" className='menu__link text-md'>Company</a></li>
                <li className='menu__item'><a href="#" className='menu__link text-md'>Pricing</a></li>
                <li className='menu__item'><a href="#" className='menu__link text-md'>Leadership</a></li>
                <li className='menu__item'><a href="#" className='menu__link text-md'>Blog</a></li>
                <li className='menu__item'><a href="#" className='menu__link text-md'>Contact</a></li>
                <button className='btn-green-md menu-btn trans'>Get Started</button>
            </ul>
        </nav>
    </div>
  )
}

export default Menu