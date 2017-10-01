/**
 * Acciones de las ordenes
 */
export const ADD_ORDER = 'ADD_ORDER';
export const SELECT_ORDER = 'SELECT_ORDER';

/**
 * Creadores de acciones
 */
export function addOrder(listaPlatos) {
    return { type: ADD_ORDER, payload: listaPlatos }
}

export function selectOrder(indiceOrder) {
    return { type: SELECT_ORDER, payload: indiceOrder }
}