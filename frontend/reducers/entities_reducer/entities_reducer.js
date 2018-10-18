import usersReducer from './users_reducer';
import businessReducer from './businesses_reducer';
import reviewReducer from './review_reducer';
import { combineReducers } from 'redux';

const entitiesReducer = combineReducers({
  users: usersReducer,
  businesses: businessReducer,
  reviews: reviewReducer
});

export default entitiesReducer;
