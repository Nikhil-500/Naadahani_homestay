// src/data/activities.js

// 🎥 Import all media from src/assets
import gallery1 from "../assets/gallery1.mp4";
import nature1 from "../assets/nature1.jpg";

import gallery2 from "../assets/gallery2.mp4";
import stay1 from "../assets/stay1.jpg";

import gallery3 from "../assets/gallery3.mp4";
import activity1 from "../assets/activity1.jpg";

import gallery7 from "../assets/gallery7.mp4";
import gallery8 from "../assets/gallery8.jpg";

import gallery9 from "../assets/gallery9.mp4";
import gallery10 from "../assets/gallery10.jpg";

// 📸 Export media list with categories
export default [
  // 🌿 Nature
  { id: 1, type: "video", src: gallery1, category: "Nature" },
  { id: 2, type: "image", src: nature1, category: "Nature" },

  // 🏡 Stay
  { id: 3, type: "video", src: gallery2, category: "Stay" },
  { id: 4, type: "image", src: stay1, category: "Stay" },

  // 🏞️ Activities
  { id: 5, type: "video", src: gallery3, category: "Activities" },
  { id: 6, type: "image", src: activity1, category: "Activities" },

  // 🍽️ Food
  { id: 7, type: "video", src: gallery7, category: "Food" },
  { id: 8, type: "image", src: gallery8, category: "Food" },

  // 👨‍👩‍👧‍👦 People
  { id: 9, type: "video", src: gallery9, category: "People" },
  { id: 10, type: "image", src: gallery10, category: "People" },
];
