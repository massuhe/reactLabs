import ListaPlato from './listaPlato';
import { connect } from 'react-redux';
import { eliminarPlato } from '../actions/platoActions';

const mapStateToProps = state => (
    { listadoPlatos: state.abmPlato }
);
const mapDispatchToProps = dispatch => (
    {
        eliminarPlato: (indicePlato) => dispatch(eliminarPlato(indicePlato))
    }
);

export const Platos = connect(mapStateToProps, mapDispatchToProps)(ListaPlato);