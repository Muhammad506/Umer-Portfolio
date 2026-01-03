import React from "react";
import { FaDollarSign, FaCheck, FaStar, FaRocket } from "react-icons/fa";

const PricingSection = () => {
  const plans = [
    {
      title: "Basic",
      price: "$49",
      popular: false,
      icon: <FaCheck className="text-green-400" />,
      features: [
        "Provide your design (Figma, XD, or UI file)",
        "Frontend development in React or Next.js",
        "Responsive layout with Tailwind CSS",
        "Remote/Online delivery",
        "Business days only (Mon–Fri)",
        "3 months support",
      ],
      buttonText: "PICK THIS PACKAGE",
    },
    {
      title: "Premium",
      price: "$99",
      popular: true,
      icon: <FaStar className="text-yellow-400" />,
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
      buttonText: "PICK THIS PACKAGE",
    },
  ];

  return (
    <section className="py-20">
      {/* Header Section */}
      <div className="mb-16">
        <h2 className="mb-6 text-sm flex gap-2 items-center border  shadow-[0_0_20px_#c264fa] border-zinc-700 w-fit px-4 py-1 rounded-full">
          <FaDollarSign /> Pricing
        </h2>

        <h2 className="text-5xl mb-6">
          My <span className="text-secondary">Pricing</span>
        </h2>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="relative rounded-3xl p-8 transition-all duration-300 flex flex-col
                       bg-white/5 backdrop-blur-md shadow-xl border border-white/20 
                       hover:border-[#CE7BFF]/50 hover:shadow-2xl hover:scale-[1.02]"
          >
            {/* Popular Badge */}
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-[#CE7BFF] text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-2">
                  <FaRocket className="text-xs" />
                  MOST POPULAR
                </div>
              </div>
            )}

            {/* Card Header */}
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-white">
                {plan.title}
              </h3>
              <p className="text-gray-300 text-sm mt-2">
                {plan.title === "Basic"
                  ? "Already have a design ready to build?"
                  : "Need design + development from scratch?"}
              </p>
            </div>

            {/* Price */}
            <div className="mb-6">
              <h4 className="text-secondary text-5xl font-semibold">
                {plan.price}{" "}
                <span className="text-white text-base font-medium">/ hour</span>
              </h4>
            </div>

            {/* Features List */}
            <div className="flex-1 mb-6">
              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-300 text-sm"
                  >
                    <FaCheck className="text-green-400 text-xs mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <button className="mt-auto bg-secondary cursor-pointer text-white px-8 py-4 font-medium rounded-full hover:opacity-90 transition w-full">
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
