import React, { useEffect } from "react";
import "./App.css";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import toast, { Toaster } from "react-hot-toast";

function App() {
  useEffect(() => {
    toast("welcome to my portfolio!", {
      icon: "👋",
      duration: 3000,
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Toaster position="top-center" />{" "}
      <main>
        <Home />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
