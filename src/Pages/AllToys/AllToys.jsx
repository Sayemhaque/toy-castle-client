import AllToysTable from "../Table/AllToysTable";
import {useLoaderData} from "react-router-dom"

const AllToys = () => {
    const allToys = useLoaderData()
    console.log(allToys)
    return (
        <div className="px-5 md:px-16">
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
            {allToys.map(toy => <AllToysTable key={toy._id} toy={toy}/>)}
          
        </tbody>
      </table>
    </div>
        </div>
            
            
    );
};

export default AllToys;