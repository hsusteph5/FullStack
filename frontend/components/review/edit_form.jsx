import { connect } from 'react-redux';
import React from 'react';
import ReviewForm from './review_form';
import { updateReview, fetchReview } from '../../actions/review_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    review: state.entities.reviews[ownProps.match.params.id]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateReview: (review) => dispatch(updateReview(review)),
    fetchReview: (id) => dispatch(fetchReview(id))
  }
}

//need to pull the review id 
class EditReviewForm extends React.Component {
  componentDidMount(){
    this.props.fetchReview(this.props.match.params.)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditReviewForm)
