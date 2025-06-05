import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

export const About = ({ data }) => {
  if (!data || !data.slides) return <p>Carregando...</p>;

  return (
    <section id="about" className="container my-16 px-4">
      <Swiper
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        modules={[Pagination]}
      >
        {data.slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              style={{
                backgroundColor: slide.backgroundColor,
                padding: "2rem",
                borderRadius: "8px",
                minHeight: "710px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="rounded-lg shadow-md mb-6 max-w-full sm:max-w-md"
              />
              <h2 className="text-3xl font-bold mb-4 text-red-700 text-center">
                {slide.title}
              </h2>

              {slide.paragraph && (
                <p className="text-center max-w-2xl mx-auto">{slide.paragraph}</p>
              )}

              {slide.list && (
                <ul className="list-disc list-inside text-left max-w-xl mx-auto text-sm">
                  {slide.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
