import { createStore, combineReducers, applyMiddleware } from "redux";
import productReducer from "./reducers/productReducer";
import restaurantReducer from "./reducers/restaurantReducer";
import cartReducer from "./reducers/cartReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  product: productReducer,
  restaurant: restaurantReducer,
  cart: cartReducer,
});

// applyMiddleware herhangi bir arayazılımı reduc'a dahil etmeye yarar.Burda thunk arayzılımını dahil ettik
export default createStore(rootReducer, applyMiddleware(thunk));
