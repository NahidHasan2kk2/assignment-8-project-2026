'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const CardsPage = ({ userData }) => {
 const [showAll, setShowAll] = useState(false);
 const sliceUserData = showAll ? userData : userData.slice(0 - 3);
 return (
  <div >
   <div className='grid lg:grid-cols-3 gap-5'>
    {
     sliceUserData.map(data => <div key={data.id} className="card bg-base-100  shadow-sm ">
      <figure className="px-5 pt-10">
       <Image
        src={data.image}
        alt={data.name}
        width={300}
        height={100}

       ></Image>
      </figure>
      <div className="card-body items-center text-center">
       <h2 className="card-title">{data.name}</h2>
       <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
       <div className="card-actions">
        <button className="btn btn-primary">Buy Now</button>
       </div>
      </div>
     </div>)
    }
   </div>
   <div className='text-center my-2'>
    <button onClick={() => setShowAll(!showAll)} className='btn btn-'>{showAll ? "Show Less" : "See more"}</button>
   </div>

  </div>
 );
};

export default CardsPage;