import React from 'react'
import Posts from './Posts'
import Sidebar from './Sidebar'
import Suggestions from './Suggestions'
import WidgetFeed from './WidgetFeed'
import {signOut, useSession} from "next-auth/react"


function Feed() {

  const {data: session} = useSession()

  return (
    <main className={`bg-[#f7f7f7] dark:bg-[#090c0e] dark:text-white grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-4 xl:max-w-6xl mx-auto overflow-hidden
     ${!session && '!grid-cols-1 !max-w-3xl'}
    `}>

        <section className={`hidden xl:inline-grid md:col-span-1 ${!session && 'xl:hidden md:hidden'}`}>
        <div className='relative top-10'>
        <Sidebar/>
        </div>
        </section>
       
        <section className='col-span-2 md:p-10 md:md:col-span-2 bg-white dark:bg-[#000000]'>
        <Posts/>
        </section>
        
        { session && (
          <section className='hidden xl:inline-grid md:col-span-1'>
          <div className='fixed top-20 px-6'>
          <WidgetFeed/>
          <Suggestions/>
          </div>
          </section>
        )}
        
    </main>
  )
}

export default Feed