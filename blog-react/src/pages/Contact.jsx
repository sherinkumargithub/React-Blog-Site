import React from 'react'
import contactImage from '../assets/contact.png'

const Contact = () => {
  return (
    <div>
    <div className="py-40 bgblue twhite px-4 text-center">

      <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'> Contact Us Page</h2>
    </div>

    {/* the image in left and the form in right */}
    {/* 
    <div className="flex justify-around">
      <div className="">
        <img src={contactImage} alt="" className='max-w-full h-auto px-10 py-7'/>
      </div>
      <div className="">
        <form action="">
          <div>
            <label htmlFor="">Full Name</label>
            <input type="text" name='name' id='name' placeholder='Full name'  className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#687280] outline-none focus:border-[#457b9d] focus:shadow-sm'/>
          </div>

          <div>
            <label htmlFor="">Email</label>
            <input type="email" name='email' id='email' placeholder='example@gmail.com'  className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#687280] outline-none focus:border-[#457b9d] focus:shadow-sm'/>
          </div>

          <div>
            <label htmlFor="">Subject</label>
            <input type="text" name='subject' id='subject' placeholder='Type your subject'  className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#687280] outline-none focus:border-[#457b9d] focus:shadow-sm'/>
          </div>

          <div>
            <label htmlFor="">Message</label>
            <textarea type="text" name='message' id='message' placeholder='Type your message'  className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#687280] outline-none focus:border-[#457b9d] focus:shadow-sm'/>
          </div>

          <div className='mb-5'>
                  <button className='hover:shadow-md rounded-md bg-[#a8dadc] hover:bg-[#e63946] py-3 px-8 text-base font-semibold text-white outline-none'>Login</button>
          </div>
        </form>
      </div>
    </div>
    */}
    {/* Main container with image and form */}
    <div className="max-w-7xl mx-auto my-20 flex flex-col items-center justify-around md:flex-row gap-12 px-4">
        
        {/* Left section with image */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img src={contactImage} alt="Contact" className="w-full rounded-lg  p-4" />
        </div>
        
        {/* Right section with form */}
        <div className="w-full md:w-1/2">
          <form className="space-y-6">
            {/* Full Name Field */}
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full name"
                className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base text-gray-800 outline-none focus:border-blue-500 focus:shadow-sm"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base text-gray-800 outline-none focus:border-blue-500 focus:shadow-sm"
              />
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Type your subject"
                className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base text-gray-800 outline-none focus:border-blue-500 focus:shadow-sm"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Type your message"
                className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base text-gray-800 outline-none focus:border-blue-500 focus:shadow-sm"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button className="w-full rounded-md bg-[#a8dadc] hover:bg-[#e63946] py-3 px-8 text-base font-semibold text-white outline-none">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
  </div>
  )
}

export default Contact