import { useGlobalContext } from "../hooks/useGlobalContext";
import InCart from "./inCart";

function YourCart() {
    const { cart } = useGlobalContext();

    return (
        <div className="your-cart-container">
            <p className="Amount-myAdded-desserts">Your Cart ({cart.length})</p>
            <div>
                
                {cart.length === 0 ? (
                    <div className="illustration-empty-wrapper">
                        <img src="../images/illustration-empty-cart.svg" alt="illustration-empty-cart"/>
                        <p className="empty-text">Your added items will appear here</p>
                    </div>
                ) : (
                    cart.map((d) => <InCart d={d} key={d.id} Cartlength = {cart.length} />) 
                )}
            </div>
        </div>
    );
}

export default YourCart;
