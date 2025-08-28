import React from 'react'

const Contact = () => {
  return (
    <div className='bg-[whitesmoke] md:pt-20 pt-28 mx-5' >
      <div className='' >
        <div className='md:flex gap-x-20'>
          {/* container contact us  */}
        <div className=" w-1/2 w-full mb-16 p-8 bg-white rounded-lg shadow-md max-w-2xl mx-auto  ">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>
      <form  className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-2 text-[18px] font-medium text-gray-700">Your Name</label>
          <input type="text" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4c75e6]"/>
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-[18px] font-medium text-gray-700">Email Address</label>
          <input type="email"  required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4c75e6]"/>
        </div>
        <div>
          <label htmlFor="message" className="block mb-2 text-[18px] font-medium text-gray-700">Message</label>
          <textarea required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4c75e6]"/>
        </div>
        <button type="submit" className="bg-[#4c75e6] md:w-full-0 w-full text-white px-6 py-3 rounded-md hover:bg-[[#4c75e6]] transition">
          Send Message
        </button>
      </form>
    </div>
   
        
        </div>
      </div>
    </div>
  )
}

export default Contact
