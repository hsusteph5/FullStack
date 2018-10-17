import * as BusinessAPI from '../util/business_api_util';
export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES";
export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";

//thunk action for all businesses by a filter
export const requestBusinesses = (businesses) => {
  return { type: RECEIVE_BUSINESSES, businesses: businesses}
}

export const requestBusiness = (business) => {
  return { type: RECEIVE_BUSINESS, business: business}
}

export const fetchBusinesses = (businesses) => {
  return dispatch => {
    return BusinessAPI.fetchBusinesses(businesses)
      .then(businesses => dispatch(requestBusinesses(businesses)))
  }
}

export const fetchBusiness = (id) => {
  return dispatch => {
    return BusinessAPI.fetchBusiness(id)
      .then(business => dispatch(requestBusiness(business)))
  }
}
