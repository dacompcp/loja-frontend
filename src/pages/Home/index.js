import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as OrderItemsActions } from "../../store/ducks/orderItems";

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "../../assets/logo_matrix.png";
import Item from "../../components/Item";

import { Container, Content, Header, Cart, Title, ListItems } from "./styles";

function Home(props) {
  const { orderItems } = props;
  const data = [
    {
      id: 1,
      name: "Moletom Preto",
      description: "jckndskc jhbj hjbj nbbn kjbj vbjb v vjbv bknknkjnkj ",
      price: 140
    },
    {
      id: 2,
      name: "Combo 3",
      description: "jckndskc jhbj hjbj nbbn kjbj vbjb v vjbv bknknkjnkj ",
      price: 18
    },
    {
      id: 2,
      name: "Combo 3",
      description: "jckndskc jhbj hjbj nbbn kjbj vbjb v vjbv bknknkjnkj ",
      price: 18
    },
    {
      id: 2,
      name: "Combo 3",
      description: "jckndskc jhbj hjbj nbbn kjbj vbjb v vjbv bknknkjnkj ",
      price: 18
    },
    {
      id: 2,
      name: "Combo 3",
      description: "jckndskc jhbj hjbj nbbn kjbj vbjb v vjbv bknknkjnkj ",
      price: 18
    }
  ];

  return (
    <Container>
      <Content>
        <Header>
          <img src={Logo} alt="Dacomp logo" style={{ height: "8vh" }} />
          <Title style={{ flex: 1, marginLeft: 8 }}>Dacomp</Title>
          <Cart
            onClick={() => {
              props.history.push("/cart");
            }}
          >
            <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: 5 }} />
            Carrinho ({orderItems.data.length})
          </Cart>
        </Header>
        <ListItems>
          <Title>Escolha seus itens</Title>
          {data.map(e => (
            <Item
              id={e.id}
              name={e.name}
              description={e.description}
              price={e.price}
            />
          ))}
        </ListItems>
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
)(Home);
