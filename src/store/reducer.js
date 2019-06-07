import {combineReducers} from "redux";
import {home} from "./reducers/home";
import {global} from "./reducers/global";

export const reducer = combineReducers({
    home,
    global
});
