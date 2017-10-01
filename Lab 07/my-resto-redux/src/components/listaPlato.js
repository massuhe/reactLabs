import React  from 'react';

export const ListaPlato = ({ listadoPlatos, eliminarPlato }) => {
  let estilos = {
    platosContainer: {
      width: '40%',
      margin: '0 auto',
      backgroundColor: 'bisque',
      padding: '5px',
      borderBottom: 'solid 1px rgba(0,0,0,0.05)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    m4: {
      margin: '4px'
    },
    delete: {
      color: 'red'
    }
  };

  let listaPlatosAux = listadoPlatos.map((unPlato, indice) => (
    <li key={indice} style={estilos.platosContainer}>
      <span>
        <span style={estilos.m4}>{unPlato.nombre}</span>
        <span style={estilos.m4}>${unPlato.precio}</span>
      </span>
      <span
        style={estilos.delete}
        onClick={() => eliminarPlato(indice)}
      >
        X
      </span>
    </li>
  ));

  return <ul>{listaPlatosAux}</ul>;
};

export default ListaPlato;
