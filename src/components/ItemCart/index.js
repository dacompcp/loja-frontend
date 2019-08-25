import React from "react";

import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Container,
  Image,
  ItemArea,
  Title,
  Description,
  Qtd,
  Controls,
  QtdValue,
  Price
} from "./styles";

export default function ItemCart(props) {
  return (
    <Container>
      <Image />
      <ItemArea>
        <Title>{props.name}</Title>
        <Description>{props.description}</Description>
      </ItemArea>
      <Qtd>
        {props.qtd > 1 ? (
          <Controls onClick={() => {}}>
            <FontAwesomeIcon
              icon={faMinus}
              style={{ color: "#8b8f95", height: 12 }}
            />
          </Controls>
        ) : (
          <></>
        )}

        <QtdValue>{props.qtd}</QtdValue>
        <Controls onClick={() => {}}>
          <FontAwesomeIcon
            icon={faPlus}
            style={{ color: "#3EBFA4", height: 12 }}
          />
        </Controls>
      </Qtd>
      <Price>R$ {props.price.toFixed(1)}</Price>
    </Container>
  );
}
