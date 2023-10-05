"use client";
import React from "react";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import axios from "axios";
import { usePathname } from "next/navigation";
import toastr from "toastr";

const productbyname = () => {
  const url = usePathname();
  const parts = url.split("/");
  const productName = decodeURIComponent(parts[parts.length - 1]);
  const placeholder = "Enter message on cake";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [product, setProduct] = useState({});
  const [selectedProductType, setSelectedProductType] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [messageOnCake, setMessageOnCake] = useState("");
  const [unit, setUnit] = useState("");
  const [values, setValues] = useState("");
  const [variety, setVariety] = useState("");
  const [quantity, setQuantity] = useState("");
  const [selectedProduct, setSelectedProduct] = useState({});
  const [activeFlavour, setActiveFlavour] = useState("");
  const [activeWeight, setActiveWeight] = useState("");

  const api_url = process.env.API_URL;
  const city =
    typeof window != undefined ? localStorage.getItem("cityName") : "";
  useEffect(() => {
    const interval = setInterval(() => {
      if (index < placeholder.length) {
        setText((prevText) => prevText + placeholder[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval); // Stop the animation
        setTimeout(() => {
          setText(""); // Clear the text after a delay
          setIndex(0); // Reset the index
        }, 1000); // Adjust the delay as needed
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [index]);

  useEffect(() => {
    if (productName) {
      axios
        .get(`${api_url}/ProductMaster/GetProductByName/${city}/${productName}`)
        .then((res) => {
          const productData = res.data;
          setProduct(productData);
          if (
            productData.productTypeData &&
            productData.productTypeData.length > 0
          ) {
            const initialProductType = productData.productTypeData[0];
            setSelectedProductType(initialProductType.variety_id);
            setProductPrice(initialProductType.cost);
            setVariety(productData.productTypeData[0].variety_id);
            setQuantity(productData.min);

            switch (productData.type_id) {
              case 1:
                if (productData.type_id == 1) {
                  setUnit("KG");
                  setValues("0.5");
                  setActiveWeight("0.5");
                }
                break;
              case 2:
                if (productData.type_id == 2) {
                  setUnit("KG");
                  setValues(productData.min);
                  setProductPrice(
                    initialProductType.cost * 2 * productData.min
                  );
                  setActiveWeight(productData.min.toString());
                }
                break;
              case 3:
                if (productData.type_id == 3) {
                  setUnit(productData.productTypeData[0].variety_type);
                  setValues(productData.productTypeData[0].variety_name);
                  setActiveTab(productData.productTypeData[0].variety_id);
                  setActiveWeight(productData.productTypeData[0].variety_name);
                }
                break;
              case 4:
                if (productData.type_id == 4) {
                  setUnit("KG");
                  setValues(productData.min);
                  setSelectedProduct(productData.productTypeData[0]);
                  setProductPrice(
                    initialProductType.cost * 2 * productData.min
                  );
                  setSelectedProduct(productData.productTypeData[0]);
                  setActiveWeight(productData.min);
                  setActiveFlavour(productData.productTypeData[0].variety_id);
                }
              case 5:
                if (productData.type_id == 5) {
                  setUnit("PCS");
                  setValues("1");
                  setQuantity(1);
                }
              case 6:
                if (productData.type_id == 6) {
                  setUnit("PCS");
                  setValues("1");
                  setQuantity("1");
                  setSelectedProduct(productData.productTypeData[0]);
                }
              default:
                break;
            }
          }
        })
        .catch((error) => {
          console.error("Error fetching product data:", error);
        });
    }
  }, [productName]);

  // const [value, setValue] = useState(0.5); // Initial value

  // useEffect(() => {
  //   // Function to update the value display
  //   const updateValueDisplay = () => {
  //     const newValue = elem.value;
  //     setValue(newValue);
  //   };

  //   // Add an event listener to the range input
  //   const elem = document.querySelector('input[type="range"]');
  //   elem.addEventListener("input", updateValueDisplay);

  //   // Cleanup the event listener when the component unmounts
  //   return () => {
  //     elem.removeEventListener("input", updateValueDisplay);
  //   };
  // }, []);
  const [isLoading, setLoading] = useState(false);

  const handleClick = () => {
    if (!isLoading) {
      setLoading(true);
      setTimeout(() => setLoading(false), 3700);
    }
  };
  const handleProductTypeChange = (event) => {
    const selectedType = event;
    setVariety(selectedType);
    setSelectedProductType(selectedType);
    const selectProduct = product.productTypeData.find(
      (productType) => productType.variety_id === selectedType
    );
    setSelectedProduct(selectProduct);
    setActiveFlavour(event);

    if (selectProduct) {
      if (product.type_id == 3) {
        setProductPrice(selectProduct.cost);
        setActiveWeight(selectProduct.variety_name);
        if (selectProduct.variety_name == "Small") {
          setUnit("S");
          setValues(selectProduct.variety_name);
        } else {
          setUnit("L");
          setValues(selectProduct.variety_name);
        }
      } else if (product.type_id == 6) {
        setProductPrice(selectProduct.cost * quantity);
      } else {
        setProductPrice(selectProduct.cost * 2 * quantity);
      }
    }
  };
  const handleWeight = (weight, tab) => {
    setActiveWeight(weight);
    setQuantity(weight);
    if (product.type_id == 1) {
      if (weight == "0.5") {
        setValues("0.5");
        setUnit("gram");
        setProductPrice(product.productTypeData[0].cost);
      } else {
        setValues("1");
        setUnit("KG");
        setProductPrice(product.productTypeData[0].cost * 2 - 10);
      }
    }
    if (product.type_id == 2) {
      setValues(weight);
      setProductPrice(product.productTypeData[0].cost * 2 * weight);
    }
    if (product.type_id == 3) {
      setValues(weight);
      setProductPrice(product.productTypeData[0].cost * weight - 10);
    }
    if (product.type_id == 4) {
      setValues(weight);
      setProductPrice(selectedProduct.cost * 2 * weight);
    }
    if (product.type_id == 5) {
      setValues(weight);
      setProductPrice(product.productTypeData[0].cost * weight);
    }
    if (product.type_id == 6) {
      setValues(weight);
      setProductPrice(selectedProduct.cost * weight);
    }
  };
  const generateWeightOptions = (min, max, step = 0.5) => {
    const weightOptions = [];
    for (let weight = min; weight <= max; weight += step) {
      weightOptions.push(
        <li
          className={activeWeight == weight ? styles.active : ""}
          role="presentation"
          key={weight}
          onClick={() => handleWeight(weight)}
        >
          {`${weight} KG`}
        </li>
      );
    }

    return weightOptions;
  };
  const handleIncrementQuantity = () => {
    const newQuantity = parseInt(quantity) + 1;
    if (newQuantity <= 20) {
      setQuantity(newQuantity);
      handleWeight(newQuantity);
    }
    //else {
    //   toastr.options = {
    //     positionClass: "toast-top-right",
    //     timeOut: 3000,
    //     closeButton: true,
    //   };
    //   toastr.warning(`Quantity should not be greater than 20`);
    // }
  };

  const handleDecrementQuantity = () => {
    const newQuantity = parseInt(quantity) - 1;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
      handleWeight(newQuantity);
    }
    //else {
    //   toastr.options = {
    //     positionClass: "toast-top-right",
    //     timeOut: 3000,
    //     closeButton: true,
    //   };
    //   toastr.warning(`Quantity should not be less than 1`);
    // }
  };
  const userObject =
    typeof window !== "undefined"
      ? JSON.parse(sessionStorage.getItem("userObject"))
      : "";
  const cartId =
    typeof window !== "undefined" ? sessionStorage.getItem("cartId") : "";

  const handleAddToCartOrWishlist = () => {
    const cartItem = {
      user_id: userObject ? userObject?.user_id : "",
      cart_id: cartId ? cartId : "",
      product_id: product.product_id,
      variety_id: variety,
      city: city,
      unit: unit,
      value: values.toString(),
      msg_cake: messageOnCake,
    };

    axios
      .post(`${api_url}/CartMaster/SaveCartDetails`, cartItem)
      .then((response) => {
        if (response.data.resp === true) {
          try {
            if (!cartId) {
              sessionStorage.setItem("cartId", response.data.respObj.cart_id);
            }
            toastr.options = {
              positionClass: "toast-top-right",
              timeOut: 3000,
              closeButton: true,
            };
            toastr.success("Product added to cart successfully :");
          } catch (error) {
            console.error("Error storing cartId in session storage:", error);
          }
        }
        // else {
        //   toastr.error("Something went wrong :");
        // }
      })
      .catch((error) => {
        console.error("Error adding product to cart:", error);
      });
  };

  return (
    <div className={styles.pdp_WrapContent}>
      <div className={styles.common_header}>
        <div className={styles.container_fluid}>
          <div className={styles.content_heading}>
            <div className={styles.content_title_heading}>
              <span className={styles.back_to_shop}>READY REGULARS</span>
              <h1 className={styles.text_title_heading}>READY REGULARS</h1>
            </div>
            <div className={styles.breadcrumb}>
              <div className={styles.breadcrumb}>
                <a href="/">
                  Home <span className={styles.delimiter}>READY REGULARS</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.pdp_Wrap}>
        <div className={styles.container}>
          <div className={styles.pdp_DetailBody}>
            <div className={styles.pdp_DetailDesc}>
              <h2 className={styles.pdp_ProductName}>{product.product_name}</h2>
              <ul className={styles.pdp_ProductDesc}>
                <li>
                  <span>Base: </span>Chocolate Sponge.
                </li>
                <li>
                  <span>Filling: </span>Layered with white ganache, coconut
                  crunchy & french vanilla custard.
                </li>
                <li>
                  <span>Topping: </span>Coated with rich cream mixed with french
                  vanilla custard & Garnished with french vanilla custard glaze
                  and rich dark ganache.
                </li>
              </ul>
              <div className={styles.pdp_ProductContent}>
                <h4>
                  Call Us For Instant Help:{" "}
                  <a href="tel:18002096323">18002096323</a>
                </h4>
                <p>10:30 AM To 5:30 PM (Mon To Sat)</p>
              </div>
              <div className={styles.pdp_ProductContentButton}>
                <h4 className={styles.pdp_ProductContentPrice}>
                  ₹ {productPrice}
                </h4>
                <div>
                  <button
                    className={
                      isLoading
                        ? `${styles.button} ${styles.loading}`
                        : `${styles.button}`
                    }
                    onClick={handleClick}
                  >
                    <span onClick={() => handleAddToCartOrWishlist()}>
                      Add to cart
                    </span>
                    <div className={styles.cart}>
                      <svg viewBox="0 0 36 26">
                        <polyline points="1 2.5 6 2.5 10 18.5 25.5 18.5 28.5 7.5 7.5 7.5"></polyline>
                        <polyline points="15 13.5 17 15.5 22 10.5"></polyline>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.pdp_DetailImg}>
              <div className={styles.pdp_ProductImg}>
                <img src="https://fama.b-cdn.net/RnB/Cake.png" alt="" />
              </div>
              <div className={styles.pdp_ProductImgs}>
                <ul>
                  <li className={styles.active}>
                    <img src="https://fama.b-cdn.net/RnB/Cake.png" alt="" />
                  </li>
                  <li>
                    <img src="https://fama.b-cdn.net/RnB/Cake.png" alt="" />
                  </li>
                  <li>
                    <img src="https://fama.b-cdn.net/RnB/Cake.png" alt="" />
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.pdp_DetailAction}>
              {product.type_id == 1 && (
                <>
                  <div className={styles.pdp_SelectInfo}>
                    <h4 className={styles.pdp_DetailInfoTitle}>
                      Select Weight
                    </h4>
                    <div className={styles.pdp_SelectFlavour}>
                      <ul>
                        <li
                          className={activeWeight == "0.5" ? styles.active : ""}
                          onClick={() => handleWeight("0.5", "Half Kg")}
                        >
                          0.5 Kg
                        </li>
                        <li
                          className={activeWeight === "1" ? styles.active : ""}
                          onClick={() => handleWeight("1", "1 Kg")}
                        >
                          1 Kg
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className={styles.pdp_SelectInfo}>
                    <h4 className={styles.pdp_DetailInfoTitle}>
                      Select Flavour
                    </h4>
                    <div className={styles.pdp_SelectFlavour}>
                      <ul>
                        <li className={styles.active}>
                          {product.productTypeData[0].variety_name}
                        </li>
                      </ul>
                    </div>
                  </div>
                </>
              )}
              {product.type_id == 2 && (
                <>
                  <div className={styles.pdp_SelectInfo}>
                    <h4 className={styles.pdp_DetailInfoTitle}>
                      Select Weight
                    </h4>
                    <div className={styles.pdp_SelectFlavour}>
                      <ul>
                        {generateWeightOptions(
                          parseFloat(product.min),
                          parseInt(product.max)
                        )}
                      </ul>
                    </div>
                  </div>

                  <div className={styles.pdp_SelectInfo}>
                    <h4 className={styles.pdp_DetailInfoTitle}>
                      Select Flavour
                    </h4>
                    <div className={styles.pdp_SelectFlavour}>
                      <ul>
                        <li className={styles.active}>
                          {product.productTypeData[0].variety_name}
                        </li>
                      </ul>
                    </div>
                  </div>
                </>
              )}
              {product.type_id == 3 && (
                <>
                  <div className={styles.pdp_SelectInfo}>
                    <h4 className={styles.pdp_DetailInfoTitle}>
                      Select Weight
                    </h4>
                    <div className={styles.pdp_SelectFlavour}>
                      <ul>
                        {product.productTypeData ? (
                          product.productTypeData.map((ele) => (
                            <li
                              className={
                                activeWeight == ele.variety_name
                                  ? styles.active
                                  : ""
                              }
                              onClick={() =>
                                handleProductTypeChange(ele.variety_id)
                              }
                            >
                              {`${ele.variety_name}`}
                            </li>
                          ))
                        ) : (
                          <li>No types available</li>
                        )}
                      </ul>
                    </div>
                  </div>
                  {/* 
                  <div className={styles.pdp_SelectInfo}>
                    <h4 className={styles.pdp_DetailInfoTitle}>
                      Select Flavour
                    </h4>
                    <div className={styles.pdp_SelectFlavour}>
                      <ul>
                        <li className={styles.active}>
                          {product.productTypeData[0].variety_name}
                        </li>
                      </ul>
                    </div>
                  </div> */}
                </>
              )}
              {product.type_id == 4 && (
                <>
                  <div className={styles.pdp_SelectInfo}>
                    <h4 className={styles.pdp_DetailInfoTitle}>
                      Select Weight
                    </h4>
                    <div className={styles.pdp_SelectFlavour}>
                      <ul>
                        {generateWeightOptions(
                          parseFloat(product.min),
                          parseInt(product.max)
                        )}
                      </ul>
                    </div>
                  </div>

                  <div className={styles.pdp_SelectInfo}>
                    <h4 className={styles.pdp_DetailInfoTitle}>
                      Select Flavour
                    </h4>
                    <div className={styles.pdp_SelectFlavour}>
                      <ul>
                        {product.productTypeData ? (
                          product.productTypeData.map((ele) => (
                            <li
                              className={
                                activeFlavour == ele.variety_id
                                  ? styles.active
                                  : ""
                              }
                              key={ele.variety_id}
                              value={ele.variety_id}
                              onClick={() =>
                                handleProductTypeChange(ele.variety_id)
                              }
                            >
                              {ele.variety_name}
                            </li>
                          ))
                        ) : (
                          <li value="">No types available</li>
                        )}
                      </ul>
                    </div>
                  </div>
                </>
              )}
              {product.type_id == 5 && (
                <>
                  <div className={styles.pdp_SelectInfo}>
                    <h4 className={styles.pdp_DetailInfoTitle}>
                      Select Pieces
                    </h4>
                    <div className={styles.pdp_SelectFlavour}>
                      <div className="input-group">
                        <span
                          className="input-group-text"
                          style={{
                            padding: "4px 10px 4px 10px",
                            backgroundColor: "#51171d",
                            borderRadius: "4px 0px 0px 4px",
                            cursor: "pointer",
                            color: "white",
                          }}
                          onClick={handleIncrementQuantity}
                        >
                          +
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          max={20}
                          min={1}
                          value={values}
                        />{" "}
                        <span
                          className="input-group-text decrement"
                          style={{
                            padding: "4px 10px 4px 10px",
                            backgroundColor: "#51171d",
                            borderRadius: "0px 4px 4px 0px",
                            cursor: "pointer",
                            color: "white",
                          }}
                          onClick={handleDecrementQuantity}
                        >
                          -
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* <div className={styles.pdp_SelectInfo}>
                    <h4 className={styles.pdp_DetailInfoTitle}>
                      Select Flavour
                    </h4>
                    <div className={styles.pdp_SelectFlavour}>
                      <ul>
                        {product.productTypeData ? (
                          product.productTypeData.map((ele) => (
                            <li key={ele.variety_id} value={ele.variety_id}>
                              {ele.variety_name}
                            </li>
                          ))
                        ) : (
                          <li value="">No types available</li>
                        )}
                      </ul>
                    </div>
                  </div> */}
                </>
              )}
              {product.type_id == 6 && (
                <>
                  <div className={styles.pdp_SelectInfo}>
                    <h4 className={styles.pdp_DetailInfoTitle}>
                      Select Pieces
                    </h4>
                    <div className={styles.pdp_SelectFlavour}>
                      <div className="input-group">
                        <span
                          className="input-group-text"
                          style={{
                            padding: "4px 10px 4px 10px",
                            backgroundColor: "#51171d",
                            borderRadius: "4px 0px 0px 4px",
                            cursor: "pointer",
                            color: "white",
                          }}
                          onClick={handleIncrementQuantity}
                        >
                          +
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          max={20}
                          min={1}
                          value={values}
                        />{" "}
                        <span
                          className="input-group-text decrement"
                          style={{
                            padding: "4px 10px 4px 10px",
                            backgroundColor: "#51171d",
                            borderRadius: "0px 4px 4px 0px",
                            cursor: "pointer",
                            color: "white",
                          }}
                          onClick={handleDecrementQuantity}
                        >
                          -
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.pdp_SelectInfo}>
                    <h4 className={styles.pdp_DetailInfoTitle}>
                      Select Flavour
                    </h4>
                    <div className={styles.pdp_SelectFlavour}>
                      <ul>
                        {product.productTypeData ? (
                          product.productTypeData.map((ele) => (
                            <li key={ele.variety_id} value={ele.variety_id}>
                              {ele.variety_name}
                            </li>
                          ))
                        ) : (
                          <li value="">No types available</li>
                        )}
                      </ul>
                    </div>
                  </div>
                </>
              )}

              <div className={styles.pdp_SelectInfo}>
                <h4 className={styles.pdp_DetailInfoTitle}>Upload Image*</h4>
                <div className={styles.pdp_SelectUploadImage}>
                  <label
                    htmlFor="FileUpload"
                    className={styles.pdp_SelectUploadLabel}
                  >
                    <input
                      type="file"
                      id="FileUpload"
                      className={styles.pdp_SelectUploadInput}
                    />
                    <div className={styles.image_uploading_content}>
                      <div className={styles.choose_file_circle}>
                        <span></span>
                        Choose file
                      </div>
                      <div>
                        <img
                          src="https://bkmedia.bakingo.com/images/common/upload.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </label>
                  <div className={styles.photo_uploaded}>
                    <div className={styles.Photo_UploadedImg}>
                      <img src="https://media.bakingo.com/bk/photo-cake/1693661314.423.jpeg" />
                    </div>
                    <div className={styles.Photo_UploadedAction}>
                      <div className={styles.Photo_UploadedText}>
                        Photo Uploaded
                      </div>
                      <label
                        htmlFor="FileUpload"
                        className={styles.reUploadImg}
                      >
                        Change Photo
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.pdp_SelectInfo}>
                <h4 className={styles.pdp_DetailInfoTitle}>Message</h4>
                <div className={styles.pdp_SelectMessage}>
                  <textarea
                    type="text"
                    placeholder={text}
                    maxLength="25"
                    value={messageOnCake}
                    onChange={(e) => setMessageOnCake(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default productbyname;
