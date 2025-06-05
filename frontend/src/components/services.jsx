import React from "react";

export const Services = ({ data }) => {
  return (
    <section id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Geossítios</h2>
          <p>Outros Geossítios para você visitar e aprender a história e geografia local!</p>
        </div>

        {data && data.length > 0 ? (
          <div className="services-grid">
            {data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="service-box">
                {d.image && (
                  <div className="service-image-wrapper">
                    <img src={d.image} alt={d.name} className="service-image" />
                  </div>
                )}
                <h3>{d.name}</h3>
                <p>{d.text}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="loading-text">Carregando serviços...</p>
        )}
      </div>
    </section>
  );
};
