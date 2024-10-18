
// Component import
import Navbar from "../../src/components/Navbar/Navbar"
import Hero from "../../src/components/Hero/Hero";
import About from "../../src/components/About/About";
import Services from "../../src/components/Services/Services";
import CarList from "../../src/components/CarList/CarList";
import AppStoreBanner from "../../src/components/AppStoreBanner/AppStoreBanner";
import Contact from "../../src/components/Contact/Contact";
import Testimonial from "../../src/components/Testimonial/Testimonial";
import Footer from "../../src/components/Footer/Footer";
import  {  useEffect, useState } from "react";
 


const Home = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
      );
      const element = document.documentElement;
    
      useEffect(() => {
        if (theme === "dark") {
          element.classList.add("dark");
          localStorage.setItem("theme", "dark");
        } else {
          element.classList.remove("dark");
          localStorage.setItem("theme", "light");
        }
      }, [theme]);
      // dark mode end


  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <About />
      <Services />
      <CarList />
      <Testimonial />
      <AppStoreBanner />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
