import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SingleProduct from './pages/SingleProduct'
import CategoryProdutc from './pages/CategoryProdutc'
import { CartContext } from './context/CartContext'
import Cheackout from './components/Cheackout'

function App() {
  const [location, setlocation] = useState(null)
  const [locationDropdown, setLocationDropdown] = useState(false);
  
  const { cartitems, setcartitems } = useContext(CartContext)

  const getlocation = () => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
        
        try {
          const response = await axios.get(url)
          const axcetLocation = response.data.address
          setlocation(axcetLocation)
          setLocationDropdown(false)
        } catch (error) {
          console.log(error);
        }
      },
      (error) => {
        console.error("Location error:", error);
      }
    )
  }
  
  useEffect(() => {
    getlocation()
  }, [])

  // ✅ Load from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cartitems")
    if (storedCart) {
      try {
        const parsed = JSON.parse(storedCart)
        if (Array.isArray(parsed)) {  // ✅ Make sure it's an array
          setcartitems(parsed)
        }
      } catch (error) {
        console.error("Error parsing cart:", error)
      }
    }
  }, [setcartitems])  // ✅ Add setcartitems as dependency

  // ✅ Save to localStorage whenever cart changes
  useEffect(() => {
    if (cartitems && cartitems.length >= 0) {  // ✅ Only save if cartitems exists
      localStorage.setItem("cartitems", JSON.stringify(cartitems))
    }
  }, [cartitems])

  return (
    <div>
      <BrowserRouter>
        <Navbar 
          location={location} 
          getlocation={getlocation} 
          setLocationDropdown={setLocationDropdown} 
          locationDropdown={locationDropdown} 
        />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/category/:category' element={<CategoryProdutc />} />
          <Route path='/products/:id' element={<SingleProduct />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart location={location} />} />
          <Route path='checkout' element={<Cheackout/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App