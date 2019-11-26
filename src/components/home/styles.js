import styled from "styled-components";

const caminhosLogo = {
  softplan: "logo-softplan.svg"
};

export const PanelImagens = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Imagem = styled.div`
  height: 43px;
  width: 169px;
  background: url(${props => caminhosLogo[props.empresa]});
  background-size: cover;
`;
