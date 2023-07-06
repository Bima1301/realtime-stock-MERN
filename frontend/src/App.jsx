import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/editProduct";
import ProductList from "./components/ProductList";


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList/>} />
          <Route path="/add" element={<AddProduct/>} />
          <Route path="/edit/:id" element={<EditProduct/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
