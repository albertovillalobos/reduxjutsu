import { createAction, handleActions } from 'redux-actions';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

const initialState = {};

export default handleActions({}, initialState);

const selectAllWeapons = createSelector(
  state => state.shuriken,
  state => state.kunai,
  (shuriken, kunai) => shuriken + kunai,
);

export const useAllWeapons = () => useSelector(selectAllWeapons);
