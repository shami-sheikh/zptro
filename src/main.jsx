import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from "react-hot-toast"
import { ClerkProvider } from '@clerk/clerk-react'
import { DataProvider } from './context/DataContext.jsx'
import {} from "react-hot-toast"
import { CartProvider } from './context/CartContext.jsx'
import  ScrollToTop from "react-scroll-to-top"
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <CartProvider>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <App />
        <ScrollToTop smooth style={{display:"flex", alignItems:"center" , backgroundColor:'red',justifyContent:'center',width:'40px', height:'40px',color:'white'}} />
        <Toaster position='top-right' />  {/* ← Moved inside */}
      </ClerkProvider>
      </CartProvider>
    </DataProvider>
  </StrictMode>,
)