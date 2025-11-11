import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Coffee,
  Mountain,
  Leaf,
  Heart,
  MapPin,
  Utensils,
} from "lucide-react";
import { useState, useEffect } from "react";
import HeroSlider from "../components/HeroSlider";
import reviews from "../data/reviews";
import din from "../assets/din.jpg";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const delay = 5000;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, delay);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white text-dark font-body flex flex-col min-h-screen">
      <main className="flex-grow overflow-hidden">
        <div className="pt-0">
          {/* 🏞️ Hero Slider Section (flush under navbar) */}
          <section className="relative">
            <HeroSlider />
          </section>

          {/* 🌅 Discover Section */}
          <section className="relative py-24 bg-white/60">
            <div className="max-w-6xl mx-auto px-6 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-5xl font-heading text-[#556B2F] mb-6"
              >
                Discover Naadahani Homestay
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="text-lg text-gray-700 max-w-3xl mx-auto mb-10"
              >
                Nestled amidst the coffee-scented hills of Coorg, Naadahani Homestay
                blends nature’s calm with luxurious comfort. Let the aroma of
                coffee, rustle of leaves, and chirping birds welcome you to your
                mountain retreat.
              </motion.p>
              <motion.a
                href="#booking"
                whileHover={{ scale: 1.05 }}
                className="inline-block bg-primary text-white px-8 py-3 rounded-full shadow-md hover:bg-[#556B2F] hover:text-white transition-all duration-300"
              >
                Explore More
              </motion.a>
            </div>

            {/* Floating leaf and mountain icons */}
            <motion.div
              className="absolute top-10 left-10 text-primary/30"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Leaf size={64} />
            </motion.div>
            <motion.div
              className="absolute bottom-10 right-10 text-primary/30"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <Mountain size={64} />
            </motion.div>
          </section>

          {/* 🍃 Resort Highlights */}
          <section className="py-20 bg-white/60">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 sm:grid-cols-2 gap-10 text-center">
              {[
                {
                  icon: <Coffee size={36} />,
                  title: "Fine Dining",
                  desc: "Enjoy curated dishes made from organic local ingredients and global recipes.",
                },
                {
                  icon: <Mountain size={36} />,
                  title: "Adventure Trails",
                  desc: "Trek through lush hills, waterfalls, and secret scenic viewpoints.",
                },
                {
                  icon: <Heart size={36} />,
                  title: "Wellness Spa",
                  desc: "Rejuvenate with holistic therapies, yoga, and aromatherapy treatments.",
                },
                {
                  icon: <MapPin size={36} />,
                  title: "Hidden Escapes",
                  desc: "Find serenity in cozy cottages overlooking the coffee plantations.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="group bg-primary/5 border border-primary/20 p-8 rounded-2xl hover:bg-[#556B2F] hover:text-white transition-all duration-300 shadow-md hover:shadow-2xl"
                >
                  <div className="mb-4 text-[#556B2F] group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-xl mb-2 text-[#556B2F] group-hover:text-white transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 group-hover:text-white/90 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* 🍽️ Culinary Section (uses imported din.jpg) */}
          <section className="py-24 bg-white/60 text-center">
            <div className="max-w-5xl mx-auto px-6">
              <Utensils size={50} className="mx-auto text-[#556B2F] mb-6" />
              <h2 className="text-4xl font-heading text-[#556B2F] mb-6">
                A Feast for the Senses
              </h2>
              <p className="text-gray-700 max-w-2xl mx-auto mb-10">
                Experience multi-cuisine dining that celebrates local heritage with
                international flair. From candle-lit dinners to outdoor picnics by
                the plantation stream — every meal is an experience.
              </p>
              <motion.img
                src={din}
                alt="Dining Experience"
                className="rounded-3xl shadow-lg w-full max-w-4xl mx-auto hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </section>

          {/* 💬 Guest Reviews */}
          <section
            id="reviews"
            className="relative py-32 text-center bg-white/60 text-dark overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-primary/5 via-transparent to-primary/5"></div>

            <div className="relative max-w-4xl mx-auto px-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl font-heading mb-10 tracking-wide text-[#556B2F]"
              >
                Guest Experiences
              </motion.h2>

              <div className="relative h-[320px] flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.8 }}
                    className="absolute max-w-3xl text-center px-8"
                  >
                    <p className="text-lg md:text-xl italic text-gray-700 mb-6 leading-relaxed">
                      “{reviews[currentIndex].comment}”
                    </p>
                    <h4 className="text-2xl font-semibold uppercase tracking-wider text-[#556B2F] mb-1">
                      {reviews[currentIndex].name}
                    </h4>
                    <p className="text-gray-500 text-sm mb-3">
                      {reviews[currentIndex].date}
                    </p>
                    <div className="flex justify-center text-[#556B2F]">
                      {Array.from({
                        length: reviews[currentIndex].rating || 5,
                      }).map((_, i) => (
                        <Star key={i} size={20} fill="currentColor" />
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex justify-center mt-10 gap-3">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-3 w-3 rounded-full transition-all duration-300 ${
                      currentIndex === i
                        ? "bg-[#556B2F] scale-125"
                        : "bg-primary/30 hover:bg-[#556B2F]/70"
                    }`}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* 🌊 Final Call to Action */}
          <section className="flex flex-col justify-center items-center min-h-[90vh] bg-white/60 text-dark text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-heading mb-6 text-[#556B2F]"
            >
              Escape. Relax. Rediscover Yourself.
            </motion.h2>
            <p className="max-w-2xl mx-auto mb-10 text-gray-700">
              Inspired by the finest resorts across the world — Naadahani Homestay is
              where every sunrise feels like a new beginning.
            </p>
            <motion.a
              href="#booking"
              whileHover={{ scale: 1.05 }}
              className="inline-block bg-[#556B2F] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-[#6B8E23] hover:text-white transition-all duration-300"
            >
              Book Your Stay Now
            </motion.a>
          </section>
        </div>
      </main>
    </div>
  );
}
