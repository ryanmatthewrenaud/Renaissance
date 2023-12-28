/* 
* Nav bar component for website, used to determine page that is being selected and also allows for going through the website
*/
import mainsite from './assests/styles/mainsite.css'
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

import logo from './assests/images/Logo.png'

export default function NavBar() {
    return (
        <>
            <nav className='navbar'>
                <ul className='navbar-ul'>
                    <li className='navitem navitem-logo'><Link className='navitem' to='/' ><img className="navitem-logo-pic" src={logo} alt="logo" /></Link></li>
                    <li className='navitem navitem-home'><Link className='navitem' to='/'>Home</Link></li>
                    <li className='navitem navitem-about'><Link className='navitem' to='/about'>About Us</Link></li>
                    <li className='navitem navitem-artists'><Link className='navitem' to='/artists'>Artists</Link></li>
                    {/* <li className='navitem navitem-contact'><Link className='navitem' to='/contact'>Contact Us</Link></li> */}
                </ul>
            </nav>
            <Outlet />
        </>
    )
}