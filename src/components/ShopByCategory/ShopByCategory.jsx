import {  Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';
import { useState, useEffect } from 'react';
import ToyCard from './ToyCard';


const ShopByCategory = () => {
    const [toys, setToys] = useState([])
    const [tabname, setTabName] = useState("outdoor")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getToys = async () => {
            setLoading(true)
            const res = await fetch(`https://toy-castle.onrender.com/toys/category/${tabname}`)
            const data = await res.json()
            setToys(data)
            setLoading(false)
            console.log(tabname)
        }
        getToys()
    }, [tabname])
     
    console.log(toys)
    const handeTabName = (name) => {
        setTabName(name)
    }

    return (
        <div className=' py-12 bg-base-200'>
            <h1 className='font-bold text-2xl md:text-4xl text-center font-serif pb-8'>Shop by category</h1>
            <div className='md:max-w-6xl mx-auto text-center'>
                <Tabs >
                    <TabList className="space-x-5 space-y-5">
                        <button className={`${tabname === "outdoor" ? "px-3 py-2 font-bold rounded-md bg-purple-500 text-white " : "px-3 py-2 bg-black font-bold rounded-md text-white"}`} onClick={() => handeTabName("outdoor")}>Outdoor Sports</button>

                        <button className={`${tabname === "indoor" ? "px-3 py-2 font-bold rounded-md bg-purple-500 text-white " : "px-3 py-2 bg-black font-bold rounded-md text-white"}`} onClick={() => handeTabName("indoor")}>Indoor Sports</button>

                        <button className={`${tabname === "water" ? "px-3 py-2 font-bold rounded-md bg-purple-500 text-white " : "px-3 py-2 bg-black  font-bold rounded-md text-white"}`} onClick={() => handeTabName("water")}>Water Sports</button>
                    </TabList>
                    <TabPanel >
                        <div className="grid grid-cols-1 md:grid-cols-2  gap-5 py-12 px-5">
                            {loading ? <p className="text-center text-xl  mt-5 font-bold font-serif">Loading...</p> : toys.map(toy => <ToyCard key={toy._id} toy={toy} />)}
                        </div>
                    </TabPanel>
                    <TabPanel >
                    <div className="grid grid-cols-1 md:grid-cols-2  gap-5 py-12 px-5">
                            {loading ? <p className="text-center text-xl  mt-5 font-bold font-serif">Loading...</p> : toys.map(toy => <ToyCard key={toy._id} toy={toy} />)}
                        </div>
                    </TabPanel>
                    <TabPanel >
                    <div className="grid grid-cols-1 md:grid-cols-2  gap-5 py-12 px-5">
                            {loading ? <p className="text-center text-xl  mt-5 font-bold font-serif">Loading...</p> : toys.map(toy => <ToyCard key={toy._id} toy={toy} />)}
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ShopByCategory;