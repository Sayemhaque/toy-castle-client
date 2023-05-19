import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom";
import { FirebaseAuthContext } from "../Provider/FirebaseAuthProvider";
// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(FirebaseAuthContext)
    const location = useLocation()
    if (loading) {
        return <p className="text-center text-lg font-bold py-12">Loading...</p>
    }
    if (user) {
        return children
    }
    return <Navigate to="/login" state={{from:location}} replace={true}></Navigate>
};


export default PrivateRoute;