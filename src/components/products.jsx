import React from "react";
import { useGlobalContext } from "../hooks/useGlobalContext";

function Product ({d}){
const {id,name,category,price,image} = d;
const {dispatch,cart} = useGlobalContext();
const alreadyAdded = cart.find((d)=> d.id == id);
return (
    <div className="desserts-card">
        <picture>
            <source media="(max-width:400px)" srcSet={image.mobile}/>
            <source media="(max-width:800px)" srcSet={image.tablet}/>
            <source media="(min-width:998px)" srcSet={image.desktop}/>
            <img className="dessert-card-image" src={image.thumbnail} alt={name}/>
        </picture>

        <div className="buttons-wrapper">
        {!alreadyAdded && (
           <button
           onClick={()=>
            dispatch({
                type: "ADD_TO_CART",
                payload: {...d,amount:1},
            })
           }
           className="btn add-to-card-btn"
           >
            <span className="add-to-card-btn-wrapper">
                <img src="../images/icon-add-to-cart.svg" alt=""/>
                <span>Add to Cart</span>
            </span>
           </button>
        )}
        {
            alreadyAdded && <div className="Dessert-amount-incr-decr">
                <button
                onClick={()=>{
                    if (alreadyAdded.amount == 1){
                        dispatch({type: "DELETE", payload: d.id});
                    }else {
                        dispatch ({type: "DECREMENT", payload:d.id})
                    }
                }}
                >
                <img src="../images/icon-decrement-quantity.svg" alt="decrement"/>
                </button>
                <h2>{alreadyAdded.amount}</h2>
                <button
                onClick={()=>{
                    dispatch({type: "INCREMENT", payload: d.id});
                }}
                >
                    <img src="../images/icon-increment-quantity.svg" alt="increment"/>
                </button>
            </div>
        }
        </div>

        <div className="desserts-card-body">
            <p className="dessert-card-category">{category}</p>
            <h3 className="dessert-card-name">{name}</h3>
            <p className="dessert-card-price">${price}</p>
        </div>
    </div>
    
)

}export default Product;