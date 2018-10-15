import { RECEIVE_BUSINESSES } from '../../actions/business_actions';
import merge from 'lodash/merge';


const businessesReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_BUSINESSES:
      return action.businesses;
    default:
      return state;
  }
}


export default businessesReducer;
