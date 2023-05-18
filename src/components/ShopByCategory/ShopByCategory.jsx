import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {Link} from "react-router-dom"
import 'react-tabs/style/react-tabs.css';
const ShopByCategory = () => {
    return (
        <div className='md:max-w-6xl mx-auto text-center py-12 bg-base-200'>
            <h1 className='font-bold text-4xl text-center font-serif'>Shop by category</h1>
                <Tabs >
                    <TabList>
                        <Tab>Outdoor Sports</Tab>
                        <Tab>Indoor Sports</Tab>
                        <Tab>Water Sports</Tab>
                    </TabList>
                    <TabPanel >
                        <div className="grid grid-cols-1 md:grid-cols-2  gap-5 py-12 px-5">
                            <div className="card w-full bg-base-100 border border-gray-300">
                                <figure><img className='h-[300px]' src="https://img.fruugo.com/product/0/48/597352480_max.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Kids Portable Baseball Ball Launcher Machine Kit </h2>
                                    <p className='text-start'>Price : $100</p>
                                    <p className='text-start'>Ratings:3.4</p>
                                    <div className="card-actions justify-start">
                                       <Link to="/toydetails"> <button className="btn btn-primary">view details</button></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-full bg-base-100 border border-gray-300">
                                <figure><img className='h-[300px]' src="https://image.made-in-china.com/202f0j00ZYrkSdtBAuqb/Football-Game-Soccer-Goal-Ice-Hockey-2-in-1-Children-Ball-Toys-Kids-Outdoor-Sport-Toy.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Football Game Soccer Goal Ice Hockey</h2>
                                    <p className='text-start'>Price : $100</p>
                                    <p className='text-start'>Ratings:3.4</p>
                                    <div className="card-actions justify-start">
                                        <button className="btn btn-primary">view details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-12 px-5">
                            <div className="card w-full bg-base-100 border border-gray-300">
                                <figure><img className='h-[300px]' src="https://s.alicdn.com/@sc04/kf/H78c55fe383714fd2960e92a782d625ccQ.jpg_300x300.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Kiztoys&1 Water Gun Toys for Kids</h2>
                                    <p className='text-start'>Price : $100</p>
                                    <p className='text-start'>Ratings:3.4</p>
                                    <div className="card-actions justify-start">
                                        <button className="btn btn-primary">view details</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-full bg-base-100 border border-gray-300">
                                <figure><img className='h-[300px]' src="https://m.media-amazon.com/images/I/71CzLCQnaOL._AC_UL400_.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">kids Golf</h2>
                                    <p className='text-start'>Price : $300</p>
                                    <p className='text-start'>Ratings:3.4</p>
                                    <div className="card-actions justify-start">
                                        <button className="btn btn-primary">view details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-12 px-5">
                            <div className="card w-full bg-base-100 border border-gray-300">
                                <figure><img className='h-[300px]' src="https://m.media-amazon.com/images/I/81JvqN2A9wL._AC_SL1500_.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Kiztoys&1 Water Gun Toys for Kids</h2>
                                    <p className='text-start'>Price : $100</p>
                                    <p className='text-start'>Ratings:3.4</p>
                                    <div className="card-actions justify-start">
                                        <button className="btn btn-primary">view details</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-full bg-base-100 border border-gray-300">
                                <figure><img className='h-[300px]' src="https://i5.walmartimages.com/asr/af80d648-c374-4386-9a25-2a0e912d433d.df29eaa503b19574d0314c8867319e47.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Inflatable Yellow and Red Water Sports Sea-Saw Rocker Swimming</h2>
                                    <p className='text-start'>Price : $300</p>
                                    <p className='text-start'>Ratings:3.4</p>
                                    <div className="card-actions justify-start">
                                        <button className="btn btn-primary">view details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
    );
};

export default ShopByCategory;