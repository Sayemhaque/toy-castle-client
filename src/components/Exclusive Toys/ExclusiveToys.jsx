const ExclusiveToys = () => {
    return (
        <div className="md:max-w-6xl mx-auto py-12 px-5">
              <h1 className='font-bold text-4xl text-center font-serif mb-12'>Exclusive Toys</h1>
            <div className="grid gird-cols-1 md:grid-cols-4 gap-5 space-y-12">
                <img className="col-span-1 md:col-span-4" src="https://cdn.shopify.com/s/files/1/0088/7986/5907/files/Wooden_Toys_1230x410.jpg?v=1681476513" alt="" />
     
                <div>
                <img src="https://i5.walmartimages.com/asr/54a95107-6f62-40c3-8daf-39a41d59e003_1.47997d5686d10e21fd547086e3c327ac.jpeg?odnWidth=400&odnHeight=400&odnBg=ffffff" alt="" />
                <p className="text-2xl font-bold text-center">Scooter</p>
                </div>
                <div>
                <img src="https://ae01.alicdn.com/kf/H2e3fff6c38b84b06a53637b2455e513fx.jpg_640x640q90.jpg" alt="" />
                <p className="text-2xl font-bold text-center">frisbee</p>
                </div>
               <div>
               <img src="https://i5.walmartimages.com/asr/90062727-bd9e-46e5-93cf-e288a5069c37.3932e8b8648ed82759dbd46c1a9e1ba8.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff" alt="" />
               <p className="text-2xl font-bold text-center">Pogo Stick</p>
               </div>
               <div>
                 <img src="https://img-us.aosomcdn.com/thumbnail/100/n0/product/2022/02/23/fbW98a17f2768a874.jpg" alt="" />
                 <p className="text-2xl font-bold text-center">Swing set</p>
               </div>
            </div> 
        </div>
    );
};

export default ExclusiveToys;