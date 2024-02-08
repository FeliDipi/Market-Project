import { useCart } from "../Hooks/useCart.js";
import { useFilters } from "../Hooks/useFilters.js";
import "./DebugFooter.css";

export const DebugFooter = () =>
{
    const {filters} = useFilters();
    const {cart} = useCart();

    return (
        <footer className="footer">
            {/* {JSON.stringify(filters,null,2)} */}
            {JSON.stringify(cart,null,2)}
        </footer>
    )
}