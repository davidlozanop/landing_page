import React from "react";

export const HeroBanner = () => {
  const logo = "https://drive.google.com/file/d/1Tbj7bnT_aAMCw8uarwVx2TwZ1FJsXEMH/view?usp=sharing";

  return (
    <div className="hero-banner hero-banner--pink-yellow">
      <div className="hero-banner__logo">
        <img className="hero-banner__image" src={logo} alt="React logo" />
      </div>
      <h1 className="hero-banner__headline">MatchAI: Reclutamiento ofrecido por IA</h1>
      <p className="hero-banner__description">
      En la era digital, MatchAI se erige como la soluci&oacute;n vanguardista en gesti&oacute;n de recursos humanos, dise&ntilde;ada para empresas que buscan eficiencia, precisi&oacute;n y una estrategia centrada en el futuro. Nuestro servicio aprovecha el poder de la inteligencia artificial para transformar los procesos de RH durante la contrataci&oacute;n que asegura la excelencia operativa y una experiencia sin precedentes tanto para los gestores de recursos humanos como para los candidatos.
      </p>
    </div>
  );
};
