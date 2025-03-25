import { useGlobalContext } from "../hooks/useGlobalContext";
import InCart from "./inCart";
import Modal from "../modal";
import { useState } from "react";

function YourCart() {
    const { cart } = useGlobalContext();
    const [showModal, setShowModal] = useState(false);

    
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.amount, 0);

    return (
        <div className="your-cart-container">
            <p className="Amount-myAdded-desserts">Your Cart ({cart.length})</p>
            <div className="inner-div">
                
                {cart.length === 0 ? (
                    <div className="illustration-empty-wrapper">
                        <img src="../images/illustration-empty-cart.svg" alt="illustration-empty-cart" />
                        <p className="empty-text">Your added items will appear here</p>
                    </div>
                ) : (
                    cart.map((d) => <InCart d={d} key={d.id} />) 
                )}

                
                {cart.length > 0 && (
                    <div className="total-price-container">
                        <p className="order-total">Order Total</p>
                        <h3 className="order-total-price">${totalPrice.toFixed(2)}</h3>
                    </div>
                )}

                

                
                {cart.length > 0 && (
                 <div className="btn-carbon">
                       <div className="carbon-neutral">
                    <img src="../images/icon-carbon-neutral.svg" alt="icon-carbon-neutral" />
                    <p>This is a <strong>carbon-neutral</strong> delivery</p>
                </div>
                    <button
                        onClick={() => setShowModal(true)}
                        className="confirm-button"
                    >
                        Confirm Order
                    </button>
                 </div>
                )}

                {showModal && <Modal closeModal={() => setShowModal(false)} />}
            </div>                  
        </div>
    );
}

export default YourCart;
