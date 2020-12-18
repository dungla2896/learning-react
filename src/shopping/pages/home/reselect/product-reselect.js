import { createSelector } from 'reselect';

const productSelector = state => state.productReducer.dataProduct;
const loadingPdSelector = state => state.productReducer.loadingPd;

export const loadingSelector = createSelector(
  loadingPdSelector,
  item => item
);
export const getFeaturedSelector = createSelector(
  productSelector,
  item => {
    if(item.hasOwnProperty('featured')){
      return item.featured
    }
    return []
  }
)
export const getLatestSelector = createSelector(
  productSelector,
  item => {
    if(item.hasOwnProperty('latest')){
      return item.latest
    }
    return []
  }
)
export const getTopSellingSelector = createSelector(
  productSelector,
  item => {
    if(item.hasOwnProperty('top_selling')){
      return item.top_selling
    }
    return []
  }
)