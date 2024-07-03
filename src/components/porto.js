import React from "react";
import porto1 from "../img/porto1.png";
import porto2 from "../img/porto2.png";

function Portofolio() {
  return (
    <section id="portofolio" className="pt-36 pb-16 bg-slate-100">
      <div className="w-full px-4">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h4 className="font-semibold text-lg text-primary mb-2">
            Portofolio
          </h4>
          <p className="font-medium text-md text-secondary">
            Berikut adalah portofolio yang saya miliki.
          </p>
        </div>
      </div>
      <div className="w-full px-20 flex flex-wrap justify-center">
        <div className="mb-12 p-4 md:w-1/2">
          <a
            href="https://beladesca.github.io/html-portofolio/web-porto/index.html"
            target="_blank"
          >
            <div className="rounded-md shadow-md overlow-hidden">
              <img src={porto1} alt="tugas" width="w-full" />
            </div>
            <h3 className="font-semibold text-dark mt-5 mb-3">
              Tugas Mata Kuliah Perancangan Web
            </h3>
            <p className="font-medium text-base text-secondary">
              Project ujian tengah semester 4
            </p>
          </a>
        </div>

        <div className="mb-12 p-4 md:w-1/2">
          <a href="https://beladesca.github.io/" target="_blank">
            <div className="rounded-md shadow-md overlow-hidden">
              <img src={porto2} alt="tugas" width="w-full" />
            </div>
            <h3 className="font-semibold text-dark mt-5 mb-3">
              KATIK-kalkulator matematik-
            </h3>
            <p className="font-medium text-base text-secondary">
              Project sederhana yang dibuat dengan tujuan belajar JavaScript
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Portofolio;
