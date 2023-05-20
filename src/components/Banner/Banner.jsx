import BanneImage from "../../assets/istockphoto-183327961-170667a-removebg-preview.png"
import  AOS  from "aos";
import 'aos/dist/aos.css'
import {useEffect} from "react";

const Banner = () => {
    useEffect(() => {
        AOS.init()
    } , [])
    return ( 
        <div className=" bg-white">
            <div className="md:max-w-6xl mx-auto py-12 px-5">
            <div className="md:flex items-center min-h-[70vh] gap-5">
            <div className="md:w-1/2" data-aos="zoom-in">
               <h1 className="text-3xl md:text-6xl font-bold font-serif">Welcome to 
                <span className="text-purple-500">Toys castle</span>
               </h1>
               <p className="mt-5 text-slate-500 text-sm  font-semibold">Toy Castle is a delightful online destination for children and toy enthusiasts, offering a captivating world of imagination and play. As you step into the virtual realm of Toy Castle, you are greeted by a vibrant and enchanting website designed to evoke wonder and excitement</p>
               <div className="mt-7 flex flex-col md:flex-row text-start md:items-center gap-3">
                <button className="bg-purple-500  px-5  py-2 text-sm rounded-md text-white font-bold">SHOP NOW</button>
                <button className="border border-purple-500  px-5  text-sm py-2 rounded-md  font-bold transition-transform duration-300 ease-in-out hover:scale-110">EXPLORE TOYS</button>
               </div>
            </div>
            <div className="md:w-1/2">
                <img className="h-[500px] object-contain rounded-md" src={BanneImage} alt="" />
            </div>
        </div>
            </div>
        </div>
    );
};

export default Banner;