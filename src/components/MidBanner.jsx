import React from "react";
import banner from "../assets/banner1.jpg";
function MidBanner() {
  return (
    <div className="bg-[#060610] py-3 md:py-24 ">
      <div
        className="relative max-w-7xl mx-auto md:rounded-2xl pt-28  bg-cover h-[550px] md:h-[600px] "
        style={{
          backgroundImage: `url(${banner})`,
          position: `center`,
          backgroundAttachment: "fixed",
        }}
      >
<div className="text-white font-serif items-center px-4 text-center ">
<h1 className="text-4xl md:text-6xl font-semibold">Next-Gen Electronics at Your Fingertips</h1>
<h2 className="py-4 text-xl">Discover the latest tech innovations with unbeatable prices and free shipping on all orders.</h2>
<button className="py-2 bg-red-500 px-3 rounded-lg hover:bg-red-600 active:scale-95 ">shop now</button>
</div>

      </div>
    </div>
  );
}

export default MidBanner;
