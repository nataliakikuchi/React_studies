import React from "react";
import image from "../assets/img/doguito404.svg";
import "../assets/css/404.css";

const ErrorPage = () => {
  return (
    <main className="container flex flex--centro flex--coluna">
      <img
        className="doguito-imagem"
        src={image}
        alt="Ilustração de um cachorrinho com pontos de interrogação sobre a cabeça"
      />
      <p className="naoencontrado-texto">Ops! Essa página não existe.</p>
    </main>
  );
};

export default ErrorPage;
