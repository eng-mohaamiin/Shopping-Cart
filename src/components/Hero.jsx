import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className='hero mt-[60px] text-white  '
         style={{
          backgroundImage: `linear-gradient(rgba(8,0,28,0.1), rgba(8,0,28,0.4)), url("https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: "740px"
        }}
        >
            <div className='pt-[300px] px-20'>
                <h1 className='md:text-6xl  text-4xl  mb-4 font-bold'>New Arrivals</h1>
            <p className='md:text-2xl md:text-left text-center font-semibold'>Fresh styles just landed</p>
            <button className='text-2xl bg-pink-600 hover:bg-pink-700 duration-200 mt-5 md:w-52 md:h-[60px] w-40 h-[54px] md:ml-0 ml-10 rounded-full'>Explore</button>
            </div>
        </div>
    </div>
  )
}

export default Hero
