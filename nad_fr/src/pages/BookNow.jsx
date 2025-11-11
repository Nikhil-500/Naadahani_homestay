import { useState } from "react";
import { motion } from "framer-motion";
import useEmailJS from "../hooks/useEmailJS";

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

  const { sendEmail, status } = useEmailJS(
    "service_hvjqhns",    // Updated EmailJS service ID
    "template_onn0579",   // Updated EmailJS template ID
    "rVUZLZTCxCsLz3vFA"   // Public key remains the same
  );

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send only the fields your EmailJS template expects
      await sendEmail({
        name: formData.name,
        email: formData.email,
        checkIn: formData.checkIn,
        checkOut: formData.checkOut,
        room: formData.room,
        guests: formData.guests,
      });

      setFormData({
        name: "",
        email: "",
        checkIn: "",
        checkOut: "",
        room: roomOptions[0],
        guests: 1,
      });
    } catch (err) {
      console.error("Booking email failed:", err);
    }
  };

  return (
    <section className="min-h-screen h-screen bg-[url('/src/assets/bg.jpg')] bg-cover bg-center relative flex items-center justify-center">
      <div className="absolute inset-0 bg-white/60"></div>

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
          {status.message && (
            <p className={`mt-2 ${status.success ? "text-green-600" : "text-red-600"}`}>
              {status.message}
            </p>
          )}
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
          placeholder="Number of Guests"
          className="p-5 rounded-lg border border-primary bg-white/80 text-primary focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 w-full"
        />

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="md:col-span-2 bg-primary text-white font-semibold py-5 rounded-full hover:bg-white hover:text-primary border border-primary transition-all duration-300 w-full"
        >
          {status.loading ? "Sending..." : "Confirm Booking"}
        </motion.button>
      </motion.form>
    </section>
  );
}
