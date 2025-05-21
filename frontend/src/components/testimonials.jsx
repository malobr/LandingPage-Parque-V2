import React from "react";

export const Testimonials = ({ data }) => {
  return (
    <section id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>O que os visitantes dizem?</h2>
          <p>Confira os relatos de quem já visitou nosso parque!</p>
        </div>
        <div className="row justify-content-center">
          {data ? (
            data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-4 col-sm-6 mb-4">
                <div className="testimonial">
                  <div className="testimonial-image">
                    <img src={d.img} alt={d.name} loading="lazy" />
                  </div>
                  <p className="testimonial-text">“{d.text}”</p>
                  <div className="testimonial-meta">— {d.name}</div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">Carregando depoimentos...</p>
          )}
        </div>
      </div>
    </section>
  );
};
