import { useState, useEffect } from "react";

export default function DynamicShowcase() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    // Simulate dynamic data (can be replaced with backend API)
    setTimeout(() => {
      setOffers([
        { id: 1, title: "Winter Getaway Offer", desc: "20% off on all bookings this season!" },
        { id: 2, title: "Couple Retreat", desc: "Book 2 nights, get a candlelight dinner free." },
      ]);
    }, 500);
  }, []);

  return (
    <section className="py-16 bg-primary text-white" id="offers">
      <h2 className="text-4xl font-heading text-center mb-10">Special Offers</h2>
      <div className="max-w-4xl mx-auto space-y-6 px-4">
        {offers.map((o) => (
          <div key={o.id} className="bg-accent/20 rounded-xl p-6 border border-accent">
            <h3 className="text-2xl font-semibold">{o.title}</h3>
            <p className="text-sm">{o.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
