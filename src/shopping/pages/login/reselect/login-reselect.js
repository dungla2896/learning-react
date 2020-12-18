import { createSelector } from 'reselect';

const loginSelector = state => state.login;
const authSelector = state => state.auth;

export const loadingLoginUser = createSelector(
  loginSelector,
  item => item.loading
);

export const getMessageLogin = createSelector(
  loginSelector,
  item => item.error
);

export const getTokenLoginUser = createSelector(
  authSelector,
  item => item.token
);