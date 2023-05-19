import Banner from "../../components/Banner/Banner";
import Support from "../../components/Customer Support/Support";
import ExclusiveToys from "../../components/Exclusive Toys/ExclusiveToys";
import Gallery from "../../components/Gallery/Gallery";
import ShopByCategory from "../../components/ShopByCategory/ShopByCategory";
import useTitle from "../../hooks/useTitle";

const Home = () => {
     //adding dynamic title
  useTitle("Home")
    return (
        <div>
            <Banner/>
            <Gallery/>
            <ShopByCategory/>
            <ExclusiveToys/>
            <Support/>
        </div>
    );
};

export default Home;