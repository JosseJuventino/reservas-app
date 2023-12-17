import { Button } from "../buttons/Button";
import { Link } from "react-router-dom"; // Asegúrate de ajustar la ruta correcta

export function Card({ product }) {
  return (
    <div className="w-full my-10 max-w-sm bg-white rounded-lg shadow">
      <Link to={`/detail-product/${product.id}`} className="block">
        <img
          className="rounded-t-lg"
          src={product.image}
          alt={product.nombre}
        />
      </Link>

      <div className="px-5 py-5">
        <h3 className="text-2xl font-semibold">{product.nombre}</h3>
        <div className="flex my-5 items-center justify-between">
          <span className="text-3xl font-bold text-rose-700">${product.precio}</span>
          <Link to={`/detail-product/${product.id}`} className="block">
            <Button text="Ver más" />
          </Link>
        </div>
      </div>
    </div>
  );
}
