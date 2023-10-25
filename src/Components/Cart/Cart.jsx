import { useLoaderData } from "react-router-dom";
import ShowCart from "./ShowCart";

const Cart = () => {

    const cartProducts = useLoaderData(); 
    
    return (
        <div>
            <h2>My cart</h2>
            {
                cartProducts.map((cartProduct, idx) => <ShowCart 
                    key={idx}
                    cartProduct={cartProduct}
                ></ShowCart>)
            }
        </div>
    );
};

export default Cart;