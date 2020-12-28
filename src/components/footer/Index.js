import React from "react";
import {
  FooterBackground,
  FooterLeft,
  FooterCenter,
  FooterRight,
} from "./Style";

export const Footer = () => {
  return (
    <FooterBackground>
      <FooterLeft>
        <span />
      </FooterLeft>
      <FooterCenter></FooterCenter>
      <FooterRight>
        <p>Created by Vinicius Faitão</p>
      </FooterRight>
    </FooterBackground>
  );
};
