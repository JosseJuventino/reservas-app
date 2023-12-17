import { useState } from "react";
import logo from "../../images/circleNOPNG.png";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import "./header.css";

export function Header() {
  const [modal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!modal);
  };

  const menuItems = [
    { label: "Inicio", link: "#" },
    { label: "Productos", link: "#products" },
    // Agrega más elementos según sea necesario
  ];

  return (
    <>
      <nav className="flex flex-row justify-between items-center py-5 px-10 text-lg sticky top-0 left-0 bg-slate-100 z-30">
        <div className="flex flex-row justify-evenly items-center">
          <figure className="w-20">
            <img src={logo} alt="logo_uca" />
          </figure>
          <div className="hidden md:block">
            {menuItems.map((item, index) => (
              <a key={index} href={item.link} className="mx-5 text-xl hover:text-rose-700">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          {/* {/** ACA IRIA EL BOTON DE INICIOO DE SESIÓN */}
        </div>

        <div className="md:hidden">
          {modal ? (
            <div></div>
          ) : (
            <FaBars className="text-3xl cursor-pointer" onClick={toggleModal} />
          )}
        </div>
      </nav>

      <div
        className={`${
          modal
            ? "flex fixed top-0 left-0 w-full flex-col h-full z-50 slide-from-right-enter"
            : "hidden slide-from-right-leave"
        } justify-center items-center bg-hover-black-custom text-2xl bg-slate-100 py-9`}
      >
        {menuItems.map((item, index) => (
          <a key={index} href={item.link} className="mx-5 hover:text-rose-700">
            {item.label}
          </a>
        ))}
        <div className="mt-10">
          {/** ACA IRIA EL BOTON DE INICIOO DE SESIÓN */}
        </div>
        <IoClose className="text-4xl mt-12" onClick={toggleModal} />
      </div>
    </>
  );
}
