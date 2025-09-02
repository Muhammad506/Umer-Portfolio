import React from "react";
import { FaCommentDots } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

const testimonials = [
  {
    name: "Muhammad Qasim",
    title: "CTO at EaseZen Solutions",
    image: "/client.png",
    quote:
      "Umer has been an essential part of EaseZen’s journey. His frontend expertise, attention to detail, and dedication helped us deliver scalable, high-performing platforms that exceeded expectations.",
  },

  {
    name: "Dr. Atif Ali",
    title: "CEO of Robx.AI",
    image: "/client.png",
    quote:
      "Working with Umer was a great experience. His frontend skills helped us deliver a responsive, user-friendly platform on time.",
  },
  {
    name: "Mudassir",
    title: "CEO of DevRollin",
    image: "/client.png",
    quote:
      "Umer is dedicated and detail-oriented. His ability to turn design into clean, optimized code makes him stand out. Highly recommended.",
  },
  {
    name: "Irtiza",
    title: "LinkedIn Client",
    image: "/client.png",
    quote:
      "Umer delivered exactly what I needed for my project. He understood the requirements quickly, communicated clearly, and built a responsive frontend that worked flawlessly. Highly recommend working with him.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20">
      <h2 className="mb-16 text-sm flex gap-2 items-center border border-zinc-700 w-fit px-4 py-1 rounded-full">
        <FaCommentDots /> Testimonials
      </h2>

      <h2 className="text-5xl mb-12">
        What People Are <span className="text-secondary">Saying</span>
      </h2>

      <Swiper
        modules={[Autoplay, EffectCards]}
        effect="cards"
        grabCursor={true}
        loop={true}
        autoplay={{ delay: 3000 }}
        className="max-w-lg"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="border border-gray-600 p-6 rounded-xl bg-zinc-900 h-full">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="rounded-full w-12 h-12 object-cover"
                />
                <div>
                  <h3 className="font-semibold">{t.name}</h3>
                  <p className="text-[#CE7BFF] text-sm">{t.title}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">“{t.quote}”</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialsSection;
