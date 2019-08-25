import React from "react";

import logo from "../../assets/logo_matrix.png";
import { Container, Stage, Logo } from "./styles";

export default function Header(props) {
  return (
    <Container>
      <Logo src={logo} />
      <Stage>{props.stage}º Etapa</Stage>
    </Container>
  );
}
