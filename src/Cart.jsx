import React, {use, useState } from 'react';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';
import MainCard from './MainCard';
import { toast } from 'react-toastify';

const Cart = ({carts, setCarts}) => {
console.log(carts);
const total = carts.reduce((sum, item) => sum + item.price, 0
)
const handleChekout = () => {
    setCarts([]);
    toast.success("Pyment Successfull");
}
const Delete = (item) => {
    const newArry = carts.filter(data => data.id !== item.id)
    setCarts(newArry);
     toast.success("Item Deleted!");
}

    return (
        <div className='p-5 w-10/12 mx-auto rounded-2xl shadow-xl m-5'>
            <h1 className='text-3xl font-semibold'>Your Cart</h1>
            {
                carts.length === 0 ? <p className='text-2xl text-center font-medium text-gray-500'>Your Cart Is Empty</p>
                :<>
                 {carts.map(item => <div className='p-4 rounded-xl flex justify-between items-center gap-1.5 bg-base-200 mb-2 h-full'>
            <div className='flex items-center gap-1.5 '> 
          <span className='rounded-full border border-amber-300 p-2 text-2xl'>{item.icon}</span>
            <div>
                <p>{item.name}</p>
                <p>${item.price}</p>
            </div>
          
            </div>
              
            <p onClick={() => Delete(item)} className='text-red-600 cursor-pointer'>Remove</p>
          
            
            </div>
            )
        }
        <div className='flex justify-between'>
            <p>Total:</p>
            <p className='text-xl font-semibold'>${total}</p>
        </div>
        <button onClick={handleChekout} className='btn  bg-linear-to-r from-[#9514FA] to-[#4F39F6]  text-white w-full py-7 text-xl  rounded-3xl'>Proceed to Checkout</button>
                </>
            }
        
        </div>
    );
};

export default Cart;