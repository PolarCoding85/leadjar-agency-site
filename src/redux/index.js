import { combineReducers } from "redux"
import checkoutRedux from "./checkout/checkoutRedux"
import CompanyRedux from "./company/companyRedux"
import BrandingLogo from "./reducers/brandingLogo";

const rootReducer = combineReducers({
  checkoutRedux: checkoutRedux,
  CompanyRedux: CompanyRedux,
  BrandingLogo : BrandingLogo

})

export default rootReducer
