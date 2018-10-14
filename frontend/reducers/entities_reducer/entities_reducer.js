import usersReducer from './users_reducer';
import businessReducer from './businesses_reducer';
import { combineReducers } from 'redux';

const entitiesReducer = combineReducers({
  users: usersReducer,
  businesses: businessReducer
});

export default entitiesReducer;
