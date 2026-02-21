import React, { useContext, useState } from "react";
import { MdLocationOn, MdOutlineArrowDropDown } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { CartContext } from "../context/CartContext";
// import { LogIn } from "lucide-react";
function Navbar({ location ,locationDropdown,setLocationDropdown}) {
  const [activeMenu, setActiveMenu] = useState(false);
  const navigate = useNavigate();
const {cartitems}=useContext(CartContext)

  return (
    <>
      {/* Overlay for mobile menu */}
      {activeMenu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
          onClick={() => setActiveMenu(false)}
        ></div>
      )}

      <div className="bg-[#060610] text-white w-full shadow-2xl py-4 font-serif">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
          
          {/* MOBILE SECTION */}
          <div className="md:hidden flex justify-between bg-[#060610] items-center w-full">
            {/* Logo */}
            <div onClick={() => navigate("/")} className="cursor-pointer">
              <h1 className="font-serif font-bold text-3xl">
                <span className="text-red-500">Z</span>
                <span className="text-gray-300 ">aptro</span>
              </h1>
            </div>

            {/* Right side icons */}
            <div className="flex items-center gap-4">
              {/* Location */}
              <div className="relative ">
                <MdLocationOn 
                  className="text-2xl text-red-500 cursor-pointer" 
                  onClick={() => setLocationDropdown(!locationDropdown)}
                />
                
                {/* Location Dropdown */}
                {locationDropdown && (
                  <div className="absolute  w-[300px] z-50 shadow-2xl top-10 right-0 ml-32 bg-white border-2 p-5 rounded-md">
                    <div className="flex justify-between items-center mb-4">
                      <h1 className="font-semibold text-xl ml-32">Location</h1>
                      <IoCloseSharp
                        className="cursor-pointer text-2xl"
                        onClick={() => setLocationDropdown(false)}
                      />
                    </div>
                    {location ? (
                      <div className="text-gray-700 text-sm ml-32">
                        <p><strong>City:</strong> {location.city || location.county}</p>
                        <p><strong>Postcode:</strong> {location.postcode}</p>
                        <p><strong>State:</strong> {location.state}</p>
                        <p><strong>Country:</strong> {location.country}</p>
                      </div>
                    ) : (
                      <p>Loading...</p>
                    )}
                  </div>
                )}
              </div>

              {/* Cart */}
              <Link to="/cart" className="relative">
                <FaCartShopping className="text-red-500 h-6 w-6 cursor-pointer" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                 {cartitems.length}
                </span>
              </Link>

             

              {/* Hamburger Menu Button */}
              <button 
                onClick={() => setActiveMenu(true)}
                className="text-3xl text-gray-800"
              >
                <IoMdMenu />
              </button>
            </div>
          </div>

          {/* Mobile Sidebar Menu */}
          <div
            className={`fixed top-0 right-0 h-full w-64 bg-[#060610] text-gray-400 font-serif shadow-lg z-50 transform transition-transform duration-300 lg:hidden ${
              activeMenu ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {/* Close button */}
            <div className="flex justify-between items-center p-6 border-b border-red-500">
              <h2 className="font-bold text-xl">Menu</h2>
              <IoCloseSharp 
                className="text-2xl cursor-pointer" 
                onClick={() => setActiveMenu(false)}
              />
            </div>

            {/* Menu Links */}
            <div className="flex ">
              <div className="flex flex-col p-6 gap-6 font-serif font-semibold text-lg text-gray-400">
              <NavLink 
                to="/" 
                onClick={() => setActiveMenu(false)}
                className={({ isActive }) => isActive ? "text-red-500" : "text-gray-400"}
              >
                Home
              </NavLink>
              <NavLink 
                to="/products" 
                onClick={() => setActiveMenu(false)}
                className={({ isActive }) => isActive ? "text-red-500" : "text-gray-400"}
              >
                Products
              </NavLink>
              <NavLink 
                to="/about" 
                onClick={() => setActiveMenu(false)}
                className={({ isActive }) => isActive ? "text-red-500" : "text-gray-400"}
              >
                About
              </NavLink>
              <NavLink 
                to="/cart" 
                onClick={() => setActiveMenu(false)}
                className={({ isActive }) => isActive ? "text-red-500" : "text-gray-400"}
              >
                Cart
              </NavLink>
            </div>
              {/* User Button */}
              <div className="absolute  text-6xl  right-2">
                <SignedOut>
                  <SignInButton mode="modal">
                    <button className="text-sm bg-red-500 px-3 py-1.5 rounded-lg text-white">
                      Login
                    </button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton afterSignOutUrl="/" />
                </SignedIn>
              </div>
          </div>
            </div>
           

          {/* DESKTOP SECTION */}
          <div className="hidden md:flex gap-7 items-center ">
            {/* Logo */}
            <div onClick={() => navigate("/")} className="cursor-pointer">
              <h1 className="font-serif font-bold text-3xl">
                <span className="text-red-500">Z</span>
                <span className="text-gray-500">aptro</span>
              </h1>
            </div>

            {/* Location */}
            <div className="relative">
              <div className="flex cursor-pointer gap-1 text-gray-400 items-center">
                <MdLocationOn className="text-xl text-red-500" />
                <div className="font-semibold text-sm">
                  {location ? (
                    <>
                      <p>{location.city || location.county}</p>
                      <p className="text-xs text-gray-400">{location.state}</p>
                    </>
                  ) : (
                    <p className="text-gray-400">Loading... auto detecting you location</p>
                  )}
                </div>
                <MdOutlineArrowDropDown
                  onClick={() => setLocationDropdown(!locationDropdown)}
                />
              </div>

              {/* Desktop Location Dropdown */}
{locationDropdown && (
  <div className="absolute w-[300px] z-50 shadow-2xl top-14 left-0 bg-[#060610] border-2 p-5 rounded-md">
    <div className="flex justify-between items-center mb-4">
      <h1 className="font-semibold text-xl">Location</h1>
      <IoCloseSharp
        className="cursor-pointer text-2xl"
        onClick={() => setLocationDropdown(false)}
      />
    </div>

    {/* Show location if already detected */}
    {location && (
      <div className="text-gray-400 text-sm mb-4">
        <p><strong>City:</strong> {location.city || location.county}</p>
        <p><strong>State:</strong> {location.state}</p>
        <p><strong>Country:</strong> {location.country}</p>
      </div>
    )}
  </div>
)}
            </div>
          </div>

          {/* Desktop Menu & Cart */}
          <div className="hidden md:flex gap-12 items-center">
            {/* Navigation */}
            <ul className="flex space-x-6 font-semibold text-xl">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-red-500" : "text-gray-400"
                }
                to="/"
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-red-500" : "text-gray-400"
                }
                to="/products"
              >
                <li>Product</li>
              </NavLink>
             
              <NavLink
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-red-500" : "text-gray-400"
                }
                to="/about"
              >
                <li>About</li>
              </NavLink>
               <NavLink
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-red-500" : "text-gray-400"
                }
                to="/contact"
              >
                <li>Contact</li>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-red-500" : "text-gray-400"
                }
                to="/cart"
              >
                <li>Cart</li>
              </NavLink>
            </ul>

            {/* Cart */}
            <Link to="/cart" className="relative">
              <FaCartShopping className="text-red-500 h-7 w-7 cursor-pointer" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {cartitems.length}
              </span>
            </Link>

            {/* Login */}
            <div>
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="text-lg bg-red-500 px-4 py-2 rounded-lg text-white">
                    Login
                    
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;