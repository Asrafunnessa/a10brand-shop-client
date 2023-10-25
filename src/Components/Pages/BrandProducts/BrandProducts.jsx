/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import BrandProductsCard from "./BrandProductsCard";

const BrandProducts = () => {

    const brandProducts = useLoaderData();

    return (
        <div>
            <div className="carousel h-96">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="banner2.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="banner3.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="banner4.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="banner5.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <h1 className="text-6xl text-center my-20 text-purple-600">All Products: {brandProducts.length}</h1>
            <div className='grid md:grid-cols-2 gap-4'>
                {
                    brandProducts.map(brandProduct => <BrandProductsCard
                        key={brandProduct._id}
                        brandProduct={brandProduct}
                    ></BrandProductsCard>)
                }
            </div>
        </div>
    );
};

export default BrandProducts;