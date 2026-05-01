import React from "react";
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
 return (
  <footer className="bg-gray-900 text-gray-300 container mx-auto">
   <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-8">
    <div className="flex-1">
     <h2 className="text-xl font-semibold text-white mb-3">
      Summer Goods
     </h2>
     <p className="text-sm">
      Building your vision in our mission
     </p>
    </div>
    <div className="flex-1">
     <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
     <p className="text-sm">Email: support@example.com</p>
     <p className="text-sm">Phone: +123 456 789</p>
     <p className="text-sm">Location: Your City</p>
    </div>
    <div className="flex-1">
     <h3 className="text-lg font-semibold text-white mb-3">Legal</h3>
     <ul className="space-y-1 text-sm">
      <li className="hover:text-white cursor-pointer">Privacy Policy</li>
      <li className="hover:text-white cursor-pointer">Terms of Service</li>
      <li className="hover:text-white cursor-pointer">Cookie Policy</li>
     </ul>
    </div>
    <div className="flex-1">
     <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
     <div className="flex gap-4 text-xl">
      <a href="#"><FaFacebook /></a>
      <a href="#"><FaTwitter /></a>
      <a href="#"><FaGithub /></a>
      <a href="#"><FaLinkedin /></a>
     </div>
    </div>

   </div>


   <div className="border-t border-gray-700 text-center py-4 text-sm">
    © {new Date().getFullYear()} My Website. All rights reserved.
   </div>

  </footer>
 );
};

export default Footer;