import * as BusinessAPI from '../util/business_api_util';
export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES";
export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";

//thunk action for all businesses by a filter
export const receiveBusinesses = (payload) => {
  return { type: RECEIVE_BUSINESSES, payload: payload}
}


//payload contains { businesses: , reviews}
export const receiveBusiness = (payload) => {
  return { type: RECEIVE_BUSINESS, payload: payload}
}

export const fetchBusinesses = (businesses) => {
  return dispatch => {
    return BusinessAPI.fetchBusinesses(businesses)
      .then(payload => dispatch(receiveBusinesses(payload)))
  }
}

export const fetchBusiness = (id) => {
  return dispatch => {
    return BusinessAPI.fetchBusiness(id)
      .then(payload => dispatch(receiveBusiness(payload)))
  }
}
