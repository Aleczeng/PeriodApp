import * as types from '../actionTypes';

const defaultState = {
    isFirstTimeLogin: false,
};
export const global = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
