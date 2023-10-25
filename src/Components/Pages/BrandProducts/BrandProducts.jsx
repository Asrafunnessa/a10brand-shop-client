/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import BrandProductsCard from "./BrandProductsCard";

const BrandProducts = () => {

    const brandProducts = useLoaderData();

    return (
        <div className='m-20'>
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