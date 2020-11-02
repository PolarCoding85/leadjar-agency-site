import { combineReducers } from "redux"
import authReducer from "./auth"
import checkoutRedux from "./checkout/checkoutRedux"

const rootReducer = combineReducers({
  checkoutRedux: checkoutRedux,
})

export default rootReducer
