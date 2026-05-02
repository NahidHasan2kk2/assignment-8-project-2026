'use client';

import { authClient } from "@/lib/auth.client";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";

import { toast } from "react-toastify";

const RegisterPage = () => {
 const router = useRouter();
 const handleSignUpForm = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const newFormData = Object.fromEntries(formData.entries())
  const { name, email, photo, password } = newFormData;

  const { data, error } = await authClient.signUp.email({
   name: name, // required
   email: email, // required
   password: password, // required
   image: photo,
   callbackURL: "/",

  });
  console.log(error);
  if (error) {
   alert(`${error.message}`)
  } if (data) {
   alert('successfully added new user')
   router.push("/");
  }

 }


 return (
  <div className='flex justify-center items-center lg:mt-15'>
   <div className="card bg-base-200 w-full max-w-sm shrink-0 shadow-2xl border-1">
    <div className="card-body">
     <form onSubmit={handleSignUpForm}>
      <fieldset className="fieldset">
       <label className="label text-black ">User Name</label>
       <input type="text" className="input" name="name" required placeholder="Enter User Name" />
       <label className="label text-black ">Email</label>
       <input type="email" className="input" name="email" required placeholder="Enter Your Email" />
       <label className="label text-black ">Photo-URl</label>
       <input type="text" className="input" name="photo" required placeholder="Enter Your Photo Url" />
       <label className="label text-black">Password</label>
       <input type="password" className="input" name="password" required placeholder="Enter Password" />
       <div><a className="link link-hover">Forgot password?</a></div>
       <button className="btn btn-neutral mt-4">Sign Up</button>
      </fieldset>
     </form>
    </div>
   </div>
  </div>
 );
};

export default RegisterPage;