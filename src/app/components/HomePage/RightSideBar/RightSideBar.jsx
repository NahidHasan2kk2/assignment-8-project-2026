import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSideBar = () => {
 return (
  <div>
   <div className='flex flex-col space-y-2' >
    <button className='btn border-blue-400 text-blue-700 '>
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