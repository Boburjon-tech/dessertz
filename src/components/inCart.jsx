import { useGlobalContext } from "../hooks/useGlobalContext";
function InCart ({d}){
    const {dispatch,cart} = useGlobalContext();
    const alreadyAdded = cart.find((d)=> d.id == id);
return (
    <div>
        <h2>Salom dunyo</h2>
    </div>
)
} export default InCart;