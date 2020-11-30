import { combineReducers } from "redux";
import loginReducer from "./LoginReducer";
import mainReducer from "./MainReducer";
import dataReducer from "./DataReducer";

const AllReducers = combineReducers({
  main: mainReducer,
  login: loginReducer,
  data: dataReducer,

});

export default AllReducers;
