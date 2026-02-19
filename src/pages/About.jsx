import React from "react";
import { Zap, Shield, Truck, HeadphonesIcon, Award, Sparkles } from "lucide-react";
import {Link} from "react-router-dom"
function About() {
  return (
    <div className="min-h-screen bg-[#060610] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,0,60,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,0,60,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[150px] z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px] z-0" />

      <div className="relative z-10 flex justify-center px-4 py-16 md:py-24">
        <div className="max-w-5xl w-full">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            {/* Top line decoration */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-red-500"></div>
              <Zap className="text-red-500" size={20} fill="currentColor" />
              <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-red-500"></div>
            </div>

            <h1 
              className="text-5xl md:text-7xl font-black text-white mb-4 uppercase tracking-tight"
              style={{ textShadow: "0 0 60px rgba(255,0,60,0.4)" }}
            >
              About <span className="bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">Zaptro</span>
            </h1>
            
            <p className="text-white/60 text-lg font-mono max-w-2xl mx-auto tracking-wide">
              Your one-stop destination for cutting-edge electronics
            </p>
          </div>

          {/* Intro Card */}
          <div className="bg-[#0a0b14] border border-white/5 rounded-2xl p-8 md:p-12 mb-12 relative overflow-hidden group hover:border-red-500/30 transition-all duration-500">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-red-500/20"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-red-500/20"></div>

            <p className="text-gray-300 text-lg leading-relaxed text-center relative z-10">
              Welcome to <span className="text-red-400 font-bold">Zaptro</span>, your one-stop destination for the latest and
              greatest in electronics. From cutting-edge gadgets to must-have
              accessories, we're here to power up your tech life with premium
              products and unbeatable service.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Mission */}
            <div className="bg-[#0a0b14] border border-white/5 rounded-2xl p-8 hover:border-red-500/30 transition-all duration-500 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award className="text-red-500" size={24} />
                </div>
                <h2 className="text-3xl font-black text-white uppercase tracking-tight">
                  Our Mission
                </h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                At Zaptro, our mission is to make innovative technology accessible
                to everyone. We're passionate about connecting people with the
                tools and tech they need to thrive in a digital world — all at
                competitive prices and delivered with speed and care.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-[#0a0b14] border border-white/5 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-500 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Sparkles className="text-purple-500" size={24} />
                </div>
                <h2 className="text-3xl font-black text-white uppercase tracking-tight">
                  Our Vision
                </h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We envision a future where technology elevates everyday life. At Zaptro, 
                we're committed to staying ahead of the curve, offering cutting-edge 
                solutions that are both practical and affordable.
              </p>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="bg-[#0a0b14] border border-white/5 rounded-2xl p-8 md:p-12 mb-12 relative overflow-hidden">
            {/* Animated gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-500/5 to-purple-500/5 rounded-full blur-3xl"></div>

            <h2 className="text-3xl md:text-4xl font-black text-white mb-8 uppercase tracking-tight text-center">
              Why Choose <span className="text-red-500">Zaptro</span>?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 relative z-10">
              {/* Feature 1 */}
              <div className="flex items-start gap-4 p-5 bg-white/5 rounded-xl border border-white/5 hover:border-red-500/30 hover:bg-red-500/5 transition-all group">
                <div className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Shield className="text-red-500" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Premium Quality</h3>
                  <p className="text-gray-400 text-sm">Top-quality electronic products from trusted brands</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4 p-5 bg-white/5 rounded-xl border border-white/5 hover:border-red-500/30 hover:bg-red-500/5 transition-all group">
                <div className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Truck className="text-red-500" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Fast Shipping</h3>
                  <p className="text-gray-400 text-sm">Lightning-fast and secure delivery to your door</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4 p-5 bg-white/5 rounded-xl border border-white/5 hover:border-red-500/30 hover:bg-red-500/5 transition-all group">
                <div className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <HeadphonesIcon className="text-red-500" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">24/7 Support</h3>
                  <p className="text-gray-400 text-sm">Reliable customer support, always ready to help</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start gap-4 p-5 bg-white/5 rounded-xl border border-white/5 hover:border-red-500/30 hover:bg-red-500/5 transition-all group">
                <div className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Award className="text-red-500" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Easy Returns</h3>
                  <p className="text-gray-400 text-sm">Hassle-free returns and shopping experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="relative bg-gradient-to-br from-red-500/10 via-purple-500/10 to-red-500/10 rounded-2xl p-10 md:p-16 text-center border border-red-500/20 overflow-hidden group">
            {/* Animated border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/20 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>

            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight relative z-10">
              Join the Zaptro <span className="text-red-500">Family</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto relative z-10">
              Whether you're upgrading your setup or exploring the latest innovations, 
              Zaptro is your trusted partner in all things tech. Let's build the future together.
            </p>
          <Link to={"/products"}>
            <button  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-10 py-4 rounded-xl font-bold text-white uppercase tracking-wider transition-all active:scale-95 shadow-lg shadow-red-500/30 relative z-10">
              Start Shopping Now
            </button>
          </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;