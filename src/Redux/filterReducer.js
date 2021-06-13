import { SET_FILTER_TYPE } from './types';

const initState = {
  filter_type: 'all',
};

export const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_FILTER_TYPE: {
      return {
        filter_type: action.payload,
      };
    }

    default: return state;
  }
};
