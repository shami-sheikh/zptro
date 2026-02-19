import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";

function FilterSection({search,setsearch,Brand,setbrand,category,setcategory,priceRange,setPriceRange}) {
  const { categaryOnlyData, branonlydata } = useContext(DataContext);
  const handleCatogry=(e)=>{
    setcategory(e.target.value)
    console.log(category);
    
  }
  const handleBrandchange=(e)=>{
    setbrand(e.target.value)
  }
  
    
  return (
    <div className="py-5 mt-10 bg-red-500/10 w-full p-4 rounded-lg shadow-md">
      {/* Main Container - Vertical on mobile, Horizontal on desktop */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        
        {/* Search Input */}
        <div className="md:w-1/4">
          <input
            type="text"
            placeholder="Search products..."
            className="text-black w-full py-2 px-4 rounded-lg border border-red-500/30 outline-none focus:border-red-500"
            autoComplete="off"
            value={search}
            onChange={(e)=>setsearch(e.target.value)}
          />
        </div>
        
        {/* Category Section */}
        <div className="md:w-1/4">
          <h1 className="font-semibold text-lg text-gray-100 uppercase mb-3">Category</h1>
          <div className="flex flex-col gap-2">
            {categaryOnlyData?.map((item, index) => {
              return (
                <div key={index} className="flex gap-2 items-center ">
                  <input
                  checked={category===item} 
                  name={item}
                value={item}
                onChange={handleCatogry}
                    type="checkbox" 
                    id={`category-${index}`}
                    className="cursor-pointer w-4 h-4"
                  />
                  <label 
                    htmlFor={`category-${index}`}
                    className="cursor-pointer uppercase text-sm hover:text-red-400 transition-colors"
                  >
                    {item}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Brand Section */}
        <div className="md:w-1/4">
          <h1 className="font-semibold text-lg text-gray-100 uppercase mb-3">Brand</h1>
          <select 
            className="w-full bg-[#0f1220] text-white border border-red-500/30 rounded-lg px-3 py-2 outline-none focus:border-red-500 cursor-pointer"
         onChange={handleBrandchange}
         value={Brand}
         >
            {
              branonlydata?.map((items, index) => {
                return <option value={items} key={index}>{items.toUpperCase()}</option>
              })
            }
          </select>
        </div>
        
        {/* Price Section */}
        <div className="md:w-1/4">
          <h1 className="font-semibold text-lg text-gray-100 uppercase mb-3">Price</h1>
          <div className="flex flex-col gap-3">
            <input 
              type="range" 
              min="0" 
              max="4999" 
              className="w-full accent-red-500"
              value={priceRange[1]}
              onChange={(e)=>setPriceRange([priceRange[0],Number(e.target.value)])}
            />
            <div className="flex justify-between text-sm text-gray-300">
              <span>${priceRange[0]} </span>
              <span>${priceRange[1]}</span>
            </div>
            <button onClick={()=>{setsearch(""); setbrand=("All"); setcategory("All"); setPriceRange([0,4999]); setbrand("") } } className="bg-gradient-to-br from-red-500 to-purple-500 active:scale-90 w-full px-2 py-2 rounded-lg text-white">Reset Fillter</button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default FilterSection;