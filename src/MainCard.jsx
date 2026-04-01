import React, { useState } from 'react';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';
import { toast } from 'react-toastify';

const MainCard = ({data, carts, setCarts}) => {
     const [buyNow, setBuyNow] = useState(false);
     const handleBtns = ()=> {
      setBuyNow(true);
      setCarts([...carts,data])
      toast.success("Added To Cart Successfully");
     }
    return (
           <div className='m-5 p-4 space-y-6 py-6 bg-white relative w-[380px] max-h-[440px] min-h-[440px] rounded-2xl relative pt-5 shadow-xl'>
            <span className={`absolute ml-50 -mt-2 ${data.tagType=== "new" ? "badge badge-success" : "badge badge-warning"}`}>{data.tag}</span>
          <span className='rounded-full border border-amber-300 p-2 text-2xl'>{data.icon}</span>
          <h2 className='text-3xl font-medium'>{data.name}</h2>
          <p>{data.description}</p>
          <p><span className='text-3xl font-bold'>${data.price}</span>/{data.period}</p>
          <ul>
                {data.features.map((Features, index) =>( <li key={index} className='flex gap-1 items-center'><span className='text-green-500 text-xl'><IoCheckmarkDoneSharp /></span>{Features}</li>))}
          </ul>
         <button onClick={handleBtns} className={`btn absolute mt-13 ${buyNow ? "btn-success":"bg-linear-to-r from-[#9514FA] to-[#4F39F6]  text-white"} w-[332px]  rounded-3xl`}>{buyNow ?"Added To Cart":"Buy Now"}</button>
        </div>
    );
};

export default MainCard;