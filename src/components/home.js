import React from "react";
import img from "../img/4.PNG";

function Home() {
  return (
    <section id="home" className="py-4">
      <div className="flex flex-wrap">
        <div className="w-full self-center px-16 lg:px-32 lg:w-1/2">
          <h1 className="text-base font-semibold text-primary md:text-xl">
            Halo Semua👋, saya{" "}
            <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl">
              Bela Descapritalia
            </span>
          </h1>
          <h2 className="font-medium text-slate-500 text-lg mb-5 lg:text-2xl">
            Student | <span className="text-dark">Web Developer</span>
          </h2>
          <p className="font-medium text-slate-400 mb-10 leading-relaxed">
            Mahasiswa jurusan{" "}
            <span className="text-dark">Teknik Informatika</span> di Institut
            Teknologi Padang.
          </p>

          <a
            href="#footer"
            className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
          >
            Hubungi Saya
          </a>
        </div>
        <div className="w-full self-end px-4 lg:w-1/2">
          <div className="relative mt-10 lg:mt-9 lg-right-0">
            <img src={img} alt="Bela" className="w-6/12 mx-auto lg:w-full" />
            <span className="absolute -bottom-10 -z-10 left-1/2 -translate-x-1/2 md:scale-150 md:bottom-10">
              <svg
                width="400"
                height="400"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#14b8a6"
                  d="M55.2,-28.5C64.5,-15.8,60.2,8.2,48.7,20.1C37.2,32.1,18.6,31.9,-4.3,34.4C-27.3,36.9,-54.6,42.1,-62.2,32.4C-69.8,22.7,-57.8,-1.9,-44.2,-17.1C-30.5,-32.4,-15.3,-38.4,3.8,-40.6C23,-42.8,45.9,-41.3,55.2,-28.5Z"
                  transform="translate(100 100) scale(1.1)"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
