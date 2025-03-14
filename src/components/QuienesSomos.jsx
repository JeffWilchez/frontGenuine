import jetpack from "../assets/jetpack.png";
import ojo from "../assets/ojo.webp";
import cohete from "../assets/cohete.webp";

const QuienesSomos = () => {
  return (
    <main className="h-screen p-4">
      <div className="bg-gradient-to-b from-[#D5E6F7] to-white p-8 rounded-t-lg">
        <div className="relative w-full h-[20rem] overflow-hidden flex items-center justify-center">
          <img
            src={jetpack}
            alt="Jetpack"
            className="w-[800px] h-[800px] object-contain mt-[15rem]"
          />
        </div>
      </div>
      <div className="bg-white pb-16 px-30 rounded-b-lg">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-[#133072] mb-6">
            Nuestra misión en el mundo y lo que soñamos para tus hijos
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-lg text-[#133072] border-2 border-[#133072]">
            <img className="h-16 max-auto mb-4" src={cohete} alt="cohete" />
            <h3 className="text-2xl font-bold">Nuestra misión</h3>
            <p>
              Educar, empoderar y conectar a nuestros estudiantes mediante
              experiencias de aprendizaje remoto que trasciendan las fronteras
              geográficas e idiomáticas.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg text-[#133072] border-2 border-[#133072]">
            <img className="h-16 max-auto mb-4" src={ojo} alt="ojo" />
            <h3 className="text-2xl font-bold">Nuestra visión</h3>
            <p>
              Visualizamos un mundo donde miles de jóvenes y niños usen sus
              habilidades para transformar sus comunidades y regiones por medio
              del emprendimiento, la tecnología y la innovación.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default QuienesSomos;
