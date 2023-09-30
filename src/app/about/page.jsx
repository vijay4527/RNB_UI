"use client"
import React from "react";
import styles from "./page.module.css";
import { useEffect, useState } from 'react';
import style from '../globals.css';

export const metadata = {
  title: "Online Cake Delivery in Mumbai, Pune and Mangalore",
  description: "Online Cakes Shop in Mumbai, Pune and Mangalore . Online Cakes Delivery . Buy,Order & Send Birthday, Wedding Anniversary & Chocolate Cakes anywhere in Mumbai from best Cake Shop Ribbons & Balloons.",
};

const About = () => {
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

  const handleMouseMove = (event) => {
    const fcRect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.pageX - fcRect.left;
    const mouseY = event.pageY - fcRect.top;

    const diffX = -1 * (fcHalfWidth - mouseX);
    const diffY = fcHalfHeight - mouseY;
    const newRotateX = (diffY / fcHalfHeight) * maxRotateX;
    const newRotateY = (diffX / fcHalfWidth) * maxRotateY;

    setRotate({ rotateX: newRotateX, rotateY: newRotateY });

    const newLightWidth = defaultLightWidth - (diffY / fcHalfHeight) * maxLightWidth;
    const newLightAngle = defaultLightAngle + (diffX / fcHalfWidth) * maxLightAngle;
    setLight({ width: newLightWidth, angle: newLightAngle });
  };

  const handleMouseLeave = () => {
    setRotate({ rotateX: 0, rotateY: 0 });
    setLight({ width: defaultLightWidth, angle: defaultLightAngle });
  };
  const items = [
    {id: 1,name: "Cakes" },
    {id: 2,name: "Pastries" },
    {id: 3,name: "Biscuits" },
    {id: 4,name: "Savoury" },
    {id: 5,name: "Desserts" },
    {id: 6,name: "Chocolates" },
    {id: 7,name: "Donuts" },
    {id: 8,name: "Wafers" },
    {id: 9,name: "Titbits" },
    {id: 10,name: "Breads" },
    {id: 11,name: "Tea Time Cakes" }
  ]
  const PLPItems = [
    {id: 1,name: "Cherry Blossom Cake", price: "₹ 350" },
    {id: 2,name: "French Vanilla Cake", price: "₹ 550"  },
    {id: 3,name: "Chocolate Desire", price: "₹ 450"  },
    {id: 4,name: "Dark Fantasy", price: "₹ 250"  },
    {id: 5,name: "Rabadi Mawa Cake", price: "₹ 200"  },
    {id: 6,name: "Strawberry Cream Cake", price: "₹ 450"  },
    {id: 1,name: "Cherry Blossom Cake", price: "₹ 350" },
    {id: 2,name: "French Vanilla Cake", price: "₹ 550"  },
  ]
  return (
    <div className={styles.gkh}>
      <div id={styles.stars}></div>
      <div id={styles.stars2}></div>
      <div id={styles.stars3}></div>
      <div className={styles.plp_WrapContent}  id={styles.title}>
        <div class={styles.common_header}>
          <div className={styles.container_fluid}>
            <div className={styles.content_heading}>
              <div className={styles.content_title_heading}>
                <span className={styles.back_to_shop}>Ready Regulars</span>
                <h1 className={styles.text_title_heading}>Ready Regulars</h1>
              </div>
              <div className={styles.breadcrumb}>
                <div className={styles.breadcrumb}>
                  <a href="/">Home <span className={styles.delimiter}>Ready Regulars</span></a>
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
                  {items.map((item) => (
                    <h4 className={styles.plp_FilterCate}>{item.name}</h4>
                  ))}
                </div>
              </div>
              <div className={styles.plp_Cards}>
                {PLPItems.map((item) => (
                    <div className={styles.plp_CardItems}>
                    <article className={styles.fc} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                      <div className={styles.fc__wrapper} style={{ transform: `rotateX(${rotate.rotateX}deg) rotateY(${rotate.rotateY}deg)` }}>
                        <img src={`https://fama.b-cdn.net/RnB/lstcakeimg/${item.id}.webp`} className={styles.fc__thumb} />
                        <div className={styles.fc__content}>
                          <h1>{item.name}</h1>
                          <span className={styles.caption}>{item.price}</span>
                        </div>
                        <span className={styles.fc__light} style={{ backgroundImage: `linear-gradient(${light.angle}deg, black, transparent ${light.width}%)` }}></span>
                        <svg className={styles.fc__border} xmlns="http://www.w3.org/2000/svg">
                          <rect height="100%" width="100%" />
                        </svg>
                      </div>
                    </article>
                  </div>
                  ))}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
  );
  // return (
    // <div>
    //   <div className={style.container}>
    //     <div className={styles.PLWrap}>
    //       <div className={styles.PLItems}>
    //         <div className={`${styles.PLItem} ${styles.PLBox1}`}>
    //           <div className={styles.PLBox}>
    //             <img src="https://fama.b-cdn.net/RnB/lstcakeimg/3.webp" />
    //           </div>
    //           <div className={styles.PLBox}>
    //             <img src="https://fama.b-cdn.net/RnB/lstcakeimg/2.webp" />
    //           </div>
    //         </div>
    //         <div className={`${styles.PLItem} ${styles.PLBox2}`}>
    //           <div className={styles.PLBox}>
    //             <img src="https://fama.b-cdn.net/RnB/lstcakeimg/1.webp" />
    //           </div>
    //         </div>
    //         <div className={`${styles.PLItem} ${styles.PLBox3}`}>
    //           <div className={styles.PLBox}>
    //             <img src="https://fama.b-cdn.net/RnB/lstcakeimg/4.webp" />
    //           </div>
    //           <div className={styles.PLBox}>
    //             <img src="https://fama.b-cdn.net/RnB/lstcakeimg/5.webp" />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    
  // );
};

export default About;
