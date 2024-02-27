import React from "react";
import { Auth0Feature } from "./auth0-feature";

export const Auth0Features = () => {
  const featuresList = [
    {
      title: "Candidatos - Apply for jobs",
      description:
        "\nA continuaci&oacute;n, podr&aacute;s a&ntilde;adir tus datos para darte de alta en nuestra plataforma y aumentar exponencialmente tus posibilidades de ser contratado.",
      resourceUrl: "https://airtable.com/appRxOkPDdSPh9qqu/shrjoADOjbRndweHR",
      icon: "https://cdn.auth0.com/blog/hello-auth0/identity-providers-logo.svg",
    },
    {
      title: "Clientes - Book a Demo",
      description:
        "\nA continuaci&oacute;n, podr&aacute;s a&ntilde;adir tus datos para darte de alta en nuestra plataforma y aumentar exponencialmente las posibilidades de encontrar al candidato ideal para su organizaci&oacute;n.",
      resourceUrl: "https://airtable.com/appRxOkPDdSPh9qqu/pagOFFIeSJ6A8d4DG/form",
      icon: "https://cdn.auth0.com/blog/hello-auth0/mfa-logo.svg",
    },
  ];

  return (
    <div className="auth0-features">
      <h2 className="auth0-features__title">Explore Auth0 Features</h2>
      <div className="auth0-features__grid">
        {featuresList.map((feature) => (
          <Auth0Feature
            key={feature.resourceUrl}
            title={feature.title}
            description={feature.description}
            resourceUrl={feature.resourceUrl}
            icon={feature.icon}
          />
        ))}
      </div>
    </div>
  );
};
