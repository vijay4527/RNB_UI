import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

export const metadata = {
  title: "Online Cake Delivery in Mumbai, Pune and Mangalore",
  description: "Online Cakes Shop in Mumbai, Pune and Mangalore . Online Cakes Delivery . Buy,Order & Send Birthday, Wedding Anniversary & Chocolate Cakes anywhere in Mumbai from best Cake Shop Ribbons & Balloons.",
};

const Contact = () => {
  return (
    <div className={styles.pdp_WrapContent}>
      <div class={styles.common_header}>
        <div className={styles.container_fluid}>
          <div className={styles.content_heading}>
            <div className={styles.content_title_heading}>
              <span className={styles.back_to_shop}>Your Shopping</span>
              <h1 className={styles.text_title_heading}>Your Shopping</h1>
            </div>
            <div className={styles.breadcrumb}>
              <div className={styles.breadcrumb}>
                <a href="/">Home <span className={styles.delimiter}>Your Shopping</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.addToCart_Wrap}>
          <div className={styles.container}>
            <div className={styles.addToCart_Content}>
              <div className={styles.addToCart_Title}>
                <h4>Your Shopping Basket</h4>
              </div>
              <div className={styles.addToCart_ProductCount}>
                <h5>1 Product</h5>
              </div>
              <div className={styles.addToCart_Body}>
                <div className={styles.addToCart_CartItems}>
                  <div className={styles.addToCart_CartItem}>
                    <div className={styles.addToCart_CartItemImg}>
                      <a>
                        <img src="https://fama.b-cdn.net/RnB/Cake.png" alt="" />
                      </a>
                    </div>
                    <div className={styles.addToCart_CartItemInfo}>
                      <a>{`LEVI'S Men Checked Slim Fit Casual Shirt`}</a>
                      <div>
                        <h4>₹1299</h4>
                        <h5>5 kg White</h5>
                      </div>
                    </div>
                    <div className={styles.addToCart_CartItemDecs}>
                      <div className={styles.addToCart_CartItemIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-week" viewBox="0 0 16 16">
                          <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                        </svg>
                      </div>
                      <h4>Delivery in <span>Enter Pincode above</span></h4>
                    </div>
                  </div>
                </div>
                <div className={styles.addToCart_TotalSum}>
                  <div className={styles.addToCart_TotalSumDetail}>
                    <div className={styles.addToCart_TotalSumDetail}>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Contact;
