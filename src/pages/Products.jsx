import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../context/DataContext'
import FilterSection from '../components/FilterSection';
import loading1 from "../assets/src_assets_Loading4.webm"
import ProductCard from '../components/ProductCard';
import Pageslider from '../components/Pageslider';
// import Lottie from "lottie-react"
// import notfound from "../assets/found.mp4"
function Products() {
  const {data,Totalapi}=useContext(DataContext)
 const [search,setsearch]=useState("")
 const [Brand,setbrand]=useState("All")
 const [category,setcategory]=useState("All")
 const [priceRange,setPriceRange]=useState([0,4999])
  const [page,setpage]=useState(1)


 const filterData=data.filter((item)=>
  item.title.toLowerCase().includes(search.toLowerCase()) && 
  (category==="All" || item.category===category ) &&
  (Brand==="All" || item.Brand===Brand)&&
  item.price >= priceRange[0] && item.price <= priceRange[1]
  )
 const shortpagehandler=(selectedPage)=>{
  setpage(selectedPage)
 }
 const dynamicell=Math.ceil(filterData?.length/8)
 useEffect(()=>{
    Totalapi()
    window.scroll(0,0)
  },[])
  return (
    <div className='max-w-6xl    mx-auto  px-4 pb-10 '>
      <div className='flex gap-8  '>
        {
data.length > 0 ?(
<div className=''>
<div>
  <FilterSection search={search} setsearch={setsearch} Brand={Brand} setbrand={setbrand} category={category} setcategory={setcategory} priceRange={priceRange} setPriceRange={setPriceRange} />
  {
  filterData?.length>0?(
    <div className='flex justify-center flex-col items-center'>
<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-8'>
  {
    filterData.slice(page * 8 - 8, page * 8).map((items,index)=>{
      return <ProductCard key={index} items={items} />
    })
  }
</div>
<Pageslider shortpagehandler={shortpagehandler} page={page} dynamicell={dynamicell} />

    </div>
  ):(
    <div className='flex justify-center  h-[500px] text-center w-full  '>
<h1 className='text-center flex md:text-7xl text-4xl justify-center items-center h-[400px]'>data not found</h1>

</div>
  )
  }
</div>

</div>
):(
<div className='flex items-center justify-center text-4xl text-center w-full h-[400px]'>
<video className='text-5xl' loop muted autoPlay>
  <source src={loading1} type='video/webm' />
</video>
</div>
)
        }
      </div>
    </div>
  )
}

export default Products