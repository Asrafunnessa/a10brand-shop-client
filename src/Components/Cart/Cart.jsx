import { useLoaderData } from "react-router-dom";

const Cart = () => {

    const cartProduct = useLoaderData(); 
    
    return (
        <div>
            <h2>My cart</h2>
        </div>
    );
};

export default Cart;