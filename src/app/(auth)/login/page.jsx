'use client';

import { authClient } from "@/lib/auth.client";

import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

const LoginPage = () => {
 const handleLoginForm = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const newFormData = Object.fromEntries(formData.entries());
  const { email, password } = newFormData;
  const { data, error } = await authClient.signIn.email({
   email: email, // required
   password: password, // required
   rememberMe: true,
   callbackURL: "/",
  });
  if (error) {
   alert(`please use valid user. ${error.message}`)
  }
  if (data) {
   alert('login successfully')
  }
 }
 const loginWithGoogle = async () => {
  const data = await authClient.signIn.social({
   provider: "google",
   callbackURL: "/"
  })
  // console.log(data);
 }



 return (
  <div className='flex justify-center items-center lg:mt-15'>
   <div className="card bg-base-200 w-full max-w-sm shrink-0 shadow-2xl border-1">
    <div className="card-body">
     <form onSubmit={handleLoginForm}>
      <fieldset className="fieldset">
       <label className="label text-black ">Email</label>
       <input type="email" className="input" name="email" placeholder="Email" />
       <label className="label text-black">Password</label>
       <input type="password" className="input" name="password" placeholder="Password" />
       <div><a className="link link-hover">Forgot password?</a></div>
       <button className="btn btn-neutral mt-4">Login</button>
       <button type="button" onClick={loginWithGoogle} className='btn border-gray-500 text-blue-700 '>
        <FaGoogle className='mr-2' />
        Login with Google
       </button>
      </fieldset>
      <div>
       <h1>If you are New! please <Link className="text-primary font-bold underline" href={'/register'}>Register</Link> </h1>
      </div>
     </form>
    </div>
   </div>
  </div>
 );
};

export default LoginPage;
