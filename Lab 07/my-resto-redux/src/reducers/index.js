import { combineReducers } from 'redux';
import abmPlato from './platoReducers';
import order from './orderReducer';

const rootReducer = combineReducers({
    abmPlato,
    order
});

export default rootReducer;