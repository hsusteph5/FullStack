import * as BusinessAPI from '../util/business_api_util';
export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES";

//thunk action for all businesses by a filter
export const requestBusiness = (businesses) => {
  return { type: RECEIVE_BUSINESSES, businesses: businesses}
}

export const fetchBusinesses = (businesses) => {
  return dispatch => {
    return BusinessAPI.fetchBusinesses(businesses)
      .then(businesses => dispatch(requestBusiness(businesses)))
  }
}

export const fetchBusiness = (id) => {
  return dispatch => {
    return BusinessAPI.fetchBusinesses(id)
      .then(businesses => dispatch(requestBusiness(businesses)))
  }
}
