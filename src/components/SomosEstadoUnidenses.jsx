"use client";

import estudiantes from "../assets/somos.jpg";
import mapa from "../assets/mapa.png";

import { motion, animate, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

const SomosEstadoUnidenses = () => {
  const countE = useMotionValue(0);
  const countS = useMotionValue(0);
  const countP = useMotionValue(0);
  const conteoEstudiantes = useTransform(() => Math.round(countE.get()));
  const conteoStaff = useTransform(() => Math.round(countS.get()));
  const conteoProfesores = useTransform(() => Math.round(countP.get()));

  useEffect(() => {
    const controls = animate(countE, 400, { duration: 8 });
    const controls2 = animate(countS, 28, { duration: 8 });
    const controls3 = animate(countP, 44, { duration: 8 });
    return () => controls.stop() && controls2.stop() && controls3.stop();
  }, []);

  return (
    <main className="min-h-screen p-4 flex flex-col gap-8">
      <div className="relative w-full bg-white rounded-lg flex flex-col md:flex-row items-center">
        <section className="flex-1 flex flex-col gap-6 p-8 md:p-16">
          <h1 className="text-[#133072] text-4xl md:text-5xl font-bold text-center md:text-left">
            De Estados Unidos para el mundo
          </h1>
          <span className="text-[#133072] text-xl md:text-2xl text-center md:text-left">
            Nuestro colegio digital privado está constituido y registrado en
            Estados Unidos ante el{" "}
            <p className="font-bold inline">
              Florida Department of Education con el código 8822.
            </p>
          </span>
          <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
            <p className="text-[20px] md:text-[22px] text-[#133072] font-semibold">
              Conoce el nuestro aquí
            </p>
            <button className="bg-[#133072] text-white px-6 py-2 rounded-lg w-fit">
              Registro legal
            </button>
          </div>
        </section>

        <section className="flex-1 w-full h-[300px] md:h-full relative mt-4 md:mt-0">
          <img
            className="w-full h-full object-cover rounded-lg md:rounded-r-lg"
            src={estudiantes}
            alt="estudiantes"
          />
        </section>
      </div>

      <div className="w-full bg-white rounded-lg flex flex-col md:flex-row items-start p-4 md:p-8">
        <section className="w-full md:w-[20%] order-2 md:order-none mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-[#133072] text-center md:text-left mb-6">
            Somos del mundo
          </h1>
          <span className="py-4 text-white font-semibold block w-full">
            <p className="bg-[#FF4E07] p-4 mt-4">
              Colombia, Ecuador, Perú, México, Panamá, Costa Rica, Chile,
              Argentina, Estados Unidos, Emiratos Árabes, Brasil, República
              Dominicana, Irlanda, Canadá, España, Portugal, China, Italia.
            </p>
            <p className="bg-[#D5ADFB] p-4 text-[#133072]">
              Estados Unidos, Colombia, Perú, Brasil, Chile, México, Venezuela.
            </p>
            <p className="bg-[#602680] p-4">
              Colombia, Sudáfrica, Filipinas, Chile, México, Singapur.
            </p>
          </span>
        </section>
        <section className="w-full md:w-[80%] order-1 md:order-none mb-8 md:mb-0">
          <div className="flex flex-col md:flex-wrap md:flex-row justify-center gap-4 md:gap-9 mb-8">
            <div className="w-full md:w-auto flex items-center justify-center px-4 md:px-8 py-4 gap-2 md:gap-4 rounded-lg border-4 border-[#FF4E07]">
              <p className="text-3xl md:text-4xl font-bold text-[#FF4E07]">+</p>
              <motion.pre className="text-3xl md:text-4xl font-bold text-[#FF4E07]">
                {conteoEstudiantes}
              </motion.pre>
              <p className="text-3xl md:text-4xl font-bold text-[#FF4E07]">
                Estudiantes
              </p>
            </div>
            <div className="w-full md:w-auto flex items-center justify-center px-4 md:px-8 py-4 gap-2 md:gap-4 rounded-lg border-4 border-[#D5ADFB]">
              <motion.pre className="text-3xl md:text-4xl font-bold text-[#D5ADFB]">
                {conteoStaff}
              </motion.pre>
              <p className="text-3xl md:text-4xl font-bold text-[#D5ADFB]">
                Staff
              </p>
            </div>
            <div className="w-full md:w-auto flex items-center justify-center px-4 md:px-8 py-4 gap-2 md:gap-4 rounded-lg border-4 border-[#602680]">
              <motion.pre className="text-3xl md:text-4xl font-bold text-[#602680]">
                {conteoProfesores}
              </motion.pre>
              <p className="text-3xl md:text-4xl font-bold text-[#602680]">
                Profesores
              </p>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            <img className="w-full md:w-[60%]" src={mapa} alt="mapa" />
          </div>
        </section>
      </div>
    </main>
  );
};

export default SomosEstadoUnidenses;
