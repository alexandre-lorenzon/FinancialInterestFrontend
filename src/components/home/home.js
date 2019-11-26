import React from "react";

import { PanelImagens, Imagem } from "./styles";

import { Row, Col, Card } from "react-materialize";

const Home = () => (
  <Row>
    <Col m={4} />
    <Col m={4}>
      <Card>
        <div>
          <p>
            <b>Bem vindo ao Portal Financeiro - Softplan</b>
          </p>
          <br />
          <p>Utilize essa aplicação para efetuar cáculos de juros compostos.</p>
        </div>
        <PanelImagens>
          <Imagem empresa="softplan" />
        </PanelImagens>
      </Card>
    </Col>
    <Col m={4} />
  </Row>
);

export default Home;
