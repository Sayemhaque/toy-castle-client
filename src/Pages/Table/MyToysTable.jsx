/* eslint-disable react/prop-types */
import {Link} from 'react-router-dom'

const MyToysTable = ({toy}) => {
    const {_id,sellerEmail,toyName,subCategory,price,quantity} = toy;
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
            <button className="px-2 bg-black text-white font-bold">Delete</button>
          </div>
        </th>
      </tr>
       </>

    )
};

export default MyToysTable;