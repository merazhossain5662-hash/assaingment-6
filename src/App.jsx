
import { Suspense, useState } from 'react'
import './App.css'
import FooterDiv from './FooterDiv'
import HeroDiv from './HeroDiv'
import HowToStart from './HowToStart'
import MainDiv from './MainDiv'
import MidLine from './MidLine'

import NavDiv from './NavDiv'
import Pricing from './Pricing'
import Transform from './Transform'
import Cart from './Cart'

const dataFetch= async () =>{
  const res = await fetch("/data.json")
  return res.json();
} 


function App() {
  const getData = dataFetch();
  const [active,setActive]=useState("Products")
  const [carts, setCarts]=useState([]);
  
  
  return (
    
    <>
    <div className=''>

   <NavDiv></NavDiv>
   <HeroDiv></HeroDiv>
   <MidLine></MidLine>
   <Suspense fallback={<div className="flex mx-auto my-4 w-52 flex-col gap-4">
  <div className="skeleton h-32 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>}> <div className='text-center my-4'>
        <h1 className='text-5xl font-semibold'>Premium Digital Tools</h1>
        <p>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
       {/* name of each tab group should be unique */}
<div className="tabs tabs-box justify-center ">
  <input onClick={()=>setActive("Products")} type="radio" name="my_tabs_1" className={`tab w-40 rounded-4xl ${active === "Products" ?"bg-linear-to-r from-[#9514FA] to-[#4F39F6]  text-white " : ""}`} aria-label="Products" defaultChecked />
  <input onClick={()=>setActive("Cart")} type="radio" name="my_tabs_1" className={`tab w-40 rounded-4xl ${active === "Cart" ?"bg-linear-to-r from-[#9514FA] to-[#4F39F6]  text-white " : ""}`} aria-label={`Cart (${carts.length})`} />
  
</div>
       </div>
       {active === "Products"?
        <MainDiv getData={getData} setActive={setActive} carts={carts} setCarts={setCarts}></MainDiv>: null
       }
  {active === "Cart" ?
    <Cart carts={carts} setCarts={setCarts}></Cart>: null
  }
   </Suspense>
   <HowToStart></HowToStart>
   <Pricing></Pricing>
   <Transform></Transform>
   <FooterDiv></FooterDiv>
    </div>
    </>
  )
}

export default App
