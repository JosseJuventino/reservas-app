import { Button } from "../buttons/Button";
export function Card({ product }) {
  return (
    <div className="w-full my-10 max-w-sm bg-white rounded-lg shadow ">
      <a href="#">
        <img
          className=" rounded-t-lg"
          src={product.image}
          alt={product.nombre}
        />
      </a>
      <div className="px-5 py-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-black">
            {product.nombre}
          </h5>
        </a>
        
        <div className="flex my-5 items-center justify-between">
          <span className="text-3xl font-bold text-rose-700">${product.precio}</span>
          <Button text="Ver más" />
        </div>
      </div>
    </div>
  );
}
