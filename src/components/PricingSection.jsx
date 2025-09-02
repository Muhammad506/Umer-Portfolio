import React from "react";
import { FaDollarSign } from "react-icons/fa";

const PricingSection = () => {
  const plans = [
    {
      title: "Basic",
      price: "$49",
      features: [
        "Provide your design (Figma, XD, or UI file)",
        "Frontend development in React or Next.js",
        "Responsive layout with Tailwind CSS",
        "Remote/Online delivery",
        "Business days only (Mon–Fri)",
        "3 months support",
      ],
    },
    {
      title: "Premium",
      price: "$99",
      features: [
        "No design needed – full UI/UX design from scratch",
        "Frontend development in React or Next.js",
        "Responsive, SEO-ready & optimized performance",
        "Remote/Online delivery",
        "Available on weekends if required",
        "6 months support",
        "Project priority handling",
        "Extra revisions & client care",
      ],
    },
  ];

  return (
    <section className="py-20">
      <h2 className="mb-16 text-sm flex gap-2 items-center border border-zinc-700 w-fit px-4 py-1 rounded-full">
        <FaDollarSign /> Pricing
      </h2>

      <h2 className="text-5xl mb-6">
        My <span className="text-secondary">Pricing</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="border border-zinc-600 rounded-2xl p-6 transition-all duration-300 hover:border-[#CE7BFF] hover:shadow-lg hover:scale-[1.02] flex flex-col"
          >
            <h3 className="text-lg">{plan.title}</h3>
            <p className="text-gray-400 text-sm mt-1">
              {plan.title === "Basic"
                ? "Already have a design ready to build?"
                : "Need design + development from scratch?"}
            </p>
            <h4 className="text-secondary text-3xl mt-4">
              {plan.price} <span className="text-white text-base">/ hour</span>
            </h4>
            <ul className="my-4 space-y-1 text-sm text-gray-300">
              {plan.features.map((feat, idx) => (
                <li key={idx}>- {feat}</li>
              ))}
            </ul>
            <button className="mt-auto bg-secondary text-white px-4 py-2 rounded-full hover:opacity-90 transition">
              PICK THIS PACKAGE
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
