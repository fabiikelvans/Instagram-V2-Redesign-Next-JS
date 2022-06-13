import Image from 'next/image'
import {SearchIcon, PlusCircleIcon, UserGroupIcon, HeartIcon, PaperAirplaneIcon, MenuIcon, HomeIcon} from "@heroicons/react/outline"
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion";
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import {modalState} from '../atoms/modalAtom';

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};


function Header() {

  const { data: session } = useSession();
  const router = useRouter();

  const [open, setOpen] = useRecoilState(modalState);
  

  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme, theme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  return (
    <div className='shadow-sm border-none bg-white shadow-gray-300 dark:shadow-gray-800 border-b dark:bg-[#101416] sticky top-0 z-50'>
        <div className='flex items-center justify-between max-w-6xl mx-5 lg:mx-auto'>

        {/* Left - Logo */}
        {mounted &&  (
          <>
            {resolvedTheme === "dark" ? (
              <div onClick={() => router.push('/')} className='h-12 w-32 relative cursor-pointer'>
                <Image priority src="https://www.pngkey.com/png/full/1-13459_instagram-font-logo-white-png-instagram-white-text.png" alt='logo' layout='fill' objectFit='contain' />
              </div>
            ) : (
              <div className='h-14 w-32 relative cursor-pointer'>
              <Image priority src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027" alt='logo' layout='fill' objectFit='contain'/>
              </div>
            )}
          </>
        )}


        {/* Middle - Search input field */}
        <div className='max-w-xs'>
        <div className='relative mt-1 p-3 rounded-md'>
            <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
                <SearchIcon className='h-5 w-5 text-gray-500'/>
            </div>
            <input className='bg-transparent dark:placeholder:text-white dark:text-white block w-full pl-10 sm:text-sm border-r-gray-300 rounded-md focus:ring-black focus:border-black dark:focus:ring-gray-700 dark:focus:border-gray-700' type="text" placeholder='Search' />
        </div>
        </div>

        {/* Right - Icons */} 
        <div className='flex items-center justify-end space-x-4'>
            <HomeIcon className='navBtn'/>
            <MenuIcon className='h-6 md:hidden cursor-pointer'/>

            { session ? (
            <>
            <div className='relative navBtn'>
            <PaperAirplaneIcon className='navBtn'/>
            <div className='absolute bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white -top-1 -right-2 text-xs w-5 h-5'>3</div>
            </div>

            <PlusCircleIcon onClick={() => setOpen(true)} className='navBtn'/>
            <UserGroupIcon className='navBtn'/>
            <HeartIcon className='navBtn'/>

            <div className='h-10 w-10 relative'>
            <img onClick={() => signOut()} layout='fill' src={session?.user?.image} alt="profile-pic" className='h-10 rounded-full cursor-pointer' />
            </div>
            </>
            ) : (
              <button onClick={() => signIn()}>Sign In</button>
            )}

            {/* Dark Mode Toggle */}
        {mounted && (
          <div className={`bg-gray-600 flex items-center px-0.5 rounded-full h-6 w-12 cursor-pointer flex-shrink-0 relative ${
            resolvedTheme === "dark" ? "justify-end" : "justify-start"
          }`}
          onClick={() =>setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          >

          <span className="absolute left-0">🌜</span>
          <motion.div
            className="w-5 h-5 bg-white rounded-full z-40"
            layout
            transition={spring}
          />

          <span className="absolute right-0.5">🌞</span>
      </div>
        )}

        </div>
        </div>
    </div>
  )
}

export default Header