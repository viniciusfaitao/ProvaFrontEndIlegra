import React from "react";
import {
  FooterBackground,
  FooterLeft,
  FooterCenter,
  FooterRight,
} from "./Style";
import lightsabers from "../../assets/images/lightsabers.png";

export const Footer = () => {
  return (
    <FooterBackground>
      <FooterLeft>
        <img alt={lightsabers} src={lightsabers} />
      </FooterLeft>
      <FooterCenter></FooterCenter>
      <FooterRight>
        <p>
          Created by{" "}
          <a href="https://github.com/viniciusfaitao/">Vinicius Faitão</a>
        </p>
      </FooterRight>
    </FooterBackground>
  );
};
