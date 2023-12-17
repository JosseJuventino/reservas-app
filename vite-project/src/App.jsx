import "./App.css";
import { Landing } from "./assets/components/Landing";
import { CardsContainer } from "./assets/views/CardsContainer";
import { Header } from "./assets/components/Header/Header";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "./firebase"; // Asegúrate de ajustar la ruta correcta
import { useEffect, useState } from "react";	
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductDetail } from "./assets/views/ProductDetail";

function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = collection(firestore, "Products");
      const productSnapshot = await getDocs(productsCollection);
      const products = productSnapshot.docs.map((doc) => doc.data());
      setProductList(products);
    };

    fetchProducts();
  }, []);

  return (
    <Router>
      <div className="w-full bg-slate-100">
        <Header />
        <Routes>
          <Route path="/" element={<><Landing /><CardsContainer products={productList} /></>} />
          <Route path="/detail-product/:productId" element={<ProductDetail products={productList} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
