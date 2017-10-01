import React from 'react';

const estilos = {
  detalleOrden: {
    background: 'white',
    margin: '5px 20px',
    borderBottomLeftRadius: '20px',
    borderBottomRightRadius: '20px'
  },
  lista: {
    padding: 0,
    listStyleType: 'none'
  },
  listaItem: {
    background: '#e8e8e8',
    padding: '5px',
    borderBottom: 'solid 1px rgba(0,0,0,0.2)'
  }
};

const detalleOrden = ({ orden }) => {
  const getTotal = function(lista) {
    let total = 0;
    lista.forEach(l => (total += parseInt(l.precio, 10)));
    return total;
  };
  return orden ? (
    <div style={estilos.detalleOrden}>
      <ul style={estilos.lista}>
        {orden.listaPlatos.map((o, index) => (
            <li key={index} style={estilos.listaItem}>
            <span>{o.nombre} - ${o.precio}</span>
            </li>
        ))}
      </ul>
      <p>Total: ${getTotal(orden.listaPlatos)}</p>
    </div>
  ) : null;
};

export default detalleOrden;
