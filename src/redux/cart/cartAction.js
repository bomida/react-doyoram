import * as actionType from "./cartTypes";

export const addItem = (itemId) => {
  return {
    type: actionType.ADD_ITEM,
    payload: {
      id: itemId,
    }
  }
};

export const deleteItem = (itemId) => {
  return {
    type: actionType.DELETE_ITEM,
    payload: {
      id: itemId,
    }
  }
};

export const adjustItemQty = (itemId, qty) => {
  return {
    type: actionType.ADJUST_ITEM_QTY,
    payload: {
      id: itemId,
      qty,
    }
  }
}

export const loadCurrentItem = item => {
  return {
    type: actionType.LOAD_CURRENT_ITEM,
    payload: item,
  }
}