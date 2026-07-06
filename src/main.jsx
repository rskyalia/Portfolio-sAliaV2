import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import "remixicon/fonts/remixicon.css";
import Footer from "./components/Footer.jsx";
import Preloader from "./components/Preloader.jsx";

import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ once: true, offset: 60 });

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Preloader />

    {/* Ambient background orbs */}
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute top-1/3 -right-48 w-[500px] h-[500px] bg-indigo-600/8 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }}></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-violet-600/8 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "4s" }}></div>
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      ></div>
    </div>

    <Navbar />
    <div className="max-w-6xl mx-auto px-6">
      <App />
      <Footer />
    </div>
  </StrictMode>
);
