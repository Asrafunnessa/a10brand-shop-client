import { useLoaderData } from "react-router-dom";
import Banner from "../../HomeSection/Banner/Banner";
// import Navbar from "../../HomeSection/Navbar/Navbar";
import BrandCard from "../BrandCard/BrandCard";


const Home = () => {

    const brands = useLoaderData();

    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Banner></Banner>
            <div className="m-20 mt-(-10)">
                <h1 className='text-6xl text-center my-10 text-purple-600'>Brands Collection</h1>
                <div className='grid md:grid-cols-2 gap-4'>
                    {
                        brands.map(brand => <BrandCard
                            key={brand.id}
                            brand={brand}
                        ></BrandCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;