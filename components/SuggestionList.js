import Image from 'next/image'
import React from 'react'

function SuggestionList({img, name, location}) {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center space-x-3'>
      <Image  width={52} height={52} className='rounded-full' src={img} />
      <div className=''>
            <h2 className='font-semibold'>{name}</h2>
            <p className='text-gray-500 text-sm'>{location}</p>
        </div>
      </div>
        
        <div>
        <button className='text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#515BD4] hover:opacity-90'>Follow</button>
        </div>
    </div>
  )
}

export default SuggestionList