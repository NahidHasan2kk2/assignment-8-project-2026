import { data } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';

const CardDetailsPage = async ({ params }) => {
 const { id } = await params;
 const userData = data;
 const cardDetailsData = userData.find(d => d.id === Number(id));

 return (
  <div className="max-w-5xl mx-auto p-5">
   <div className="grid md:grid-cols-2 gap-8 items-center bg-white shadow-lg rounded-xl p-5">
    <div className="relative w-full h-72 md:h-96 overflow-hidden rounded-lg">
     <Image
      src={cardDetailsData.image}
      alt={cardDetailsData.name}
      fill
      className="object-cover"
     />
    </div>
    <div className="flex flex-col gap-4">
     <h1 className="text-3xl font-bold">{cardDetailsData.name}</h1>
     <p className="text-gray-500">{cardDetailsData.brand}</p>
     <p className="text-lg">{cardDetailsData.description}</p>
     <div className="flex justify-between text-lg font-semibold">
      <span>💰 Price: ${cardDetailsData.price}</span>
      <span>⭐ Rating: {cardDetailsData.rating}</span>
     </div>
     <p className="text-sm text-gray-600">
      Stock: {cardDetailsData.stock}
     </p>

     <p className="text-sm bg-blue-100 inline-block px-3 py-1 rounded">
      Category: {cardDetailsData.category}
     </p>
     <div className="flex gap-4 mt-4">
      <button className="btn bg-blue-500 text-white flex-1">
       Buy Now
      </button>
      <button className="btn btn-outline flex-1">
       Add to Cart
      </button>

     </div>
    </div>

   </div>
  </div>
 );
};

export default CardDetailsPage;