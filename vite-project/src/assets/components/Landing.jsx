import { Button } from "./buttons/Button";
export function Landing() {
  return (
    <>
      <div className="w-full bg-landingImage  py-44 px-5 bg-cover bg-center text-white">
        <h2 className="text-5xl font-bold">¡Endulza tu día!</h2>
        <p className="mt-2 text-2xl">
          Postres deliciosos, experiencias increibles
        </p>
        <div className="mt-5">
          <Button text="Ver más" onClick={() => {}} />
        </div>
      </div>
    </>
  );
}
