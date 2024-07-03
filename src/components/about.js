import React from "react";
import img from "../img/2.PNG";

function About() {
  return (
    <section id="about" className="pt-24 text-center">
      <div className="flex flex-wrap">
        <h1 className="w-full text-primary font-bold text-2xl mb-2">
          Tentang Saya
        </h1>
        {/* Gambar paling kiri */}
        <div className="hidden lg:block w-full self-center px-4 lg:px-4 lg:w-1/3">
          <div className="relative mt-10 lg:mt-9 lg-right-0">
            <img src={img} alt="Bela" className="w-4/12 mx-auto lg:w-10/12" />
            <span className="absolute -bottom-10 -z-10 left-1/2 -translate-x-1/2 md:scale-150 md:bottom-10">
              <svg
                width="250"
                height="250"
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
        {/* Informasi pribadi dan skill */}
        <div className="w-full self-center px-4 lg:px-4 lg:w-1/3">
          <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10">
            <div className="px-4 py-2">
              <div className="text-center">
                <p className="text-gray-600 text-md font-bold">
                  INFORMASI PRIBADI
                </p>
              </div>
              <div className="mt-4">
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-600">Nama:</div>
                  <div className="text-md text-gray-900 font-semibold">
                    Bela Descapritalia
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="text-sm text-gray-600">Tanggal Lahir:</div>
                  <div className="text-md text-gray-900 font-semibold">
                    25 Desember 2002
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="text-sm text-gray-600">Asal:</div>
                  <div className="text-md text-gray-900 font-semibold">
                    Kerinci, Jambi
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* skill */}
          <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-16 px-15">
            <div className="px-4 py-2">
              <div className="text-center">
                <p className="text-dark text-md font-bold">SKILL</p>
              </div>
              <div className="mt-4">
                <div className="flex  items-center">
                  <div className="w-full mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div
                      className="bg-primary text-sm font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                      style={{ width: "80%" }}
                    >
                      HTML
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="w-full mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div
                      className="bg-primary text-sm font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                      style={{ width: "80%" }}
                    >
                      CSS
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="w-full mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div
                      className="bg-primary text-sm font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                      style={{ width: "80%" }}
                    >
                      JAVA SCRIPT
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Gambar paling kanan */}
        <div className="w-full self-center px-4 lg:px-4 lg:w-1/3">
          <div className="relative mt-10 lg:mt-9 lg-right-0">
            <img src={img} alt="Bela" className="w-4/12 mx-auto lg:w-10/12" />
            <span className="absolute -bottom-10 -z-10 left-1/2 -translate-x-1/2 md:scale-150 md:bottom-10">
              <svg
                width="250"
                height="250"
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

export default About;
