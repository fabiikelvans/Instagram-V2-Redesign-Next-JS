import Image from 'next/image'
import React from 'react'

function WidgetFeed() {
  return (
    <div>
      <h1 className='text-lg font-bold mt-4'> Trending Feeds </h1>
    <div className='grid grid-cols-2 gap-2 mt-3'>
        <div className='col-span-1' >
        <div className='relative h-28 w-28'>
        <Image className='rounded-md' layout='fill' objectFit='cover' src="https://images.unsplash.com/photo-1654912912322-b0b98a92011d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
        </div>

        <div className='col-span-1' >
        <div className='relative h-28 w-28'>
        <Image className='rounded-md' layout='fill' objectFit='cover' src="https://images.unsplash.com/photo-1654912912322-b0b98a92011d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
        </div>

        <div className='col-span-1' >
        <div className='relative h-28 w-28'>
        <Image className='rounded-md' layout='fill' objectFit='cover' src="https://images.unsplash.com/photo-1654912912322-b0b98a92011d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
        </div>

        <div className='col-span-1' >
        <div className='relative h-28 w-28'>
        <Image className='rounded-md' layout='fill' objectFit='cover' src="https://images.unsplash.com/photo-1654912912322-b0b98a92011d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
        </div>
        </div>
    </div>
  )
}

export default WidgetFeed