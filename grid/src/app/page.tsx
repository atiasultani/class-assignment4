import React from 'react'

const page = () => {
  return (
    <div className='grid grid-cols-2 grid-rows-3 px-7 py-8'>
      
      <div 
      className='div1 bg-yellow-400 w-[120px] h-[500px] gap-x-8 gap-y-8 outline outline-white'>Nav</div>
      <div className= 'div2 -ml-[32em] bg-yellow-400 w-[820px] h-20 gap-x-8 gap-y-8 outline outline-white'> Header</div>
      <div className='div3 ml-32 -mt-[25em]  bg-yellow-400 w-[700px] h-[350px] gap-x-8 gap-y-8 outline outline-white'>cont1</div>
      <div className='div4 ml-48 -mt-[25em] bg-yellow-400 w-[120px] h-[400px] gap-x-8 gap-y-8 outline outline-white'>Ads</div>
      <div className='div5 ml-32 -mt-[33em] bg-yellow-400 w-[695px] h-12 gap-x-8 gap-y-8 outline outline-white'>Footer</div>


    </div>
  )
}

export default page
