/* eslint-disable react/prop-types */
import { useState } from 'react';
import Swal from 'sweetalert2';

const ShowCart = ({cartProduct}) => {

    const [product, setProduct]=useState(cartProduct);

    const {_id, productName, image, brandName, type, price }= product;


    const handleCartDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
        .then(result=>{
            if(result.isConfirmed){
                fetch(`http://localhost:5500/details/${id}`, {
                        method: 'DELETE'
                    })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            )
                            const remainingProducts = product?.filter(products => products._id !== id);
                            setProduct(remainingProducts)
                        }
                    })
            }
        })


    }

    return (
        <div className="card card-side bg-base-100 shadow-xl">
        <figure><img src={image} alt="Movie" /></figure>
        <div className="flex justify-between w-full pr-4">
            <div>
                <h2 className="card-title">{brandName}</h2>
                <h2 className="card-title">{productName}</h2>
                <p>{type}</p>
                <p>{price}</p>
            </div>
            <div className="card-actions justify-end">
                <div className="btn-group btn-group-vertical space-y-4">
                   <button onClick={()=>handleCartDelete(_id)} className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ShowCart;