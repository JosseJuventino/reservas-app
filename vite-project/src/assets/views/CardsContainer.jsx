import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase";
import { Card } from "../components/Card/Card";

export function CardsContainer() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = collection(firestore, "Products");
      const productSnapshot = await getDocs(productsCollection);
      const products = productSnapshot.docs.map((doc) => ({
        id: doc.id, // Accede al ID del documento
        ...doc.data(),
      }));
      setProductList(products);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="w-full my-10 " id="products">
        <h2 className="text-3xl uppercase tracking-widest text-center mt-2">
          Productos de temporada
        </h2>
        <div className="flex flex-row flex-wrap justify-around">
          {productList.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
