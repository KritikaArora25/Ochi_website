import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-0.3' className='w-full h-screen bg-zinc-900 pt-1 pb-10'>
        <div className='textstructure mt-40 px-20 -mb-7'>
          {['We Create','Eye Opening','Presentations'].map((item, index)=>{
            return <div className='masker flex items-center'>
                {index === 1 && (
                  <motion.div initial={{width: 0}} animate={{width: '9vw'}} transition={{ease: [0.32, 0, 0.67, 0], duration: 1}}  className='w-[9vw] mr-[1vw] rounded-md h-[5.8vw] relative top-[0.5vw] overflow-hidden bg-red-800'>
                    <img  className="bg-cover w-full h-full" src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                  </motion.div>
                )}
                <h1 className='uppercase text-[9vw] leading-[7vw] tracking-normal font-medium'  style={{ fontFamily: "var(--font-founders)" }}>{item}</h1>
            </div>
          })}
        </div>

        <div className='border-t-[1px] border-zinc-700 mt-30 mb-10 flex justify-between items-center py-5 px-20'>
          {["Presentation and storytelling agency", "For innovation teams and global brands"].map((item, index)=><p className='text-md font-light tracking-tight leading-none'>{item}</p>)}
          
          <div className='start flex items-center gap-1.5'>
            <div className='px-3 py-1 border-[0.5px] border-zinc-400 font-light uppercase text-sm rounded-full'>START THE PROJECT</div>
            <div className='w-7 h-7 flex items-center justify-center border-[0.5px] border-zinc-400 rounded-full'>
              <span className='rotate-[45deg]'>
                <FaArrowUpLong/>
              </span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default LandingPage