import React, { Component, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Servicefive from "./pages/Servicefive";
import Serviceone from "./pages/Serviceone";
import Servicetwo from "./pages/Servicetwo";
import Servicethree from "./pages/Servicethree";
import Servicefour from "./pages/Servicefour";
import Servicesix from "./pages/Servicesix";

const App = () => {
  // // dark mode start
  // const [theme, setTheme] = useState(
  //   localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  // );
  // const element = document.documentElement;

  // useEffect(() => {
  //   if (theme === "dark") {
  //     element.classList.add("dark");
  //     localStorage.setItem("theme", "dark");
  //   } else {
  //     element.classList.remove("dark");
  //     localStorage.setItem("theme", "light");
  //   }
  // }, [theme]);
  // // dark mode end

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}  />
      <Route path="servicefive" element={<Servicefive/> } />
      <Route path="serviceone" element={<Serviceone />} />
      <Route path="servicetwo" element={<Servicetwo />}/>
      <Route path="servicethree" element={<Servicethree />}/>
      <Route path="servicefour" element={<Servicefour />}/>
      <Route path="servicefive" element={<Servicesix />}/>
      
  
    </Routes>
   </BrowserRouter>
    </div>
  );
};

export default App;


