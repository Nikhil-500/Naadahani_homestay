import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import amenities from "../data/amenities";

export default function Amenities() {
  const [selectedAmenity, setSelectedAmenity] = useState(null);

  return (
    <section
      className="relative py-20 bg-white/60 text-[#3b4d2a] overflow-hidden"
      id="amenities"
    >
      {/* Section Header */}
      <motion.div
        className="text-center relative z-10 mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-heading text-[#4c5c34] mb-4">
          Resort Amenities
        </h2>
        <p className="text-[#5c6d3a] max-w-2xl mx-auto">
          Discover the comforts and experiences that make Orion Neststay truly
          special — where nature meets luxury and every detail is crafted for
          your relaxation.
        </p>
      </motion.div>

      {/* Amenities Grid */}
      <div className="relative z-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
        {amenities.map((a, index) => (
          <motion.div
            key={a.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelectedAmenity(a)}
            className="group relative bg-white rounded-2xl cursor-pointer p-6 transition-all duration-300 border border-[#b0b88b] hover:bg-[#4c5c34]"
          >
            <div className="relative">
              <motion.img
                src={a.image}
                alt={a.name}
                className="w-24 h-24 mx-auto mb-4 rounded-full object-cover border-4 border-[#b0b88b] transition-all duration-300"
                whileHover={{ rotate: 3 }}
              />
              <h4 className="text-lg font-semibold text-center mb-2 transition-colors duration-300 group-hover:text-white">
                {a.name}
              </h4>
              <p className="text-sm text-center leading-relaxed transition-colors duration-300 group-hover:text-white">
                {a.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Popup for Detailed View */}
      <AnimatePresence>
        {selectedAmenity && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedAmenity(null)}
          >
            <motion.div
              className="bg-white text-[#3b4d2a] rounded-2xl p-8 max-w-md w-[90%] relative shadow-2xl border border-[#b0b88b]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedAmenity(null)}
                className="absolute top-4 right-4 text-[#4c5c34] hover:text-[#8d9b67] transition"
              >
                <X size={26} />
              </button>
              <img
                src={selectedAmenity.image}
                alt={selectedAmenity.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-[#b0b88b]"
              />
              <h3 className="text-2xl font-semibold text-center text-[#4c5c34] mb-3">
                {selectedAmenity.name}
              </h3>
              <p className="text-center leading-relaxed">
                {selectedAmenity.longDesc || selectedAmenity.desc}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
