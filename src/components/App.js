import React from "react";
import Home from "./home";
import Navbar from "./navbar";
import Footer from "./footer";
import Portofolio from "./porto";
import About from "./about";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portofolio />
      <Footer />
    </div>
  );
}

export default App;
