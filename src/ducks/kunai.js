import { createAction, handleActions } from 'redux-actions';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

export const addKunai = createAction('kunai/ADD_KUNAI');
export const removeKunai = createAction('kunai/REMOVE_KUNAI');
export const clearKunai = createAction('kunai/CLEAR_KUNAI');
export const setKunai = createAction('kunai/SET_KUNAI');

const initialState = 0;

export default handleActions({
  [addKunai]: (state) => state + 1,
  [removeKunai]: (state) => state - 1,
  [clearKunai]: (state) => initialState,
  [setKunai]: (state, action) => action.payload,
}, initialState);

const selectKunai = createSelector(
  state => state.kunai,
  kunai => kunai,
)

export const useKunai = () => useSelector(selectKunai);
