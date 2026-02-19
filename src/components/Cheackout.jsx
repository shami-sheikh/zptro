import React from 'react'
import { useNavigate } from 'react-router-dom'

function Cheackout() {
    const navigate=useNavigate()
  return (
    <div className='flex  items-center justify-center text-center  h-[500px] p-5 px-4'>
        <div className='flex space-y-4 flex-col items-center justify-center shadow-2xl py-5  bg-white/5 px-6 text-white  '>
<h1 className='text-2xl font-bold font-serif' >thank you for your order </h1>
<button onClick={()=>navigate("/products")} className='bg-red-500 hover:bg-red-600 py-2 px-4 rounded-xl'>Continue Shopping</button>
        </div>
    </div>
  )
}

export default Cheackout