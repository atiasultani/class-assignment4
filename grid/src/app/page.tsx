import React from 'react'

const page = () => {
  return (
    <div className='h-screen grid grid-cols-6 grid-rows-6 px-7 py-8'>
      
      <div className= 'bg-yellow-400 outline outline-white row-span-7'> Nav </div>
      <div 
      className='bg-yellow-400 outline outline-white col-span-5'>Header</div>
      
      <div className=' bg-yellow-400 outline outline-white col-span-4 row-span-4'>Article</div>
      <div className=' bg-yellow-400 outline outline-white row-span-4'>Ads</div>
      <div className=' bg-yellow-400 outline outline-white col-span-5 row-span-5'>Footer</div>


    </div>
  )
}

export default page
