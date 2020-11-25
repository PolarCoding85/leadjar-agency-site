import { combineReducers } from "redux"
import authReducer from "./auth"
import checkoutRedux from "./checkout/checkoutRedux"
import CompanyRedux from "./company/companyRedux"

const rootReducer = combineReducers({
  checkoutRedux: checkoutRedux,
  CompanyRedux: CompanyRedux
})

export default rootReducer
