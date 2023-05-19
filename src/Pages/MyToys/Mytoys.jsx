import MyToysTable from "../Table/MyToysTable";
import {useContext,useEffect,useState} from 'react'
import {FirebaseAuthContext} from "../../Provider/FirebaseAuthProvider"

const Mytoys = () => {
  const {user} = useContext(FirebaseAuthContext)
  const [toys,setToys] = useState([])
    useEffect(() => {
      const getData = async () => {
        const res = await fetch(`http://localhost:5000/mytoys/${user?.email}`);
        const data = await res.json()
        setToys(data)
      }
      getData()
    },[user.email])
    return (
      <div className="overflow-x-auto w-full py-12 px-5">
        <table className="table w-full">
          {/* head */}
          <thead>
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
    );
};

export default Mytoys;