import React from "react";
import { Label, Button } from "react-bootstrap";
class PlatoFila extends React.Component {
  constructor(props) {
    super(props);
    // COMPLETAR VINCULAR LOS EVENTOS handleCLickFila y handleBorrar con this.
    this.handleBorrar = this.handleBorrar.bind(this);
    this.handleClickFila = this.handleClickFila.bind(this);
  }
  handleClickFila(evt) {
    evt.preventDefault();
    this.props.onselect(this.props.id); //  recibe la función de callback y la
    // invoca con el id del plato seleccionado
  }
  handleBorrar(evt) {
    evt.stopPropagation();
    this.props.ondelete(this.props.id); //  recibe la función de callback y la
    // invoca con el id del plato seleccionado
  }
  render() {
    return (
      <li className="list-group-item" onClick={this.handleClickFila}>
        <Label bsStyle="default">
          {this.props.plato.nombre}
        </Label>
        <span>
          {this.props.plato.precio}
        </span>
        <Button bsStyle="danger" onClick={this.handleBorrar}>
          Borrar
        </Button>
      </li>
    );
  }
}
export default PlatoFila;
