import { Button } from "../buttons/Button";
export function Modal({ product, onClose }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative flex flex-col items-center bg-white rounded-lg shadow md:flex-row md:max-w-xl">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-rose-700 hover:underline cursor-pointer"
        >
          X
        </button>
        <img
          className="object-cover w-
             rounded-t-lg md:h-auto md:rounded-none md:rounded-l-lg"
          src={product.image}
          alt={product.nombre}
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
            {product.nombre}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {product.descripcion}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-rose-700">
              ${product.precio}
            </span>
            <Button text="Reservar"/>
          </div>
        </div>
      </div>
    </div>
  );
}
