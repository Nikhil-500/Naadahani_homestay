import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RoomsSection from "./components/RoomsSection";
import Gallery from "./components/Gallery";
import Amenities from "./components/Amenities";
import Contact from "./components/Contact";
import BookNow from "./pages/BookNow";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-dark text-light font-body">
      {/* 🌟 Navbar fixed at top */}
      <Navbar />

      {/* 🧭 Content area (adds padding for navbar height) */}
      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<RoomsSection />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booknow" element={<BookNow />} />
        </Routes>
      </main>

      {/* ✅ Footer stays at bottom automatically */}
      <Footer />
    </div>
  );
}

export default App;
