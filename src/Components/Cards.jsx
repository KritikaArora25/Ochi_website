import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center gap-3 px-32 '>
        <div className="cardcontainer w-1/2 h-[50vh]">
            <div className='card relative w-full h-full bg-[#004D43] rounded-lg flex items-center justify-center'>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute px-2 py-1 text-sm rounded-full border-1 left-7 bottom-7 text-[#CDEA68] font-normal'>&copy;2019-2025</button>
            </div>
        </div>
        <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
            <div className='card flex items-center justify-center relative w-1/2 h-full bg-[#212121] rounded-lg'>
                <img className='w-22' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='absolute px-2 py-1 text-xs rounded-full border-1 left-2 bottom-7 text-white uppercase font-normal'>rating 5.0 on clutch</button>
            </div>
            <div className='card relative flex items-center justify-center w-1/2 h-full bg-[#212121] rounded-lg'>
                <img className='w-22' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='absolute px-2 py-1 text-xs rounded-full border-1 left-2 bottom-7  text-white font-normal uppercase'>business bootcamp alumini</button>
            </div>
        </div>
    </div>
  )
}

export default Cards