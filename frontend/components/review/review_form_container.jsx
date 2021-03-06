import React from "react";
import { createReview, updateReview } from '../../actions/review_actions';
import { fetchBusiness } from '../../actions/business_actions';
import { connect } from 'react-redux';
import ReviewForm from './review_form';


//grab the business id from the url and then pass it to the fetch the business
//need to store the errors
//need to store the business
const mapStateToProps = (state, ownProps) => {
  //businessId is a string -> int
  let parseBusinessId = parseInt(ownProps.match.params.businessId)
  let business = state.entities.businesses[ownProps.match.params.businessId]
  return {
    business: business,
    business_id: parseBusinessId,
    errors: state.errors.review
  };
};


//fetching Business is fetched with the business id keyed as the business
const mapDispatchToProps = (dispatch) => {
  return {
    createReview: (review) => dispatch(createReview(review)),
    updateReview: (review) => dispatch(updateReview(review)),
    fetchBusiness: (id) => dispatch(fetchBusiness(id))
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
