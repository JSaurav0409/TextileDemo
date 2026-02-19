// src/data/products.js
import Cotton from "../assets/images/cotton.jpg";
import Silk from "../assets/images/silk.jpg";
import Polyester from "../assets/images/polyester.jpg";
import Linen from "../assets/images/linen.jpg";
import Rayon from "../assets/images/rayon.jpg";
import Denim from "../assets/images/denim.jpg";

export const products = [
  {
    id: 1,
    name: "Premium Cotton",
    category: "Organic",
    image: Cotton,
    description: "Sustainably sourced, high-thread count cotton.",
  },
  {
    id: 2,
    name: "Mulberry Silk",
    category: "Luxury",
    image: Silk,
    description: "Exquisite luster and unparalleled softness.",
  },
  {
    id: 3,
    name: "Recycled Polyester",
    category: "Sustainable",
    image: Polyester,
    description: "Durable performance with an eco-friendly footprint.",
  },
  {
    id: 4,
    name: "Pure Linen",
    category: "Breathable",
    image: Linen,
    description: "Natural texture that ages beautifully with time.",
  },
  {
    id: 5,
    name: "Soft Rayon",
    category: "Comfort",
    image: Rayon,
    description: "Fluid drape and silky feel for modern silhouettes.",
  },
  {
    id: 6,
    name: "Raw Denim",
    category: "Industrial",
    image: Denim,
    description: "Heritage-grade denim built for character.",
  },
];
