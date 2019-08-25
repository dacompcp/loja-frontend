import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80vw;
  max-width: 340px;
  height: 70vh;
  max-height: 400px;
  border-radius: 10px;
  box-shadow: 3px 3px 8px #d6d6d6;
  margin: 1.5vh 0px;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 15px 10px;
`;

export const Image = styled.div`
  width: 100%;
  height: 60%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: #e2e2e2;
`;

export const Name = styled.h2`
  font-size: 20px;
  font-weight: bold;
`;

export const Description = styled.h3`
  font-size: 12px;
  margin-top: 3px;
  color: #a1a1a1;
`;

export const QtdArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 15px;
`;

export const Qtd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

export const Buy = styled.button`
  font-size: 14px;
  background: #fec400;
  height: 35px;
  margin: 10px;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
`;
