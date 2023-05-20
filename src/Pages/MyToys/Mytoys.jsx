import MyToysTable from "../Table/MyToysTable";
import { useContext, useEffect, useState } from 'react'
import { FirebaseAuthContext } from "../../Provider/FirebaseAuthProvider"
import useTitle from "../../hooks/useTitle";

const Mytoys = () => {
  //adding dynamic title
  useTitle("My Toys")
  const { user } = useContext(FirebaseAuthContext)
  const [toys, setToys] = useState([])
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`https://railway-server-production-a1a3.up.railway.app/mytoys/${user?.email}`);
      const data = await res.json()
      setToys(data)
    }
    getData()
  }, [user.email])

  const handleSorting = async (price) => {
    const res = await fetch(`https://railway-server-production-a1a3.up.railway.app/${price}/${user?.email}`)
    const data = await res.json();
    setToys(data)
  }
  return (
   
    <div>
      <div className="overflow-x-auto w-full py-12 px-5">
          <div className="flex items-center gap-5 mb-2">
            <p className="font-bold text-md">Filter by price:</p>
            <button onClick={() => handleSorting("lowest")} className="px-2 py-1 bg-purple-500 text-white font-bold">Lowest</button>
            <button onClick={() => handleSorting("highest")} className="px-2 py-1 bg-purple-500 text-white font-bold">Highest</button>
          </div>
        <table className="table w-full">
          {/* head */}
          <thead className={`${toys.length === 0 ? "hidden" : ""}`}>
            <tr>
              <th>Toy Name</th>
              <th>sellerEmail</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {toys.map(toy => <MyToysTable key={toy._id} toy={toy} />)}
          </tbody>
        </table>
      </div>
    </div>
   
  );
};

export default Mytoys;