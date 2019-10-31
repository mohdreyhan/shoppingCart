const initialState = {
  modalLoginShow: true,
  modalsignupShow: false,
  addtouser: [],
  verifyuser: [],
  carddata: [],
  cartdata: [],
  isLoggedIn: false
};

const reducer = (state = initialState, action) => {
  let updatedCart;
  let updatedItemIndex;

  switch (action.type) {
    case "MODALLOGIN":
      return Object.assign({}, state, {
        modalLoginShow: action.logincondition,
        modalsignupShow: action.signupcondition
      });
    case "MODALSIGNUP":
      return Object.assign({}, state, {
        modalsignupShow: action.signupcondition,
        modalLoginShow: action.logincondition
      });
    case "ONCHANGESIGNUP":
      return {
        ...state,
        addtouser: {
          ...state.addtouser,
          [action.name]: action.value
        }
      };
    case "ONCHANGEVERIFY":
      return {
        ...state,
        verifyuser: {
          ...state.verifyuser,
          [action.name]: action.value
        }
      };

    case "CARDVALUES":
      return Object.assign({}, state, {
        carddata: action.carddata
      });

    case "ADDTOCARTACTION":
      updatedCart = [...state.cartdata];
      updatedItemIndex = updatedCart.findIndex(
        item => item.id === action.cartdata.id
      );
      if (updatedItemIndex < 0) {
        updatedCart.push({ ...action.cartdata, quantity: 1 });
      } else {
        const updatedItem = {
          ...updatedCart[updatedItemIndex]
        };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
      }
      return { ...state, cartdata: updatedCart };

    case "DELFROMCART":
      updatedCart = [...state.cartdata];
      updatedItemIndex = updatedCart.findIndex(
        item => item.id === action.updatedcartdata
      );
      const updatedItem = {
        ...updatedCart[updatedItemIndex]
      };
      updatedItem.quantity--;
      if (updatedItem.quantity <= 0) {
        updatedCart.splice(updatedItemIndex, 1);
      } else {
        updatedCart[updatedItemIndex] = updatedItem;
      }
      return { ...state, cartdata: updatedCart };

    case "EMPTYVERIFYUSER":
      return Object.assign({}, state, {
        verifyuser: []
      });
    default:
      return state;
  }
};

export default reducer;
