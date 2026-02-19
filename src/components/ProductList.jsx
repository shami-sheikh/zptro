import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function ProductList({ product }) {
    const {addToCart}=useContext(CartContext)
    const navigate=useNavigate()
  return (
   <div className="mt-4 space-y-4 rounded-lg font-serif">
  <div className="bg-white/10 grid grid-cols-1 md:grid-cols-2 gap-7 p-6 rounded-lg">
    
    {/* Image - centered */}
    <div className="flex items-center justify-center">
      <img
      onClick={()=>navigate(`/products/${product.id}`)}
        src={product.image}
        alt={product.title}
        className="max-h-60 w-60 object-contain
                   drop-shadow-[0_0_30px_rgba(255,0,60,0.3)]
                   mix-blend-lighten
                   hover:scale-105 transition-all duration-500"
      />
    </div>

    {/* Product details - centered */}
    <div className="flex flex-col justify-center">
      <h1 className=" font-semibold text-white leading-relaxed">
        {product.description}
      </h1>
      <p className=" py-3 text-2xl font-mono font-bold text-red-500 pt-4 gap-4 flex items-center">${product.price} <span className="text-sm text-gray-400 ">( 9% off )</span></p>
      <p>Free Delivery, <span className="text-purple-200 font-serif font-bold">Fri,18 April</span> </p>
<p>or fastest delivery <span className="text-purple-200 font-serif font-bold">tomorrow 17 April</span></p>
<button className="mt-3 bg-red-500 py-2 px-4 rounded-xl hover:bg-red-500 w-full" onClick={()=>addToCart(product)}>add to cart</button>
    </div>
    
  </div>
</div>
  );
}

export default ProductList;
