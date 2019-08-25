import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as OrderItemsActions } from "../../store/ducks/orderItems";

import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Container,
  Content,
  Image,
  Name,
  Description,
  QtdArea,
  Qtd,
  Controls,
  QtdValue,
  Buy
} from "./styles";

function Item(props) {
  const { orderItems } = props;
  const [qtd, setQtd] = useState(1);

  function decrease() {
    if (qtd > 0) setQtd(qtd - 1);
  }

  function increase() {
    setQtd(qtd + 1);
  }

  function setItem() {
    const { addItem } = props;
    if (qtd > 0) {
      addItem({
        id: props.id,
        name: props.name,
        description: props.description,
        price: props.price,
        qtd,
        priceTotal: parseFloat(props.price) * parseInt(qtd)
      });
      alert("Teste");
    } else alert("Adicione alguma quantidade");
  }
  return (
    <Container>
      <Image />
      <Content>
        <Name>{props.name}</Name>
        <Description>{props.description}</Description>
      </Content>
      <QtdArea>
        <span style={{ fontSize: 14 }}>Quantidade</span>
        <Qtd>
          {qtd > 0 ? (
            <Controls onClick={decrease}>
              <FontAwesomeIcon
                icon={faMinus}
                style={{ color: "#8b8f95", height: 16 }}
              />
            </Controls>
          ) : (
            <></>
          )}

          <QtdValue>{qtd}</QtdValue>
          <Controls onClick={increase}>
            <FontAwesomeIcon
              icon={faPlus}
              style={{ color: "#3EBFA4", height: 16 }}
            />
          </Controls>
        </Qtd>
      </QtdArea>
      <Buy onClick={setItem}>Adicionar</Buy>
    </Container>
  );
}

const mapStateToProps = state => ({
  orderItems: state.orderItems
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...OrderItemsActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);
