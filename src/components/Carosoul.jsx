import React, { useContext, useRef, useState } from "react";
import { DataContext } from "../context/DataContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { ArrowRight, ArrowLeft, ShoppingBag, Zap } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Categary from "./Categary";
import MidBanner from "./MidBanner";
import Feature from "./Feature";
import { useNavigate } from "react-router-dom";

function Carosoul({ product }) {
  const navigate = useNavigate();
  const { data, loading, error } = useContext(DataContext);
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (loading)
    return (
      <div className="w-full h-[600px] bg-[#060610] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-white font-mono tracking-widest text-sm animate-pulse">
            LOADING...
          </p>
        </div>
      </div>
    );

  if (error)
    return <div className="text-center py-10 text-red-500">Error: {error}</div>;

  if (!data || data.length === 0)
    return <div className="text-center py-10">No products</div>;

  const products = data.slice(0, 7);

  return (
    <>
      <div className="w-full relative font-serif overflow-hidden bg-[#060610]">
        {/* Animated background grid */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,0,60,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,0,60,0.04) 1px, transparent 1px)
          `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Top scanline bar */}
        <div className="absolute top-0 left-0 right-0 h-[3px] z-30 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-80" />

        {/* Slide counter + nav bar */}
        <div
          className="absolute top-0 left-0 right-0 h-14 z-20 flex items-center justify-between px-6 md:px-16"
          style={{
            background: "rgba(6,6,16,0.85)",
            backdropFilter: "blur(12px)",
          }}
        >
          {/* Brand tag */}
          <div className="flex items-center gap-2">
            <Zap size={16} className="text-red-500" fill="currentColor" />
            <span className="text-white text-xs font-mono tracking-[0.3em] uppercase">
              Zaptro Store
            </span>
          </div>

          {/* Nav buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => swiperRef.current?.swiper.slidePrev()}
              className="group w-9 h-9 border border-white/10 hover:border-red-500 rounded flex items-center justify-center transition-all duration-300 hover:bg-red-500/10"
            >
              <ArrowLeft
                size={16}
                className="text-white/50 group-hover:text-red-400 transition-colors"
                strokeWidth={2}
              />
            </button>
            <button
              onClick={() => swiperRef.current?.swiper.slideNext()}
              className="group w-9 h-9 border border-white/10 hover:border-red-500 rounded flex items-center justify-center transition-all duration-300 hover:bg-red-500/10"
            >
              <ArrowRight
                size={16}
                className="text-white/50 group-hover:text-red-400 transition-colors"
                strokeWidth={2}
              />
            </button>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          slidesPerView={1}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={900}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {products.map((product, index) => (
            <SwiperSlide key={product.id}>
              <div className="relative w-full min-h-[600px] md:min-h-[680px] flex items-center overflow-hidden">
                {/* BG glow blobs */}
                <div className="absolute inset-0 z-0">
                  <div
                    className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full opacity-20 blur-[120px]"
                    style={{
                      background:
                        "radial-gradient(circle, #ff003c, transparent)",
                    }}
                  />
                  <div
                    className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full opacity-10 blur-[100px]"
                    style={{
                      background:
                        "radial-gradient(circle, #7c3aed, transparent)",
                    }}
                  />
                </div>

                {/* Diagonal slash accent */}
                <div
                  className="absolute right-0 top-0 w-1/2 h-full opacity-10 hidden md:block"
                  style={{
                    background:
                      "linear-gradient(135deg, transparent 40%, rgba(255,0,60,0.3) 100%)",
                    clipPath: "polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)",
                  }}
                />

                {/* MOBILE LAYOUT */}
                <div className="flex flex-col md:hidden bg-[#060610] w-full items-center pt-20 pb-10 px-6 gap-6 z-10">
                  {/* Category badge */}
                  <div className="flex items-center gap-2 border border-red-500/30 rounded-full px-4 py-1 bg-red-500/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-red-400 text-xs font-mono uppercase tracking-widest">
                      {product.category}
                    </span>
                  </div>

                  {/* Image */}
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-red-500/10 blur-2xl scale-110" />
                    <div
                      className="w-[220px] h-[220px] rounded-full flex items-center justify-center"
                      style={{
                        background:
                          "radial-gradient(circle at center, rgba(124,58,237,0.15), transparent)",
                        boxShadow:
                          "0 0 60px rgba(255,0,60,0.15), inset 0 0 60px rgba(124,58,237,0.1)",
                        border: "1px solid rgba(255,255,255,0.05)",
                      }}
                    >
                      <img
                        onClick={() =>
                          navigate(`/products/${product.id}`)
                        }
                        src={product.image}
                        alt={product.title}
                        className="w-[180px] h-[180px] object-contain drop-shadow-[0_0_25px_rgba(255,0,60,0.4)] mix-blend-lighten"
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="text-center space-y-3">
                    <p className="text-white text-lg font-bold uppercase leading-tight line-clamp-2 tracking-wide">
                      {product.title}
                    </p>
                    <p className="text-gray-400 text-xs line-clamp-2 font-mono">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-center gap-4">
                      <span className="text-red-400 text-2xl font-black font-mono">
                        ${product.price}
                      </span>
                      <button  onClick={() =>
                          navigate(`/products/${product.id}`)
                        } className="flex items-center gap-2 bg-red-500 hover:bg-red-600 active:scale-95 text-white text-sm font-bold px-5 py-2.5 rounded transition-all duration-200">
                        <ShoppingBag size={14} />
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>

                {/* DESKTOP LAYOUT */}
                <div className="hidden md:flex w-full max-w-6xl mx-auto px-16 items-center justify-between gap-10 pt-14 pb-10 z-10">
                  {/* Left text */}
                  <div className="flex-1 space-y-7 max-w-[520px]">
                    {/* Category */}
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-[2px] bg-red-500" />
                      <span className="text-red-400 text-xs font-mono uppercase tracking-[0.3em]">
                        {product.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h2
                      className="text-white text-4xl xl:text-5xl font-black uppercase leading-tight tracking-tight"
                      style={{ textShadow: "0 0 40px rgba(255,0,60,0.2)" }}
                    >
                      {product.title}
                    </h2>

                    {/* Description */}
                    <p className="text-white/40 text-sm font-mono line-clamp-3 leading-relaxed tracking-wide">
                      {product.description}
                    </p>

                    {/* Price + CTA */}
                    <div className="flex items-center gap-6">
                      <div>
                        <p className="text-white/30 text-xs font-mono uppercase tracking-widest mb-1">
                          Price
                        </p>
                        <span
                          className="text-4xl font-black font-mono"
                          style={{
                            background:
                              "linear-gradient(135deg, #ff003c, #ff6b6b)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}
                        >
                          ${product.price}
                        </span>
                      </div>

                      <button
                       onClick={() =>
                          navigate(`/products/${product.id}`)
                        }
                        className="group flex items-center gap-3 bg-gradient-to-br from-red-500 to-purple-500 active:scale-95 text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 text-sm uppercase tracking-widest"
                        style={{ boxShadow: "0 0 30px rgba(255,0,60,0.3)" }}
                      >
                        <ShoppingBag size={16} />
                        Shop Now
                        <ArrowRight
                          size={14}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </button>
                    </div>
                  </div>

                  {/* Right image */}
                  <div className="relative flex items-center justify-center flex-shrink-0">
                    {/* Rotating ring */}
                    <div
                      className="absolute w-[420px] h-[420px] rounded-full border border-red-500/10 animate-spin"
                      style={{ animationDuration: "20s" }}
                    />
                    <div
                      className="absolute w-[360px] h-[360px] rounded-full border border-purple-500/10 animate-spin"
                      style={{
                        animationDuration: "15s",
                        animationDirection: "reverse",
                      }}
                    />

                    {/* Glow circle */}
                    <div
                      className="absolute w-[300px] h-[300px] rounded-full blur-3xl opacity-30"
                      style={{
                        background:
                          "radial-gradient(circle, rgba(255,0,60,0.6), rgba(124,58,237,0.4))",
                      }}
                    />

                    {/* Image container */}
                    <div
                      className="w-[380px] h-[380px] rounded-full flex items-center justify-center relative z-10"
                      style={{
                        background:
                          "radial-gradient(circle at 40% 40%, rgba(124,58,237,0.12), rgba(255,0,60,0.06), transparent)",
                        border: "1px solid rgba(255,255,255,0.04)",
                        boxShadow:
                          "0 0 80px rgba(255,0,60,0.12), inset 0 0 80px rgba(124,58,237,0.06)",
                      }}
                    >
                      <img
                      onClick={() =>
                          navigate(`/products/${product.id}`)
                        }
                        src={product.image}
                        alt={product.title}
                        className="w-[300px] h-[300px] object-contain
                                 drop-shadow-[0_0_40px_rgba(255,0,60,0.5)]
                                 hover:scale-110 hover:drop-shadow-[0_0_60px_rgba(255,0,60,0.7)]
                                 transition-all duration-700
                                 mix-blend-lighten"
                      />
                    </div>

                    {/* Corner decorations */}
                    <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-red-500/50" />
                    <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-red-500/50" />
                  </div>
                </div>

                {/* Bottom line */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Categary />
      <MidBanner />
      <Feature />
    </>
  );
}

export default Carosoul;
