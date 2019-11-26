import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 50%;
  margin: 30px;
  background: #fff;
  border-radius: 4px;
  padding: 20px;

  b {
    color: #1f3a60;
  }
`;

export const CalculaMontanteButton = styled.button`
  float: right;
  margin-top: 30px;
  background: #005b95;
  border-radius: 4px;
  padding: 10px;
  color: #fff;
  &:hover {
    background: #1f3a60;
    cursor: pointer;
  }
`;
