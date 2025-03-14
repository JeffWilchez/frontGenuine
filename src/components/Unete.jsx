import gracias from "../assets/gracias.jpg";
import logoNombre from "../assets/logo.webp";

import { FaFacebook, FaTiktok, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Unete = () => {
  return (
    <main className="h-screen p-4">
      <div className="relative w-full h-full">
        <div className="absolute inset-0 overflow-hidden">
          <img
            className="w-[150%] h-screen object-cover rounded-2xl origin-center"
            src={gracias}
            alt="gracias"
          />
        </div>

        <div className="absolute inset-0 flex flex-col items-end pt-16 pr-16">
          <div className="bg-white p-6 rounded-full">
            <img className="h-12" src={logoNombre} alt="logoNombre" />
          </div>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-end pb-16">
          <div className="w-[80%] bg-gradient-to-b from-[#D5E6F7] to-[#D5ADFB] p-6 rounded-t-lg">
            <div className="mb-8">
              <h1 className="text-6xl font-bold leading-tight text-center text-[#133072]">
                ¡Únete a Genuine Digital School hoy!
              </h1>
            </div>
          </div>
          <div className="w-[80%] bg-white p-6 rounded-b-lg -mt-2 text-center text-[#133072]">
            <p className="text-4xl pb-4">
              Explora el increíble universo de la educación virtual junto a tu
              hijo
            </p>
            <p className="text-2xl">
              Síguenos en Redes Sociales y conoce nuestra gran comunidad digital
            </p>
            <span className="flex justify-center mt-4 gap-4">
              <FaFacebook className="text-4xl mx-2" />
              <FaInstagram className="text-4xl mx-2" />
              <FaTiktok className="text-4xl mx-2" />
              <FaYoutube className="text-4xl mx-2" />
              <FaLinkedin className="text-4xl mx-2" />
            </span>
          </div>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-end text-white text-4xl font-bold mb-4">
          studyatgenuine.com
        </div>
      </div>
    </main>
  );
};

export default Unete;
