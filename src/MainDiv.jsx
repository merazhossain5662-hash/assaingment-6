import React, { use, useState } from 'react';

import MainCard from './MainCard';
import Cart from './Cart';

const MainDiv = ({getData, setActive, carts, setCarts}) => {
    const datas= use(getData);
    // console.log(datas);
     
    return (
        <div>
      
       <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 w-11/12 mx-auto'>
        {datas.map(data=> 
     <MainCard key={data.id} data={data} carts={carts} setCarts={setCarts}></MainCard>
     
    

        )
        }
       </div>
       
        </div>
    );
};

export default MainDiv;