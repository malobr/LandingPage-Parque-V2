import React from "react";

export const Services = ({ data }) => {
  return (
    <section id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Nossos Serviços</h2>
          <p>Conheça as soluções que oferecemos para transformar seu negócio.</p>
        </div>
        <div className="row">
          {data ? (
            data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-4">
                <div className="service-box">
                  <i className={`fa ${d.icon}`} aria-hidden="true"></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Carregando serviços...</p>
          )}
        </div>
      </div>
    </section>
  );
};
