import imageFamily from "./assets/familia.jpg";
import logoNombre from "./assets/logo.webp";
import logo from "./assets/logoP.webp";

import "./App.css";

function App() {
  return (
    <div className="min-h-screen w-full relative bg-gray-100 px-4 py-4">
      <div className="absolute w-[15rem] top-8 right-8 bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <button className="text-gray-500 hover:text-gray-700">
            <p className="text-xl">X</p>
          </button>
          <img className="h-8" src={logo} alt="logo" />
        </div>
        <nav className="space-y-4 text-xs text-[#133072] font-bold gap-4">
          <a href="#" className="block hover:text-blue-800 cursor-pointer">
            Inicio
          </a>
          <a href="#" className="block hover:text-blue-800 cursor-pointer">
            ¿Quiénes somos?
          </a>
          <a href="#" className="block hover:text-blue-800 cursor-pointer">
            Somos Estadounidenses
          </a>
          <a href="#" className="block hover:text-blue-800 cursor-pointer">
            Únete a Genuine
          </a>
        </nav>
      </div>

      <div className="relative w-full h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <img
            className="w-[85%] h-[95%] object-cover rounded-2xl -scale-x-100 origin-center"
            src={imageFamily}
            alt="imagenFondo"
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-start p-12">
          <div className="max-w-xl">
            <div className="bg-gradient-to-b from-[#D5E6F7] to-[#D5ADFB] p-6 rouded-lg mb-8">
              <h1 className="text-4xl font-bold leading-tight text-[#133072]">
                Estás a punto de iniciar un viaje hacia el universo de la
                <span className="bg-[#133072] text-white px-2">
                  educación digital
                </span>
              </h1>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <img className="h-12" src={logoNombre} alt="logoConNombre" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-12 text-white text-xl">
          studyatgenuine.com
        </div>
      </div>
    </div>
  );
}

export default App;
