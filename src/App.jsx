import { products as initialProducts} from "./Mocks/products.json"; 

import { Products } from "./Components/Products.jsx";
import { Header } from "./Components/Header.jsx";

import { useFilters } from "./Hooks/useFilters.js";
import { DebugFooter } from "./Utils/DebugFooter.jsx";

import { IS_DEVELOPMENT } from "./config.js";
import { Cart } from "./Components/Cart.jsx";
import { CartProvider } from "./Providers/cart.jsx";

const App = () => {
  const {filterProducts} = useFilters();

  const filteredProducts = filterProducts(initialProducts);

  return (
    <CartProvider>
      <Header/>
      <Cart/>
      <Products products={filteredProducts}/>
      {IS_DEVELOPMENT && <DebugFooter/>}
    </CartProvider>
  )
}

export default App
