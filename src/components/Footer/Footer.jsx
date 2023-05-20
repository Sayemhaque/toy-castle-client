import Logo from "../../assets/ball.png"
import { FaFacebook, FaInstagram,} from "react-icons/fa"
const Footer = () => {
    return (
        <footer className="footer  bottom-0 footer-center py-24 bg-purple-500 text-white">
            <div className="flex flex-col flex-grow">
                <img src={Logo} className="w-24 h-24" alt="" />
                <p className="font-bold mt-3 text-lg">
                    Toy Castle <br />Providing best products since 1992
                </p>
            </div>
            <div className="flex flex-col font-bold">
                <p className="text-lg">Contact</p>
                <p>Email : mdsayem@gmail.com</p>
                <p>Phone : 01954268914</p>
                <p className="mb-2 font-bold text-sm">Address: Dhaka,Bangladesh</p>
            </div>
            <div>

                <div className="grid  grid-cols-2 gap-6">
                    <a href="https://www.facebook.com/mohammadsayemhaque1/"> <FaFacebook className="w-8 h-8" /></a>
                    <a href="https://www.instagram.com/iamsayem777/">  <FaInstagram className="w-8 h-8" /></a>
                </div>
            </div>
            <p className="mt-2">Copyright ©Toycastle 2023 - All right reserved</p>
        </footer>
    );
};

export default Footer;