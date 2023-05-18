
const Gallery = () => {
    return (
        <div className="py-12 px-5">
            <h2 className="font-bold text-center text-5xl font-serif">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 py-5">
             <div className="overflow-hidden">
             <img className="border-8 border-purple-600 transition-transform duration-500 ease-in-out hover:scale-125" src="https://www.dunhamssports.com/dw/image/v2/BGJZ_PRD/on/demandware.static/-/Sites-master_catalog_Dunhams/default/dw6c457bd7/images/0097013476101_kl5.jpg?sw=800&sh=800" alt="" /> 
                </div>   
               <div className="overflow-hidden">
               <img className="border-8 border-purple-600  transition-transform duration-500 ease-in-out hover:scale-125" src="https://cdn.shopify.com/s/files/1/1846/1391/products/TSH-IT-01_7_480x480@2x.jpg?v=1676877635" alt="" />   
               </div>
               <div className="overflow-hidden">
               <img className="border-8 border-purple-600 transition-transform duration-500 ease-in-out hover:scale-125" src="https://cdn.shopify.com/s/files/1/0337/9432/6660/products/51VUmBMMDmL_600x.jpg?v=1631556633" alt="" />   
               </div>
               <div className="overflow-hidden">
               <img className="border-8 border-purple-600 transition-transform duration-500 ease-in-out hover:scale-125" src="https://m.media-amazon.com/images/I/81KsfD+3P+L._AC_SL1500_.jpg" alt="" />   
                
               </div>
               <div className="overflow-hidden">
               <img className="border-8 border-purple-600 transition-transform duration-500 ease-in-out hover:scale-125" src="https://ae01.alicdn.com/kf/S5c1dc1e7d1b64fafaea05dfdde905963g.jpg" alt="" />   

               </div>
               <div className="overflow-hidden">
               <img className="border-8 border-purple-600 transition-transform duration-500 ease-in-out hover:scale-125" src="https://m.media-amazon.com/images/I/81dxMvkv3UL.jpg" alt="" />   

               </div>
              </div>   
         
        </div>
    );
};

export default Gallery;