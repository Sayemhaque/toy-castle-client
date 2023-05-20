import { FirebaseAuthContext } from "../../Provider/FirebaseAuthProvider"
import { useContext, useState } from "react";
import {  toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Toasts from "../../components/Toast/Toasts";
import useTitle from "../../hooks/useTitle";
const Addtoy = () => {
    const {user} = useContext(FirebaseAuthContext)
    const [loading,setLoadng] = useState(false)
    //adding dynamic title
    useTitle("Add Toy")
    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const photoUrl = form.photoUrl.value;
        const toyName = form.toyName.value;
        const seller = form.seller.value;
        const sellerEmail = form.sellerEmail.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const subCategory = form.subCategory.value
        const toydata = { photoUrl, toyName, seller, sellerEmail, rating, price, quantity, description, subCategory }
        addToy(toydata)
        form.reset()
    }

    
const addToy = async (toydata) => {
    try {
        setLoadng(true)
       const res = await fetch("https://railway-server-production-a1a3.up.railway.app/toys", {
          method: "POST",
          headers: { "content-Type": "application/json" },
          body: JSON.stringify(toydata)
       })
       const data = await res.json()
       console.log(data)
       if(data.insertedId){
        setLoadng(false)
        notify()
       }
    } catch (error) {
       console.log(error)
    }
 }
 
 
 
   const  notify = () => {
    toast.success('Toy Added successfully', {
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
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <form onSubmit={handleRegister} className="card w-full md:min-w-[800px] bg-base-100 p-12 shadow-xl">
                    <h3 className="text-black text-center font-bold text-2xl font-serif">Add Toy</h3>
                    <div className="card-body grid grid-cols-1 md:grid-cols-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input required type="text" placeholder="photoUrl" name="photoUrl" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <input required type="text" placeholder="toy name" name="toyName" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Choose a sub-category:</span>
                            </label>
                            <select id="subCategory" className="input input-bordered">
                                <option value="indoor">Indoor</option>
                                <option value="outdoor">Outdoor</option>
                                <option value="water">Water</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller</span>
                            </label>
                            <input required type="text" defaultValue={user?.displayName} placeholder="seller name" name="seller" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input required type="text" defaultValue={user?.email} placeholder="seller email" name="sellerEmail" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input required type="text" placeholder="rating" name="rating" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input required type="text" placeholder="$price" name="price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input required type="text" placeholder="quantity" name="quantity" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input required type="text" placeholder="description" name="description" className="input input-bordered" />
                        </div>
                    </div>
                    <div>
                  </div>
                    <div className="form-control mt-6">
                    <button disabled={loading} className="bg-purple-600 w-full py-3 rounded-lg text-white font-bold disabled:bg-opacity-40">{loading ? "Adding" : "Add"}</button>
                        <Toasts />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Addtoy;