import { createSelector } from 'reselect';

const cartSelector = state => state.cartReducer;

export const getDataCart = createSelector(
    cartSelector,
    item => item.cartItems
);
export const getTotalMoney = createSelector(
    cartSelector,
    item => item.sumMoney
);
export const getCountItems = createSelector(
    cartSelector,
    item => item.countItem
)
