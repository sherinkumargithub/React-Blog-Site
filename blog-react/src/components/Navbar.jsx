import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebook, FaDribbble, FaTwitter, FaBars, FaXmark } from "react-icons/fa6";
import { useState } from 'react';
import Modal from './Modal';

const Navbar = () => {

    //  using useState for the menu icon fabar
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState()

    const toggleMenu = () =>{
      setIsMenuOpen(! isMenuOpen)
    }
    // const toggleMenu = () => {
    //   setIsMenuOpen(prevState => !prevState);
    // };
    
     // navItems - navigating pages from the navbar
     const navItems = [
      {path: "/", link: "Home"},
      {path: "/services", link: "Services"},
      {path: "/about", link: "About"},
      {path: "/blogs", link: "Blogs"},
      {path: "/contact", link: "Contact"},
    ]

    // modal details
    const openModal = () => {
      setIsModalOpen(true)
    }

    const closeModal =() =>{
      setIsModalOpen(false)
    }

  return (
    <header className='bg-[#1D3557] text-[#F1FAEE] fixed top-0 left-0 right-0'>
      <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
        <a href="/" className='text-xl font-bold text-[#F1FAEE]'>Blog<span className='text-[#E63946]'>SK</span></a>
        {/* render nav items */}
        <ul className='md:flex gap-12 text-lg hidden'>
          {
            navItems.map(({path, link}) => ( 
            <li key={path} className='text-[#F1FAEE]'>
              {/* here we use NavLink insted of Link from react router */}
              <NavLink to={path}>{link}</NavLink>
            </li>
            ))
          }
        </ul>

        {/* menu icons - get icons from react icons - npm install react-icons --save -- import the icon name*/}
        <div className="text-[#F1FAEE] lg:flex gap-4 items-center hidden">
          <a href="/" className='hover:text-[#E63946]'><FaFacebook /></a>
          <a href="/" className='hover:text-[#E63946]'><FaDribbble /></a>
          <a href="/" className='hover:text-[#E63946]'><FaTwitter /></a>
          <button onClick={openModal} className='bg-[#E63946] px-6 py-2 rounded font-medium hover:bg-[#F1FAEE] hover:text-[#E63946] transition duration-200 ease-in'>Log in</button>
        </div>
        {/* modal */}
        <Modal isOpen = {isModalOpen} onClose = {closeModal}/>
        {/* now retrive the data to login */}

        {/* mobile menu btn - it display only in the mobile screen */}
        <div className="md:hidden">
          <button 
            onClick= {toggleMenu}
            className='cursor-pointer'>
              {
                isMenuOpen ? <FaXmark className='w-5 h-5'/> : <FaBars className= "w-5 h-5"/> 
              }
          </button>
        </div>
      </nav>

      {/* menu items for only mobile */}
      <div className="">
        {/* make this style inside {} */}
      <ul className= {`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-[#F1FAEE] text-black ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-in-out" : "hidden"}`}>
          {
            navItems.map(({path, link}) => ( 
            <li className="text-black " key={path}>
              {/* here to make border in the list,/* border-b border-gray-300 pb-2 */}
              {/* here we use NavLink insted of Link from react router */}
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "active"
                    : ""
                }
                onClick={toggleMenu} 
                to={path}
              >{link}</NavLink>
            </li>
            ))
          }
        </ul>
      </div>
    </header>
  )
} 

export default Navbar