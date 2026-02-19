import { createContext, useState, useEffect } from "react";
import axios from "axios"

export const DataContext = createContext(null)

export const DataProvider = ({ children }) => {
    const [data, setdata] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const api = 'https://fakestoreapi.com/products'
    
    const Totalapi = async () => {
        try {
            setLoading(true)
            const res = await axios.get(api)
            
            // Add brand to each product based on category
            const dataWithBrands = res.data.map(product => {
                let brand = "Generic"
                
                // Assign brands based on category
                if (product.category === "electronics") {
                    const electronicBrands = ["Samsung", "Sony", "LG", "Apple"]
                    brand = electronicBrands[Math.floor(Math.random() * electronicBrands.length)]
                } else if (product.category === "jewelery") {
                    const jewelryBrands = ["Tiffany", "Cartier", "Pandora"]
                    brand = jewelryBrands[Math.floor(Math.random() * jewelryBrands.length)]
                } else if (product.category === "men's clothing") {
                    const mensBrands = ["Nike", "Adidas", "Zara", "H&M"]
                    brand = mensBrands[Math.floor(Math.random() * mensBrands.length)]
                } else if (product.category === "women's clothing") {
                    const womensBrands = ["Zara", "H&M", "Forever 21", "Mango"]
                    brand = womensBrands[Math.floor(Math.random() * womensBrands.length)]
                }
                
                return { ...product, brand }
            })
            
            setdata(dataWithBrands)
        } catch (error) {
            console.log("API Error:", error.message);
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }
    
    useEffect(() => {
        Totalapi()
    }, [])
    
    const uniqcategary = (data, property) => {
        let newVal = data?.map((ele) => {
            return ele[property]
        })
        newVal = [ ...new Set(newVal)]
        return newVal
    }
    
    const categaryOnlyData = uniqcategary(data, "category")
    const branonlydata = uniqcategary(data, "brand")
    
    return (
        <DataContext.Provider value={{ data, setdata, Totalapi, loading, error, categaryOnlyData, branonlydata }}>
            {children}
        </DataContext.Provider>
    )
}