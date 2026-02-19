import React, { useContext } from "react";
import { ShoppingCartIcon } from "lucide-react";
import { IoMdStar } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
function ProductCard({ items }) {
  // console.log(items);
  
  const {addToCart}=useContext(CartContext)
  const navigate = useNavigate();
  return (
    <div className="relative bg-[#0f1220] border border-gray-700 cursor-pointer p-2 h-max rounded-2xl shadow-2xl hover:scale-95 transition-all">
      <div className="flex px-4 pt-2 ">
        <div className="absolute top-3 left-3 z-10">
          <div className="bg-red-500/10 border border-red-500/30 rounded-full px-3 py-1 backdrop-blur-sm">
            <span className="text-red-400 text-[10px] font-mono uppercase tracking-widest">
              {items.category}
            </span>
          </div>
        </div>
        <div className="">
          <h1 className="text-yellow-300 absolute right-3 flex bg-black rounded-2xl px-3 mt-2 py-1">
            {" "}
            <IoMdStar className="text-yellow-500 text-xl" /> {items.rating.rate}
          </h1>
        </div>{" "}
      </div>
      <div className="relative h-64 flex items-center justify-center p-6 bg-gradient-to-br from-white/5 to-transparent overflow-hidden">
        {/* Animated gradient blob */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-3xl transition-all duration-700"
          style={{
            background:
              "radial-gradient(circle, rgba(255,0,60,0.15), rgba(124,58,237,0.1))",
          }}
        />

        <img
          src={items.image}
          alt={items.title}
          className="relative z-10 w-full h-full object-contain mix-blend-lighten drop-shadow-[0_0_20px_rgba(255,0,60,0.2)] transition-transform duration-700 group-hover:scale-110"
          onClick={() => navigate(`/products/${items.id}`)}
        />
      </div>
      <h3 className="  text-gray-400 pt-3 font-semibold text-sm leading-tight line-clamp-2 group-hover:text-red-400 transition-colors">
        {items.title}
      </h3>
      <p className="text-sm pt-5">price</p>
      <p className="p-1 text-lg text-red-500 font-semibold">${items.price}</p>
      <div className="flex">
        <button  onClick={()=>addToCart(items)} className=" w-full items-center flex gap-3 bg-gradient-to-r from-red-500 to-purple-500 px-3 py-2 rounded-lg active:scale-90">
          <ShoppingCartIcon color="#ffffff"/> add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
