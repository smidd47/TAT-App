import * as ActionTypes from './ActionTypes';

export const results = (state = { isLoading: true,
                                     errMess: null,
                                     results: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_RESULTS:
            return {...state, isLoading: false, errMess: null, results: action.payload};

        case ActionTypes.RESULTS_LOADING:
            return {...state, isLoading: true, errMess: null, results: []}

        case ActionTypes.RESULTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
      }
};