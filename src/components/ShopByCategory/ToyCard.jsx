import { useContext } from "react";
import {  useNavigate,} from "react-router-dom";
import {FirebaseAuthContext} from "../../Provider/FirebaseAuthProvider"
import { toast } from "react-toastify";

/* eslint-disable react/prop-types */
const ToyCard = ({toy}) => {
    const {user} = useContext(FirebaseAuthContext)
    const navigate = useNavigate()
    const {_id,photoUrl,toyName,price,rating} = toy
    
    const handleRedirect = () => {
       if(!user){
         notify()
       }
       navigate(`/toydetail/${_id}`)
    }
    const  notify = () => {
        toast.warning('You have to log in first to view details', {
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
        <div className="card w-full bg-base-100 border border-gray-300">
        <figure><img className='h-[300px]' src={photoUrl} alt="toy" /></figure>
        <div className="card-body">
            <h2 className="card-title">{toyName}</h2>
            <p className='text-start'>Price : ${price}</p>
            <p className='text-start'>Ratings:{rating}</p>
            <div className="card-actions justify-start">
               <button onClick={handleRedirect}className="px-5 py-2 rounded-md bg-purple-500 text-white font-bold">view details</button>
            </div>
        </div>
    </div>
    );
};

export default ToyCard;