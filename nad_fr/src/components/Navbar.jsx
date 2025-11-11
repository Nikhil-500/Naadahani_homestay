// src/components/Navbar.jsx
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.jpg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Rooms", path: "/rooms" },
    { name: "Gallery", path: "/gallery" },
    { name: "Amenities", path: "/amenities" },
    { name: "Contact", path: "/contact" },
    { name: "Book Now", path: "/booknow" }, // ✅ Added Book Now
  ];

  const toggleMenu = () => setOpen(!open);

  return (
    <nav
      className="fixed top-0 left-0 w-full h-20 bg-light/90 backdrop-blur-md shadow-md z-50"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 h-full">
        {/* 🔰 Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={logo}
            alt="Orion Neststay"
            className="w-12 h-12 rounded-full border border-primary"
          />
          <h1 className="font-heading text-2xl text-primary">Naadahani Homestay</h1>
        </div>

        {/* 🖥️ Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `font-medium transition duration-300 ${
                  isActive
                    ? "text-primary border-b-2 border-primary"
                    : "text-dark hover:text-primary"
                }`
              }
              onClick={() => setOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* 📱 Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-dark focus:outline-none"
          aria-label="Toggle Menu"
        >
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* 📱 Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-light/95 backdrop-blur-md px-6 pb-4 animate-fade-in-down">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `block py-2 border-b transition duration-300 ${
                  isActive
                    ? "text-primary font-semibold"
                    : "text-dark hover:text-primary"
                }`
              }
              onClick={() => setOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
