import React from 'react'

const About = () => {
  return (
    <div className='w-full p-20 rounded-tl-2xl rounded-tr-2xl bg-[#CDEA68] text-black'>
        <h1 className='text-[4vw] leading-[4vw] tracking-tight'  style={{ fontFamily: "var(--font-neue)" }}>
            We craft category-defining presentations, brand identities, and digital experiences that drive funding, sales, and market leadership.
        </h1>
        <div className='w-full flex gap-5 p-10 border-t-[1.5px] mt-20 border-[#a1b562]'>
            <div className='w-1/2 '>
                <h1 className='text-[4vw] tracking-tighter'>How we can help:</h1>
                <button className=' flex gap-9 items-center px-5 py-3.5 bg-zinc-900 rounded-full uppercase text-white mt-[0.8vw]'>
                    Read More
                    <div className='w-2 h-2 bg-zinc-100 rounded-full'>

                    </div>
                </button>
            </div>
            <div className='w-1/2 h-[70vh] rounded-xl bg-[#B0C759] relative overflow-hidden'>
                <img 
                    src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
                    alt="image description"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
        </div>
    </div>
  )
}

export default About