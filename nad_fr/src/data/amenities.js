// export default [
//   { id: 1, name: "Infinity Pool", desc: "Relax with scenic views", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945" },
//   { id: 2, name: "Café & Lounge", desc: "Enjoy handcrafted meals", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836" },
//   { id: 3, name: "Spa & Wellness", desc: "Rejuvenate your body", image: "https://images.unsplash.com/photo-1600346011331-2d45f07a1a64" },
//   { id: 4, name: "Free WiFi", desc: "Stay connected anywhere", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d" }
// ];
// src/data/amenities.js
import pool from "../assets/pool.jpg";
import campfire from "../assets/campfire.jpg";
import wifi from "../assets/wifi.jpg";
import parking from "../assets/parking.jpg";
import restaurant from "../assets/restaurant.jpg";
import naturewalk from "../assets/naturewalk.jpg";
import games from "../assets/games.jpg";
import yoga from "../assets/yoga.jpg";

export default [
  {
    id: 1,
    name: "Swimming Pool",
    image: pool,
    desc: "Cool off and relax in our crystal-clear infinity pool.",
    longDesc:
      "Our temperature-controlled infinity pool overlooks lush greenery — perfect for a refreshing dip or serene sunset swim.",
  },
  {
    id: 2,
    name: "Campfire Nights",
    image: campfire,
    desc: "Gather around for cozy evenings under the stars.",
    longDesc:
      "Enjoy music, laughter, and warmth with our nightly bonfire sessions — the perfect place to unwind and make memories.",
  },
  {
    id: 3,
    name: "Free Wi-Fi",
    image: wifi,
    desc: "Stay connected with high-speed internet throughout the resort.",
  },
  {
    id: 4,
    name: "Ample Parking",
    image: parking,
    desc: "Secure and spacious parking for all guests.",
  },
  {
    id: 5,
    name: "Restaurant",
    image: restaurant,
    desc: "Delight your taste buds with authentic local cuisine.",
  },
  {
    id: 6,
    name: "Nature Walks",
    image: naturewalk,
    desc: "Explore the serenity of the forest trails nearby.",
  },
  {
    id: 7,
    name: "Indoor Games",
    image: games,
    desc: "Play your favorites — carrom, chess, and more.",
  },
  {
    id: 8,
    name: "Yoga Deck",
    image: yoga,
    desc: "Start your day with peace and balance on our yoga deck.",
  },
];

