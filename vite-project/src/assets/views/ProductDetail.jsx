import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../../firebase";
import { useEffect, useState } from "react";
import { Button } from "../components/buttons/Button";
import "../../index.css"; // Asegúrate de importar tu archivo CSS

const Feature = ({ featureName, featureValues }) => (
  <p className="text-black capitalize text-lg">
    <span className="font-bold capitalize">{`${featureName}: `}</span>
    {`${featureValues.join(", ")}`}
  </p>
);

const Presentacion = ({ presentacionName, presentacionPrice }) => (
  <p className="text-black capitalize text-lg">
    <span className="font-bold capitalize">{`${presentacionName}:`}</span> 
    <span className="text-2xl mx-5 text-rose-700 font-bold">{`$${presentacionPrice}`}</span>
  </p>
);

export function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const productDoc = doc(firestore, "Products", productId);
      const productSnapshot = await getDoc(productDoc);
      if (productSnapshot.exists()) {
        setProduct(productSnapshot.data());
      } else {
        console.log("No such product!");
      }
    };

    fetchProduct();
  }, [productId]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div className="cake-loader">🍰</div>;
  }

  if (!product) {
    return <div className="flex justify-center items-center h-screen">Producto no encontrado</div>;
  }

  return (
    <div className="grid lg:grid-cols-2 gap-4 max-w-6xl mx-auto p-4">
      <div className="flex justify-center items-center">
        <img
          src={product.image}
          alt={product.nombre}
          className="object-cover w-full h-full rounded-lg max-h-96"
        />
      </div>
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold">{product.nombre}</h2>
        <p className="text-black text-lg">{product.descripcion}</p>
        {Object.entries(product.features).map(([featureName, featureValues]) => (
          <Feature key={featureName} featureName={featureName} featureValues={featureValues} />
        ))}
        {Object.entries(product.presentaciones).map(([presentacionName, presentacionPrice]) => (
          <Presentacion key={presentacionName} presentacionName={presentacionName} presentacionPrice={presentacionPrice} />
        ))}
        <Button text="Reservar producto" />
      </div>
    </div>
  );
}


