import { useEffect, useState } from "react";
import ExclusiveBanner from "../../assets/_Blue White Modern Marketing Strategy Blog Banner.jpg"
import AOS from "aos";
import 'aos/dist/aos.css'
const ExclusiveToys = () => {
  const [photos, setPhotos] = useState([])
  const [loading,setLoading] = useState(false)

  useEffect(() => {
    AOS.init()
      const getPhosts = async () => {
        setLoading(true)
          const res = await fetch("https://railway-server-production-a1a3.up.railway.app/exclusive");
          const data = await res.json()
          setPhotos(data)
          setLoading(false)
      }
      getPhosts()
  }, [])
  console.log(photos)
    return (
        <div className="md:max-w-6xl mx-auto py-12 px-5">
              <h1 className='font-bold text-2xl md:text-4xl text-center font-serif mb-12 '>Exclusive Toys</h1>
             {loading &&  <p className="text-center">Loading...</p>}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 space-y-12">
            <img className="col-span-2 md:col-span-4  w-full object-cover" data-aos="fade-up-right" src={ExclusiveBanner} alt="" />
              {photos.map((photo) => {
                return <>
                 <div>
                <img className="w-full animate-bounce " src={photo.imgurl} alt="" />
                </div>
                 </>
              })}
              
            </div> 
        </div>
    );
};

export default ExclusiveToys;