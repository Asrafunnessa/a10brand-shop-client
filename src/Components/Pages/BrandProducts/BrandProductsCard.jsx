/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const BrandProductsCard = ({ brandProduct }) => {

    const { _id, productName, image, brandName, type, price, rating } = brandProduct;

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={image} alt="Movie" /></figure>
            <div className="flex justify-between w-full pr-4">
                <div>
                    <h2 className="card-title">{brandName}</h2>
                    <h2 className="card-title">{productName}</h2>
                    <p>{type}</p>
                    <p>{price}</p>
                    <p>{rating}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">
                       <Link to={`/details/${_id}`}><button className="btn btn-primary">Details</button></Link>
                       <Link to={`/update/${_id}`}><button className="btn btn-primary">Update</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default BrandProductsCard;