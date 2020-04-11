import { createAction, handleActions } from 'redux-actions';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

export const addShuriken = createAction('shuriken/ADD_SHURIKEN');
export const removeShuriken = createAction('shuriken/REMOVE_SHURIKEN');
export const clearShuriken = createAction('shuriken/CLEAR_SHURIKEN');
export const setShuriken = createAction('shuriken/SET_SHURIKEN');

const initialState = 0;

export default handleActions({
  [addShuriken]: (state) => state + 1,
  [removeShuriken]: (state) => state - 1,
  [clearShuriken]: (state) => initialState,
  [setShuriken]: (state, action) => action.payload,
}, initialState);

const selectShuriken = createSelector(
  state => state.shuriken,
  shuriken => shuriken,
)

export const useShuriken = () => useSelector(selectShuriken);
