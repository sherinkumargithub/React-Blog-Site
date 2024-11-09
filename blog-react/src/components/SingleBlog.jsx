import React from 'react'
import { useLoaderData } from 'react-router-dom'
import {FaUser} from "react-icons/fa"
import SideBar from './SideBar'


const SingleBlog = () => {

    const data = useLoaderData() 
    console.log(data)    
    const {title, image, author, published_date, reading_time, content} = data[0]
  return (
    <div>
         <div className="py-40 bgblue twhite px-4 text-center">
           <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'> Single Blog Page</h2>
         </div>

         {/* blog details */}
         <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row
         gap-12">
            <div className="lg:w-3/4 mx-auto">
                <div>
                    <img src={image} alt="" className='w-full mx-auto rounded'/>
                </div>
                <h2 className='text-3xl mt-8 font-bold mb-4 text-blue-950'>{title}</h2>
                <p className='mb-3 text-gray-600'><FaUser className='inline-flex items-center mr-2 '/> {author} | {published_date}</p>

                <p className='mb-3 text-gray-600'><FaUser className='inline-flex items-center mr-2 '/>{reading_time}</p>

                <p className='text-base text-gray-500 mb-6'>{content}</p>

                <div className="text-base text-gray-500">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis et tenetur voluptate obcaecati optio ipsum iure eaque adipisci reiciendis temporibus quod unde magnam numquam, deserunt asperiores maxime in eos aut!</p>
                    <br />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam magni, sit suscipit voluptates ipsam eum consequuntur et cupiditate sunt cumque repellendus similique possimus dolorem iure, officia, dolore ab maxime ullam.</p> <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae deserunt harum vero sapiente voluptatibus quas nobis blanditiis id maxime. Libero fuga nulla, ex assumenda quasi omnis vitae vero officiis suscipit!</p>
                    <br /><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis et tenetur voluptate obcaecati optio ipsum iure eaque adipisci reiciendis temporibus quod unde magnam numquam, deserunt asperiores maxime in eos aut!</p>
                    <br />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam magni, sit suscipit voluptates ipsam eum consequuntur et cupiditate sunt cumque repellendus similique possimus dolorem iure, officia, dolore ab maxime ullam.</p> <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae deserunt harum vero sapiente voluptatibus quas nobis blanditiis id maxime. Libero fuga nulla, ex assumenda quasi omnis vitae vero officiis suscipit!</p>
                </div>
            </div>

            {/* sidebar */}
            <div className="lg:w-1/2">
                <SideBar/>
            </div>
         </div>
    </div>
  )
}

export default SingleBlog