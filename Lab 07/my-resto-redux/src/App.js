import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import { FormPlato } from './components/formPlato';
import { Ordenes } from './components/ordenes';
import { Platos } from './components/platos';
import { addOrder } from './actions/ordenActions';
import './App.css';

let estilos = {
  flexContainer: {
    display: 'flex',
    alignItems: 'flex-start'
  },
  gestionPlatos: {
    flexGrow: 4
  },
  gestionOrdenes: {
    background: 'lightgray',
    flexGrow: 2,
    marginTop: '-40px',
    borderRadius: '20px',
    boxShadow: '0 0 3px rgba(0,0,0,0.5)'
  }
};

class App extends Component {
  render() {
    const {listadoPlatos, addOrder} = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Resto</h1>
        </header>
        <div style={estilos.flexContainer}>
          <div style={estilos.gestionPlatos}>
            <FormPlato />
            <Platos listadoPlatos={listadoPlatos} />
            {(listadoPlatos.length !== 0) && <button onClick={()=>addOrder(listadoPlatos)}>Finalizar Orden</button>}
          </div>
          <div style={estilos.gestionOrdenes}>
            <Ordenes/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  { listadoPlatos: state.abmPlato}
);
const mapDispatchToProps = dispatch => (
  {
    addOrder: (listaPlatos) => dispatch(addOrder(listaPlatos))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
