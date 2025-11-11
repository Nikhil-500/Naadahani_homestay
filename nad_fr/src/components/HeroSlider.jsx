import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import { useState } from "react";

// Local media
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.mp4";
import hero3 from "../assets/hero3.mp4";
import hero4 from "../assets/hero4.mp4";

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      type: "image",
      src: hero1,
      heading: "Escape to Serenity",
      subtext: "Where Nature Meets Luxury — Orion Neststay",
      cta: "Book Your Stay",
    },
    {
      type: "video",
      src: hero2,
      heading: "Breathtaking Views",
      subtext: "Relax. Refresh. Reconnect.",
      cta: "View Rooms",
    },
    {
      type: "video",
      src: hero3,
      heading: "Luxury Meets Comfort",
      subtext: "Experience hospitality redefined.",
      cta: "Explore Suites",
    },
    {
      type: "video",
      src: hero4,
      heading: "Calm Zone",
      subtext: "Artistic illustrations.",
      cta: "Discover More",
    },
  ];

  return (
    // removed top margin so slider sits flush under the navbar
    <section className="relative w-full mt-0 font-[Poppins]">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        effect="fade"
        speed={1200}
        loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        // keep full-viewport height for impactful hero
        className="h-[85vh] md:h-[95vh]"
      >
        {slides.map((slide, index) => {
          // Use dark olive green for all CTAs
          const ctaBackground = "#556B2F";
          return (
            <SwiperSlide key={index} className="relative overflow-hidden">
              {/* Background media */}
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: activeIndex === index ? 1.02 : 1 }}
                transition={{ duration: 6, ease: "easeOut" }}
                className="absolute inset-0"
              >
                {slide.type === "image" ? (
                  <img
                    src={slide.src}
                    alt={slide.heading}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <video
                    src={slide.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="object-cover w-full h-full"
                  />
                )}
              </motion.div>

              {/* Solid dark overlay for contrast */}
              <div className="absolute inset-0 bg-black/70" />

              {/* Centered text */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 select-none">
                <motion.h2
                  key={slide.heading}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-white"
                  style={{ letterSpacing: "-0.5px" }}
                >
                  {slide.heading}
                </motion.h2>

                <motion.p
                  key={slide.subtext}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.3 }}
                  className="text-base md:text-xl font-medium max-w-2xl mb-8 text-gray-200"
                  style={{ lineHeight: 1.25 }}
                >
                  {slide.subtext}
                </motion.p>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className="px-8 py-3 font-semibold uppercase tracking-wide rounded-full shadow-sm transition-all"
                  style={{
                    background: ctaBackground,
                    color: "#ffffff",
                    border: "1px solid rgba(0,0,0,0.12)",
                  }}
                >
                  {slide.cta}
                </motion.button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Progress Bar (subtle) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-white/20 rounded-full overflow-hidden">
        <motion.div
          key={activeIndex}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 4.8, ease: "easeInOut" }}
          className="h-full"
          style={{ background: "#556B2F" }}
        />
      </div>
    </section>
  );
}
