// src/components/Activities.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import activities from "../data/activities";

export default function Activities() {
  const [selectedMedia, setSelectedMedia] = useState(null);

  return (
    <section
      className="py-16 bg-gradient-to-b from-light to-secondary/30"
      id="activities"
    >
      {/* Title Section */}
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl font-heading text-primary mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Things to Do at Orion Neststay
        </motion.h2>

        <motion.p
          className="text-dark/70 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Experience the perfect balance of adventure and relaxation — from
          trekking through lush hills to cozy bonfire nights and waterfall
          visits.
        </motion.p>
      </div>

      {/* Activities Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {activities.map((a, i) => (
          <motion.div
            key={a.id || i}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelectedMedia(a)}
          >
            {/* Image or Video Preview */}
            {a.type === "video" ? (
              <video
                src={a.src}
                className="h-64 w-full object-cover"
                muted
                loop
                playsInline
                onMouseOver={(e) => e.target.play()}
                onMouseOut={(e) => e.target.pause()}
              />
            ) : (
              <img
                src={a.src}
                alt={a.title}
                className="h-64 w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center text-white p-4">
              <h3 className="text-lg font-semibold mb-2">{a.title}</h3>
              <p className="text-sm text-center text-gray-200 mb-2">{a.desc}</p>
              {a.type === "video" && (
                <Play size={28} className="text-white opacity-80 mt-2" />
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for Selected Media */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMedia(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-dark/20 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedMedia.type === "video" ? (
                <video
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  className="w-full rounded-2xl"
                />
              ) : (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  className="w-full max-h-[80vh] object-cover rounded-2xl"
                />
              )}
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition"
              >
                <X size={28} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
