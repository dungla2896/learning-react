import * as types from '../actions/types';

const initState = {
  statusAdd: false,
  finished: false,
  cartItems: [],
  sumMoney: 0,
  countItem: 0,
  errorCart: null
}

export const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case types.START_ADD_CART:
      return {...state, statusAdd: action.status}
    case types.FINISH_ADD_CART:
      return {...state, finished: action.status}
    case types.ADD_CART_FAILURE:
      return {...state, errorCart: action.error}
    case types.ADD_CART_SUCCESS:
      const detailPd = action.data;// thong tin chi tiet cua san pham se duoc cho vao gio hang - la 1 object
      console.log(detailPd);
      
      // truong hop gio hang chua ton tai hay la chua co san pham nao ben trong
      if(!state.cartItems){
        // bo sung them truong so luong mua san pham vao ben trong du lieu cua san pham
        detailPd.qty = 1;
        return {
          ...state,
          cartItems: [...state.cartItems, detailPd],
          errorCart: null,
          countItem: state.countItem + 1, // 0 + 1
          sumMoney: parseInt(state.sumMoney) + parseInt(detailPd.price)
        }
      } else {
        // kiem tra san pham them moi da ton tai trong gio hang chua ?
        // neu da ton tai thi chi cap lai so luong mua
        // neu chua them moi san pham vao gio hang
        const idPdAdd = detailPd.id;
        const infoPd = state.cartItems.filter( item => item.id === idPdAdd)[0];
        if(infoPd){
          infoPd.qty += 1;
          return {
            ...state,
            errorCart: null,
            sumMoney: parseInt(state.sumMoney) + parseInt(detailPd.price)
          }
        } else {
          detailPd.qty = 1;
          return {
            ...state,
            cartItems: [...state.cartItems, detailPd],
            errorCart: null,
            countItem: state.countItem + 1, // 0 + 1
            sumMoney: parseInt(state.sumMoney) + parseInt(detailPd.price)
          }
        }
      }
    case types.DELETE_ITEM_CART:
      const idDel = action.id;
      // lay ra san pham bi xoa trong gio hang
      const itemDel = state.cartItems.filter(item => item.id === idDel)[0];
      // lay ra toan bo san pham con lai trong gio hang
      const newCartItems = state.cartItems.filter(item => item.id !== idDel);
      return {
        ...state,
        cartItems: newCartItems,
        errorCart: null,
        countItem: state.countItem - 1,
        sumMoney: parseInt(state.sumMoney) - (parseInt(itemDel.price)*itemDel.qty)
      }
      case types.CHANGE_QTY_CART:
        const idChange = action.id;
        const qtyChange = action.qty;
        const newCarts = state.cartItems.map(item => {
          return item.id === idChange ? {...item, qty: qtyChange } : item;
        });
        const newTotalMoney = state.cartItems.map(item => parseInt(item.price) * item.qty).reduce((pre, next) => pre + next);
        return{
          ...state,
          cartItems: newCarts,
          sumMoney: newTotalMoney,
          errorCart: null,
        }
    default:
      return state;
  }
} 