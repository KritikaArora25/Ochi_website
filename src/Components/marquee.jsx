import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-[7vw] rounded-tl-2xl rounded-tr-2xl bg-[#004D43]'>
      <div className='text border-t-1 border-b-1 border-zinc-300 flex gap-7 overflow-hidden whitespace-nowrap'>

        <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 10}} className='text-[28vw] leading-none uppercase font-semibold -mt-[6vw] -mb-[3vw]' style={{ fontFamily: "var(--font-founders)" }}>
          We are ochi
        </motion.h1>
        
        <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 10}} className='text-[28vw] leading-none uppercase font-semibold -mt-[6vw] -mb-[3vw]' style={{ fontFamily: "var(--font-founders)" }}>
          We are ochi
        </motion.h1>
   
      </div>
    </div>
  )
}

export default Marquee