import React from 'react';

const MidLine = () => {
    return (
        <div className='text-lg  bg-linear-to-r from-[#9514FA] to-[#4F39F6]  text-white py-11'>
            <div className='w-8/12 mx-auto flex justify-around'>
            <div className='border-r-1 pr-35'>
                <h1 className='text-4xl font-bold'>50K+</h1>
                <p className=''>Active Users</p>
            </div>
            <div className='border-r-1 pr-35'>
                <h1 className='text-4xl font-bold'>200+</h1>
                <p>Premium Tools</p>
            </div>
            <div className='border-r-1 pr-35'>
                <h1 className='text-4xl font-bold'>4.9</h1>
                <p>Rating</p>
            </div>
            </div>
        </div>
    );
};

export default MidLine;