import { Image } from "./image";
import React from "react";

export const Gallery = ({ data }) => {
  return (
    <section id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Galeria</h2>
          <p>
            Um pouco mais sobre quem somos e o que fazemos... Eventos e atendimentos.
          </p>
        </div>
        <div className="row portfolio-items">
          {data ? (
            data.map((d, i) => (
              <div key={`${d.title}-${i}`} className="col-sm-6 col-md-4 col-lg-4">
                <div className="gallery-card">
                  <Image
                    title={d.title}
                    largeImage={d.largeImage}
                    smallImage={d.smallImage}
                    className="gallery-img"
                  />
                  <p className="gallery-caption">{d.title}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Carregando imagens...</p>
          )}
        </div>
      </div>
    </section>
  );
};
