const initialState = {
  product: [],
  allProducts: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return {
        ...state,
        allProducts: action.payload,
      };
    case "GET_PRODUCT_DETAIL":
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
};
export default productReducer;
