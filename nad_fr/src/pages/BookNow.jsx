import { useState } from "react";
import { motion } from "framer-motion";

// ✅ Room Types for selection
const roomOptions = ["Deluxe Villa", "Family Suite", "Luxury Cottage", "Premium Villa"];

export default function BookNow() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    room: roomOptions[0],
    guests: 1,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Booking Confirmed!\nName: ${formData.name}\nEmail: ${formData.email}\nRoom: ${formData.room}\nCheck-in: ${formData.checkIn}\nCheck-out: ${formData.checkOut}\nGuests: ${formData.guests}`
    );
  };

  return (
    <section className="min-h-screen h-screen bg-[url('/src/assets/bg.jpg')] bg-cover bg-center relative flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/60"></div>

      {/* Full-screen Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-5xl px-6 md:px-12 py-16 grid md:grid-cols-2 gap-8 h-full md:h-auto overflow-y-auto"
      >
        {/* Form Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 text-center mb-8"
        >
          <h2 className="text-4xl font-heading text-primary mb-3">Book Your Stay</h2>
          <p className="text-primary/70">
            Complete the form below to reserve your villa or suite with Orion Neststay.
          </p>
        </motion.div>

        {/* Full Name */}
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-5 rounded-lg border border-primary bg-white/80 text-primary placeholder-primary/60 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 w-full"
        />

        {/* Email */}
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-5 rounded-lg border border-primary bg-white/80 text-primary placeholder-primary/60 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 w-full"
        />

        {/* Check-in Date */}
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="date"
          name="checkIn"
          value={formData.checkIn}
          onChange={handleChange}
          required
          className="p-5 rounded-lg border border-primary bg-white/80 text-primary focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 w-full"
        />

        {/* Check-out Date */}
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="date"
          name="checkOut"
          value={formData.checkOut}
          onChange={handleChange}
          required
          className="p-5 rounded-lg border border-primary bg-white/80 text-primary focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 w-full"
        />

        {/* Room Type */}
        <motion.select
          whileFocus={{ scale: 1.02 }}
          name="room"
          value={formData.room}
          onChange={handleChange}
          className="p-5 rounded-lg border border-primary bg-white/80 text-primary focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 w-full"
        >
          {roomOptions.map((room, i) => (
            <option key={i} value={room}>
              {room}
            </option>
          ))}
        </motion.select>

        {/* Number of Guests */}
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="number"
          name="guests"
          min="1"
          value={formData.guests}
          onChange={handleChange}
          className="p-5 rounded-lg border border-primary bg-white/80 text-primary focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 w-full"
          placeholder="Number of Guests"
        />

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="md:col-span-2 bg-primary text-white font-semibold py-5 rounded-full hover:bg-white hover:text-primary border border-primary transition-all duration-300 w-full"
        >
          Confirm Booking
        </motion.button>
      </motion.form>
    </section>
  );
}
