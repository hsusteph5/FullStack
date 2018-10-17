import { RECEIVE_BUSINESSES, RECEIVE_BUSINESS } from '../../actions/business_actions';
import merge from 'lodash/merge';


const businessesReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_BUSINESSES:
      return action.businesses;
    case RECEIVE_BUSINESS:
      let newState = merge({}, state, action.business);
      return newState;
    default:
      return state;
  }
}


export default businessesReducer;
