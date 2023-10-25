import { useLoaderData } from "react-router-dom";
import ShowCart from "./ShowCart";

const Cart = () => {

    const cartProducts = useLoaderData(); 
    
    return (
        <div>
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