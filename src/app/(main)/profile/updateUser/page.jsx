'use client';

import { authClient } from "@/lib/auth.client";
import { redirect } from "next/navigation";
import { useState } from "react";


const UpdateUser = () => {

 const [loading, setLoading] = useState(false);
 const handleForm = async (e) => {
  e.preventDefault();
  setLoading(true);
  const formData = new FormData(e.target);
  const newFormData = Object.fromEntries(formData.entries());
  const { name, image } = newFormData;

  try {
   await authClient.updateUser({
    name,
    image,
   });

   alert('Profile updated successfully');
  } catch (error) {
   console.error(error);
   alert('Update failed');
  } finally {
   setLoading(false);
   redirect('/profile')
  }


 }
 return (
  <div className="flex justify-center items-center min-h-screen bg-gray-100">
   <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
    <h2 className="text-2xl font-semibold text-center mb-4">
     Update Profile
    </h2>

    <form onSubmit={handleForm} className="space-y-4">
     <div>
      <label className="block mb-1 font-medium">Name</label>
      <input
       type="text"
       name="name"
       placeholder="Enter your name"
       className="w-full border rounded-lg px-3 py-2"
       required
      />
     </div>
     <div>
      <label className="block mb-1 font-medium">Photo URL</label>
      <input
       type="text"
       name="image"
       placeholder="Enter photo URL"
       className="w-full border rounded-lg px-3 py-2"
       required
      />
     </div>
     <button
      type="submit"
      disabled={loading}
      className="w-full bg-blue-500 text-white py-2 rounded-lg"
     >
      {loading ? "Loading...." : " Update Information"}
     </button>
    </form>
   </div>
  </div>
 );
};

export default UpdateUser;