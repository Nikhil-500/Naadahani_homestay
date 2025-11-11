import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  // Smooth navigation + scroll to top
  const handleNav = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark text-light py-14 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 items-start">

        {/* Brand Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="font-heading text-3xl text-primary mb-3">
            Naadahani Homestay
          </h3>
          <p className="text-sm text-light/70 leading-relaxed">
            Escape into tranquility at Naadahani Homestay, SH 85, Thollurusettahalli, Karnataka 571236 — 
            where lush greenery, comfort, and luxury meet for your perfect nature retreat.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h4
            className="font-semibold mb-3 text-xl"
            style={{ color: "#556B2F" }} // dark olive green
          >
            Quick Links
          </h4>
          <ul className="space-y-2 text-light/80">
            <li><button onClick={() => handleNav("/rooms")} className="hover:text-primary transition">Rooms</button></li>
            <li><button onClick={() => handleNav("/amenities")} className="hover:text-primary transition">Amenities</button></li>
            <li><button onClick={() => handleNav("/activities")} className="hover:text-primary transition">Activities</button></li>
            <li><button onClick={() => handleNav("/reviews")} className="hover:text-primary transition">Reviews</button></li>
            <li><button onClick={() => handleNav("/contact")} className="hover:text-primary transition">Contact</button></li>
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h4
            className="font-semibold mb-3 text-xl"
            style={{ color: "#556B2F" }} // dark olive green
          >
            Follow Us
          </h4>
          <div className="flex space-x-5 text-3xl text-primary">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 hover:text-blue-500 transition-transform"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 hover:text-pink-500 transition-transform"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 hover:text-sky-400 transition-transform"
            >
              <FaXTwitter />
            </a>
          </div>
          <p className="text-sm text-light/60 mt-4">
            Stay connected for latest offers & updates
          </p>
        </motion.div>

        {/* Google Map Embed */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="md:col-span-1"
        >
          <h4
            className="font-semibold mb-3 text-xl"
            style={{ color: "#556B2F" }} // dark olive green
          >
            Find Us
          </h4>

          <iframe
            title="Naadahani Homestay Location"
            src="https://www.google.com/maps?q=Naadahani+Homestay+SH+85+Thollurusettahalli+Karnataka+571236&z=15&output=embed"
            width="100%"
            height="250"
            style={{
              border: "2px solid #d4af37",
              borderRadius: "12px",
              boxShadow: "0 0 20px rgba(212,175,55,0.4)",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <a
            href="https://www.google.com/maps/search/?api=1&query=Naadahani+Homestay+SH+85+Thollurusettahalli+Karnataka+571236"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-light/70 mt-2 inline-block"
          >
            Open in Google Maps
          </a>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center text-sm text-light/60 mt-12 border-t border-light/20 pt-4"
      >
        © {new Date().getFullYear()}{" "}
        <span className="text-primary font-semibold">Naadahani Homestay</span>. All Rights Reserved.
      </motion.p>
    </footer>
  );
}
