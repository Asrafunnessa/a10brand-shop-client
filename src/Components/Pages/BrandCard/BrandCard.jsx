import { Link } from "react-router-dom";


const BrandCard = ({brand}) => {

    const {image,name} = brand;

    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
            <Link to={`/${name}`}><h2 className="card-title">{name}</h2></Link>
            </div> 
        </div>
    );
};

export default BrandCard;