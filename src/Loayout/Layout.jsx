import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import {Outlet} from "react-router-dom"

const Layout = () => {
    return (
        <div className="md:max-w-5xl mx-auto">
            <Navbar />
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;