import {useEffect} from "react"
import  AOS  from "aos";
import 'aos/dist/aos.css'
import {FaShippingFast,FaPhoneSquare,FaEnvelope,FaThumbsUp} from "react-icons/fa"
const Support = () => {
   useEffect(() => {
      AOS.init()
   } ,[])
    return (
        <div className="py-12 md:max-w-6xl mx-auto px-5">
            <h1 className='font-bold text-2xl md:text-4xl text-center font-serif mb-3'>Support</h1>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-4  min-h-40 py-8">
                 <div className="bg-purple-200 flex flex-col justify-center items-center p-3" data-aos="fade-right">
                    <FaShippingFast className="w-8 h-8 md:w-12 md:h-12"/>
                    <p className="font-bold text-sm md:text-md mt-3">Free shipping  on products</p>
                 </div>
                 <div className="bg-purple-200 flex flex-col justify-center items-center p-3 " data-aos="fade-right">
                    <FaPhoneSquare className="w-7 h-7 md:w-12 md:h-12" />
                    <p className="font-bold text-md mt-3">call us</p>
                    <p className="font-bold  text-sm">01954268915</p>
                 </div>
                 <div className="bg-purple-200 flex flex-col justify-center items-center p-3" data-aos="fade-right">
                    <FaEnvelope className="w-7 h-7 md:w-12 md:h-12"/>
                    <p className="font-bold text-md mt-3">Email</p>
                    <p className="font-bold text-sm">toycastle@gmail.com</p>
                 </div>
                 <div className="bg-purple-200 flex flex-col justify-center items-center p-3" data-aos="fade-right">
                    <FaThumbsUp className="w-7 h-7 md:w-12 md:h-12"/>
                    <p className="font-bold text-sm md:text-md mt-3">All Products <br /> all original</p>
                 </div>
            </div> 
        </div>
    );
};

export default Support;