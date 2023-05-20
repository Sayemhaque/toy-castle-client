/* eslint-disable react/prop-types */
import {  toast } from 'react-toastify';
import {useLoaderData} from "react-router-dom"
import Toasts from '../../../components/Toast/Toasts';
import useTitle from '../../../hooks/useTitle';
const UpdateToy = () => {
     //adding dynamic title
  useTitle("update Toys")
    const toy = useLoaderData()
    const {_id,photoUrl,toyName,price,rating,quantity,description} = toy;
    const handleUpate = (event,) => {
        event.preventDefault()
        const form = event.target;
        const photoUrl = form.photoUrl.value;
        const toyName = form.toyName.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const data = { photoUrl, toyName,rating, price, quantity, description,}
        updateToy(data)
        form.reset()
        console.log(data)
    }
    

    const updateToy = async (info) => {
        try {
           const res = await fetch(`https://railway-server-production-a1a3.up.railway.app/update/${_id}`, {
              method: "PUT",
              headers: { "content-Type": "application/json" },
              body: JSON.stringify(info)
           })
           const data = await res.json()
           console.log(data)
           if(data.modifiedCount > 0){
            notify()
           }
        } catch (error) {
           console.log(error)
        }
     }
     
    const  notify = () => {
        toast.success('Toy updated successfully', {
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
                <form onSubmit={handleUpate} className="card w-full md:min-w-[800px] bg-base-100 p-12 shadow-xl">
                    <h3 className="text-black text-center font-bold text-2xl font-serif">Update Toy</h3>
                    <div className="card-body grid grid-cols-1 md:grid-cols-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input required type="text" defaultValue={photoUrl} placeholder="photoUrl" name="photoUrl" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <input required type="text" defaultValue={toyName} placeholder="toy name" name="toyName" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input required type="text" defaultValue={rating} placeholder="rating" name="rating" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input required type="text" defaultValue={price} placeholder="toy name" name="price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input required type="text" defaultValue={quantity} placeholder="quantity" name="quantity" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input required defaultValue={description} type="text" placeholder="description" name="description" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="bg-purple-600 w-full py-3 rounded-lg text-white font-bold">Update</button>
                        <Toasts/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateToy;