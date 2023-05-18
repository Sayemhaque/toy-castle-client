
const Addtoy = () => {

    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const photoUrl = form.photoUrl.value;
        const toyName = form.toyName.value;
        const seller = form.seller.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const subCategory = form.subCategory.value
        console.log({ photoUrl, toyName, seller, rating, quantity, description, subCategory })
        form.reset()
    }
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
                                <option value="Indoor">Indoor</option>
                                <option value="Outdoor">Outdoor</option>
                                <option value="Water">Water</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller</span>
                            </label>
                            <input required type="text" placeholder="seller name" name="seller" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input required type="text" placeholder="rating" name="rating" className="input input-bordered" />
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
                    <div className="form-control mt-6">
                        <button className="bg-purple-600 w-full py-3 rounded-lg text-white font-bold">Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Addtoy;