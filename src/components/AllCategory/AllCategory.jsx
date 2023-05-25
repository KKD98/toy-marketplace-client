import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SingleCategory from '../SingleCategory/SingleCategory';

const AllCategory = () => {
    const [categories, setCategories] = useState([]);
    const [categoryName , setCategoryName] = useState("disneyprincess");

    useEffect(() => {
        fetch(`https://toy-marketplace-server-peach.vercel.app/toysbycategory/${categoryName}`)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [categoryName])

    let handleCategory = name => {
        setCategoryName(name);
    }
    return (
        <div className='mt-4 mb-6'>
         <h1 className='text-4xl text-center font-semibold text-sky-600 mb-4 py-2'>Shop By Category In Disney World</h1>
            <Tabs>
            <TabList className="flex justify-center gap-2 mb-6">
                <Tab onClick={() => handleCategory("disneyprincess")} className="p-4 text-xl border-2 border-sky-400 font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-white">Disney Princess</Tab>
                <Tab onClick={() => handleCategory("lego")} className="p-4 text-xl border-2 border-sky-400 font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-white">Lego</Tab>
                <Tab onClick={() => handleCategory("actionfigure")} className="p-4 text-xl border-2 border-sky-400 font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-white">Action Figure</Tab>
            </TabList>

            <TabPanel>
                <div className='lg:mx-2 grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    {
                        categories.map(category => <SingleCategory key={category._id} category={category}></SingleCategory>)
                    }
                </div>
            </TabPanel>
            <TabPanel>
            <div className='lg:mx-2 grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    {
                        categories.map(category => <SingleCategory key={category._id} category={category}></SingleCategory>)
                    }
                </div>
            </TabPanel>
            <TabPanel>
            <div className='lg:mx-2 grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    {
                        categories.map(category => <SingleCategory key={category._id} category={category}></SingleCategory>)
                    }
                </div>
            </TabPanel>
        </Tabs>
        </div>
    );
};

export default AllCategory;