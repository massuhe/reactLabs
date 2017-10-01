/**
 * Acciones del plato
 */
export const ADD_PLATO = 'ADD_PLATO';
export const EDITAR_PLATO = 'EDITAR_PLATO';
export const ELIMINAR_PLATO = 'ELIMINAR_PLATO';
/**
 * Creadores de acciones
 */

 export function addPlato(datoPlato) {
     return { type: ADD_PLATO, payload: datoPlato}
 }

 export function editPlato(indicePlato) {
     return { type: EDITAR_PLATO, payload: indicePlato}
 }

 export function eliminarPlato(indicePlato) {
     return { type: ELIMINAR_PLATO, payload: indicePlato}
 }