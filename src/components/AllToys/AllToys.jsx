import React, { useEffect, useState } from 'react';
import AllToysRow from '../AllToysRow/AllToysRow';
import useTitle from '../../hooks/useTitle';

const AllToys = () => {
  useTitle('AllToys');
  const [allToys, setAllToys] = useState([]);
  const [searchText , setSearchText] = useState("");

  console.log(searchText)

  useEffect(() => {
    fetch('https://toy-marketplace-server-peach.vercel.app/toyswithlimit')
      .then(res => res.json())
      .then(data => {
        setAllToys(data)
      })
  }, [])

 const handleSearch = () => {
  fetch(`https://toy-marketplace-server-peach.vercel.app/searchbytoyname/${searchText}`)
  .then(res => res.json())
  .then(data => setAllToys(data))
 }

  const showAllToys = () => {
      fetch('https://toy-marketplace-server-peach.vercel.app/alltoys')
        .then(res => res.json())
        .then(data => {
          setAllToys(data)
        })
  }
  return (
    <div className='my-6'>
    <div className='flex gap-2 my-3 justify-center'>
        <input onChange={(e) => setSearchText(e.target.value)}  type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
        <button onClick={handleSearch} className="btn btn-outline btn-info">Search</button>
        </div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          {/* head */}
          <thead>
            <tr className='text-center'>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {
              allToys.map(toy => <AllToysRow key={toy._id} toy={toy}></AllToysRow>)
            }
          </tbody>
        </table>
      </div>
      <div className='my-6 flex justify-center'>
        <button onClick={showAllToys} className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-none">Show All Toys</button>
      </div>
    </div>
  );
};

export default AllToys;