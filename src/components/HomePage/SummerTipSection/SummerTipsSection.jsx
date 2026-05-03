
import React from "react";

const SummerTipsSection = () => {
 const tips = [
  {
   id: 1,
   title: "Stay Hydrated 💧",
   desc: "Drink plenty of water throughout the day to avoid dehydration during hot weather.",
  },
  {
   id: 2,
   title: "Use Sunscreen 🧴",
   desc: "Apply sunscreen with SPF 30+ before going outside to protect your skin from UV rays.",
  },
  {
   id: 3,
   title: "Wear Light Clothing 👕",
   desc: "Choose breathable fabrics like cotton to stay cool and comfortable.",
  },
  {
   id: 4,
   title: "Avoid Peak Sun ☀️",
   desc: "Try to stay indoors between 12 PM – 4 PM when the sun is strongest.",
  },
  {
   id: 5,
   title: "Eat Fresh Fruits 🍉",
   desc: "Consume water-rich fruits like watermelon and cucumber to stay refreshed.",
  },
  {
   id: 6,
   title: "Skincare Routine ✨",
   desc: "Cleanse your face regularly and use a light moisturizer to prevent dryness.",
  },
 ];

 return (
  <section className="container mx-auto my-10 px-4">
   <h2 className="text-3xl font-bold text-center mb-8">
    🌞 Summer Care Tips
   </h2>

   <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    {tips.map((tip) => (
     <div
      key={tip.id}
      className="bg-white shadow-md rounded-2xl p-5 hover:shadow-xl transition"
     >
      <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
      <p className="text-gray-600">{tip.desc}</p>
     </div>
    ))}
   </div>
  </section>
 );
};

export default SummerTipsSection;
