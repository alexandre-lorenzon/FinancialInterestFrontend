import React, { Component } from "react";
import NumericTextboxComponent from "react-numeric-textbox";
import { Container, Content, CalculaMontanteButton } from "./styles";
import { Row, Card } from "react-materialize";
import { ApiGateway } from "../../services/apis";

class Juros extends Component {
  state = {
    taxa: 0,
    valorAplicado: 0,
    meses: 0,
    montanteCalculado: "",
    montanteObtido: false
  };

  componentDidMount = () => {
    this.buscaTaxa();
  };

  buscaTaxa = () => {
    ApiGateway.get("/taxajuros")
      .then(response => {
        this.setState({ taxa: response.data });
      })
      .catch(error => {
        alert(error);
      });
  };

  valorAplicadoChange = event => {
    this.setState({ valorAplicado: event, montanteObtido: false });
  };

  mesesAplicadoChange = event => {
    this.setState({ meses: event, montanteObtido: false });
  };

  calculaMontante = () => {
    ApiGateway.get("/calculajuros", {
      params: {
        valorInicial: this.state.valorAplicado,
        meses: this.state.meses
      }
    })
      .then(response => {
        let taxaObtida = response.data.toFixed(2);
        this.setState({
          montanteCalculado: taxaObtida,
          montanteObtido: true
        });
      })
      .catch(error => {
        alert(error);
      });
  };

  render() {
    return (
      <Container>
        <Content>
          <p>
            <b>
              Taxa de juros configurada é de {this.state.taxa * 100}% ao mês
            </b>
          </p>
          <Row>
            <div>
              <NumericTextboxComponent
                min={0}
                decimals={2}
                autoCorrect={true}
                format={"R$0,0.00"}
                placeholder={"Informe o valor aplicado"}
                onChange={event => this.valorAplicadoChange(event)}
              />
            </div>
          </Row>
          <Row>
            <div>
              <NumericTextboxComponent
                min={0}
                max={100}
                decimals={0}
                autoCorrect={true}
                format={"0"}
                placeholder={
                  "Informe número de meses que o valor ficará aplicado"
                }
                onChange={event => this.mesesAplicadoChange(event)}
              />
            </div>
          </Row>
          <Row>
            <CalculaMontanteButton onClick={this.calculaMontante}>
              Calcula montante
            </CalculaMontanteButton>
          </Row>
          {this.state.montanteObtido && (
            <Row>
              <Card>
                <p>
                  <b>R$ {this.state.valorAplicado} </b> aplicado durante{" "}
                  <b> {this.state.meses}</b> meses, a taxa de{" "}
                  <b>{this.state.taxa * 100}% </b> ao mês, resultará num
                  montante de <b>R$ {this.state.montanteCalculado}</b>
                </p>
              </Card>
            </Row>
          )}
        </Content>
      </Container>
    );
  }
}

export default Juros;
