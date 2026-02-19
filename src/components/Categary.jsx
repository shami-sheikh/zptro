import React, { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import {useNavigate} from "react-router-dom"
function Categary() {
  const { categaryOnlyData } = useContext(DataContext);
const navigate=useNavigate()
  return (
    <>
      <div className="bg-[#060610]   font-serif">
        <div className="py-7 md:flex grid grid-cols-2 gap-4 text-center font-semibold from-transparent md:max-w-7xl w-full   md:text-xl text-sm  md:mx-auto items-center  border-b text-white justify-around md:px-6 px-2">
          {categaryOnlyData?.map((item, index) => {
            return (
              <div key={index} >
                <div onClick={()=>navigate(`/category/${item}`)} className="bg-gradient-to-br from-red-500 to-purple-500 bg-transparent md:px-3 py-2 p-1 rounded-lg cursor-pointer">
                 {item}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Categary;
