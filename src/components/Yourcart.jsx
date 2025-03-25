import InCart from "./inCart";

function YourCart({ desserts }) {
    return (
        <div className="your-card-container">
            <p className="Amount-myAdded-desserts">Your Cart ({desserts ? desserts.length : 0})</p>
            <div className="illustration-empty-wrapper">
                {desserts && desserts.map((d) => (
                    <InCart d={d} key={d.id} />
                ))}
            </div>
        </div>
    );
}

export default YourCart;
