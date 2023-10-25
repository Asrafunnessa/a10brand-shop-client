import { useLoaderData } from "react-router-dom";
import Banner from "../../HomeSection/Banner/Banner";
import BrandCard from "../BrandCard/BrandCard";
import { useEffect, useState } from "react";


const Home = () => {

    const brands = useLoaderData();
    const [theme, setTheme] = useState("light");

    


    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleChangeTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");

    };


    return (
        <div className="dark:bg-black">
            <Banner></Banner>
            <div className="-mt-14 absolute ml-8">
                <button onClick={handleChangeTheme} className="btn btn-sm border-none rounded-3xl bg-transparent text-gray-400">
                   Dark Mode
                </button>
            </div>
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