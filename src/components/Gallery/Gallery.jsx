import { useState, useEffect } from "react"
import AOS from "aos";
import 'aos/dist/aos.css'
const Gallery = () => {
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        AOS.init({ duration: 1000 })
        const getPhosts = async () => {
            const res = await fetch("http://localhost:5000/gallery");
            const data = await res.json()
            setPhotos(data)
        }
        getPhosts()
    }, [])
    console.log(photos)
    return (
        <div className="py-12 px-5">
            <h2 className="font-bold text-center text-5xl font-serif">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 py-5">
                {photos.length === 0 ? <p className="text-center font-serif font-bold text-4xl">Loading....</p> : <>
                    {photos.map((photo) => {
                        return <>
                            <div className="overflow-hidden">
                                <img data-aos="fade-right" className="border-8 border-purple-600 transition-transform duration-500 ease-in-out hover:scale-125" src={photo.imgurl} alt="" />
                            </div>
                        </>
                    })}
                </>}

            </div>
        </div>
    );
};

export default Gallery;