import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 25px;
`;

export const Prev = styled.a`
  color: #000;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: #1a1a1a;
  }
`;

export const Next = styled.button`
  padding: 7px 18px;
  margin-left: 15px;
  border: none;
  font-weight: bold;
  font-size: 18px;
  border-radius: 7px;
  background: #5427a0;
  color: #fff;
  cursor: pointer;

  &:hover {
    background: #8223b8;
  }
`;
