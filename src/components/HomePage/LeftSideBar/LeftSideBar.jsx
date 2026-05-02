import React from 'react';

const LeftSideBar = ({ userData }) => {
 const uniqeCategorys = [...new Set(userData.map(d => d.category))];
 const allUniqeCategory = ['All', ...uniqeCategorys];

 const activeCategory = 1;
 return (
  <div>
   {allUniqeCategory.map((u, i) => <ul key={i}>
    <li


     className={`${activeCategory === (i + 1) ? "bg-primary text-white" : ""} text-center btn block my-2 pt-2 `}
    >{u}</li>
   </ul>)}
  </div>
 );
};

export default LeftSideBar;