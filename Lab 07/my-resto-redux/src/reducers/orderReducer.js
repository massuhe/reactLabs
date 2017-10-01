import { ADD_ORDER, SELECT_ORDER } from '../actions/ordenActions';

const order = (state = {}, action) => (
    {
        orderList: orderList(state.orderList, action),
        selectedOrder: selectedOrder(state.selectedOrder, action)
    }
)

const orderList = (state = [], action) => {
    switch(action.type) {
        case ADD_ORDER:
            return [...state, {listaPlatos: action.payload}]
        default:
            return state;
    }
}

const selectedOrder = (state = {}, action) => {
    switch(action.type) {
        case SELECT_ORDER:
            return {indiceOrder: action.payload}
        default:
            return state;
    }
}

export default order;