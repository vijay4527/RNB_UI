"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CategoryOrSubcategory from "../../../../../components/CategoryOrSubcategory/categoryorsubcategory";
const Category = () => {
  const pathname = usePathname();
  const parts = pathname.split("/");
  const city = parts[1];
  const category = parts[3];
  const subcategory = parts[4] ? parts[4] : "";
  const [products, setProducts] = useState([]);
  // const api_url = process.env.API_URL;
  const api_url = process.env.API_URL;
  const usercity =
    typeof window !== "undefined" ? localStorage.getItem("cityName") : "";

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       if (l) {
  //         const obj = {
  //           category_name: l,
  //           sub_category_name: subcategory[0],
  //           city_name: usercity,
  //         };

  //         const response = await axios.post(
  //           `${api_url}/ProductMaster/GetB2CProducts`,
  //           obj
  //         );
  //         setProducts(response.data);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     }
  //   };

  //   fetchProducts();
  // }, [city, l, subcategory]);

  return (
    // <div className="container">
    //   <div className="mt-4 text-center">
    //     <h4>{subcategory ? subcategory : l}</h4>
    //   </div>
    //   <div className="row">
    //     {products.length > 0 ? (
    //       products.map((product) => (
    //         <div className="col-md-4 mb-4" key={product.product_id}>
    //           <Link href={`/${usercity}/product/${product.product_name}`}>
    //             <div className="card">
    //               <div className="card-body">
    //                 <Image
    //                   src={
    //                     product.image_url ||
    //                     "https://www.fnp.com/assets/images/custom/cakes_23/flavour/Truffle-Cakes_web.jpg"
    //                   }
    //                   alt={product.product_name}
    //                   width={300}
    //                   height={277}
    //                 />
    //                 <p>
    //                   Product Name: <b>{product.product_name}</b>
    //                 </p>
    //                 <p>
    //                   Cost: <b>{product.cost}</b>
    //                 </p>
    //               </div>
    //             </div>
    //           </Link>
    //         </div>
    //       ))
    //     ) : (
    //       <div className="container-fluid p-4 text-center">
    //         <Image
    //           src="https://static.vecteezy.com/system/resources/thumbnails/006/549/647/small/404-landing-page-free-vector.jpg"
    //           height={300}
    //           width={500}
    //           alt=""
    //         />
    //       </div>
    //     )}
    //   </div>
    // </div>
    <CategoryOrSubcategory
      category={category}
      subcategory={subcategory}
    ></CategoryOrSubcategory>
  );
};

export default Category;
