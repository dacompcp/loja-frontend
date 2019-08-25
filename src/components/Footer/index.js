import React from "react";

import { Container, Prev, Next } from "./styles";

export default function Footer(props) {
  return (
    <Container>
      {props.stage !== 1 ? <Prev>Voltar</Prev> : <></>}
      <Next type="submit" form={props.formName}>
        Próximo
      </Next>
    </Container>
  );
}
