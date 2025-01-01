import { BsBuildingFillUp } from "react-icons/bs";
import { GiSpookyHouse } from "react-icons/gi";
import { LuMapPinHouse } from "react-icons/lu";
import { MdBedroomParent } from "react-icons/md";
import CountUp from 'react-countup';





const StatsData = [
    { title: "Apartments Sold", total: 21, icon: GiSpookyHouse },
    { title: "Total Area Sq", total: 251, icon: LuMapPinHouse },
    { title: "Total Constructions", total: 465, icon: BsBuildingFillUp },
    { title: "Apartio Rooms", total: 150, icon: MdBedroomParent },
]

const StatsSection = () => {


    return (
        <section className="   stats-section bg-secondary py-[70px]  lg:py-[120px]   ">
 
            <div className="container grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-10  " 
            
               data-aos="fade-up"
 data-aos-delay="300"
            >

                {StatsData.map((item, index) => {
                    return (<div className="flex flex-col items-center justify-center gap-5 hover:bg-white p-10 md:p-6 rounded-md duration-200  " key={index}>
                        <item.icon className=" w-16 h-16  md:w-20 md:h-20 text-primary " />

                        <h3 className="text-4xl  font-extrabold ">
                            <CountUp end={item.total}  enableScrollSpy />+
                           
                            
                            
                            </h3>
                        <p className="font-semibold text-gray-500"> {item.title}    </p>

                    </div>
                    )
                })}

            </div>


        </section>
    );
};

export default StatsSection;
