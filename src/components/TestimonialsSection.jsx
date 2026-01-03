import React from "react";
import { FaCommentDots, FaQuoteLeft, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Muhammad Qasim",
    title: "CTO at EaseZen Solutions",
    image: "/client.png",
    quote:
      "Umer has been an essential part of EaseZen's journey. His frontend expertise, attention to detail, and dedication helped us deliver scalable, high-performing platforms that exceeded expectations.",
    rating: 5,
  },
  {
    name: "Dr. Atif Ali",
    title: "CEO of Robx.AI",
    image: "/client.png",
    quote:
      "Working with Umer was a great experience. His frontend skills helped us deliver a responsive, user-friendly platform on time.",
    rating: 5,
  },
  {
    name: "Mudassir",
    title: "CEO of DevRollin",
    image: "/client.png",
    quote:
      "Umer is dedicated and detail-oriented. His ability to turn design into clean, optimized code makes him stand out. Highly recommended.",
    rating: 5,
  },
  {
    name: "Irtiza",
    title: "LinkedIn Client",
    image: "/client.png",
    quote:
      "Umer delivered exactly what I needed for my project. He understood the requirements quickly, communicated clearly, and built a responsive frontend that worked flawlessly. Highly recommend working with him.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <h2 className="mb-16 text-sm flex gap-2 items-center border  shadow-[0_0_20px_#c264fa]  border-zinc-700 w-fit px-4 py-1 rounded-full">
          <FaCommentDots /> Testimonials
        </h2>

        <h2 className="text-5xl mb-12">
          What People Are <span className="text-secondary">Saying</span>
        </h2>

        {/* Testimonials Slider */}
        <div className="relative max-w-7xl mx-auto">
          <Swiper
            modules={[Autoplay, EffectCards, Navigation, Pagination]}
            effect="cards"
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            className="w-full max-w-3xl mx-auto"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="border border-gray-600 p-8 rounded-3xl bg-zinc-900/95 backdrop-blur-sm shadow-2xl h-full transition-all duration-300 hover:border-secondary/50 hover:shadow-2xl hover:shadow-secondary/10">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <FaQuoteLeft className="text-secondary text-2xl opacity-80" />
                  </div>

                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, index) => (
                      <FaStar key={index} className="text-yellow-400 text-sm" />
                    ))}
                  </div>

                  {/* Quote Text */}
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    "{t.quote}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-600">
                    <div className="relative">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="rounded-full w-14 h-14 object-cover border-2 border-secondary/30"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg">
                        {t.name}
                      </h3>
                      <p className="text-secondary text-sm">{t.title}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
