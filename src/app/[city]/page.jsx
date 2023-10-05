"use client";
import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "../page.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const city = () => {
  useEffect(() => {
    ScrollTrigger.defaults({
      toggleActions: "restart pause resume pause",
      markers: true,
    });

    const timelineHeader = gsap.timeline({
      scrollTrigger: {
        id: "ZOOM",
        trigger: "#home",
        scrub: true,
        start: "top top",
        end: "+=100% 0px",
        pin: true,
      },
    });

    timelineHeader.to(".homeSlider", {
      scale: 1.5,
    });

    timelineHeader.to(".homeSliderReveal", {
      scale: 3,
    });

    ScrollTrigger.create({
      snap: 0.333,
    });
  }, []);
  return (
    <div>
      <div className={styles.fullpagecontainer3}>
        <section id="home" className={styles.section}>
          <div className={styles.homeWrapper}>
            <div className={`homeSlider ${styles.homesections}`}>
              <img
                src="https://uploads-ssl.webflow.com/5cff83ac2044e22cb8cf2f11/5cffeaf7b3cb0ed2d33f7943_hero.jpg"
                alt=""
              />
            </div>
            <div className={`homeSliderReveal ${styles.homesections}`}>
              <img
                src="https://uploads-ssl.webflow.com/5cff83ac2044e22cb8cf2f11/5d13364599bb70e3560cc4e5_background-min 3.png"
                alt=""
              />
            </div>
          </div>
        </section>
        <section id="about" className={styles.section}>
          SECTION 2
        </section>
        <section id="about2" className={styles.section}>
          SECTION 3
        </section>
      </div>
    </div>
  );
};

export default city;
