import React from 'react';

const LeftSideBar = ({ userData }) => {
 const uniqeCategorys = [...new Set(userData.map(d => d.category))];
 console.log(uniqeCategorys);
 const activeCategory = 2;
 return (
  <div>
   {uniqeCategorys.map((u, i) => <ul key={i}>
    <li


     className={`${activeCategory === (i + 1) ? "bg-primary" : ""} text-center `}
    >{u}</li>
   </ul>)}
  </div>
 );
};

export default LeftSideBar;