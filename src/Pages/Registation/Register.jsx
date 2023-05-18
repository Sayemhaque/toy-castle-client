import { useContext } from "react";
import { Link,useNavigate } from "react-router-dom";
import { FirebaseAuthContext } from "../../Provider/FirebaseAuthProvider";

const Register = () => {
    const navigate = useNavigate()
    const {createUserFirebase,updateProfileFirbase} = useContext(FirebaseAuthContext)
    const handleAddToy = (event) => {
        event.preventDefault()
        const form = event.target;
        const photoUrl = form.photoUrl.value;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ photoUrl, name, email, password })
        createUserFirebase(email,password)
        .then(() => {
            updateProfileFirbase(name,photoUrl)
            .then(navigate('/login'))
            .catch(error => console.log(error))
        })
        .catch(error => console.log(error))
        form.reset()
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="flex-col lg:flex-row">
                    <form onSubmit={handleAddToy} className="card w-full md:min-w-[600px] bg-base-100 p-12 shadow-xl">
                        <h3 className="text-black text-center font-bold text-2xl font-serif">Register</h3>
                        <div className="card-body grid grid-cols-1 ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input required type="text" placeholder="name" name="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input required type="email" placeholder="email" name="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input required type="password" placeholder="password" name="password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input required type="text" placeholder="photoUrl" name="photoUrl" className="input input-bordered" />
                            </div>
                            <p>Alredy have an account ? <Link to="/login">Login</Link></p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="bg-purple-600 w-full py-3 rounded-lg text-white font-bold">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;