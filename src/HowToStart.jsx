import React from 'react';

const HowToStart = () => {
    return ( 
        <div className='bg-[#efefef] sm:p-4 md:p-6 lg:p-8'>
            <div className='w-10/12 mx-auto space-y-3.5'>
            <div className='text-center'>
                <h1 className='text-5xl font-bold'>Get Started in 3 Steps</h1>
                <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <section className='grid sm:grid-cols-1 py-8 gap-2 md:grid-cols-2 lg:grid-cols-3'>
                <div className='reletive bg-white rounded-lg shadow-lg p-9 w-[380px] space-y-3 text-center'>
                    <img className='mx-auto rounded-full p-1 bg-[#efefef]' src="/public/user.png" alt="" />
                    <h1 className='text-lg font-medium'>Create Account</h1>
                    <button className='absolute -mt-38 ml-39 bg-linear-to-r from-[#9514FA] to-[#4F39F6]  text-white p-1.5 text-sm rounded-full font-medium'>01</button>
                    <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div className='reletive bg-white rounded-lg shadow-lg p-9 w-[380px] space-y-3 text-center'>
                    <img className='mx-auto rounded-full p-1 bg-[#efefef]' src="/public/package.png" alt="" />
                    <h1 className='text-lg font-medium'>Choose Products</h1>
                    <button className='absolute -mt-38 ml-39 bg-linear-to-r from-[#9514FA] to-[#4F39F6]  text-white p-1.5 text-sm rounded-full font-medium'>02</button>
                    <p className='text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
                </div>
                <div className='reletive bg-white rounded-lg shadow-lg p-9 w-[380px] space-y-3 text-center'>
                    <img className='mx-auto rounded-full p-1 bg-[#efefef]' src="/public/rocket.png" alt="" />
                    <h1 className='text-lg font-medium'>Start Creating</h1>
                    <button className='absolute -mt-38 ml-39 bg-linear-to-r from-[#9514FA] to-[#4F39F6]  text-white p-1.5 text-sm rounded-full font-medium'>03</button>
                    <p className='text-[#627382]'>Download and start using your premium tools immediately.</p>
                </div>
            </section>
        </div>
        </div>
    );
};

export default HowToStart;