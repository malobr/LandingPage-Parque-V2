import React, { useState } from "react";


export const Features = ({ data }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (!selectedProduct?.gallery) return;
    setCurrentImageIndex((prevIndex) =>
      prevIndex === selectedProduct.gallery.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    if (!selectedProduct?.gallery) return;
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedProduct.gallery.length - 1 : prevIndex - 1
    );
  };

  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Catálogo de Produtos</h2>
        </div>

        <div className="products-grid">
          {data ? (
            data.map((d, i) => (
              <div
                key={`${d.title}-${i}`}
                className="product-card"
                onClick={() => openModal(d)}
              >
                <img src={d.img} alt={d.title} />
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </div>
            ))
          ) : (
            <p>Carregando...</p>
          )}
        </div>

        {selectedProduct && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>
                &times;
              </button>

              {/* Carrossel */}
              <div className="carousel-container">
                <button className="carousel-button left" onClick={prevImage}>
                  &#10094;
                </button>

                <img
                  src={
                    selectedProduct.gallery
                      ? selectedProduct.gallery[currentImageIndex]
                      : selectedProduct.img
                  }
                  alt={selectedProduct.title}
                  className="modal-image"
                />

                <button className="carousel-button right" onClick={nextImage}>
                  &#10095;
                </button>
              </div>

              <h2>{selectedProduct.title}</h2>

              <p className="modal-description">{selectedProduct.description}</p>

              {selectedProduct.price && (
                <p className="modal-price">
                  <strong>Preço:</strong> {selectedProduct.price}
                </p>
              )}

                <a href="#contact" className="page-scroll">
                        Saiba mais
              </a></div>
          </div>
        )}
      </div>
    </div>
  );
};
