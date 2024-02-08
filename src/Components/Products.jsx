import { useCart } from "../Hooks/useCart.js";
import "../Styles/Products.css";

import {AddToCartIcon, RemoveFromCartIcon} from "./Icons.jsx";

export const Products = ({products}) =>
{
    const {cart, removeFromCart, addToCart} = useCart();

    const checkProductInCart = (product) =>
    {
        return cart.some(item => item.id === product.id);
    }

    return (
        <main className="products">
            <ul>
                {
                    products.map(product => 
                        {
                            const isProductInCart = checkProductInCart(product);

                            return (
                                <li key={product.id}>
                                <img src={product.thumbnail} 
                                        alt={product.title} 
                                />
                                <div>
                                    <strong>{product.title}</strong>
                                </div>
                                <div>
                                    <button style={{backgroundColor: isProductInCart? "red" : "#09f"}} onClick={()=>
                                    {
                                        isProductInCart? removeFromCart(product) : addToCart(product);
                                    }}>
                                        {
                                            isProductInCart ? <RemoveFromCartIcon/> : <AddToCartIcon/>
                                        }                        
                                    </button>
                                </div>
                            </li>
                            )
                        })
                }
            </ul>
        </main>
    )
}