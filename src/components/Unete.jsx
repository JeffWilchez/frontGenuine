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

        <div className="absolute inset-0 flex-col items-end pt-16 pr-16 hidden md:flex">
          <div className="bg-white p-6 rounded-full">
            <img className="h-12" src={logoNombre} alt="logoNombre" />
          </div>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 md:pb-16">
          <div className="md:hidden w-full flex justify-center mb-8">
            <div className="bg-white p-4 rounded-full">
              <img className="h-8" src={logoNombre} alt="logoNombre" />
            </div>
          </div>

          <div className="w-[90%] md:w-[80%] bg-gradient-to-b from-[#D5E6F7] to-[#D5ADFB] p-4 md:p-6 rounded-t-lg">
            <div className="mb-4 md:mb-8">
              <h1 className="text-2xl md:text-6xl font-bold leading-tight text-center text-[#133072]">
                ¡Únete a Genuine Digital School hoy!
              </h1>
            </div>
          </div>

          <div className="w-[90%] md:w-[80%] bg-white p-4 md:p-6 rounded-b-lg -mt-2 text-center text-[#133072]">
            <p className="text-xl md:text-4xl pb-4">
              Explora el increíble universo de la educación virtual junto a tu
              hijo
            </p>
            <p className="text-lg md:text-2xl">
              Síguenos en Redes Sociales y conoce nuestra gran comunidad digital
            </p>

            <span className="flex justify-center mt-6 gap-6">
              <a
                href="https://www.facebook.com/genuineds"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#133072] hover:text-blue-600 transition-colors"
              >
                <FaFacebook className="text-3xl md:text-4xl" />
              </a>

              <a
                href="https://www.instagram.com/genuineds/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#133072] hover:text-pink-600 transition-colors"
              >
                <FaInstagram className="text-3xl md:text-4xl" />
              </a>

              <a
                href="https://www.tiktok.com/@genuineds"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#133072] hover:text-gray-800 transition-colors"
              >
                <FaTiktok className="text-3xl md:text-4xl" />
              </a>

              <a
                href="https://www.youtube.com/channel/UCy9QgoI87ITVm12d_C0NnZw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#133072] hover:text-red-600 transition-colors"
              >
                <FaYoutube className="text-3xl md:text-4xl" />
              </a>

              <a
                href="https://www.linkedin.com/company/genuine-digital-school/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#133072] hover:text-blue-800 transition-colors"
              >
                <FaLinkedin className="text-3xl md:text-4xl" />
              </a>
            </span>
          </div>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-end text-white font-bold mb-2 md:mb-6">
          <a
            href="https://studyatgenuine.com/"
            className="text-xl md:text-4xl"
          >
            studyatgenuine.com
          </a>
        </div>
      </div>
    </main>
  );
};

export default Unete;
