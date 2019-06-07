import * as types from '../actionTypes';

const defaultState = {
    isFirstTimeLogin: true,
};
export const global = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
