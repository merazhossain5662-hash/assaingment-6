import React from 'react';
import { IoCheckmarkDoneSharp,} from 'react-icons/io5';

const Pricing = () => {
    return (
        <div className='lg:p-8 md:p-6 sm:p-4 space-y-9'>
          <div className='text-center'>
            <h1 className='text-5xl font-semibold'>Simple, Transparent Pricing</h1>
            <p className='text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
          </div>
          <section className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 w-11/12 mx-auto'>
             <div className='p-4 space-y-6 py-6 bg-[#f4f4f4] w-[380px] max-h-[448px] min-h-[448px] rounded-2xl relative pt-5 shadow-2xl'>
              <div>
              <h1 className='text-2xl font-medium'>Starter</h1>
              <p>Perfect for getting started</p>
              </div>
              <p><span className='text-3xl font-bold'>$0</span>/month</p>
              <ul>
                <li className='flex gap-1 items-center'><span className='text-green-500 text-xl'><IoCheckmarkDoneSharp /></span>Access to 10 free tools</li>
                <li className='flex gap-1 items-center'><span className='text-green-500 text-xl'><IoCheckmarkDoneSharp /></span>Basic templates</li>
                <li className='flex gap-1 items-center'><span className='text-green-500 text-xl'><IoCheckmarkDoneSharp /></span>Community support</li>
                <li className='flex gap-1 items-center'><span className='text-green-500 text-xl'><IoCheckmarkDoneSharp /></span>1 project per month</li>
               
              </ul>
             <button className='btn  bg-linear-to-r from-[#9514FA] to-[#4F39F6]  text-white w-[332px] absolute mt-28 rounded-3xl'>Get Started Free</button>
             </div>
             <div className='p-4 space-y-6 py-6 bg-linear-to-r from-[#9514FA] to-[#4F39F6]  text-white w-[380px] max-h-[448px] min-h-[448px] rounded-2xl relative pt-5 shadow-2xl'>
               <span className="badge badge-xs absolute p-3.5 rounded-4xl bg-[#FEF3C6] text-[#BB4D00] -mt-7 ml-27">Most Popular</span>
              <div>
              <h1 className='text-2xl font-medium'>Pro</h1>
              <p>Best for professionals</p>
              </div>
              <p><span className='text-3xl font-bold'>$29</span>/month</p>
              <ul>
                <li className='flex gap-1 items-center'><span className='text-green-500 text-xl'><IoCheckmarkDoneSharp /></span>Access to all premium tools</li>
                <li className='flex gap-1 items-center'><span className='text-green-500 text-xl'><IoCheckmarkDoneSharp /></span>Unlimited templates</li>
                <li className='flex gap-1 items-center'><span className='text-green-500 text-xl'><IoCheckmarkDoneSharp /></span>Priority support</li>
                <li className='flex gap-1 items-center'><span className='text-green-500 text-xl'><IoCheckmarkDoneSharp /></span>Unlimited projects</li>
                <li className='flex gap-1 items-center'><span className='text-green-500 text-xl'><IoCheckmarkDoneSharp /></span>Cloud sync</li>
                <li className='flex gap-1 items-center'><span className='text-green-500 text-xl'><IoCheckmarkDoneSharp /></span>Advanced analytics</li>
               
              </ul>
             <button className='btn   w-[332px] absolute mt-18 rounded-3xl'><span className='bg-linear-to-r from-[#9514FA] to-[#4F39F6] text-transparent bg-clip-text'>Start Pro Trial</span></button>
             </div>
             <div className='p-4 space-y-6 py-6 bg-[#f4f4f4] w-[380px] max-h-[448px] min-h-[448px] rounded-2xl relative pt-5 shadow-2xl'>
              <div>
              <h1 className='text-2xl font-medium'>Enterprise</h1>
              <p>For teams and businesses</p>
              </div>
              <p><span className='text-3xl font-bold'>$99</span>/month</p>
              <ul>
                <li className='flex gap-1 items-center'><span className='text-green-500 text-xl'><IoCheckmarkDoneSharp /></span>Everything in Pro</li>
                <li className='flex gap-1 items-center'><span className='text-green-500 text-xl'><IoCheckmarkDoneSharp /></span>Team collaboration</li>
                <li className='flex gap-1 items-center'><span className='text-green-500 text-xl'><IoCheckmarkDoneSharp /></span>Custom integration</li>
                <li className='flex gap-1 items-center'><span className='text-green-500 text-xl'><IoCheckmarkDoneSharp /></span>Dedicated support</li>
                <li className='flex gap-1 items-center'><span className='text-green-500 text-xl'><IoCheckmarkDoneSharp /></span>SLA guarantee</li>
                <li className='flex gap-1 items-center'><span className='text-green-500 text-xl'><IoCheckmarkDoneSharp /></span>Custom brandingt</li>
               
              </ul>
             <button className='btn  bg-linear-to-r from-[#9514FA] to-[#4F39F6]  text-white w-[332px] absolute mt-18 rounded-3xl'>Contact Sales</button>
             </div>
          </section>
        </div>
    );
};

export default Pricing;