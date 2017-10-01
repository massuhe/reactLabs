import React from 'react';
import { connect } from 'react-redux';
import DetalleOrden from './detalleOrden.js';
import { selectOrder } from '../actions/ordenActions';

const estilos = {
    listaOrdenes: {
        listStyleType: 'none',
        padding: 0
    },
    listaOrdenesItem: {
        display: 'flex',
        width: '40%',
        margin: 'auto',
        justifyContent: 'space-between'
    },
    detalle: {
        color: 'steelblue'
    }
}

const ListaOrdenes = ({listadoOrdenes, ordenSeleccionada, selectOrder}) => (
    <div>
        <h1>&Oacute;rdenes</h1>
        <ul style={estilos.listaOrdenes}>
            {listadoOrdenes.map((orden, index) => 
                <li key={index} style={estilos.listaOrdenesItem}>
                    <span style={{fontWeight: ordenSeleccionada.indiceOrder === index ? 'bold' : 'initial'}}>Orden {index + 1}</span><a style={estilos.detalle} onClick={() => selectOrder(index)}>(ver detalle)</a> 
                </li>)
            }
        </ul>
        <DetalleOrden orden={listadoOrdenes[ordenSeleccionada.indiceOrder]}/>
    </div>
);

const mapStateToProps = state => (
    {listadoOrdenes: state.order.orderList, ordenSeleccionada: state.order.selectedOrder}
)
const mapDispatchToProps = dispatch => (
    {selectOrder: indice => dispatch(selectOrder(indice))}
)

export const Ordenes = connect(mapStateToProps, mapDispatchToProps)(ListaOrdenes);