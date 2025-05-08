import { useState } from "react";
import React from "react";
import emailjs from "@emailjs/browser";


const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    console.log("Enviando:", name, email, message);

    emailjs
      .send(
        "zzzzzzzzzzzzzzzzzzz", // Seu Service ID
        "yyyyyyyyyyyyyyyyy", // Seu Template ID
        {
          name: name,
          email: email,
          message: message,
        },
        "xxxxxxxxxxxxx" // Sua Public Key
      )
      .then(
        (result) => {
          console.log("Email enviado com sucesso:", result.text);
          alert("Mensagem enviada com sucesso!");
          clearState();
        },
        (error) => {
          console.log("Erro ao enviar:", error);
          alert("Erro ao enviar a mensagem. Verifique o console para mais detalhes.");
        }
      );
  };

  return (
    <div id="contact">
      <div className="container">
        <div className="row context-content">
          <div className="new-class">
            <div className="section-title text-center">
              <h2>Entre em Contato</h2>
              <p className="lead">
                Por favor, preencha o formulário abaixo para entrar em contato conosco, responderemos o mais breve possível.
              </p>
            </div>
            <form name="sentMessage" noValidate onSubmit={handleSubmit} className="text-center">
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Nome"
                  required
                  value={name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  rows="4"
                  placeholder="Mensagem"
                  required
                  value={message}
                  onChange={handleChange}
                  style={{ resize: "none" }}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-custom btn-lg">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-6">
            <div id="map-container" className="text-center">
              <iframe 
                width="100%" 
                height="300" 
                style={{ border: "0", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.2)" }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10326.72419844559!2d-53.07894420105421!3d-23.781292398717888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f2c7de89f2c4bb%3A0xae43f44318f9f8b!2sMuseu%20de%20Paleontologia%20de%20Cruzeiro%20do%20Oeste%20Alexandre%20Gustavo%20Dobruski!5e0!3m2!1sen!2sbr!4v1743682263580!5m2!1sen!2sbr" >
              </iframe>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-6">
              <div className="contact-info">
                <h3>Informações de Contato</h3>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i>
                    <span className="ml-2"> Endereço: </span>
                  </span>
                  <span className="ml-2">{props.data ? props.data.address : "Carregando..."}</span>
                </p>
                <p>
                  <span>
                    <i className="fa fa-phone"></i>
                    <span className="ml-2"> Telefone: </span>
                  </span>
                  <span className="ml-2">{props.data ? props.data.phone : "Carregando..."}</span>
                </p>
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i>
                    <span className="ml-2"> Email: </span>
                  </span>
                  <span className="ml-2">{props.data ? props.data.email : "Carregando..."}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"} target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.instagram : "/"} target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"} target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
        <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2025 By{' '}
            <a href="https://github.com/malobr/LandingPage-Parque" rel="nofollow" target="_blank">
              ADS TEAM
            </a>
          </p>
        </div>
      </div>
          </div>
        </div>
      </div>
  );
};
