import * as ReviewAPI from '../util/review_api_util';
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
//regular action
export const receiveReview = (review) => {
  return {type: RECEIVE_REVIEW, review: review}
}


//thunk action
export const createReview = (review) => {
  return dispatch => {
    return ReviewAPI.createReview(review)
      .then(review => dispatch(receiveReview(review)))
      // .then(errors)
  }
}
