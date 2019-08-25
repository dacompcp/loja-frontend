import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Content = styled.div`
  max-width: 500px;
  max-height: 600px;
  background: #fff;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 7px 0px;
`;

export const Title = styled.h1`
  flex: 1;
  font-size: 18px;
  font-weight: bold;
`;

export const Back = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  margin-right: 20px;
  font-weight: bold;
  color: #fff;
  background: #fec400;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

export const PaymentArea = styled.div`
  margin-top: 25px;
  width: 100%;
`;

export const Payment = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
`;

export const Items = styled.div`
  overflow-y: scroll;

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

export const Clean = styled.a`
  font-size: 16px;
  color: #ff3333;
  cursor: pointer;
`;

export const Subtotal = styled.span`
  font-size: 16px;
  color: #8b8f95;
`;

export const SubtotalPrice = styled.span`
  font-size: 15px;
  color: #8b8f95;
`;

export const Total = styled.span`
  font-size: 16px;
  color: #414852;
  font-weight: 600;
`;

export const TotalPrice = styled.span`
  font-size: 18px;
  color: #414852;
  font-weight: 600;
`;

export const Buy = styled.button`
  font-size: 16px;
  font-weight: bold;
  background: #fec400;
  height: 45px;
  border: 0;
  margin: 25px 15px 0px 15px;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
`;

export const Local = styled.button`
  font-size: 16px;
  font-weight: bold;
  height: 45px;
  background: #fff;
  border: 1px solid #fec400;
  border-radius: 5px;
  margin-top: 25px;
  width: 100%;
  cursor: pointer;
`;
