import Product from "./products";
function ProductList ({desserts}){

    return (
        <div >
            <h1 className="desserts-title">Desserts</h1>
           <div className="products-container">
           {desserts && desserts.map((d)=>(
               
               <Product d={d} key={d.id}/>
          
           ))}
           </div>
        </div>
    )
}export default ProductList;