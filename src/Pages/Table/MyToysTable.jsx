/* eslint-disable react/prop-types */
import {Link} from 'react-router-dom'
import {  toast } from 'react-toastify';
import Toasts from '../../components/Toast/Toasts';


const MyToysTable = ({toy}) => {
    const {_id,sellerEmail,toyName,subCategory,price,quantity} = toy;
   const handleDelete = async (id) => {
       const proceed = confirm("Do you want ot delete thsi?")
      if(proceed){
          const res = await fetch(`https://railway-server-production-a1a3.up.railway.app/toy/delete/${id}`,{
          method:"DELETE",
       })
       const data = await res.json()
       console.log(data)
       if(data.deletedCount > 0){
        notify()
       }
      }
   }
   const  notify = () => {
    toast.success('Toy deleted successfully', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
   };

    return (
       <>
        <tr>
        <td>{toyName}</td>
        <td>{sellerEmail}</td>
        <td>{subCategory}</td>
        <td>${price}</td>
        <td className="text-center">{quantity}</td>
        <th>
          <div className="flex flex-col gap-4">
          <Link to={`/update/${_id}`}>  <button className="px-2 btn-block border bg-border font-bold" htmlFor="my-modal-5">Edit</button></Link>
          <div>
          <button onClick={() => handleDelete(_id)} className="px-2 bg-black btn-block text-white font-bold">Delete</button>
          <Toasts/>
          </div>
          </div>
        </th>
      </tr>
       </>

    )
};

export default MyToysTable;