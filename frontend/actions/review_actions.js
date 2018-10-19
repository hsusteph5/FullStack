import * as ReviewAPI from '../util/review_api_util';
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';

//regular action
export const receiveReview = (review) => {
  return {type: RECEIVE_REVIEW, review: review}
}


export const receiveReviewErrors = (errors) => {
  return { type: RECEIVE_REVIEW_ERRORS, errors: errors}
}

//thunk action
export const createReview = (review) => {
  return dispatch => {
    return ReviewAPI.createReview(review)
      .then(
        review => dispatch(receiveReview(review)),
        error => dispatch(receiveReviewErrors(error.responseJSON))
      )
  }
}

export const updateReview = (review) => {
  return dispatch => {
    return ReviewAPI.updateReview(review)
      .then(
        review => dispatch(receiveReview(review)),
        error => dispatch(receiveReviewErrors(error.responseJSON))
      )
  }
}
