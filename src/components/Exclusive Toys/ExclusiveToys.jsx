import { useEffect, useState } from "react";

const ExclusiveToys = () => {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
      const getPhosts = async () => {
          const res = await fetch("https://railway-server-production-a1a3.up.railway.app/exclusive");
          const data = await res.json()
          setPhotos(data)
      }
      getPhosts()
  }, [])
  console.log(photos)
    return (
        <div className="md:max-w-6xl mx-auto py-12 px-5">
              <h1 className='font-bold text-2xl md:text-4xl text-center font-serif mb-12'>Exclusive Toys</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 space-y-12">
            <img className="col-span-2 md:col-span-4" src="https://cdn.shopify.com/s/files/1/0088/7986/5907/files/Wooden_Toys_1230x410.jpg?v=1681476513" alt="" />
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