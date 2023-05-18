import { useLoaderData } from "react-router-dom"
const ToyDetails = () => {
    const singleToy = useLoaderData()
    const { photoUrl, toyName, seller, sellerEmail, price, rating, quantity, description } = singleToy;
    console.log(singleToy)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center py-24 px-5">
            <div>
                <img className="h-[400px]" src={photoUrl} alt="" />
            </div>
            <div>
                <h3 className="text-3xl font-bold">{toyName}</h3>
                <div className="py-5 space-y-2">
                    <p className="font-bold  text-lg">Seller: <span className="text-sm text-gray-500">{seller}</span></p>
                    <p className="font-bold">Email: <span className="text-sm text-gray-500">{sellerEmail}</span></p>
                    <p className="font-bold">Price: <span className="text-sm text-gray-500">${price}</span></p>
                    <p className="font-bold">Rating: <span className="text-sm text-gray-500">{rating}</span></p>
                    <p className="font-bold">Available Quantity: <span className="text-sm  text-gray-500">{quantity}</span></p>
                    <p className="font-bold">Details: <span className="text-sm  text-gray-500">{description}</span></p>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;