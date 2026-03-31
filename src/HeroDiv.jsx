import React from 'react';
import { CiPlay1 } from 'react-icons/ci';
import { IoIosDisc } from 'react-icons/io';

const HeroDiv= () => {
    return (
        <div className='flex h-full w-10/12 mx-auto items-center p-5 justify-between'>
         <div className='space-y-5'>
           <button className='badge badge-soft text-lg badge-primary text-md p-4'><IoIosDisc />New: AI-Powered Tools Available</button>
           <h1 className='text-7xl font-bold'>Supercharge Your Digital Workflow</h1>
           <p>Access premium AI tools, design assets, templates, and productivity
software—all in one place. Start creating faster today.Explore Products</p>
           <div className='space-x-4'>
            <button className='btn text-md p-4 bg-linear-to-r from-[#9514FA] to-[#4F39F6] rounded-4xl text-white'>Explore Products</button>
            <button className='btn btn-outline btn-primary p-4 rounded-4xl'><CiPlay1 />Watch Demo</button>
           </div>
         </div>
         <div>
            <img src="/public/banner.png" alt="" />
         </div>
        </div>
    );
};

export default HeroDiv;