import Banner from "../../components/Banner/Banner";
import Support from "../../components/Customer Support/Support";
import ExclusiveToys from "../../components/Exclusive Toys/ExclusiveToys";
import Gallery from "../../components/Gallery/Gallery";
import ShopByCategory from "../../components/ShopByCategory/ShopByCategory";

const Home = () => {
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