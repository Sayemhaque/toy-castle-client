/* eslint-disable react/prop-types */
import {Link} from "react-router-dom"
// eslint-disable-next-line react/prop-types
const AllToysTable = ({ toy }) => {
  const {_id,seller,toyName,subCategory,price,quantity} = toy;
  return (
    <>
      {/* row 1 */}
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div>
              <div className="font-bold">{seller}</div>
            </div>
          </div>
        </td>
        <td>{toyName}</td>
        <td>{subCategory}</td>
        <td>${price}</td>
        <td className="text-center">{quantity}</td>
        <th>
         <Link to={`/toydetail/${_id}`}> <button className="btn btn-ghost btn-xs">details</button>
        </Link>
        </th>
      </tr>
    </>
  );
};

export default AllToysTable;

