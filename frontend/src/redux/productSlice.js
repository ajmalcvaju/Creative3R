import { createSlice } from "@reduxjs/toolkit";

const products = [
  {
    id: 1,
    badge: "HOT",
    badgeColor: "bg-red-600",
    image: [
      "https://pictures.kartmax.in/cover/live/600x800/quality=6/sites/9s145MyZrWdIAwpU0JYS/product-images/ethnic_charm_lilac_purple_indo_western_with_sequins_for_wedding_174349053213524_lilac_1.jpg",
      "https://pictures.kartmax.in/cover/live/600x800/quality=6/sites/9s145MyZrWdIAwpU0JYS/product-images/ethnic_charm_lilac_purple_indo_western_with_sequins_for_wedding_174349053313524_lilac_3.jpg",
    ],
    alt: "Dark purple luxurious indo western for men",
    category: "Men's Kurta",
    title: "Dark purple luxurious indo western for men",
    price: "₹6500.00",
    rating: "⭐⭐⭐⭐⭐",
    quantity: 7,
    cart: 0,
    description:
      "Elevate your style with this tailored men's dress, crafted from premium breathable fabric for all-day comfort. Featuring a modern fit, sharp collar, and refined stitching, it's perfect for both casual outings and smart occasions. Pair it with jeans or chinos for a versatile, polished look.",
  },
  {
    id: 2,
    badge: null,
    image: [
      "//www.thevelvetdolls.sg/cdn/shop/files/TessaKey-HolePoufSleevesDressinSageFloral_4_5000x.jpg?v=1737385293",
      "//www.thevelvetdolls.sg/cdn/shop/files/TessaKey-HolePoufSleevesDressinSageFloral_3_5000x.jpg?v=1737385293",
      "//www.thevelvetdolls.sg/cdn/shop/files/TessaKey-HolePoufSleevesDressinSageFloral_5_5000x.jpg?v=1737385293",
    ],
    alt: "Women’s Crochet Shoulder Chevron Sweater",
    category: "Women's Midi",
    title: "Women’s Crochet Shoulder Chevron Sweater",
    price: "₹7200.00",
    rating: "⭐⭐⭐⭐⭐",
    quantity: 10,
    cart: 0,
    description:
      "Step into elegance with this beautifully designed women's dress, crafted from soft, breathable fabric that flows with every movement. Featuring a flattering silhouette, delicate detailing, and a versatile design, it's perfect for brunch dates, evening outings, or any special occasion. Style it with heels or flats for an effortlessly chic look.",
  },
  {
    id: 3,
    badge: "NEW",
    badgeColor: "bg-green-500",
    image: [
      "https://pictures.kartmax.in/cover/live/600x800/quality=6/sites/9s145MyZrWdIAwpU0JYS/product-images/elegant_light_purple_indowestern_for_weddings_and_receptions_17365012886811_d.jpg",
      "https://pictures.kartmax.in/cover/live/600x800/quality=6/sites/9s145MyZrWdIAwpU0JYS/product-images/elegant_light_purple_indowestern_for_weddings_and_receptions_17365012876811_a.jpg",
      "https://pictures.kartmax.in/cover/live/600x800/quality=6/sites/9s145MyZrWdIAwpU0JYS/product-images/elegant_light_purple_indowestern_for_weddings_and_receptions_17365012886811_c.jpg",
    ],
    alt: "Elegant light purple indowestern for weddings and receptions",
    category: "Men's Sharwani",
    title: "Elegant light purple indowestern for weddings and receptions",
    price: "₹5300.00",
    rating: "⭐⭐⭐⭐",
    quantity: 5,
    cart: 0,
    description:
      "Elevate your style with this tailored men's dress, crafted from premium breathable fabric for all-day comfort. Featuring a modern fit, sharp collar, and refined stitching, it's perfect for both casual outings and smart occasions. Pair it with jeans or chinos for a versatile, polished look.",
  },
  {
    id: 4,
    badge: null,
    image: [
      "//www.thevelvetdolls.sg/cdn/shop/files/20231025-DenimSkirt-Blue2_ddef7a97-d0f3-4d92-9f11-59942b88b119_5000x.jpg?v=1714971979",
      "https://www.thevelvetdolls.sg/cdn/shop/files/tvd23-526.jpg?v=1743135845",
      "https://www.thevelvetdolls.sg/cdn/shop/files/tvd23-505.jpg?v=1743135845",
    ],
    alt: "Restocked* Split Front Denim Skirt in Vintage Blue",
    category: "Women's Skirt",
    title: "Restocked* Split Front Denim Skirt in Vintage Blue",
    price: "₹9300.00",
    rating: "⭐⭐⭐⭐⭐",
    quantity: 12,
    cart: 0,
    description:
      "Step into elegance with this beautifully designed women's dress, crafted from soft, breathable fabric that flows with every movement. Featuring a flattering silhouette, delicate detailing, and a versatile design, it's perfect for brunch dates, evening outings, or any special occasion. Style it with heels or flats for an effortlessly chic look.",
  },
  {
    id: 5,
    badgeColor: "bg-orange-600",
    badge: "TRENDING",
    image: [
      "https://pictures.kartmax.in/cover/live/600x800/quality=6/sites/9s145MyZrWdIAwpU0JYS/product-images/exquisite_purple_indo_western_for_weddings_and_receptions_17364944586789_c.jpg",
      "https://pictures.kartmax.in/cover/live/600x800/quality=6/sites/9s145MyZrWdIAwpU0JYS/product-images/exquisite_purple_indo_western_for_weddings_and_receptions_17364944576789_a.jpg",
      "https://pictures.kartmax.in/cover/live/600x800/quality=6/sites/9s145MyZrWdIAwpU0JYS/product-images/exquisite_purple_indo_western_for_weddings_and_receptions_17364944596789_b.jpg",
    ],
    alt: "Exquisite purple indo western for weddings and receptions",
    category: "Men's Party Wear",
    title: "Exquisite purple indo western for weddings and receptions",
    price: "₹10300.00",
    rating: "⭐⭐⭐⭐⭐",
    quantity: 9,
    description:
      "Elevate your style with this tailored men's dress, crafted from premium breathable fabric for all-day comfort. Featuring a modern fit, sharp collar, and refined stitching, it's perfect for both casual outings and smart occasions. Pair it with jeans or chinos for a versatile, polished look.",
  },
  {
    id: 6,
    badge: null,
    image: [
      "https://www.thevelvetdolls.sg/cdn/shop/files/tvd30-374.jpg?v=1743134880",
      "https://www.thevelvetdolls.sg/cdn/shop/files/tvd30-387.jpg?v=1743134880",
      "https://www.thevelvetdolls.sg/cdn/shop/files/tvd30-378.jpg?v=1743134880",
    ],
    alt: "Serene Sleek Palazzo Pants in Black",
    category: "Women's Baniyan",
    title: "Serene Sleek Palazzo Pants in Black",
    price: "₹8300.00",
    rating: "⭐⭐⭐⭐⭐",
    quantity: 7,
    cart: 0,
    description:
      "Step into elegance with this beautifully designed women's dress, crafted from soft, breathable fabric that flows with every movement. Featuring a flattering silhouette, delicate detailing, and a versatile design, it's perfect for brunch dates, evening outings, or any special occasion. Style it with heels or flats for an effortlessly chic look.",
  },
  {
    id: 7,
    badge: "Hot Deal",
    badgeColor: "bg-yellow-600",
    image: [
      "https://pictures.kartmax.in/cover/live/600x800/quality=6/sites/9s145MyZrWdIAwpU0JYS/product-images/green_royal_charming_velvet_sherwani_with_elephant_patch_17428789289199_green_5.jpg",
      "https://pictures.kartmax.in/cover/live/600x800/quality=6/sites/9s145MyZrWdIAwpU0JYS/product-images/green_royal_charming_velvet_sherwani_with_elephant_patch_17428789289199_green_6.jpg",
      "https://pictures.kartmax.in/cover/live/600x800/quality=6/sites/9s145MyZrWdIAwpU0JYS/product-images/green_royal_charming_velvet_sherwani_with_elephant_patch_17428789279199_green_3.jpg",
    ],
    alt: "Watch",
    category: "Men's Kurta",
    title: "Green royal charming velvet sherwani with elephant patch",
    price: "₹8750.00",
    rating: "⭐⭐⭐⭐⭐",
    quantity: 6,
    cart: 0,
    description:
      "Elevate your style with this tailored men's dress, crafted from premium breathable fabric for all-day comfort. Featuring a modern fit, sharp collar, and refined stitching, it's perfect for both casual outings and smart occasions. Pair it with jeans or chinos for a versatile, polished look.",
  },
  {
    id: 8,
    badge: null,
    image: [
      "https://www.thevelvetdolls.sg/cdn/shop/files/ElenaFloralEyeletCross-StitchPlungeDressinRomanticLilac_1.jpg?v=1737385489",
      "https://www.thevelvetdolls.sg/cdn/shop/files/ElenaFloralEyeletCross-StitchPlungeDressinRomanticLilac_4.jpg?v=1737385579",
      "https://www.thevelvetdolls.sg/cdn/shop/files/ElenaFloralEyeletCross-StitchPlungeDressinRomanticLilac_2.jpg?v=1737385579",
    ],
    alt: "Watch",
    category: "Women's Midi",
    title: "Elena Floral Eyelet Cross-Stitch Plunge Dress in Romantic Lilac",
    price: "₹9800.00",
    rating: "⭐⭐⭐⭐⭐",
    quantity: 11,
    cart: 0,
    description:
      "Step into elegance with this beautifully designed women's dress, crafted from soft, breathable fabric that flows with every movement. Featuring a flattering silhouette, delicate detailing, and a versatile design, it's perfect for brunch dates, evening outings, or any special occasion. Style it with heels or flats for an effortlessly chic look.",
  },
];

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: products,
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((i) => i.id === id);
      if (existingItem) {
        existingItem.quantity -= quantity;
        existingItem.cart += quantity;
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.items.find((i) => i.id === id);
      if (existingItem) {
        existingItem.quantity += existingItem.cart;
        existingItem.cart = 0;
      }
    },
    incrementQuantity: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.items.find((i) => i.id === id);
      if (existingItem) {
        const availableStock = existingItem.quantity - existingItem.cart;
        if (availableStock > 0) {
          existingItem.cart += 1;
        }
      }
    },
    decrementQuantity: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.items.find((i) => i.id === id);
      if (existingItem && existingItem.cart>1) {
        existingItem.quantity += 1;
        existingItem.cart -= 1;
      }
    },
    clearCart: (state) => {
      state.items = products;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = productSlice.actions;

export default productSlice.reducer;
