import { useGlobalContext } from "../hooks/useGlobalContext";

function InCart({ d,Cartlength }) {
    const { dispatch } = useGlobalContext();

    return (
        <div >
           <div className="added-dessert-wrapper">
           <div className="first-table">
            <h4 className="added-dessert-name">{d.name}</h4>
            <div className="first-table-second-row">
                <p className="added-dessert-amount">{d.amount}x</p>
                <p className="added-dessert-price">@ ${d.price}.0</p>
                <strong className="added-dessert-total-price">${d.price*d.amount}.0</strong>
            </div>
           </div>
           <button onClick={()=>{
            dispatch({type: "DELETE", payload: d.id})
           }} className="remove-icon-container">
            <a href="#"><img src="../images/icon-remove-item.svg"/></a>
           </button>
           </div>

           <hr/>
           
        </div>
    );
}

export default InCart;
