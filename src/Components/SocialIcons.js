import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { SocialStyled } from "./styles/Social.styled";
export default function SocialIcons() {
  return (
    <SocialStyled>
      <li>
        <a href="http://twitter.com">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="http://linkedin.com">
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a href="http://facebook.com">
          <FaFacebook />
        </a>
      </li>
    </SocialStyled>
  );
}
