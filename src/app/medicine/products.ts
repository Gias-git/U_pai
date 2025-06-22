export const products = Array.from({ length: 40 }, (_, i) => {
  const baseNames = [
    "Ceevit",
    "Paracetamol",
    "Napa Extra",
    "Aspirin",
    "Zimax",
    "Seclo",
    "Antacid",
    "Histacin",
    "Nexum",
    "Monas",
    "Maxpro",
    "Losectil",
  ];

  const name =
    baseNames[i % baseNames.length] + (i > baseNames.length ? ` ${i}` : "");
  const slug = name.toLowerCase().replace(/\s+/g, "-"); // slugify
  const strength = `${((i % 5) + 1) * 50}mg`;
  const discountPercent = 5 + (i % 10);
  const oldPrice = 10 + (i % 10) * 2;
  const newPrice = +(oldPrice * (1 - discountPercent / 100)).toFixed(2);
  const deliveryOptions = [
    "6-12 Hours",
    "12-24 Hours",
    "24 Hours",
    "48 Hours",
    "72 Hours",
    "1-2 Days",
  ];
  const deliveryTime = deliveryOptions[i % deliveryOptions.length];

  return {
    id: String(i + 1),
    slug,
    imageSrc: "/sub-demo-img.webp",
    name,
    strength,
    discountPercent,
    deliveryTime,
    oldPrice,
    newPrice,
    category: "healthcare",
    subcategory: "general-medicine",
  };
});
