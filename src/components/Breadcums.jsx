import React from 'react'
import { useNavigate } from 'react-router-dom'

function Breadcums({title}) {
    const navigate=useNavigate()
  return (
    <div className='max-w-6xl my-10 mx-auto inset-0 font-serif'>
        <h1 className='text-gray-400 font-semibold flex gap-2' >
            <span onClick={()=>navigate("/")} className='cursor-pointer'>home /</span>
            <span onClick={()=>navigate("/products")} className='cursor-pointer'>product /</span>
            {
                title
            }
        </h1>
    </div>
  )
}

export default Breadcums