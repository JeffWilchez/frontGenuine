import imageFamily from "../assets/familia.jpg";
import logoNombre from "../assets/logo.webp";

const Unete = () => {
  return (
          <main className="h-screen p-4">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  className="w-[150%] h-screen object-cover rounded-2xl -scale-x-100 origin-center"
                  src={imageFamily}
                  alt="imagenFondo"
                />
              </div>
    
              <div className="absolute inset-0 flex flex-col items-start justify-center p-12">
                <div className="w-full max-w-xl bg-gradient-to-b from-[#D5E6F7] to-[#D5ADFB] p-6 rounded-t-lg">
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
    
              <div className="absolute text-white bottom-10 left-1/2 -traslate-x-1-/2 text-xl font-extrabold">
                studyatgenuine.com
              </div>
            </div>
          </main>
  )
}

export default Unete