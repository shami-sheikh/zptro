import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import loading1 from "../assets/src_assets_Loading4.webm";
import { ChevronLeft } from "lucide-react";
import ProductList from "../components/ProductList";

function CategoryProdutc() {
  const params = useParams();
  const category = params.category;
  const [searchData, setSearchData] = useState([]);
  const navigate = useNavigate();
  const FilterData = async () => {
    try {
      // ✅ Fixed API URL
      const res = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`,
      );
      setSearchData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // ✅ Added useEffect to call FilterData
  useEffect(() => {
    FilterData();
  }, [category]);

  return (
    <div>
      {searchData.length > 0 ? (
        <div className="max-w-6xl mx-auto px-4 pb-10">
          <button
            onClick={() => navigate("/")}
            className="flex px-3 py-2 bg-white/5 rounded-lg mt-4 active:scale-75"
          >
            <ChevronLeft /> back
          </button>

          {searchData.map((product, index) => {
            return <ProductList key={index} product={product} />;
          })}
        </div>
      ) : (
        <div className="flex items-center justify-center text-4xl h-[500px]">
          <video className="text-5xl" loop muted autoPlay>
            <source src={loading1} type="video/webm" />
          </video>
        </div>
      )}
    </div>
  );
}

export default CategoryProdutc;
