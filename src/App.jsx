import imageFamily from "./assets/familia.jpg";
import logoNombre from "./assets/logo.webp";
import logo from "./assets/logoP.webp";

import QuienesSomos from "./components/QuienesSomos";
import SomosEstadoUnidenses from "./components/SomosEstadoUnidenses";
import Unete from "./components/Unete";

import "./App.css";

function App() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row-reverse bg-gray-100">
      <div className="w-full md:w-[15rem] h-auto md:h-screen md:sticky md:top-0 md:right-0 p-6">
        <div className=" bg-white rounded-lg shadow-lg p-6 h-auto">
          <div className="flex justify-between items-center mb-6">
            <button className="text-gray-500 hover:text-gray-700">
              <p className="text-xl">X</p>
            </button>
            <img className="h-8" src={logo} alt="logo" />
          </div>
          <nav className="space-y-4 text-xs text-[#133072] font-bold gap-4">
            <a
              href="#inicio"
              className="block hover:text-blue-800 cursor-pointer"
            >
              Inicio
            </a>
            <a
              href="#quienes_somos"
              className="block hover:text-blue-800 cursor-pointer"
            >
              ¿Quiénes somos?
            </a>
            <a
              href="#somos_estadounidenses"
              className="block hover:text-blue-800 cursor-pointer"
            >
              Somos Estadounidenses
            </a>
            <a
              href="#unete"
              className="block hover:text-blue-800 cursor-pointer"
            >
              Únete a Genuine
            </a>
          </nav>
        </div>
      </div>

      <div className="flex-1">
        <main id="inicio" className="h-screen p-4">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 overflow-hidden rounded-lg">
              <img
                className="w-[150%] h-screen object-cover -scale-x-100 origin-center"
                src={imageFamily}
                alt="imagenFondo"
              />
            </div>

            <div className="absolute inset-0 flex flex-col items-start md:justify-center p-12">
              <div className="w-full max-w-xl bg-gradient-to-b from-[#D5E6F7] to-[#D5ADFB] p-6 rounded-lg">
                <div className="mb-8">
                  <h1 className="text-4xl font-bold leading-tight text-[#133072]">
                    Estás a punto de iniciar un viaje hacia el universo de la
                    <span className="bg-[#133072] text-white px-2">
                      educación digital
                    </span>
                  </h1>
                </div>
              </div>
              <div className="w-full max-w-xl bg-white p-6 rounded-b-lg -mt-2">
                <img
                  className="h-20 mx-auto"
                  src={logoNombre}
                  alt="logoConNombre"
                />
              </div>
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-end text-white text-4xl font-bold mb-4">
              <a href="https://studyatgenuine.com/">studyatgenuine.com</a>
            </div>
          </div>
        </main>

        <section className="min-h-screen">
          <div id="quienes_somos">
            <QuienesSomos />
          </div>
          <div id="somos_estadounidenses">
            <SomosEstadoUnidenses />
          </div>
          <div id="unete" className="pt-4">
            <Unete />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
