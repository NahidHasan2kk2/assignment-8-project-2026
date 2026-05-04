'use client';
import Link from 'next/link';
import React from 'react';
import Navlink from './Navlink';
import { authClient } from '@/lib/auth.client';


const Navbar = () => {


  const { data: session } = authClient.useSession()
  console.log(session?.user?.name)


  const links = <>
    <li><Navlink href={'/'}>Home</Navlink></li>
    <li className='lg:mx-5 lg:my-0 my-2'><Navlink href={'/products'}>Products</Navlink></li>
    <li><Navlink href={'/profile'}>My Profile</Navlink></li>
  </>
  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 shadow-sm container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost font-bold text-xl  animate__animated animate__fadeIn lg:text-3xl">Nahids<span className='text-primary'>Shop</span></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}

        </ul >
      </div >
      <div className="navbar-end">
        {
          session ? <div className='flex justify-center items-center gap-3'>
            <h1 className='font-semibold text-sm hidden sm:block'>Hello ,{session?.user?.name}</h1>
            <div className='w-[40px] bg-blue-300 rounded-full'>
              <img className='rounded-full' src={session?.user?.image} alt="Login user" />
            </div>
            <button onClick={async () => await authClient.signOut()} className='btn btn-primary btn-sm sm:btn-sm'>Log Out</button>
          </div>
            :
            <div className='flex justify-center items-center'>
              <div>
                <Link href={'/login'} className="btn btn-primary  ">Login</Link>
              </div>
              <div className='hidden lg:block'>
                <Link href={'/register'} className="lg:ml-5 ml-1 btn btn-primary">Register</Link>
              </div>
            </div>

        }



      </div>
    </div >
  );
};

export default Navbar;
