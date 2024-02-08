import { CartIcon, ClearCartIcon} from "./Icons.jsx";
import "../Styles/Cart.css";
import { useId } from "react";
import { useCart } from "../Hooks/useCart.js";
import { CartItem } from "./CartItem.jsx";

export const Cart = () =>
{
    const {cart, clearCart, addToCart} = useCart();
    const cartCheckBoxId = useId();

    return (
        <>
            <label className="cart-button" htmlFor={cartCheckBoxId}>
                <CartIcon />
            </label>
            <input type="checkbox" id={cartCheckBoxId} hidden/>

            <aside className="cart">
                <ul>
                    {
                        cart.map(product => (
                            <CartItem
                                key={product.id}
                                addToCart={()=>addToCart(product)}
                                {...product} 
                            />
                        ))
                    }
                </ul>

                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>

            </aside>
        </>
    )
}