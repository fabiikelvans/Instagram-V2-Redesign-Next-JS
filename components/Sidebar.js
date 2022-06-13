import Image from 'next/image'
import React from 'react'
import SideNav from './SideNav'
import {HomeIcon} from "@heroicons/react/solid"
import {DocumentSearchIcon, BookmarkIcon, PaperAirplaneIcon, DesktopComputerIcon, ChartBarIcon, CogIcon, LogoutIcon} from "@heroicons/react/outline"

import {signOut, useSession} from "next-auth/react"

function Sidebar() {

    const {data: session} = useSession()
  return (
    <div className='flex w-full flex-col'>
        {/* Top */}
            <div className='flex flex-col items-center'>
                <div className='flex items-center justify-center rounded-full bg-gradient-to-r p-[4px] from-[#F58529] via-[#DD2A7B] to-[#515BD4] w-20 h-20'>
                <img className='object-fit relative rounded-full border-white dark:border-black border-[4px]' 
                src={session?.user?.image} alt="" />
                </div>
                <h1 className='font-bold mt-3'>{session?.user?.username}</h1>
                <h4 className='text-sm text-gray-500'>Nairobi, Kenya</h4>

                <div className='flex space-x-6 m-4 '>
                <div className='flex flex-col items-center'>
                    <h3 className='font-bold'>637</h3>
                    <p className='text-xs uppercase text-gray-500'>Posts</p>
                </div>
                <div className='flex flex-col items-center'>
                    <h3 className='font-bold'>23.4k</h3>
                    <p className='text-xs uppercase text-gray-500'>Followers</p>
                </div>
                <div className='flex flex-col items-center'>
                    <h3 className='font-bold'>923</h3>
                    <p className='text-xs uppercase text-gray-500'>Following</p>
                </div>
                </div>
            </div>
            <div className="border-t-2 m-4 border-gray-200 dark:border-[#101416]"></div>

        {/* Bottom */}
        <div className='mt-6 space-y-8'>
            <SideNav Icon={HomeIcon} name={'Home'} active />
            <SideNav Icon={DocumentSearchIcon} name={'Explore'}  />
            <SideNav Icon={BookmarkIcon} name={'My Favorite'} />
            <SideNav Icon={PaperAirplaneIcon} name={'Direct'} />
            <SideNav Icon={DesktopComputerIcon} name={'IG TV'} />
            <SideNav Icon={ChartBarIcon} name={'Stats'} />
            <SideNav Icon={CogIcon} name={'Settings'} />
            <div className="border-t-2 border-gray-200 dark:border-[#101416]"></div>
            <button onClick={signOut}>
            <SideNav logout  Icon={LogoutIcon} name={'Log Out'} />
            </button>
        </div>
    </div>
  )
}

export default Sidebar