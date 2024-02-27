import React from "react";

export const HeroBanner = () => {
  const logo = "https://drive.google.com/file/d/1Tbj7bnT_aAMCw8uarwVx2TwZ1FJsXEMH/view?usp=sharing";

  return (
    <div className="hero-banner hero-banner--pink-yellow">
      <div className="hero-banner__logo">
        <img className="hero-banner__image" src={logo} alt="React logo" />
      </div>
      <h1 className="hero-banner__headline">Hello, React World!</h1>
      <p className="hero-banner__description">
        This is a sample application that demonstrates the authentication flow
        for React apps using <strong>Auth0</strong>.
      </p>
    </div>
  );
};
