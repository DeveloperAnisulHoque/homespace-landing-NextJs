"use client"
import BuildingAminitieSection from "@/components/Banners/BuildingAminitieSection";
import FeaturedListSection from "@/components/Banners/FeaturedListSection";
import MainFocusSection from "@/components/Banners/MainFocusSection";
import SellsPropertiesBanner from "@/components/Banners/SellsPropertiesBanner";
import ContactSection from "@/components/Contact/ContactSection";
import FindSection from "@/components/FindSection/FindSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import StatsSection from "@/components/StatsSection/StatsSection";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the styles
import { useEffect } from "react";

export default function Home() {


  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      easing: 'ease-in-out', // Easing option
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (<>

 <HeroSection/>
 <div className="  -mt-16  lg:-mt-20 py-10">

  <FindSection/>
  
 
 </div>
  <SellsPropertiesBanner/>


 <ContactSection/>
 <StatsSection/>
 <FeaturedListSection/>
 <MainFocusSection/>
 <BuildingAminitieSection/>
 
   </>
  );
}
