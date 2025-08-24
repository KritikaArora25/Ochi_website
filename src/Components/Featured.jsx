import { motion } from 'framer-motion'
import React, { useState } from 'react'

const Featured = () => {
    const[isHovering_one, setHovering_one] = useState(false);
    const[isHovering_two, setHovering_two] = useState(false);

    const handleHover = () => {
        setHovering(true);
    }
  return (
    <div className='w-full py-10 mt-[5vw]'>
        <div className='w-full px-3 border-b-[1px] border-zinc-700 pb-15'>
            <h1 className='w-full px-10 text-5xl tracking-tight -ml-7' style={{ fontFamily: "var(--font-neue)" }}>
                Featured projects
            </h1>
        </div>
        <div className='px-5'>
            <div className='cards w-full flex gap-4'>
                <div onMouseEnter={()=>setHovering_one(true)} onMouseLeave={()=>setHovering_one(false)} className="mt-15 cardcontainer relative w-1/2 h-[80vh]">
                    <h1 className='absolute flex left-full overflow-hidden top-1/2 -translate-x-1/2 -translate-y-1/2 z-[9] text-8xl text-[#CDEA68] leading-none tracking-tighter font-bold uppercase whitespace-nowrap' style={{ fontFamily: "var(--font-neue)" }}>
                        {"SALIENCE LABS".split('').map((item, index)=>
                            <motion.span initial={{y: "100%"}} animate={isHovering_one ? ({y: "0"}) : ({y: "100%"})} transition={{ease: [0.64, 0, 0.78, 0], delay: index*.04}} className='inline-block' >{item}</motion.span>)}
                    </h1>
                        
                    <div className="card w-full h-full rounded-lg overflow-hidden">
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png" alt="" />
                    </div>
                </div>
                <div onMouseEnter={()=>setHovering_two(true)} onMouseLeave={()=>setHovering_two(false)} className="mt-15 cardcontainer relative w-1/2 h-[80vh]">
                    <h1 className='absolute flex overflow-hidden right-full top-1/2 translate-x-1/2 -translate-y-1/2 z-[9] text-8xl text-[#CDEA68] leading-none tracking-tighter font-bold uppercase whitespace-nowrap' style={{ fontFamily: "var(--font-neue)" }}>
                            {"MEDLLIA EXPERIENCE".split('').map((item, index)=>
                               <motion.span initial={{y: "100%"}} animate={isHovering_two ? ({y: "0"}) : ({y: "100%"})} transition={{ease: [0.64, 0, 0.78, 0], delay: index*.04}} className='inline-block' >{item}</motion.span>)}
                    </h1>
                        
                    <div className="card w-full h-full rounded-lg overflow-hidden">
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
           
    </div>
  )
}

export default Featured


