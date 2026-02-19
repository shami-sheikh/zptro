import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
function Footer() {
  return (
    <div className='bg-[#101828] text-purple-50 md:h-72 h-screen flex pt-4 font-serif w-full px-6 lg:px-8 '>
        <div className='grid grid-cols-1 md:grid-cols-4 justify-between w-full px-6 md:px-12 mt-4  '>
<div className='flex flex-col '>
    <h1 className='font-semibold text-xl md:text-2xl'>
        <span className='text-red-500  '>Z</span>
        aptro
    </h1>
<p className='py-3'>Powering Your World with the Best in Electronics.</p>
<p>123 Electronics St, Style City, NY 10001</p>
<p>Email: support@Zaptro.com</p>
<p>Phone: (123) 456-7890</p>
</div>
<div className='space-y-3'>
    <h1 className='text-xl font-semibold'>Customer Service</h1>
    <p>Contact Us</p>
    <p>Shipping & Returns</p>
    <p>FAQs</p>
    <p>Order Tracking</p>
    <p>Size Guide</p>
</div>
<div>
    <h1 className='text-xl font-semibold '>Follow Us</h1>
    <div className='flex gap-3 text-xl  pt-3'> 
<FaFacebook />
<FaInstagramSquare />
<FaSquareXTwitter />
    </div>
</div>
<div>
    <h1 className='text-xl font-semibold  '>Stay in the Loop</h1>
    <p className='py-3'>Subscribe to get special offers, free giveaways, and more</p>
<div className='flex'>
        <input type="text" className=' bg-white px-6 rounded-lg py-3 rounded-r-none  ' placeholder='your email adress '/>
    <button className=' py-3 px-3 bg-red-500 rounded-lg rounded-l-none '>Subscribe</button>
</div>
</div>
        </div>
    </div>
  )
}

export default Footer
