import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Content = styled.div`
  max-width: 500px;
  height: 600px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  padding: 2vh 5vw;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

export const Cart = styled.span`
  color: #fff;
  font-size: 14px;
  background: #fec400;
  padding: 7px 20px;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
`;

export const ListItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow-x: scroll;
  max-width: 500px;
  height: 600px;
  align-items: center;
  justify-content: center;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #fff;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #fff;
    border-radius: 10px;
  }
`;
