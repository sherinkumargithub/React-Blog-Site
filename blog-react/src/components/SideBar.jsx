import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SideBar = () => {

    const [popularBlogs, setPopularBlogs] = useState([])
    // to fetch the latest blog
    useEffect(() =>{
        fetch("http://localhost:5000/blogs").then(res => res.json()).then(date => setPopularBlogs(date.slice(0,15)))
    },[])


  return (
    <div>
        {/* SideBar */}
        <div className="">
            <h3 className='text-2xl font-semibold px-4'>Latest Blogs</h3>
            <div className="">
                {
                    popularBlogs.slice(0,5).map(blog => 
                        <div key={blog.id} 
                        className='my-5 border-b-2 border-spacing-2 px-4'
                        >
                            <h4 className='font-medium mb-2'>{blog.title}</h4>
                            <Link to="/" 
                                className='text-base pb-2 hover:text-[#E63946] inline-flex items-center py-1'
                            >Read now <FaArrowRight className='mt-1 ml-2'/></Link>
                        </div>
                    )
                }
            </div>
        </div>

        {/* popular blogs*/}
        <div className="">
            <h3 className='text-2xl font-semibold px-4 mt-20'>Popular Blogs</h3>
            <div className="">
                {
                    popularBlogs.slice(6,10).map(blog => 
                        <div key={blog.id} 
                        className='my-5 border-b-2 border-spacing-2 px-4'
                        >
                            <h4 className='font-medium mb-2'>{blog.title}</h4>
                            <Link to="/" 
                                className='text-base pb-2 hover:text-[#E63946] inline-flex items-center py-1'
                            >Read now <FaArrowRight className='mt-1 ml-2'/></Link>
                        </div>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default SideBar