'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';


const CardsPage = ({ userData }) => {

 const [showAll, setShowAll] = useState(false);




 const sliceUserData = showAll ? userData : userData.slice(0, 3);
 return (
  <div >
   <div className='grid lg:grid-cols-3 gap-5 '>
    {
     sliceUserData.map(data => <div key={data.id} className="card  bg-base-100 border-1  shadow-sm  h-full">
      <figure className="px-5 pt-10 ">
       <div className='relative w-full h-48' >
        <Image
         src={data.image}
         alt={data.name}
         fill
         className='object-cover'

        ></Image>
       </div>
      </figure>
      <div className="card-body  text-center">
       <h2 className="card-title font-bold text-2xl">{data.name}</h2>
       <div className='flex justify-between gap-2'>
        <h1 className='font-bold'>⭐ Rating : {data.rating}</h1>
        <p className='font-bold'>💰 Price : ${data.price}</p>
       </div>
       <div className="card-actions  mt-auto">
        <Link className=' bg-blue-500 mx-auto text-white font-bold btn px-18 ' href={`/details/${data.id}`}>
         See Details
        </Link>
       </div>
      </div>
     </div>)
    }
   </div>
   <div className='text-center my-2'>
    <button onClick={() => setShowAll(!showAll)} className='btn'>{showAll ? "Show Less" : "See more"}</button>
   </div>

  </div>
 );
};

export default CardsPage;