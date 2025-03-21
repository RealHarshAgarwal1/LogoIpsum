import { Image, PencilRuler, Shield } from 'lucide-react';
import React, { useState } from 'react';

function SideNav({selectedIndex}) {
    const menuList=[{
        id:1,
        name:'Icon',
        icon:PencilRuler,
    },
    {
        id:2,
        name:'Background',
        icon:Image,
    },
    {
        id:3,
        name:'Upgrade',
        icon:Shield,
    },
    
]
const [activeIndex,setActiveIndex]=useState(0);

  return (
    <div className='border shadow-sm h-screen'>
      {
        menuList.map((menu,index)=>(
            <h2 
            onClick={()=>{setActiveIndex(index);
                selectedIndex(index);
            }}
            className={`p-3 text-lg px-7 flex items gap-2 text-gray-500 my-2 cursor-pointer hover:bg-gray-900 hover:text-white ${activeIndex==index && 'bg-gray-900 text-white'}`}
            key={index}>{}<menu.icon />{menu.name}</h2>
        ))}
    </div>
  );
}

export default SideNav;
