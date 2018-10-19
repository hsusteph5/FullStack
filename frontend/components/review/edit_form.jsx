import { connect } from 'react-redux';
import React from 'react';
import ReviewForm from './review_form';
import { updateReview } from '../../actions/review_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    review: state.entities.reviews[ownProps.match.params.id]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateReview: (review) => dispatch(updateReview(review))
  }
}

class EditReviewForm extends React.Component {
  componentDidMount(){
    
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditReviewForm)
