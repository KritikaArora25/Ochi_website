import React, { useEffect, useState } from 'react'

function Eyes() {
    const [rotate, setRotate] = useState(0);
    useEffect(() => {
        window.addEventListener("mousemove", (e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltX = mouseX - window.innerWidth/2;
            let deltY = mouseY - window.innerHeight/2;

            var angle = Math.atan2(deltY, deltX) * (180/Math.PI);
            setRotate(angle-180);
        })
    })
  return (
    <div className='w-full h-screen overflow-hidden'>
        <div data-scroll data-scroll-speed='-0.7' className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
            <div className='absolute flex gap-7 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                    <div className='relative w-2/3  h-2/3  rounded-full bg-zinc-900'>
                        <div style={{transform: `rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-8'>
                            <div className='w-5 h-5 rounded-full bg-zinc-100'></div>
                        </div> 
                    </div>
                </div>
                <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                    <div className='relative w-2/3  h-2/3  rounded-full bg-zinc-900'>
                        <div style={{transform: `rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-8'>
                            <div className='w-5 h-5 rounded-full bg-zinc-100'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Eyes