import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ShoppingListTwo from "./pages/ShoppingListTwo";
import ProductDetailsTwo from "./pages/ProductDetailsTwo";
import ShoppingCart from "./pages/ShoppingCart";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ShoppingListTwo />} />
        <Route path="/product/:id" element={<ProductDetailsTwo />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </Router>
  );
}

export default App;
