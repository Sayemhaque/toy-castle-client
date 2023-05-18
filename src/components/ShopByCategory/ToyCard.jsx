import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ToyCard = ({toy}) => {
    const {_id,photoUrl,toyName,price,rating} = toy
    return (
        <div className="card w-full bg-base-100 border border-gray-300">
        <figure><img className='h-[300px]' src={photoUrl} alt="toy" /></figure>
        <div className="card-body">
            <h2 className="card-title">{toyName}</h2>
            <p className='text-start'>Price : ${price}</p>
            <p className='text-start'>Ratings:{rating}</p>
            <div className="card-actions justify-start">
                <Link to={`/toydetail/${_id}`}><button className="px-5 py-2 rounded-md bg-purple-500 text-white font-bold">view details</button></Link>
            </div>
        </div>
    </div>
    );
};

export default ToyCard;