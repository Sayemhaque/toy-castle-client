import AllToysTable from "../Table/AllToysTable";
import { useLoaderData } from "react-router-dom"
import { useState } from "react"

const AllToys = () => {
  const allToys = useLoaderData()
  const [toys, setToys] = useState(allToys)
  const [searchText, setSearchText] = useState(null)


  const handleSearch = async () => {
    const res = await fetch(`http://localhost:5000/search/${searchText}`)
    const data = await res.json()
    setToys(data)
  }
  return (
    <div className="px-5 md:px-16">
      <div className="text-center py-12">
        <input type="text" className="py-3 w-8/12 md:w-5/12 px-4 mr-5 border border-gray-400 rounded-lg" onChange={(e) => setSearchText(e.target.value)} placeholder="search" />
        <button onClick={handleSearch} className="px-4 py-3 bg-purple-500 text-white font-bold rounded-lg">search</button>
      </div>
      <div className="overflow-x-auto w-full py-12">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {toys.map(toy => <AllToysTable key={toy._id} toy={toy} />)}
          </tbody>
        </table>
      </div>
    </div>


  );
};

export default AllToys;