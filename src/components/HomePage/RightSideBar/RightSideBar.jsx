'use client';
import { authClient } from '@/lib/auth.client';

import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSideBar = () => {
 const loginWithGoogle = async () => {
  const data = await authClient.signIn.social({
   provider: "google",
   callbackURL: "/"
  })


 }
 return (
  <div>
   <div className='flex flex-col space-y-2' >
    <button onClick={loginWithGoogle} className='btn border-blue-400 text-blue-700 '>
     <FaGoogle className='mr-2' />
     Login with Google
    </button>
    <button className='btn border-gray-500 text-gray-500'>
     <FaGithub className='mr-2' />
     Login with Github
    </button>
   </div>
  </div>
 );
};

export default RightSideBar;