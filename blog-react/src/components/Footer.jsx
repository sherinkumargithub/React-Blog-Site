import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6"

const Footer = () => {
  return (
    <div className='bgblue'>
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4">
            <div className="grid mb-8 lg:grid-cols-6 ">
                <div className="grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4">
                    {/* category-1 */}
                    <div className="">
                        <p className='font-medium tracking-wide text-gray-300'>Category</p>
                        <ul className='mt-2 space-y-2'>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300  hover:text-[#E63946]'>News</a>
                            </li>

                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300  hover:text-[#E63946]'>World</a>
                            </li>

                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300  hover:text-[#E63946]'>Games</a>
                            </li>

                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300  hover:text-[#E63946]'>References</a>
                            </li>
                        </ul>
                    </div>
                    {/* category - 2 */}
                    <div className="">
                        <p className='font-medium tracking-wide text-gray-300'>Apples</p>
                        <ul className='mt-2 space-y-2'>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300  hover:text-[#E63946]'>Web</a>
                            </li>

                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300  hover:text-[#E63946]'>E-Commerce</a>
                            </li>

                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300  hover:text-[#E63946]'>Business</a>
                            </li>

                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300  hover:text-[#E63946]'>Entertainment</a>
                            </li>
                        </ul>
                    </div>
                   {/*category - 3  */}
                    <div className="">
                        <p className='font-medium tracking-wide text-gray-300'>Cherry</p>
                        <ul className='mt-2 space-y-2'>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300  hover:text-[#E63946]'>Media</a>
                            </li>

                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300  hover:text-[#E63946]'>Brochure</a>
                            </li>

                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300  hover:text-[#E63946]'>Nonprofit</a>
                            </li>

                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300  hover:text-[#E63946]'>Education</a>
                            </li>
                        </ul>
                    </div>

                    {/* category - 4 */}
                    <div className="">
                        <p className='font-medium tracking-wide text-gray-300'>Business</p>
                        <ul className='mt-2 space-y-2'>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300  hover:text-[#E63946]'>Infoprenuer</a>
                            </li>

                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300  hover:text-[#E63946]'>Personal</a>
                            </li>

                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300  hover:text-[#E63946]'>Wiki</a>
                            </li>

                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300  hover:text-[#E63946]'>Forum</a>
                            </li>
                        </ul>
                    </div>
                    
                </div>

                {/* subscribtion */}
                <div className="md:max-w-md lg:col-span-2 lg:mt-0 mt-5">
                        <p className='font-medium tracking-wide text-gray-300'>Subscribe for updates</p>
                        <form action="" className='mt-4 flex flex-col md:flex-row'>
                            <input type="email" name='email' id='email' className='flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border-gray-300 rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none' />
                            {/* button */}
                            <button className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md hover:bg-[#E63946] focus:outline-none border' type='submit'>
                                Subscribe

                            </button>
                        </form>
                        <p className='mt-4 text-sm text-gray-500'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nobis at obcaecati odit dolor sint iure laborum commodi architecto eligendi facilis voluptatem debitis minima, ipsum libero fugiat, nisi mollitia ab?
                        </p>
                    </div>
            </div>

            {/* section */}
            <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
                <p className='text-sm text-gray-500'>©Copyright 2024 | All right reserved</p>
                <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                    <a href="" className='text-gray-500 transition-all duration-300 hover:text-[#E63946]'>
                        {/* importing react icons */}
                        <FaTwitter/>
                    </a>

                    <a href="" className='text-gray-500 transition-all duration-300 hover:text-[#E63946]'>
                        {/* importing react icons */}
                        <FaInstagram/>
                    </a>

                    <a href="" className='text-gray-500 transition-all duration-300 hover:text-[#E63946]'>
                        {/* importing react icons */}
                        <FaFacebook/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer