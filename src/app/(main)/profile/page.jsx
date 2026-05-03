import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function ProfilePage() {
 const session = await auth.api.getSession({
  headers: await headers(),
 });

 // If no user
 if (!session?.user) {
  return (
   <div className="flex justify-center items-center min-h-screen">
    <h1 className="text-xl font-bold">User not logged in</h1>
   </div>
  );
 }

 const user = session.user;

 return (
  <div className="flex justify-center items-center min-h-screen bg-gray-100">
   <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md text-center">

    {/* Avatar */}
    <img
     src={user.image || "https://i.ibb.co/2kR1d9y/user.png"}
     alt="user"
     className="w-24 h-24 rounded-full mx-auto mb-4"
    />

    {/* Name */}
    <h2 className="text-2xl font-bold">{user.name}</h2>

    {/* Email */}
    <p className="text-gray-600 mt-1">{user.email}</p>

    {/* Extra info */}
    <div className="mt-4 text-left space-y-2">
     <p>
      <span className="font-semibold">User ID:</span> {user.id}
     </p>
     <p>
      <span className="font-semibold">Role:</span>{" "}
      {user.role || "user"}
     </p>
     <p>
      <span className="font-semibold">Verified:</span>{" "}
      {user.emailVerified ? "Yes" : "No"}
     </p>
    </div>
   </div>
  </div>
 );
}