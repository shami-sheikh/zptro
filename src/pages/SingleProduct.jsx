import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import loading1 from "../assets/src_assets_Loading4.webm";
import Breadcums from "../components/Breadcums";
import { ShoppingCart, Star, Shield, Truck, RotateCcw } from "lucide-react";
import { CartContext } from "../context/CartContext";
function SingleProduct() {
  const params = useParams();
  const [singleproduct, setsingleproduct] = useState("");
  const [productquentity, setQuantity] = useState(1);
const {addToCart}=useContext(CartContext)
  const increase = () => setQuantity(prev => prev + 1)
  const decrease = ()=> setQuantity(prev=> prev>1? prev-1:1)

  const onlysingleproduct = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/${params.id}`,
      );
      setsingleproduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    onlysingleproduct();
  }, []);
  // const OriginalPrice=Math.round(singleproduct.price + (singleproduct.price * singleproduct.discount/100))

  return (
    <div className="min-h-screen bg-[#060610] font-serif relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,0,60,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,0,60,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[150px] z-0" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[150px] z-0" />

      {singleproduct ? (
        <div className="relative z-10 px-4 md:px-6 pb-16 pt-6">
          <Breadcums title={singleproduct.title} />

          <div className="max-w-6xl mx-auto mt-8">
            {/* Main card */}
            <div className="bg-[#0a0b14] border border-white/5 rounded-2xl p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Image section */}
              <div className="relative flex items-center justify-center">
                {/* Glow blob */}
                <div className="absolute w-[300px] h-[300px] bg-red-500/10 rounded-full blur-3xl" />

                {/* Image container */}
                <div className="relative bg-white/5 border border-white/5 rounded-2xl p-8 w-full flex items-center justify-center h-[400px]">
                  <img
                    src={singleproduct.image}
                    alt={singleproduct.title}
                    className="max-h-[350px] w-full object-contain
                               drop-shadow-[0_0_30px_rgba(255,0,60,0.3)]
                               mix-blend-lighten
                               hover:scale-105 transition-all duration-500"
                  />
                </div>
              </div>

              {/* Product Details */}
              <div className="flex flex-col gap-6">
                {/* Category badge */}
                <div className="flex  items-center gap-2">
                  <div className="bg-red-500/10 border border-red-500/30 rounded-2xl px-4 py-1">
                    <h1 className="font-mono uppercase font-semibold tracking-widest">
                      {singleproduct.category}
                    </h1>
                  </div>
                </div>

                {/* Title */}
                {/* // style={{ textShadow: "0 0 30px rgba(255,0,60,0.2)" }} */}
                <div className="flex items-center ">
                  <h1 className="text-3xl font-serif font-bold text-white">
                    {singleproduct.title}
                  </h1>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={
                          i < Math.round(singleproduct.rating?.rate)
                            ? "text-yellow-400 fill-yellow-400 "
                            : "text-white/20"
                        }
                      />
                    ))}
                  </div>
                  <div>
                    <span className="text-sm  font-mono font-semibold text-white/60">
                      {singleproduct.rating?.rate} (
                      {singleproduct.rating?.count} review)
                    </span>
                  </div>
                </div>
                {/* quesity */}
               
              <div>
                 <p className="text-white/40 text-xs font-mono uppercase mb-3 tracking-widest ">
                    Quantity
                  </p>
                  <div className="flex ">
                  
                  <div className="flex gap-4 items-center">
                    <button
                      className="w-10 h-10 bg-white/5 rounded-3xl"
                      onClick={decrease}
                    >
                      -
                    </button>
                    <span>{productquentity}</span>
                    <button
                      className="w-10 h-10 bg-white/5 rounded-3xl"
                      onClick={increase}
                    >
                      +
                    </button>
                  </div>
                  {/* total quentity */}
                  <div className="flex items-center gap-3 pl-4 bodr  border-l border-white/10 ml-4">
                    <p className="text-sm font-semibold ">total</p>
                  <p className="text-red-400 font-black font-mono text-xl">
        ${(singleproduct.price * productquentity).toFixed(2)}
      </p>
                  </div>
                </div>
              </div>
                {/* Price */}
                <div>
                  <p className="text-white/40 text-xs font-mono uppercase tracking-widest mb-1">
                    Price
                  </p>
                  <span
                    className="text-5xl font-black font-mono"
                    style={{
                      background: "linear-gradient(135deg, #ff003c, #ff6b6b)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    ${singleproduct.price}
                  </span>
                </div>
                {/* Description */}
                <div className="space-y-3">
                  <p className="text-white/40 text-xs font-mono uppercase tracking-widest mb-1">
                    Description
                  </p>
                  <span className="text-lg font-serif">
                    {singleproduct.description}
                  </span>
                </div>
                {/* Buttons */}
                <div className="flex gap-3 items-center text-white font-serif mt-3  ">
                  <button onClick={()=>addToCart(singleproduct)} className="bg-red-500 py-4 px-4 flex justify-center gap-3 w-full rounded-xl font-bold   active:scale-90 hover:bg-red-600 transition-all duration-300">
                    <ShoppingCart size={20}  />
                    add to cart
                  </button>
                  <button className="flex justify-center   border border-white/10 hover:border-red-500/30 bg-white/5 hover:bg-red-500/10 text-white p-4 rounded-xl transition-all">
                    🤍
                  </button>
                </div>
                {/* Features */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t  border-white/5">
                  <div className="flex flex-col items-center  gap-2 ">
                    <div className="w-10 h-10 items-center justify-center flex bg-white/5 rounded-full">
                      <Truck size={20} className=" text-red-500" />
                    </div>
                    <h2 className="font-mono flex items-center justify-center md:ml-0 ml-5">
                      {" "}
                      free shipping
                    </h2>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 items-center justify-center flex bg-white/5 rounded-full">
                      <Shield size={20} className=" text-red-500" />
                    </div>
                    <h2 className="font-mono md:ml-0 ml-5">
                      {" "}
                      2 years warranty
                    </h2>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 items-center justify-center flex bg-white/5 rounded-full">
                      <RotateCcw size={20} className=" text-red-500" />
                    </div>
                    <h2 className="font-mono md:ml-0 ml-5"> easy return</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center w-full h-screen">
          <video loop muted autoPlay className="w-32 h-32">
            <source src={loading1} type="video/webm" />
          </video>
        </div>
      )}
    </div>
  );
}

export default SingleProduct;
