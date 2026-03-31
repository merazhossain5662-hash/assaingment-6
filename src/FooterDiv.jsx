import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SlSocialInstagram } from 'react-icons/sl';

const FooterDiv = () => {
    return (
        <div>
<footer className="footer sm:footer-horizontal bg-[#101727] text-white p-10">
  <aside>
  <h1 className='text-5xl font-bold'>DigiTools</h1>
    <p className='text-gray-400'>
     Premium digital tools for creators, professionals, and businesses. <br /> Work smarter with our suite of powerful tools.
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Product</h6>
    <a className="link link-hover">Features</a>
    <a className="link link-hover">Pricing</a>
    <a className="link link-hover">Templates</a>
    <a className="link link-hover">Integrations</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Blog</a>
    <a className="link link-hover">Careers</a>
    <a className="link link-hover">Press</a>
  </nav>
  <nav>
    <h6 className="footer-title">Resources</h6>
    <a className="link link-hover"> Documentation</a>
    <a className="link link-hover">Help Center</a>
    <a className="link link-hover">Community </a>
    <a className="link link-hover">Contact </a>
  </nav>
  <nav>
     <h6 className="footer-title">Social</h6>
     <section className='flex gap-2'>
   <div><SlSocialInstagram /></div>
   <div><FaFacebook /></div>
   <div><FaXTwitter /></div>
     </section>
  </nav>
</footer>

  <footer className="footer sm:footer-horizontal  bg-[#101727] text-gray-400 border border-x-0 border-b-0 border-t-gray-400 items-center p-4">
  <aside className="grid-flow-col items-center">
   
    <p> © {new Date().getFullYear()} Digitools - All right reserved</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <p>Privacy Policy </p>
    <p>Terms of Service</p>
    <p>Cookies</p>
  </nav>
</footer>

        </div>
    );
};

export default FooterDiv;