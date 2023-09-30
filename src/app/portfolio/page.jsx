"use client"
import React from "react";
import { useState, useEffect } from 'react';
import styles from "./page.module.css";


export const metadata = {
  title: "Online Cake Delivery in Mumbai, Pune and Mangalore",
  description: "Online Cakes Shop in Mumbai, Pune and Mangalore . Online Cakes Delivery . Buy,Order & Send Birthday, Wedding Anniversary & Chocolate Cakes anywhere in Mumbai from best Cake Shop Ribbons & Balloons.",
};

const Portfolio = () => {
  const placeholder = 'Enter message on cake';
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < placeholder.length) {
        setText((prevText) => prevText + placeholder[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval); // Stop the animation
        setTimeout(() => {
          setText(''); // Clear the text after a delay
          setIndex(0); // Reset the index
        }, 1000); // Adjust the delay as needed
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [index]);
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
  return (
    <div className={styles.pdp_WrapContent}>
      <div class={styles.common_header}>
        <div className={styles.container_fluid}>
          <div className={styles.content_heading}>
            <div className={styles.content_title_heading}>
              <span className={styles.back_to_shop}>READY REGULARS</span>
              <h1 className={styles.text_title_heading}>READY REGULARS</h1>
            </div>
            <div className={styles.breadcrumb}>
              <div className={styles.breadcrumb}>
                <a href="/">Home <span className={styles.delimiter}>READY REGULARS</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.pdp_Wrap}>
          <div className={styles.container}>
            <div className={styles.pdp_DetailBody}>
              <div className={styles.pdp_DetailDesc}>
                <h2 className={styles.pdp_ProductName}>French Vanilla Cake</h2>
                <ul className={styles.pdp_ProductDesc}>
                  <li><span>Base: </span>Chocolate Sponge.</li>
                  <li><span>Filling: </span>Layered with white ganache, coconut crunchy & french vanilla custard.</li>
                  <li><span>Topping: </span>Coated with rich cream mixed with french vanilla custard & Garnished with french vanilla custard glaze and rich dark ganache.</li>
                </ul>
                <div className={styles.pdp_ProductContent}>
                  <h4>Call Us For Instant Help: <a href="tel:18002096323">18002096323</a></h4>
                  <p>10:30 AM To 5:30 PM (Mon To Sat)</p>
                </div>
                <div className={styles.pdp_ProductContentButton}>
                  <h4 className={styles.pdp_ProductContentPrice}>₹ 450</h4>
                  <div>
                    <button className={isLoading ? `${styles.button} ${styles.loading}` : `${styles.button}`} onClick={handleClick}>
                      <span>Add to cart</span>
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
                    <li className={styles.active}><img src="https://fama.b-cdn.net/RnB/Cake.png" alt="" /></li>
                    <li><img src="https://fama.b-cdn.net/RnB/Cake.png" alt="" /></li>
                    <li><img src="https://fama.b-cdn.net/RnB/Cake.png" alt="" /></li>
                  </ul>
                </div>
              </div>
              <div className={styles.pdp_DetailAction}>
                <div className={styles.pdp_SelectInfo}>
                  <h4 className={styles.pdp_DetailInfoTitle}>Select Weight</h4>
                  {/* <div className={styles.pdp_SelectInfoRange}>
                    <img src="https://fama.b-cdn.net/RnB/Cake.png" height={value*20} alt="" />
                    <div className="value"> {value}</div>
                    <input type="range" min="0.5" max="2.5" step="0.5" value={value} />
                  </div> */}
                  <div className={styles.pdp_SelectFlavour}>
                    <ul>
                      <li className={styles.active}>0.5 Kg</li>
                      <li>1 Kg</li>
                      <li>1.5 Kg</li>
                      <li>2 Kg</li>
                      <li>2.5 Kg</li>
                    </ul>
                  </div>
                </div>
                <div className={styles.pdp_SelectInfo}>
                  <h4 className={styles.pdp_DetailInfoTitle}>Select Flavour</h4>
                  <div className={styles.pdp_SelectFlavour}>
                    <ul>
                      <li className={styles.active}>Vanilla</li>
                      <li>Chocolate</li>
                      <li>Black Forest</li>
                      <li>Butter Scotch</li>
                      <li>Strawberry</li>
                      <li>Pineapple</li>
                    </ul>
                  </div>
                </div>
                <div className={styles.pdp_SelectInfo}>
                  <h4 className={styles.pdp_DetailInfoTitle}>Upload Image*</h4>
                  <div className={styles.pdp_SelectUploadImage}>
                    <label for="FileUpload" className={styles.pdp_SelectUploadLabel}>
                      <input type="file" id="FileUpload" className={styles.pdp_SelectUploadInput}/>
                      <div className={styles.image_uploading_content}>
                        <div className={styles.choose_file_circle}>
                          <span></span>
                          Choose file
                        </div>
                        <div>
                          <img src="https://bkmedia.bakingo.com/images/common/upload.svg" alt="" />
                        </div>
                      </div>
                    </label>
                    <div className={styles.photo_uploaded}>
                      <div className={styles.Photo_UploadedImg}>
                        <img src="https://media.bakingo.com/bk/photo-cake/1693661314.423.jpeg"/>
                      </div>
                      <div className={styles.Photo_UploadedAction}>
                        <div className={styles.Photo_UploadedText}>Photo Uploaded</div>
                        <label for="FileUpload" className={styles.reUploadImg}>
                          Change Photo
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.pdp_SelectInfo}>
                  <h4 className={styles.pdp_DetailInfoTitle}>Message</h4>
                  <div className={styles.pdp_SelectMessage}>
                    <textarea type="text" placeholder={text} maxlength="25"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Portfolio;
