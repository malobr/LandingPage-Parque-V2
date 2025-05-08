import React, { useState, useEffect } from "react";


export const Navigation = (props) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let navbarClasses = "navbar navbar-default navbar-fixed-top";
  if (scrolled) {
    navbarClasses += " navbar-scrolled";
  } else {
    navbarClasses += " navbar-top";
  }

  return (
    <nav id="menu" className={navbarClasses}>
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              {scrolled ? (
                <img
                  src="img/OIP.jpeg"
                  alt="Geoparque Caiua"
                  className="brand-logo"
                />
              ) : (
                <p className="brand-text">Geoparque Caiua</p>
              )}
            </a>



        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Produtos
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                Sobre nós
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Serviços
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Galeria
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Testemunhos
              </a>
            </li>
            <li>
              <a href="#Team" className="page-scroll">
                Equipe
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
