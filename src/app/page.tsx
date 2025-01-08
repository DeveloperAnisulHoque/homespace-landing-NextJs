"use client"
import BuildingAminitieSection from "@/components/Banners/BuildingAminitieSection";
import FeaturedListSection from "@/components/Banners/FeaturedListSection";
import MainFocusSection from "@/components/Banners/MainFocusSection";
import SellsPropertiesBanner from "@/components/Banners/SellsPropertiesBanner";
import ContactSection from "@/components/Contact/ContactSection";
import FindSection from "@/components/FindSection/FindSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import StatsSection from "@/components/StatsSection/StatsSection";
 
export default function Home() {

 
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
