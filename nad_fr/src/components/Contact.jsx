import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import useEmailJS from "../hooks/useEmailJS";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const { sendEmail, status } = useEmailJS(
    "service_920s4ze",
    "template_w0j9qxf",
    "rVUZLZTCxCsLz3vFA"
  );

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Sending email with data:", formData); // Debug

    try {
      await sendEmail({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });

      console.log("Email sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Email sending failed:", err);
    }
  };

  return (
    <section id="contact" className="relative py-20 bg-white/60 text-[#556B2F] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#ffffffcc] opacity-60" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-heading text-[#556B2F] mb-4">Get In Touch</h2>
          <p className="text-[#556B2F]/80 max-w-2xl mx-auto">
            Send us a message and we’ll get back to you shortly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <motion.div className="space-y-6" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <div className="flex items-start gap-4">
              <div className="bg-[#556B2F]/15 p-4 rounded-2xl border border-[#556B2F]/30">
                <Phone className="text-[#556B2F]" size={26} />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#556B2F]">Call Us</h4>
                <p className="text-[#556B2F]/80">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#556B2F]/15 p-4 rounded-2xl border border-[#556B2F]/30">
                <Mail className="text-[#556B2F]" size={26} />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#556B2F]">Email</h4>
                <p className="text-[#556B2F]/80">info@orionneststay.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#556B2F]/15 p-4 rounded-2xl border border-[#556B2F]/30">
                <MapPin className="text-[#556B2F]" size={26} />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#556B2F]">Location</h4>
                <p className="text-[#556B2F]/80">Orion Neststay Resort, Wayanad, Kerala</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form onSubmit={handleSubmit} className="bg-white/70 rounded-2xl shadow-xl p-8 space-y-6 border border-[#556B2F]/20 backdrop-blur-sm" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>

            <div>
              <label className="block text-[#556B2F] font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-[#556B2F]/40 focus:outline-none focus:border-[#556B2F] text-[#556B2F] placeholder-[#556B2F]/50 transition"
              />
            </div>

            <div>
              <label className="block text-[#556B2F] font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-[#556B2F]/40 focus:outline-none focus:border-[#556B2F] text-[#556B2F] placeholder-[#556B2F]/50 transition"
              />
            </div>

            <div>
              <label className="block text-[#556B2F] font-medium mb-2">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-[#556B2F]/40 focus:outline-none focus:border-[#556B2F] text-[#556B2F] placeholder-[#556B2F]/50 transition"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full flex items-center justify-center gap-2 bg-[#556B2F] text-white font-semibold py-3 rounded-full hover:bg-[#6B8E23] transition duration-300"
            >
              <Send size={18} />{" "}
              {status.loading ? "Sending..." : status.success ? "Sent!" : status.error ? "Failed!" : "Send Message"}
            </motion.button>

          </motion.form>
        </div>
      </div>
    </section>
  );
}
