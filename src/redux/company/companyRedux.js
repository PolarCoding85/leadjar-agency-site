const SUBMIT_CARD_SAVE = "GET_COMAPNY_DATA";

const initialState = {
    companyData: null,
};

export default function companyRedux(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_CARD_SAVE: {
      return {
        ...state,
        companyData: action.payload,
      };
    }
    default:
      return state;
  }
}
