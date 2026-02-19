import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";
import { Handbag, Van } from "lucide-react";
import { useUser } from "@clerk/clerk-react"
import emptycart from "../assets/empty-cart.png"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast";
function Cart({location}) {
  const navigate=useNavigate()
  const { cartitems, setcartitems } = useContext(CartContext);
  const removeItem = (index) => {
    const update = cartitems.filter((_, i) => i !== index);
    setcartitems(update);
    toast.success("item is removed")

  };
  const increase = (index) => {
    const updated = cartitems.map((item, i) =>
      i === index ? { ...item, quantity: (item.quantity || 1) + 1 } : item,
    );
    setcartitems(updated);
    toast.success("quantity increase")

  };
  const decrease = (index) => {
    const updated = cartitems.map((item, i) =>
      i === index
        ? {
            ...item,
            quantity: (item.quantity || 1) > 1 ? (item.quantity || 1) - 1 : 1,
          }
        : item,
    );
    setcartitems(updated);
    toast.success("quantity decresase")
  };
  
  const total = cartitems
    .reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)
    .toFixed(2);

    const {user}=useUser()
    const allremove = () => {
    setcartitems([]);
    toast.success("all items are removed")

  };
  return (
    <div className="max-w-6xl mx-auto mt-8 font-serif h-fit">
      {cartitems.length > 0 ? (
        <div className=" ">
          {/* logo section */}
          <div className=" flex justify-between px-4">
            <div className="flex flex-col space-y-3">
              <h1
                className="text-4xl md:text-5xl font-black text-white md:ml-0 ml-5 uppercase tracking-tight"
                style={{ textShadow: "0 0 40px rgba(255,0,60,0.3)" }}
              >
                My
                <span className="bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent py-2">
                  Cart
                </span>
              </h1>
              <p className="md:ml-0 ml-5">
                {cartitems.length} item in your cart
              </p>
            </div>
            <div>
              <button
                onClick={allremove}
                className="bg-red-500 text-white active:scale-90 hover:bg-red-600 transition-all duration-200 px-4 py-2 rounded-xl relative top-0 "
              >
                empty cart
              </button>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="mt-10">
              {cartitems.map((items, index) => {
                return (
                  <div
                    key={index}
                    className=" shadow-2xl bg-[#0a0b14] border border-white/5 hover:border-red-500/20 w-full rounded-2xl mb-4 p-5 transition-all duration-300"
                  >
                    {/* Image + Details + Delete (top row) */}
                    <div className="flex items-start gap-4">
                      {/* Image */}
                      <div className="bg-white/5 rounded-xl p-3 flex-shrink-0">
                        <img
                          src={items.image}
                          className="object-contain w-16 h-16 md:w-20 md:h-20 mix-blend-lighten"
                          alt={items.title}
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-1 space-y-1 min-w-0">
                        <span className="bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono px-2 py-1 rounded-full uppercase tracking-widest inline-block">
                          {items.category}
                        </span>
                        <p className="text-sm font-bold text-white line-clamp-2 leading-tight">
                          {items.title}
                        </p>
                        <p className="font-black text-red-500 font-mono text-lg">
                          ${items.price}
                        </p>
                      </div>

                      {/* Delete - top right */}
                      <button
                        onClick={() => removeItem(index)}
                        className="w-9 h-9 bg-white/5 hover:bg-red-500/20 border border-white/10 hover:border-red-500/30 rounded-xl flex items-center justify-center transition-all active:scale-90 group flex-shrink-0"
                      >
                        <FaRegTrashAlt
                          onClick={removeItem}
                          className="text-white/40 group-hover:text-red-400 transition-colors text-sm"
                        />
                      </button>
                    </div>

                    {/* Quantity Controls (bottom row) */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                      <p className="text-white/40 text-xs font-mono uppercase tracking-wider">
                        Quantity
                      </p>
                      <div className="flex items-center">
                        <button
                          onClick={() => decrease(index)}
                          className="w-9 h-9 bg-red-500 hover:bg-red-600 active:scale-90 text-white font-bold text-lg rounded-l-xl transition-all flex items-center justify-center"
                        >
                          -
                        </button>
                        <div className="w-10 h-9 bg-red-500 hover:bg-red-600 text-white font-mono font-bold text-sm flex items-center justify-center">
                          {items.quantity || 1}
                        </div>
                        <button
                          onClick={() => increase(index)}
                          className="w-9 h-9 bg-red-500 hover:bg-red-600 active:scale-90 text-white font-bold text-lg rounded-r-xl transition-all flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-between">
            {/* product details section */}
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5 md:gap-20 ">
              <div className="flex flex-col h-fit py-4 mt-4 w-full bg-[#0a0b14] border border-white/5 rounded-lg shadow-2xl p-2 md:p-5">
                <h1 className="text-white py-5 font-bold text-2xl md:text-4xl font-mono text-center uppercase tracking-tight">
                  Delivery Info
                </h1>

                {/* Name Field */}
                <div className="space-y-2 mb-4">
                  <label className="text-white text-sm md:text-base font-semibold font-mono uppercase tracking-wider block">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={user?.fullName||""}
                    className="w-full bg-white/5 border border-white/10 focus:border-red-500/50 outline-none px-4 text-white py-3 rounded-xl transition-all"
                  />
                </div>

                {/* Address Field */}
                <div className="space-y-2">
                  <label className="text-white text-sm md:text-base font-semibold font-mono uppercase tracking-wider block">
                    Address
                  </label>
                  <input
                    type="text"
                    placeholder="Your address"
                 value={location?.county || ""}
                    className="w-full bg-white/5 border border-white/10 focus:border-red-500/50 outline-none px-4 text-white py-3 rounded-xl transition-all"
                  />
                </div>
                {/* location details */}
                <div className="grid grid-cols-1 md:grid-cols-2 mt-5 space-y-3 gap-3  items-center">
                  <div className="space-y-2 flex flex-col">
                    <label className="text-white text-sm md:text-base font-semibold font-mono uppercase tracking-wider block">
                      state
                    </label>
                    <input
                      type="text"
                      value={location?.state || ""}
                      placeholder="enter your state"
                      className="w-full bg-white/5 border border-white/10 focus:border-red-500/50 outline-none px-4 text-white py-3 rounded-xl transition-all"
                    />
                  </div>
                  <div className="space-y-2 ">
                    <label className="text-white text-sm md:text-base font-semibold font-mono uppercase tracking-wider block">
                      post code
                    </label>
                    <input
                    value={location?.postcode || ""}
                      type="text"
                      placeholder="enter your post code"
                      className="w-full bg-white/5 border border-white/10 focus:border-red-500/50 outline-none px-4 text-white py-3 rounded-xl transition-all"
                    />
                  </div>
                  <div className="space-y-2 flex flex-col">
                    <label className="text-white text-sm md:text-base font-semibold font-mono uppercase tracking-wider block">
                      country
                    </label>
                    <input
                    value={location?.country || ""}
                      type="text"
                      placeholder="enter your country"
                      className="w-full bg-white/5 border border-white/10 focus:border-red-500/50 outline-none px-4 text-white py-3 rounded-xl transition-all"
                    />
                  </div>
                  <div className="space-y-2 ">
                    <label className="text-white text-sm md:text-base font-semibold font-mono uppercase tracking-wider block">
                      phone
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={10}
                      autoComplete="off"
                      placeholder="enter your phone number"
                      className="w-full bg-white/5 border border-white/10 focus:border-red-500/50 outline-none px-4 text-white py-3 rounded-xl transition-all"
                    />
                  </div>
                </div>
              </div>
              {/* total product details */}
              <div>
                <div className="mt-5 w-full px-3 space-y-4 shadow-2xl pb-5 ">
                  <h1 className="text-white font-bold text-3xl font-mono py-4">
                    Bill details
                  </h1>
                  <div className="flex gap-2 items-center justify-between">
                    <h2 className="flex gap-2">
                      <Handbag />
                      <span className="text-sm fo">items total</span>
                    </h2>
                    ${(parseFloat(total) + 5).toFixed(2)}
                  </div>
                  <div className="flex gap-2 items-center justify-between">
                    <h2 className="flex gap-2">
                      <Van />
                      <span className="text-sm fo">Delivery charge</span>
                    </h2>
                    <p className="text-red-500 font-serif "><span className="text-gray-400 line-through">$25</span> <span>Free</span></p>
                  </div>
                  <div className="flex gap-2 items-center justify-between py-2 mt-4 pt-4 border-b border-white/5">
                    <h2 className="flex gap-2">
                      <Handbag />
                      <span className="text-sm fo">Handling charge</span>
                    </h2>
                    <p className="text-red-500">$5</p>
                  </div>
                  {/* grand total */}
                  <div className="mt-5 w-full ">
                    <div className="flex justify-between  mt-3">
                      <h1 className="text-white font-bold font-mono ">
                        Grand Total
                      </h1>
                      <span className="text-red-500 font-serif ">${total + 5}</span>
                    </div>
                    <div className="mt-5  ">
                      <h1 className="flex text-xl font-bold text-white pt-5">
                        Apply promocode
                      </h1>
                      <div className="mt-5 flex justify-between gap-2 pb-3 md:pb-0 ">
                        <input
                          type="text"
                          className=" w-full bg-white/5 border border-white/10 focus:border-red-500/50 outline-none px-4 text-white py-3 rounded-xl transition-all "
                        />
                        <button className="border-white/15 px-4 py-2 rounded-xl border active:scale-90">
                          Apply
                        </button>
                      </div>
                    </div>
                    <button onClick={()=>navigate("/checkout")} className="w-full px-4 py-2 rounded-xl bg-red-500 hover:bg-red-600 duration-200 transition-all mt-7 text-white  ">proceed to checkout</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col py-3 justify-center items-center h-fit">
          <h1 className="text-2xl font-bold font-serif text-red-500">Oh no! your cart is empty</h1>
          <img src={emptycart} className="w-[300px]" alt="" />
          <button onClick={()=>navigate("/products")} className="bg-red-500 hover:bg-red-500 transition-all text-white duration-200 px-4 py-2 rounded-xl">Continue Shopping</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
