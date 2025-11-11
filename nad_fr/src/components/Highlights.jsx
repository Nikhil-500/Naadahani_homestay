import { motion } from "framer-motion";
import cafe from "../assets/amenity1.jpg";
import villa from "../assets/room1.jpg";
import hosp from "../assets/hero1.jpg";

const highlights = [
  {
    title: "Café & Cuisine",
    desc: "Savor authentic local flavors and international delights crafted by our chefs.",
    img: cafe
  },
  {
    title: "Luxury Villas",
    desc: "Experience peace and elegance in our beautifully designed nature-inspired villas.",
    img: villa
  },
  {
    title: "Warm Hospitality",
    desc: "Feel at home with the warmth and care of Orion Neststay’s service.",
    img: hosp
  }
];

export default function Highlights() {
  return (
    <section className="py-16 bg-secondary/30">
      <h2 className="text-center text-3xl font-heading text-primary mb-12">
        Discover Orion Neststay
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-4">
        {highlights.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-xl overflow-hidden"
          >
            <img src={item.img} alt={item.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-2 font-heading">
                {item.title}
              </h3>
              <p className="text-gray-700 font-body">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
