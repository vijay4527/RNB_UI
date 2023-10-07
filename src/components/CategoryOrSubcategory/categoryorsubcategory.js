import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import styles from "../../app/[city]/p/page.module.css";
const CategoryPage = ({ category, subcategory }) => {
  // const [products, setProducts] = useState([]);
  // const [productName, setProductName] = useState("");
  // const [rotate, setRotate] = useState({ rotateX: 0, rotateY: 0 });
  // const [light, setLight] = useState({
  //   width: 40,
  //   angle: 45,
  // });

  // const city =
  //   typeof window != undefined ? localStorage.getItem("cityName") : "";

  // const fcHalfHeight = 205;
  // const fcHalfWidth = 135;
  // const defaultLightWidth = 40;
  // const defaultLightAngle = 45;
  // const maxRotateX = 6;
  // const maxRotateY = 6;
  // const maxLightWidth = 25;
  // const maxLightAngle = 20;
  // const api_url = process.env.API_URL;
  // const usercity =
  //   typeof window !== "undefined" ? localStorage.getItem("cityName") : "";

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // const fetchProducts = async () => {
  //   try {
  //     if (category) {
  //       const obj = {
  //         category_name: category ? category : "",
  //         sub_category_name: subcategory ? subcategory : "",
  //         city_name: usercity,
  //       };

  //       const response = await axios.post(
  //         `${api_url}/ProductMaster/GetB2CProducts`,
  //         obj
  //       );
  //       setProducts(response.data);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching products:", error);
  //   }
  // };

  // const handleMouseMove = (event) => {
  //   const fcRect = event.currentTarget.getBoundingClientRect();
  //   const mouseX = event.pageX - fcRect.left;
  //   const mouseY = event.pageY - fcRect.top;

  //   const diffX = -1 * (fcHalfWidth - mouseX);
  //   const diffY = fcHalfHeight - mouseY;
  //   const newRotateX = (diffY / fcHalfHeight) * maxRotateX;
  //   const newRotateY = (diffX / fcHalfWidth) * maxRotateY;

  //   setRotate({ rotateX: newRotateX, rotateY: newRotateY });

  //   const newLightWidth =
  //     defaultLightWidth - (diffY / fcHalfHeight) * maxLightWidth;
  //   const newLightAngle =
  //     defaultLightAngle + (diffX / fcHalfWidth) * maxLightAngle;
  //   setLight({ width: newLightWidth, angle: newLightAngle });
  // };

  // const handleMouseLeave = () => {
  //   setRotate({ rotateX: 0, rotateY: 0 });
  //   setLight({ width: defaultLightWidth, angle: defaultLightAngle });
  // };

  // return (
  //   <div className="container">
  //     <div className="mt-4 text-center">
  //       <h4>{subcategory ? subcategory : category}</h4>
  //     </div>
  //     <div className="row equalcards">
  //       {products.length > 0 ? (
  //         <div className={styles.plp_Cards}>
  //           {products.map((item) => {
  //             const hyphenatedProductName = item.product_name
  //               .split(" ")
  //               .join("-");
  //             return (
  //               <Link
  //                 href={`/${city}/products/${hyphenatedProductName}`}
  //                 key={item.product_id}
  //               >
  //                 <div className={styles.plp_CardItems}>
  //                   <article
  //                     className={styles.fc}
  //                     onMouseMove={handleMouseMove}
  //                     onMouseLeave={handleMouseLeave}
  //                   >
  //                     <div
  //                       className={styles.fc__wrapper}
  //                       style={{
  //                         transform: `rotateX(${rotate.rotateX}deg) rotateY(${rotate.rotateY}deg)`,
  //                       }}
  //                     >
  //                       <img
  //                         src={`https://fama.b-cdn.net/RnB/lstcakeimg/1.webp`}
  //                         className={styles.fc__thumb}
  //                       />
  //                       <div className={styles.fc__content}>
  //                         <h1>{item.product_name}</h1>
  //                         <span className={styles.span}>{item.cost}</span>
  //                       </div>
  //                       <span
  //                         className={styles.fc__light}
  //                         style={{
  //                           backgroundImage: `linear-gradient(${light.angle}deg, black, transparent ${light.width}%)`,
  //                         }}
  //                       ></span>
  //                       <svg
  //                         className={styles.fc__border}
  //                         xmlns="http://www.w3.org/2000/svg"
  //                       >
  //                         <rect height="100%" width="100%" />
  //                       </svg>
  //                     </div>
  //                   </article>
  //                 </div>
  //               </Link>
  //             );
  //           })}
  //         </div>
  //       ) : (
  //         <>
  //           <div className="container-fluid text-center">
  //             <img
  //               src="https://static.vecteezy.com/system/resources/thumbnails/006/549/647/small/404-landing-page-free-vector.jpg"
  //               alt=""
  //               style={{ width: "100%" }}
  //             />
  //           </div>
  //           <span className="text-center mt-2">
  //             <b>{subcategory ? subcategory : category} not found </b>
  //           </span>
  //         </>
  //       )}
  //     </div>
  //   </div>
  // );

  const [rotate, setRotate] = useState({ rotateX: 0, rotateY: 0 });
  const [light, setLight] = useState({
    width: 40,
    angle: 45,
  });

  const fcHalfHeight = 205;
  const fcHalfWidth = 135;
  const defaultLightWidth = 40;
  const defaultLightAngle = 45;
  const maxRotateX = 6;
  const maxRotateY = 6;
  const maxLightWidth = 25;
  const maxLightAngle = 20;
  const api_url = process.env.API_URL;
  const city =
    typeof window !== undefined ? localStorage.getItem("cityName") : "";
  const [products, setProducts] = useState([]);
  const [categoryproduct, setCategory] = useState([]);
  const [subCategoryproduct, setSubCategory] = useState([]);
  const handleMouseMove = (event) => {
    const fcRect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.pageX - fcRect.left;
    const mouseY = event.pageY - fcRect.top;

    const diffX = -1 * (fcHalfWidth - mouseX);
    const diffY = fcHalfHeight - mouseY;
    const newRotateX = (diffY / fcHalfHeight) * maxRotateX;
    const newRotateY = (diffX / fcHalfWidth) * maxRotateY;

    setRotate({ rotateX: newRotateX, rotateY: newRotateY });

    const newLightWidth =
      defaultLightWidth - (diffY / fcHalfHeight) * maxLightWidth;
    const newLightAngle =
      defaultLightAngle + (diffX / fcHalfWidth) * maxLightAngle;
    setLight({ width: newLightWidth, angle: newLightAngle });
  };

  const handleMouseLeave = () => {
    setRotate({ rotateX: 0, rotateY: 0 });
    setLight({ width: defaultLightWidth, angle: defaultLightAngle });
  };

  useEffect(() => {
    getAllCategory();
    getProductList();
    fetchSubcategories();
  }, []);

  const fetchSubcategories = () => {
    axios
      .get(
        `${api_url}/SubCategory/GetSubCategoryByCategoryId/2309130620203143392`
      )
      .then((res) => {
        return setSubCategory(res.data);
      });
  };
  const getProductList = () => {
    let obj = {
      category_name: category ? category : "",
      sub_category_name: subcategory ? subcategory : "",
      city_name: city,
    };
    axios.post(`${api_url}/ProductMaster/GetB2CProducts`, obj).then((res) => {
      setProducts(res.data);
    });
  };

  const getAllCategory = () => {
    axios.get(`${api_url}/Category/GetAllCategory`).then((res) => {
      setCategory(res.data);
    });
  };

  const getProductName = (product) => {
    window.location.href = `/${city}/products/${product}`;
  };

  return (
    <div className={styles.gkh}>
      <div id={styles.stars}></div>
      <div id={styles.stars2}></div>
      <div id={styles.stars3}></div>
      <div className={styles.plp_WrapContent} id={styles.title}>
        <div className={styles.common_header}>
          <div className={styles.container_fluid}>
            <div className={styles.content_heading}>
              <div className={styles.content_title_heading}>
                <span className={styles.back_to_shop}>Ready Regulars</span>
                <h1 className={styles.text_title_heading}>Ready Regulars</h1>
              </div>
              <div className={styles.breadcrumb}>
                <div className={styles.breadcrumb}>
                  <a href="/">
                    {category ? category : ""}
                    {subcategory ? (
                      <span className={styles.delimiter}>{subcategory}</span>
                    ) : (
                      ""
                    )}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.plp_Wrap}>
          <div className={styles.container_fluid}>
            <div className={styles.plp_Body}>
              <div className={styles.plp_Filter}>
                <div className={styles.plp_FilterHead}>
                  <div className={styles.plp_FilterHeadRibbon}>
                    Category
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                </div>
                <div className={styles.plp_FilterBody}>
                  {categoryproduct.map((item) => (
                    <h4
                      className={styles.plp_FilterCate}
                      key={item.category_id}
                    >
                      {item.category_name}
                    </h4>
                  ))}
                </div>
              </div>
              {/* <div className={styles.plp_Filter}>
              <div className={styles.plp_FilterHead}>
                <div className={styles.plp_FilterHeadRibbon}>
                  Sub Category
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
              </div>
              <div className={styles.plp_FilterBody}>
                {subCategoryproduct.map((item) => (
                  <h4
                    className={styles.plp_FilterCate}
                    key={item.sub_category_id}
                  >
                    {item.sub_category_name}
                  </h4>
                ))}
              </div>
            </div> */}
              <div className={styles.plp_Cards}>
                {products.map((item) => {
                  const productName = item.product_name.split(" ").join("-");
                  return (
                    <Link
                      key={item.product_id}
                      href={`/${city}/p/${productName}`}
                    >
                      <div className={styles.plp_CardItems}>
                        <article
                          className={styles.fc}
                          onMouseMove={handleMouseMove}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div
                            className={styles.fc__wrapper}
                            style={{
                              transform: `rotateX(${rotate.rotateX}deg) rotateY(${rotate.rotateY}deg)`,
                            }}
                          >
                            <img
                              src={`https://fama.b-cdn.net/RnB/lstcakeimg/1.webp`}
                              className={styles.fc__thumb}
                            />
                            <div className={styles.fc__content}>
                              <h1>{item.product_name}</h1>
                              <span className={styles.span}>{item.cost}</span>
                            </div>
                            <span
                              className={styles.fc__light}
                              style={{
                                backgroundImage: `linear-gradient(${light.angle}deg, black, transparent ${light.width}%)`,
                              }}
                            ></span>
                            <svg
                              className={styles.fc__border}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect height="100%" width="100%" />
                            </svg>
                          </div>{" "}
                        </article>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
