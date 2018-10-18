import { RECEIVE_BUSINESS } from '../../actions/business_actions';
import merge from 'lodash/merge';


const reviewReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_BUSINESS:
      let newState = merge({}, action.payload.reviews);
      return newState;
    default:
      return state;
  }
}


export default reviewReducer;
