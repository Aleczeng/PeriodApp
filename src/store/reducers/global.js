import * as types from '../actionTypes';

const defaultState = {
    isFirstTimeLogin: true,
};
export const global = (state = defaultState, action) => {
    switch (action.type) {
        case types.SET_IS_FIRST_TIME_LOGIN:
            return {...state, isFirstTimeLogin: action.payload}
        default:
            return state;
    }
};
