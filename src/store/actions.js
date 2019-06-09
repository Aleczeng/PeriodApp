import {createAction} from "redux-actions";
import * as types from "./actionTypes";
//global
export const setIsFirstTimeLoginAction = bool =>
    createAction(types.SET_IS_FIRST_TIME_LOGIN)(bool);
