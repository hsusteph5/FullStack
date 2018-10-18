import React from 'react';
import { connect } from 'react-redux';
import { fetchBusinesses, fetchBusiness } from '../../actions/business_actions';
import BusinessesIndex from './businesses_index'

const mapStateToProps = (state) => {
  return {
    businesses: Object.values(state.entities.businesses),
    reviews: state.entities.reviews
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    fetchBusinesses: (business) => dispatch(fetchBusinesses(business)),
    fetchBusiness: (id) => dispatch(fetchBusiness(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessesIndex)
