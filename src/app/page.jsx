"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
const Home = () => {
  const url = usePathname();
  useEffect(() => {
    if (url == "/") {
      localStorage.clear();
      localStorage.setItem("cityName", "mumbai");
      window.location.href = "/mumbai";
    } else {
      localStorage.clear();
      localStorage.setItem("cityName", url);
    }
  }, []);

  return <></>;
};

export default Home;
