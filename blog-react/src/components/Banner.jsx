import React from 'react'
import { Link } from 'react-router-dom'
import {FaArrowRight} from "react-icons/fa6"

//  className='blue-[#1D3557] hakf white-[#F1FAEE] red [#E63946]'
const Banner = () => {
  return (
    <div className='px-4 py-32 bg-[#1D3557] mx-auto'>
        <div className="text-[#F1FAEE] text-center">
            <h1 className='text-center text-[#F1FAEE] text-5xl lg:text-7xl leading-snug font-bold mb-5'>Welcome to Our Blog</h1>
            <p className='text-gray-100 lg-w-3/5 mx-auto mb-5 font-primary'>Start your blog today and join a community of writers and readerws who are passionate about sharing theri stories and ideas. We offer everything you need to get started, from helpful tips and turorial.</p>
            {/* using google fonts to style the p */}
            <div className="">
                <Link to ="/" className = 'font-medium hover:text-[#E63946] inline-flex items-center py-1'>Learn more <FaArrowRight className='mt-1 ml-2'/></Link>
            </div>
        </div>
    </div>
  ) 
}

export default Banner