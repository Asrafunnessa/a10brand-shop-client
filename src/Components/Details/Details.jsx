import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';


const Details = () => {

    const productDetails = useLoaderData();

    const { productName, image, brandName, type, price, description, rating, _id } = productDetails;

    //Add Cart
    const handleAddCart = () => {
        const addToCart = { productName, image, brandName, type, price, description, rating, _id };
        fetch(`https://y-psi-liart.vercel.app/details/`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToCart)
        })
            .then(res => res.json())
            .then(data => {
               
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }

       

    return (
        <div className='p-32'>
            <h2 className='text-4xl font-semibold text-center text-rose-700 bg-white shadow-lg mb-10 p-2'>Details of Your Desire Product</h2>
            <div className="flex justify-center items-center ">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">{productName}</h2>
                        <figure><img className='shadow' src={image} /></figure>
                        <div className="text-lg flex">
                            <p className='flex'>Price:{price}</p>
                            <Link to={`/addCart`}><button onClick={handleAddCart} className="btn shadow-lg">Add To Cart</button></Link>

                        </div>
                        <div className='flex'>
                            <p>Brand: {brandName}</p>
                            <p> Category: {type}</p>
                        </div>
                        <p className='flex'>Ratting : {rating}</p>
                        <p>Description: {description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;