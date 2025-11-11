import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaSwimmingPool,
  FaTree,
  FaSpa,
  FaWifi,
  FaUtensils,
  FaGamepad,
  FaCocktail,
  FaHiking,
} from "react-icons/fa";

// ✅ Deluxe Villa Images
import dv1 from "../assets/dv1.jpg";
import dv2 from "../assets/dv2.jpg";
import dv3 from "../assets/dv3.jpg";
import dv4 from "../assets/dv4.jpg";

// ✅ Family Suite Images
import fs1 from "../assets/fs1.jpg";
import fs2 from "../assets/fs2.jpg";
import fs3 from "../assets/fs3.jpg";
import fs4 from "../assets/fs4.jpg";

// ✅ Luxury Cottage Images
import lc1 from "../assets/lc1.jpg";
import lc2 from "../assets/lc2.jpg";
import lc3 from "../assets/lc3.jpg";
import lc4 from "../assets/lc4.jpg";

// ✅ Premium Villa Images
import pv1 from "../assets/pv1.jpg";
import pv2 from "../assets/pv2.jpg";
import pv3 from "../assets/pv3.jpg";
import pv4 from "../assets/pv4.jpg";

export default function RoomsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();

  // 🌟 Room category data
  const roomCategories = [
    {
      title: "Deluxe Villa",
      description:
        "Elegant villas with a private garden and luxurious interiors — perfect for relaxation.",
      price: 8500,
      images: [dv1, dv2, dv3, dv4],
    },
    {
      title: "Family Suite",
      description:
        "Spacious suites designed for families, offering modern comfort and scenic views.",
      price: 12000,
      images: [fs1, fs2, fs3, fs4],
    },
    {
      title: "Luxury Cottage",
      description:
        "Rustic charm meets modern comfort — enjoy nature’s beauty in our luxury cottages.",
      price: 10000,
      images: [lc1, lc2, lc3, lc4],
    },
    {
      title: "Premium Villa",
      description:
        "An exclusive villa experience with a private pool, lavish decor, and top-tier amenities.",
      price: 15000,
      images: [pv1, pv2, pv3, pv4],
    },
  ];

  const categories = ["All", ...roomCategories.map((c) => c.title)];

  // 🌟 Features
  const features = [
    {
      icon: <FaSwimmingPool size={40} />,
      title: "Private Pool",
      desc: "Relax in your exclusive private pool.",
    },
    {
      icon: <FaTree size={40} />,
      title: "Garden Views",
      desc: "Enjoy lush greenery and nature around you.",
    },
    {
      icon: <FaSpa size={40} />,
      title: "Spa & Wellness",
      desc: "Rejuvenate with our premium spa services.",
    },
    {
      icon: <FaWifi size={40} />,
      title: "High-Speed WiFi",
      desc: "Stay connected with fast internet.",
    },
  ];

  // 🌟 Additional Sections
  const additionalSections = [
    {
      title: "Experiences",
      items: [
        {
          icon: <FaHiking size={40} />,
          title: "Nature Walks",
          desc: "Guided walks to explore local flora and fauna.",
        },
        {
          icon: <FaSpa size={40} />,
          title: "Wellness Workshops",
          desc: "Yoga, meditation, and spa sessions.",
        },
        {
          icon: <FaGamepad size={40} />,
          title: "Game Room",
          desc: "Fun indoor activities for everyone.",
        },
        {
          icon: <FaSwimmingPool size={40} />,
          title: "Water Sports",
          desc: "Kayaking and pool activities.",
        },
      ],
    },
    {
      title: "Dining",
      items: [
        {
          icon: <FaUtensils size={40} />,
          title: "Fine Dining",
          desc: "Gourmet meals crafted by top chefs.",
        },
        {
          icon: <FaTree size={40} />,
          title: "Organic Garden",
          desc: "Fresh ingredients from our garden.",
        },
        {
          icon: <FaWifi size={40} />,
          title: "Room Service",
          desc: "Meals delivered to your villa.",
        },
        {
          icon: <FaCocktail size={40} />,
          title: "Rooftop Bar",
          desc: "Drinks with panoramic views.",
        },
      ],
    },
    {
      title: "Wellness & Relaxation",
      items: [
        {
          icon: <FaSpa size={40} />,
          title: "Spa Treatments",
          desc: "Rejuvenate with premium spa therapies.",
        },
        {
          icon: <FaTree size={40} />,
          title: "Yoga Sessions",
          desc: "Daily guided yoga classes.",
        },
        {
          icon: <FaSwimmingPool size={40} />,
          title: "Infinity Pool",
          desc: "Swim with amazing views.",
        },
        {
          icon: <FaWifi size={40} />,
          title: "Meditation Zones",
          desc: "Peaceful spots for mindfulness.",
        },
      ],
    },
    {
      title: "Entertainment & Fun",
      items: [
        {
          icon: <FaGamepad size={40} />,
          title: "Arcade Room",
          desc: "Exciting games for kids and adults.",
        },
        {
          icon: <FaCocktail size={40} />,
          title: "Live Music",
          desc: "Enjoy performances at the lounge.",
        },
        {
          icon: <FaHiking size={40} />,
          title: "Adventure Trails",
          desc: "Explore hiking trails nearby.",
        },
        {
          icon: <FaTree size={40} />,
          title: "Picnic Spots",
          desc: "Relax in scenic outdoor areas.",
        },
      ],
    },
  ];

  // 🟡 Book Now Navigation
  const handleBookNow = (roomTitle) => {
    navigate("/booknow", { state: { selectedRoom: roomTitle } });
  };

  return (
    <section className="py-20 bg-white/60 text-dark" id="rooms">
      <div className="max-w-7xl mx-auto px-4">
        {/* 🌟 Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-heading text-center text-[#556B2F] drop-shadow-sm tracking-wide mb-6"
        >
          Our Villas & Suites
        </motion.h2>

        <p className="text-center text-dark/80 mb-12 max-w-3xl mx-auto">
          Choose your ideal escape from our collection of villas, suites, and cottages designed for every kind of traveler.
        </p>

        {/* 🏷️ Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#556B2F] text-white border-[#556B2F]"
                  : "border-[#556B2F]/50 text-dark hover:border-[#556B2F] hover:text-[#556B2F]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 🖼️ Rooms Display */}
        <AnimatePresence mode="wait">
          {activeCategory === "All" ? (
            <motion.div
              key="all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 mb-20"
            >
              {roomCategories.map((category, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/70 border border-[#556B2F]/30 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:border-[#556B2F] transition-all duration-500 flex flex-col"
                >
                  <img
                    src={category.images[0]}
                    alt={category.title}
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      <h4 className="text-xl font-heading text-[#556B2F] mb-1 drop-shadow-sm">
                        {category.title}
                      </h4>
                      <p className="text-sm text-dark/70 mb-3 leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-auto">
                      <span className="font-semibold text-[#556B2F]">
                        ₹{category.price.toLocaleString()}/night
                      </span>
                      <button
                        onClick={() => handleBookNow(category.title)}
                        className="bg-[#556B2F] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#708238] border border-[#556B2F] transition-all duration-300"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            roomCategories
              .filter((c) => c.title === activeCategory)
              .map((category) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="mb-20"
                >
                  <div className="text-center mb-10">
                    <h3 className="text-3xl font-heading text-[#556B2F] mb-2 drop-shadow-sm">
                      {category.title}
                    </h3>
                    <p className="text-dark/70 max-w-2xl mx-auto">
                      {category.description}
                    </p>
                  </div>
                  <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
                    {category.images.map((img, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white/70 border border-[#556B2F]/30 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:border-[#556B2F] transition-all duration-500 flex flex-col hover:bg-[#708238]/10"
                      >
                        <img
                          src={img}
                          alt={`${category.title} ${i + 1}`}
                          className="w-full h-56 object-cover hover:scale-105 transition-transform duration-700"
                        />
                        <div className="p-5 flex flex-col justify-between flex-1">
                          <div>
                            <h4 className="text-xl font-heading text-[#556B2F] mb-1 drop-shadow-sm">
                              {category.title} #{i + 1}
                            </h4>
                            <p className="text-sm text-dark/70 mb-3 leading-relaxed">
                              Luxurious comfort with premium amenities.
                            </p>
                          </div>
                          <div className="flex justify-between items-center mt-auto">
                            <span className="font-semibold text-[#556B2F]">
                              ₹{category.price.toLocaleString()}/night
                            </span>
                            <button
                              onClick={() => handleBookNow(category.title)}
                              className="bg-[#556B2F] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#708238] border border-[#556B2F] transition-all duration-300"
                            >
                              Book Now
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))
          )}
        </AnimatePresence>

        {/* 🌟 Features */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10 mt-20">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col items-center text-center p-6 bg-white/70 border border-[#556B2F]/30 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:bg-[#708238]/10"
            >
              <div className="text-[#556B2F] mb-4">{feature.icon}</div>
              <h4 className="text-xl font-heading text-[#556B2F] mb-2 drop-shadow-sm">
                {feature.title}
              </h4>
              <p className="text-dark/70">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* 🌟 Additional Sections */}
        {additionalSections.map((section, i) => (
          <div key={i} className="mt-20">
            <h3 className="text-3xl font-heading text-[#556B2F] text-center mb-10 drop-shadow-sm">
              {section.title}
            </h3>
            <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10">
              {section.items.map((item, j) => (
                <motion.div
                  key={j}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: j * 0.2 }}
                  className="flex flex-col items-center text-center p-6 bg-white/70 border border-[#556B2F]/30 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:bg-[#708238]/10"
                >
                  <div className="text-[#556B2F] mb-4">{item.icon}</div>
                  <h4 className="text-xl font-heading text-[#556B2F] mb-2 drop-shadow-sm">
                    {item.title}
                  </h4>
                  <p className="text-dark/70">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
