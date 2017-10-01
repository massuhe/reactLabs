import React from 'react';
import { connect } from 'react-redux';
import { addPlato } from '../actions/platoActions';

export const Form = ({addPlato}) => {

    let _nombrePlato, _precioPlato;
    const submit = (e) => {
        let payload = {nombre: _nombrePlato.value, precio: _precioPlato.value};
        e.preventDefault();
        addPlato(payload);
        _nombrePlato.value = '';
        _precioPlato.value = '0.00';
        _nombrePlato.focus();
    };

    return (
        <div>
            <h1>Gesti&oacute;n de Platos</h1>
            <form onSubmit={submit}>
                <div>Nombre:<input type="text" id="nombrePlato" ref={input => _nombrePlato = input}/>
                </div>
                <div>Precio: <input type="text" id="precio" ref={input => _precioPlato = input}/>
                </div>
                <button type="submit">Agregar Plato</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addPlato: payload => dispatch(addPlato(payload))
}
)

export const FormPlato = connect(undefined, mapDispatchToProps)(Form);