import { getProviders, signIn as SignIntoProvider} from 'next-auth/react'
import Header from '../../components/Header';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';


function signIn({ providers }) {

    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme, theme } = useTheme();


    // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  return (
    <>
    <Header/>

    <div className='mt-40 flex flex-col items-center justify-center'>

        {/* Left - Logo */}
        {mounted &&  (
          <>
            {resolvedTheme === "dark" ? (
              <div onClick={() => router.push('/')} className='h-24 w-44 relative cursor-pointer'>
                <Image src="https://www.pngkey.com/png/full/1-13459_instagram-font-logo-white-png-instagram-white-text.png" alt='logo' layout='fill' objectFit='contain' />
              </div>
            ) : (
              <div className='h-24 w-48 relative cursor-pointer'>
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027" alt='logo' layout='fill' objectFit='contain'/>
              </div>
            )}
          </>
        )}

                <h2 className='mb-10 text-center max-w-xs'>Enjoy testing this Instagram Clone I built using NextJS for Educational purposes</h2>
    {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button 
          className='p-3 bg-blue-500 rounded-lg text-white hover:opacity-90'
          onClick={() => SignIntoProvider(provider.id, { callbackUrl: "/" })}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
    const providers = await getProviders();

    return {
        props: {
            providers
        }
    }
}

export default signIn