import {FaShippingFast,FaPhoneSquare,FaEnvelope,FaThumbsUp} from "react-icons/fa"
const Support = () => {
    return (
        <div className="py-12 md:max-w-6xl mx-auto px-5">
            <h1 className='font-bold text-4xl text-center font-serif mb-12'>Support</h1>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4  min-h-40 py-8">
                 <div className="bg-purple-200 flex flex-col justify-center items-center p-3">
                    <FaShippingFast className="w-12 h-12"/>
                    <p className="font-bold text-md mt-3">Free Shipping <br /> on products</p>
                 </div>
                 <div className="bg-purple-200 flex flex-col justify-center items-center p-3">
                    <FaPhoneSquare className="w-12 h-12"/>
                    <p className="font-bold text-md mt-3">Call Us</p>
                    <p className="font-bold text-sm">01954268915</p>
                 </div>
                 <div className="bg-purple-200 flex flex-col justify-center items-center p-3">
                    <FaEnvelope className="w-12 h-12"/>
                    <p className="font-bold text-md mt-3">Email</p>
                    <p className="font-bold text-sm">toycastle@gmail.com</p>
                 </div>
                 <div className="bg-purple-200 flex flex-col justify-center items-center p-3">
                    <FaThumbsUp className="w-12 h-12"/>
                    <p className="font-bold text-md mt-3">All Products <br /> all original</p>
                 </div>
            </div> 
        </div>
    );
};

export default Support;