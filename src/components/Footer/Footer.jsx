import Logo from "../../assets/ball.png"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"
const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-purple-500 text-white">
            <div>
                <img src={Logo} className="w-24 h-24" alt="" />
                <p className="font-bold">
                    Toy Castle <br />Providing best products since 1992
                </p>
                <p>Copyright ©Toycastle 2023 - All right reserved</p>
            </div>
            <div>
                <div className="grid  grid-cols-3 gap-6">
                    <FaFacebook className="w-8 h-8" />
                    <FaInstagram className="w-8 h-8" />
                    <FaYoutube className="w-9 h-9" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;