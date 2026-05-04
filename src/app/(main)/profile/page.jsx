import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";

const ProfilePage = async () => {
 const session = await auth.api.getSession({
  headers: await headers(),
 });


 if (!session?.user) {
  return (
   <div className="flex justify-center items-center bg-base-300 h-20 my-3 lg:h-[40vh]">
    <h1 className="lg:text-3xl text-xl font-bold opacity-65">User Not Found!</h1>
   </div>
  );
 }

 const user = session.user;

 return (
  <div className="flex justify-center items-center  bg-gray-100">
   <div className="bg-white shadow-lg rounded-2xl my-5 p-6 w-80 border-1 text-center">

    {/* Avatar */}
    <img
     src={user.image || "https://i.ibb.co/2kR1d9y/user.png"}
     alt="user"
     className="w-24 h-24 rounded-full mx-auto mb-4"
    />
    <div className="text-center">
     <h2 className="text-2xl font-bold">{user.name}</h2>
     <p className="text-gray-600 mt-1">{user.email}</p>
    </div>
    <div className="my-3">
     <Link href={'/profile/updateUser'}> <button className="btn bg-blue-400  hover:text-white hover:bg-blue-600">Update User</button></Link>
    </div>
   </div>
  </div>
 );
}
export default ProfilePage;