import { useState, useEffect } from "react"
import AOS from "aos";
import 'aos/dist/aos.css'
const Gallery = () => {
    const [photos, setPhotos] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        AOS.init({ duration: 1000 })
        const getPhosts = async () => {
            setLoading(true)
            const res = await fetch("https://railway-server-production-a1a3.up.railway.app/gallery");
            const data = await res.json()
            setPhotos(data)
            setLoading(false)
        }
        getPhosts()
    }, [])
    console.log(photos)
    return (
        <div className="py-12 px-5 md:max-w-6xl mx-auto">
            <h2 className="font-bold text-center text-2xl md:text-5xl font-serif">Gallery</h2>
            {loading && <p className="text-center text-xl  mt-5 font-bold font-serif">Loading...</p>}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 py-5 place-items-center">
                {photos.map((photo) => {
                    return <>
                        <div className="overflow-hidden">
                            <img key={photo._id} data-aos="fade-right" className="rounded-xl" src={photo.imgurl} alt="" />
                        </div>
                    </>
                })}
            </div>
        </div>
    );
};

export default Gallery;