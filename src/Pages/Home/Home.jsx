import Banner from "../../components/Banner/Banner";
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
        </div>
    );
};

export default Home;