import { createContext, useContext, useState, useEffect } from "react";
import {toast} from "react-hot-toast"
export const CartContext=createContext(null)
export const CartProvider = ({ children }) => {
    const [cartitems, setcartitems] = useState(() => {
        const savedCart = localStorage.getItem("cartitems");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Save to localStorage whenever cartitems changes
    useEffect(() => {
        localStorage.setItem("cartitems", JSON.stringify(cartitems));
    }, [cartitems]);
const addToCart=(product)=>{
    const itemInCart=cartitems.find((item)=>item.id===product.id);
    // // item in card if quentity incresses
    if(itemInCart){
        const updatecart=cartitems.map((item)=>
        item.id===product.id ? {...item,quantity:item.quantity+1}:item
        )
        setcartitems(updatecart)
    }else{
    setcartitems([...cartitems,{...product,quantity:1}])
    
toast.success("product added to your cart")
    }
    // console.log(cartitems);
    
}
return <CartContext.Provider value={{cartitems,setcartitems,addToCart}} >
  {children}
</CartContext.Provider>
}