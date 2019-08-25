import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 25px 5px;
  border-bottom: 1px solid #e5e5e5;
`;

export const Image = styled.div`
  height: 60px;
  width: 60px;
  background: #a2a2a2;
`;

export const ItemArea = styled.div`
  flex: 1;
  margin-left: 15px;
`;

export const Title = styled.h1`
  font-size: 15px;
  font-weight: bold;
  color: #414852;
`;

export const Description = styled.h3`
  font-size: 12px;
  margin-top: 3px;
  color: #a1a1a1;
`;

export const Qtd = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 1vw;
`;
export const Controls = styled.a`
  cursor: pointer;
`;
export const QtdValue = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  border: 1px solid #8b8f95;
  color: #414852;
  border-radius: 3px;
  margin: 0px 5px;
  font-size: 12px;
`;

export const Price = styled.span`
  font-weight: bold;
  font-size: 15px;
  width: 18vw;
  max-width: 70px;
  text-align: end;
  color: #414852;
`;
