import { ADD_PLATO, EDITAR_PLATO, ELIMINAR_PLATO } from '../actions/platoActions';
import { ADD_ORDER } from '../actions/ordenActions';

const abmPlato = (state = [], action) => {
    switch(action.type) {
        case ADD_PLATO:
            console.log(action.payload);
            return [...state, action.payload];
        case EDITAR_PLATO:
            // To be defined
            return state;
        case ELIMINAR_PLATO:
            return [
                ...state.slice(0, action.payload),
                ...state.slice(action.payload + 1)
            ];
        case ADD_ORDER:
            return [];
        default:
            return state;
    }
}

export default abmPlato;