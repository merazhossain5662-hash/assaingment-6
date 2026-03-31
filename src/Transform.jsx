import React from 'react';

const Transform = () => {
    return (
        <div className='px-50 py-30 text-center bg-linear-to-r from-[#9514FA] to-[#4F39F6]  text-white space-y-7'>
          <div className='space-y-3'>
            <h1 className='text-5xl font-semibold'>Ready to Transform Your Workflow?</h1>
            <p className='text-[#c1c1c2] text-center'>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
          </div>
          <div>
            <div className='space-x-4 mb-3'>
                <button className='btn rounded-4xl p-6'><span className='bg-linear-to-r from-[#9514FA] to-[#4F39F6] text-transparent bg-clip-text'>Explore Products</span></button>

                <button className='btn bg-transparent outline-white text-white p-6.5 rounded-4xl'>View Pricing</button>
            </div>
              <p className='text-[#c1c1c2]'>14-day free trial • No credit card required • Cancel anytime</p>
          </div>
        </div>
    );
};

export default Transform;