import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';
import { useState, useEffect } from 'react';
import ToyCard from './ToyCard';


const ShopByCategory = () => {
    const [toys, setToys] = useState([])
    const [tabname, setTabName] = useState("outdoor")

    useEffect(() => {
        const getToys = async () => {
            const res = await fetch(`https://toy-castle.vercel.app/toys/category/${tabname}`)
            const data = await res.json()
            setToys(data)
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
                    <TabList>
                        <Tab onClick={() => handeTabName("outdoor")}>Outdoor Sports</Tab>
                        <Tab onClick={() => handeTabName("indoor")}>Indoor Sports</Tab>
                        <Tab onClick={() => handeTabName("water")}>Water Sports</Tab>
                    </TabList>
                    <TabPanel >
                        <div className="grid grid-cols-1 md:grid-cols-2  gap-5 py-12 px-5">
                            {toys.map(toy => <ToyCard key={toy._id} toy={toy} />)}
                        </div>
                    </TabPanel>
                    <TabPanel >
                        <div className="grid grid-cols-1 md:grid-cols-2  gap-5 py-12 px-5">
                            {toys.map(toy => <ToyCard key={toy._id} toy={toy} />)}
                        </div>
                    </TabPanel>
                    <TabPanel >
                        <div className="grid grid-cols-1 md:grid-cols-2  gap-5 py-12 px-5">
                            {toys.map(toy => <ToyCard key={toy._id} toy={toy} />)}
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ShopByCategory;