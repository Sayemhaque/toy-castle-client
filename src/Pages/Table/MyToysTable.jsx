/* eslint-disable react/prop-types */
import {Link} from 'react-router-dom'

const MyToysTable = ({toy}) => {
    const {_id,sellerEmail,toyName,subCategory,price,quantity} = toy;
   const handleDelete = async (id) => {
       const proceed = confirm("Do you want ot delete thsi?")
      if(proceed){
          const res = await fetch(`http://localhost:5000/toy/delete/${id}`,{
          method:"DELETE",
       })
       console.log(res)
      }
   }
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
          <Link to={`/update/${_id}`}>  <button className="px-2 border bg-border font-bold" htmlFor="my-modal-5">Edit</button></Link>
            <button onClick={() => handleDelete(_id)} className="px-2 bg-black text-white font-bold">Delete</button>
          </div>
        </th>
      </tr>
       </>

    )
};

export default MyToysTable;