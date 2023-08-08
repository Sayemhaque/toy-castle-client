import AllToysTable from "../Table/AllToysTable";
import { useEffect, useState } from "react"
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  //adding dynamic title
  useTitle("All Toys")
  const [toys, setToys] = useState([])
  const [searchText, setSearchText] = useState(null)
  const [loading,setLoading] = useState(false)

  useEffect(() => {
    const getData = async () =>{
      setLoading(true)
      const res = await fetch("https://toy-castle-server-eight.vercel.app/alltoys")
      const data = await res.json()
      setToys(data)
      setLoading(false)

    }
    getData()
  } ,[])
  const handleSearch = async () => {
    setLoading(true)
    const res = await fetch(`https://toy-castle-server-eight.vercel.app/search/${searchText}`)
    const data = await res.json()
    setToys(data)
    setLoading(false)
  }
  return (
    <div className="px-5 md:px-16">
      <div className="text-center py-12">
        <input type="text" className="py-3 w-8/12 md:w-5/12 px-4 mr-5 border border-gray-400 rounded-lg" onChange={(e) => setSearchText(e.target.value)} placeholder="search" />
        <button onClick={handleSearch} className="px-4 py-3 bg-purple-500 text-white font-bold rounded-lg">search</button>
      </div>
      {loading ?  <p className="text-center text-xl  mt-5 font-bold font-serif">Loading...</p> :
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
      </div>}
    </div>


  );
};

export default AllToys;