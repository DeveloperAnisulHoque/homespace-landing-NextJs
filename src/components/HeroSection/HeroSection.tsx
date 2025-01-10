import AOS from "aos";
import Image from "next/image";
import { useEffect } from "react";
import { FaHome, FaPlay } from "react-icons/fa";
import 'aos/dist/aos.css'; // Import the styles
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

 


const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      easing: 'ease-in-out', // Easing option
      once: true, // Whether animation should happen only once
    });
  }, []);
return (
<section className="bg-secondary  py-[120px] md:py-[150px]  lg:py-[230px]  space-y-4  lg:space-y-8    ">  
 
<div className="container flex flex-col lg:flex-row lg:items-center gap-6  lg:gap-10   ">
<div className=" lg:w-6/12  space-y-6">

 <div
 
 data-aos="fade-up"
  className="flex items-center gap-1">
  <FaHome className="text-primary "/>
  <span className="text-black font-semibold text-sm">Real State Agency</span>
  </div> 
  <h1
   data-aos="fade-up"
 data-aos-delay="300"
  className= " text-4xl  lg:text-6xl font-extrabold text-black capitalize">Find your dream <br /> house by us</h1>
<div 
 data-aos="fade-up"
 data-aos-delay="400"
className="  pl-4  lg:pl-6 border-l-2  text-gray-500  border-gray-400 lg:py-2">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat neque <br /> perspiciatis fuga accusamus reiciendis possimus. Voluptatibus quam nemo numquam deleniti.
</div>
<div 
 data-aos="fade-up"
 data-aos-delay="500"
className="flex items-center gap-4">

<button
 
className="  btn capitalize ">Make an Enquiry</button>
<button
 
className="  w-10 h-10  lg:w-14 lg:h-14 rounded-full bg-white text-primary  flex items-center justify-center shadow-md"><FaPlay className= "  h-4 w-4 lg:w-6 lg:h-6 "/></button>
</div>
</div>
<div className="lg:w-6/12">
<Image  width={1000} height={1000} alt="banner-1"   src={"/images/hero/banner-2.jpg"} className="w-full h-auto max-h-[400px]  object-center   lg:object-right object-contain  "  />
</div>  



</div>


<div className="container  flex items-center justify-end gap-4  ">
<button className="bg-white w-9 h-9  lg:w-11 lg:h-11 flex items-center justify-center text-primary shadow-sm hover:shadow duration-150"><GoArrowLeft className="w-5 h-5  lg:w-7 lg:h-7" />
</button>
<button   className="bg-white w-9 h-9  lg:w-11 lg:h-11 flex items-center justify-center text-primary shadow-sm hover:shadow duration-150"><GoArrowRight   className="w-5 h-5  lg:w-7 lg:h-7" />
</button>


</div>










</section>   )
}

export default HeroSection