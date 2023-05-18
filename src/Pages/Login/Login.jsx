import { Link } from "react-router-dom";

const Login = () => {
    const handleLogIn = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password })
        form.reset()
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="flex-col lg:flex-row">
                    <form onSubmit={handleLogIn} className="card w-full md:min-w-[600px] bg-base-100 p-12 shadow-xl">
                        <h3 className="text-black text-center font-bold text-2xl font-serif">Log In</h3>
                        <div className="card-body grid grid-cols-1 ">
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
                            <p>Do not have an account ? <Link to="/register">Register</Link></p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="bg-purple-600 w-full py-3 rounded-lg text-white font-bold">Log In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;