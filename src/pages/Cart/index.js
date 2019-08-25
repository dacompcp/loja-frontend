import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as OrderItemsActions } from "../../store/ducks/orderItems";

import { faArrowLeft, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ItemCart from "../../components/ItemCart";

import {
  Container,
  Content,
  Header,
  Title,
  Back,
  Items,
  PaymentArea,
  Payment,
  Clean,
  Subtotal,
  SubtotalPrice,
  Total,
  TotalPrice,
  Buy,
  Local
} from "./styles";

function Cart(props) {
  const { orderItems } = props;
  const [priceTotal, setPriceTotal] = useState(0);

  function definePrice() {
    if (orderItems.data != false)
      setPriceTotal(
        orderItems.data.map(e => e.priceTotal).reduce((acc, curr) => acc + curr)
      );
    else setPriceTotal(0);
  }

  useEffect(() => {
    definePrice();
  }, [orderItems.data]);
  return (
    <Container>
      <Content>
        <Header>
          <Back
            onClick={() => {
              props.history.push("/home");
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </Back>
          <Title>Meu Carrinho</Title>
        </Header>
        <Items>
          {orderItems.data.map(e => (
            <ItemCart
              id={e.id}
              name={e.name}
              description={e.description}
              qtd={e.qtd}
              price={e.price}
            />
          ))}
        </Items>
        <PaymentArea>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: 15
            }}
          >
            <Clean>
              <FontAwesomeIcon icon={faTrashAlt} style={{ marginRight: 5 }} />
              Esvaziar Carrinho
            </Clean>
          </div>
          <Payment>
            <Subtotal>Subtotal</Subtotal>
            <SubtotalPrice>R$ {priceTotal}</SubtotalPrice>
          </Payment>
          <Payment>
            <Total>Total</Total>
            <TotalPrice>R$ {priceTotal}</TotalPrice>
          </Payment>
          <Payment>
            <Local>Pagar no Hall</Local>
            <Buy>Pagar online</Buy>
          </Payment>
        </PaymentArea>
      </Content>
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
)(Cart);
