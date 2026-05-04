
import React from "react";
import Image from "next/image";

const TopBrand = () => {
 const brands = [
  {
   id: 1,
   name: "SunShade",
   desc: "Premium sunglasses & summer accessories.",

  },
  {
   id: 2,
   name: "CoolWear",
   desc: "Lightweight and breathable summer clothing.",

  },
  {
   id: 3,
   name: "HydroLife",
   desc: "Stay hydrated with quality water bottles.",

  },
  {
   id: 4,
   name: "SkinGuard",
   desc: "Trusted skincare for sun protection.",

  },
 ];

 return (
  <section className="container mx-auto my-12 px-4">
   <h2 className="text-3xl font-bold text-center  animate__animated animate__fadeIn mb-8">
    🏷️ Top Brands
   </h2>

   <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
    {brands.map((brand) => (
     <div
      key={brand.id}
      className="bg-white border-1 rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition"
     >


      <h3 className="text-2xl font-bold">{brand.name}</h3>
      <p className="text-gray-600 text-sm mt-2">{brand.desc}</p>
     </div>
    ))}
   </div>
  </section>
 );
};

export default TopBrand;

