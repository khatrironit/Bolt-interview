import { combineReducers, createStore } from "redux";
import { sidebarReducer } from "../../redux/reducers/index";

const reducer = combineReducers({
  sidebar: sidebarReducer,
});

const store = createStore(reducer);

export default store;
