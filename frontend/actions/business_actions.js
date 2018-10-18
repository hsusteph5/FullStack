import * as BusinessAPI from '../util/business_api_util';
export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES";
export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";

//thunk action for all businesses by a filter
export const receiveBusinesses = (businesses) => {
  return { type: RECEIVE_BUSINESSES, businesses: businesses}
}


//payload contains { businesses: , reviews}
export const receiveBusiness = (payload) => {
  return { type: RECEIVE_BUSINESS, payload: payload}
}

export const fetchBusinesses = (businesses) => {
  return dispatch => {
    return BusinessAPI.fetchBusinesses(businesses)
      .then(businesses => dispatch(receiveBusinesses(businesses)))
  }
}

export const fetchBusiness = (id) => {
  return dispatch => {
    return BusinessAPI.fetchBusiness(id)
      .then(payload => dispatch(receiveBusiness(payload)))
  }
}
