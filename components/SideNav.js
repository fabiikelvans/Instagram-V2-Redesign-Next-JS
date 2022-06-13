import React from 'react'



function SideNav({Icon, name, active, logout}) {
  return (
    <div className={`flex items-center group cursor-pointer 
    ${active ? "text-red-500 font-bold": "text-gray-400"} 
     ${logout && "text-orange-500 font-semibold"}
    `}>
        <div className='flex pl-4 items-center space-x-4'>
        <Icon className={`h-6 w-6 group-hover:animate-pulse group-hover:text-gray-600 
         ${logout && "group-hover:text-red-500"}`} />
        <p className={`group-hover:text-gray-600 ${logout && "group-hover:text-red-500"}`}>{name}</p>
        </div>
        {active && <div className='absolute h-8 rounded-full w-[3px] bg-red-500'></div>}
    </div>
  )
}

export default SideNav