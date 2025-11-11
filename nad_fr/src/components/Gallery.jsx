import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import galleryData from "../data/activities";

const categories = ["All", "Nature", "Activities", "Stay", "Food", "People"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredData =
    activeCategory === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  return (
    <section className="py-20 bg-white/60 text-[#556B2F]" id="gallery">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-heading text-[#556B2F] mb-4">
          Gallery
        </h2>
        <p className="text-[#556B2F]/80 max-w-2xl mx-auto">
          Explore the charm of Orion Neststay — a visual journey through serene
          landscapes, cozy stays, delicious food, and joyful moments.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full border font-medium transition-all duration-300 ${
              activeCategory === cat
                ? "bg-[#B4C424] text-[#1A2600] border-[#B4C424] shadow-md"
                : "border-[#B4C424]/50 text-[#556B2F] hover:bg-[#B4C424] hover:text-[#1A2600]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-7xl mx-auto px-4">
        {filteredData.map((item) => (
          <motion.div
            key={item.id}
            className="relative overflow-hidden rounded-2xl border border-[#B4C424]/30 bg-white/80 shadow-md cursor-pointer group hover:border-[#B4C424]/60 transition-all duration-500"
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelectedItem(item)}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.category}
                className="w-full h-64 object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
              />
            ) : (
              <video
                src={item.src}
                muted
                loop
                autoPlay
                playsInline
                className="w-full h-64 object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
              />
            )}
            <div className="absolute inset-0 bg-[#556B2F]/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-500">
              <span className="text-white text-lg font-semibold tracking-wide">
                View
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Viewer */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-5xl w-full flex justify-center"
            >
              {selectedItem.type === "image" ? (
                <img
                  src={selectedItem.src}
                  alt="Preview"
                  className="max-h-[90vh] rounded-2xl shadow-lg border border-[#B4C424]/50 bg-white/80"
                />
              ) : (
                <video
                  src={selectedItem.src}
                  controls
                  autoPlay
                  className="max-h-[90vh] rounded-2xl shadow-lg border border-[#B4C424]/50 bg-white/80"
                />
              )}

              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 text-[#B4C424] hover:text-white transition duration-300"
              >
                <X size={32} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
